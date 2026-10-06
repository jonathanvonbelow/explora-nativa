import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { SPECIES_DATA } from '../constants';
import { Species } from '../types';
import SpeciesModal from '../components/SpeciesModal';

const MAP_RATIO = 2000 / 1414; // proporción de mapa.webp
const MIN_SCALE = 1;           // 1 = mapa completo ajustado al contenedor
const MAX_SCALE = 6;
const ZOOM_STEP = 1.5;

interface MapView { scale: number; x: number; y: number }

const MapExplorer: React.FC = () => {
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);
  const [hoveredId, setHoveredId]             = useState<string | null>(null);
  const [view, setView]                       = useState<MapView>({ scale: 1, x: 0, y: 0 });
  const [size, setSize]                       = useState({ w: 0, h: 0 });
  const [isDragging, setIsDragging]           = useState(false);
  const [showHint, setShowHint]               = useState(true);

  const areaRef  = useRef<HTMLDivElement>(null);
  const sizeRef  = useRef({ w: 0, h: 0 });
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const gesture  = useRef({ moved: 0, lastTap: 0, lastTapX: 0, lastTapY: 0 });

  const species = [...SPECIES_DATA].sort((a, b) => a.mapNumber - b.mapNumber);

  // Tamaño del mapa a escala 1 (entra completo en el contenedor)
  const baseSize = (cw: number, ch: number) => {
    const w = Math.min(cw, ch * MAP_RATIO);
    return { w, h: w / MAP_RATIO };
  };

  // Limita escala y desplazamiento para que el mapa nunca se pierda de vista
  const clampView = useCallback((v: MapView): MapView => {
    const { w: cw, h: ch } = sizeRef.current;
    const base  = baseSize(cw, ch);
    const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, v.scale));
    const w = base.w * scale;
    const h = base.h * scale;
    return {
      scale,
      x: w <= cw ? (cw - w) / 2 : Math.min(0, Math.max(cw - w, v.x)),
      y: h <= ch ? (ch - h) / 2 : Math.min(0, Math.max(ch - h, v.y)),
    };
  }, []);

  // Zoom manteniendo fijo el punto (px, py) del contenedor
  const zoomAt = useCallback((px: number, py: number, factor: number) => {
    setView(v => {
      const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, v.scale * factor));
      const k = scale / v.scale;
      return clampView({ scale, x: px - (px - v.x) * k, y: py - (py - v.y) * k });
    });
  }, [clampView]);

  const zoomCenter = (factor: number) => zoomAt(sizeRef.current.w / 2, sizeRef.current.h / 2, factor);
  const reset = () => setView(clampView({ scale: 1, x: 0, y: 0 }));

  // Seguir el tamaño del contenedor (rotación del teléfono, resize)
  useEffect(() => {
    const el = areaRef.current;
    if (!el) return;
    const update = () => {
      sizeRef.current = { w: el.clientWidth, h: el.clientHeight };
      setSize(sizeRef.current);
      setView(v => clampView(v));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [clampView]);

  // Zoom con rueda del mouse (listener nativo para poder hacer preventDefault)
  useEffect(() => {
    const el = areaRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      zoomAt(e.clientX - rect.left, e.clientY - rect.top, e.deltaY < 0 ? 1.2 : 1 / 1.2);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [zoomAt]);

  const localPoint = (e: React.PointerEvent) => {
    const rect = areaRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, localPoint(e));
    if (pointers.current.size === 1) gesture.current.moved = 0;
    setIsDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const prev = pointers.current.get(e.pointerId);
    if (!prev) return;
    const curr = localPoint(e);
    pointers.current.set(e.pointerId, curr);
    gesture.current.moved += Math.abs(curr.x - prev.x) + Math.abs(curr.y - prev.y);

    if (pointers.current.size === 1) {
      // Arrastre con un dedo / mouse
      setView(v => clampView({ ...v, x: v.x + curr.x - prev.x, y: v.y + curr.y - prev.y }));
    } else if (pointers.current.size === 2) {
      // Pellizco: zoom + desplazamiento según el punto medio entre los dedos
      const other = [...pointers.current.entries()].find(([id]) => id !== e.pointerId)![1];
      const prevDist = Math.hypot(prev.x - other.x, prev.y - other.y);
      const currDist = Math.hypot(curr.x - other.x, curr.y - other.y);
      if (prevDist === 0) return;
      const prevMid = { x: (prev.x + other.x) / 2, y: (prev.y + other.y) / 2 };
      const currMid = { x: (curr.x + other.x) / 2, y: (curr.y + other.y) / 2 };
      setView(v => {
        const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, v.scale * (currDist / prevDist)));
        const k = scale / v.scale;
        return clampView({
          scale,
          x: currMid.x - (prevMid.x - v.x) * k,
          y: currMid.y - (prevMid.y - v.y) * k,
        });
      });
    }
    if (showHint && gesture.current.moved > 10) setShowHint(false);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!pointers.current.delete(e.pointerId)) return;
    if (pointers.current.size > 0) return;
    setIsDragging(false);

    // Doble toque / doble clic: acercar o volver a la vista completa
    if (e.type === 'pointerup' && gesture.current.moved < 10) {
      const p = localPoint(e);
      const g = gesture.current;
      const now = Date.now();
      if (now - g.lastTap < 320 && Math.hypot(p.x - g.lastTapX, p.y - g.lastTapY) < 40) {
        if (view.scale > 1.05) reset(); else zoomAt(p.x, p.y, 2.5);
        setShowHint(false);
        g.lastTap = 0;
      } else {
        g.lastTap = now;
        g.lastTapX = p.x;
        g.lastTapY = p.y;
      }
    }
  };

  const base = baseSize(size.w, size.h);

  const SpeciesBtn = ({ species }: { species: Species }) => {
    const isHovered = hoveredId === species.id;
    return (
      <button
        onClick={() => setSelectedSpecies(species)}
        onMouseEnter={() => setHoveredId(species.id)}
        onMouseLeave={() => setHoveredId(null)}
        className="flex flex-col items-center gap-1 p-1.5 landscape:p-2 rounded-xl w-full min-w-0 transition-colors group focus:outline-none active:bg-jungle-mid/20"
        style={{ background: isHovered ? 'rgba(5,150,105,0.15)' : undefined }}
        title={species.commonName}
      >
        <div
          className="w-10 h-10 landscape:w-9 landscape:h-9 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-200 shrink-0"
          style={isHovered
            ? { background: '#059669', borderColor: '#fff', color: '#fff', boxShadow: '0 0 14px rgba(5,150,105,0.7)' }
            : { background: '#1c1917', borderColor: '#059669', color: '#6ee7b7' }
          }
        >
          {species.mapNumber}
        </div>
        <span className="text-[10px] leading-tight text-center text-stone-400 group-hover:text-stone-200 transition-colors w-full break-words">
          {species.commonName}
        </span>
      </button>
    );
  };

  return (
    <div className="map-view flex flex-col landscape:flex-row bg-stone-900 overflow-hidden">

      {/* ── Map column ── */}
      <div className="flex-1 min-w-0 min-h-0 flex flex-col bg-stone-950">
        <div className="relative flex-1 min-h-0 overflow-hidden">

          {/* Gesture layer: arrastre, pellizco, rueda y doble toque */}
          <div
            ref={areaRef}
            className="absolute inset-0 select-none"
            style={{ touchAction: 'none', cursor: view.scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <img
              src="/images/mapa.webp"
              alt="Mapa Jardín Botánico Selva Misionera"
              className="absolute top-0 left-0 max-w-none pointer-events-none select-none"
              draggable={false}
              style={{
                width: base.w * view.scale,
                height: base.h * view.scale,
                transform: `translate3d(${view.x}px, ${view.y}px, 0)`,
              }}
            />
          </div>

          {/* Hint — solo pantallas táctiles chicas */}
          {showHint && (
            <p className="md:hidden pointer-events-none absolute top-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/70 text-stone-200 text-[11px] px-3 py-1 rounded-full">
              Pellizcá para acercar · arrastrá para mover
            </p>
          )}

          {/* Legend */}
          <div className="hidden md:block absolute bottom-4 left-4 bg-stone-900/90 backdrop-blur p-3 rounded-xl border border-stone-800 z-10">
            <p className="text-[10px] text-stone-500 uppercase tracking-wider mb-2 font-bold">Referencias</p>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-4 h-0.5 border-t border-dashed border-red-500/70"></div>
              <span className="text-[10px] text-stone-400">Perímetro</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0 border-t-2 border-dashed border-white/50"></div>
              <span className="text-[10px] text-stone-400">Sendero</span>
            </div>
          </div>

          {/* Zoom controls */}
          <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2">
            <button
              onClick={() => zoomCenter(1 / ZOOM_STEP)}
              disabled={view.scale <= MIN_SCALE}
              className="p-2.5 bg-stone-800/90 hover:bg-stone-700 disabled:opacity-30 rounded-full text-white transition-colors border border-stone-700"
              aria-label="Alejar"
            >
              <ZoomOut size={20} />
            </button>
            <button
              onClick={reset}
              disabled={view.scale <= MIN_SCALE}
              className="p-2.5 bg-stone-800/90 hover:bg-stone-700 disabled:opacity-30 rounded-full text-white transition-colors border border-stone-700"
              aria-label="Ver mapa completo"
            >
              <Maximize2 size={20} />
            </button>
            <button
              onClick={() => zoomCenter(ZOOM_STEP)}
              disabled={view.scale >= MAX_SCALE}
              className="p-2.5 bg-stone-800/90 hover:bg-stone-700 disabled:opacity-30 rounded-full text-white transition-colors border border-stone-700"
              aria-label="Acercar"
            >
              <ZoomIn size={20} />
            </button>
          </div>
        </div>

        {/* Footnote — cartographic reference */}
        <p className="shrink-0 text-[10px] text-stone-500 px-4 py-2 border-t border-stone-800 leading-snug md:leading-relaxed">
          La demarcación del perímetro del espacio y el sendero fueron referenciados a partir del Trabajo Final del Proyecto de Intervención de la carrera Tecnicatura Universitaria en Sistemas de Información Geográfica y Teledetección, realizado por Carolina Erruvidarte.
        </p>
      </div>

      {/* ── Species list: franja inferior en vertical, barra lateral en horizontal ── */}
      <div className="shrink-0 bg-stone-900 border-t border-stone-800 px-2 py-3 landscape:border-t-0 landscape:border-l landscape:w-44 landscape:lg:w-52 landscape:flex landscape:flex-col landscape:overflow-y-auto hide-scrollbar">
        <div className="landscape:my-auto">
          <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2 landscape:mb-4 text-center">
            Elegí una especie para explorar
          </p>
          {/* Vertical: filas 1–5 y 6–10 · Horizontal: columnas 1–5 y 6–10 */}
          <div className="grid grid-cols-5 gap-1 landscape:grid-cols-2 landscape:grid-rows-5 landscape:grid-flow-col">
            {species.map(s => <SpeciesBtn key={s.id} species={s} />)}
          </div>
        </div>
      </div>

      {selectedSpecies && (
        <SpeciesModal
          species={selectedSpecies}
          onClose={() => setSelectedSpecies(null)}
        />
      )}
    </div>
  );
};

export default MapExplorer;
