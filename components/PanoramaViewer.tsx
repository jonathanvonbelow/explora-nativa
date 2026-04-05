import React, { useState, useRef, useCallback, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface PanoramaViewerProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const MIN_SCALE = 1;
const MAX_SCALE = 6;
const ZOOM_STEP = 0.5;

const PanoramaViewer: React.FC<PanoramaViewerProps> = ({ src, alt, onClose }) => {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Clamp offset so image never shows a gap inside the viewport
  const clampOffset = useCallback((ox: number, oy: number, s: number) => {
    const container = containerRef.current;
    if (!container) return { x: ox, y: oy };
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    const maxX = (cw * (s - 1)) / 2;
    const maxY = (ch * (s - 1)) / 2;
    return {
      x: Math.min(maxX, Math.max(-maxX, ox)),
      y: Math.min(maxY, Math.max(-maxY, oy)),
    };
  }, []);

  const zoom = useCallback((delta: number) => {
    setScale(prev => {
      const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev + delta));
      setOffset(o => clampOffset(o.x, o.y, next));
      return next;
    });
  }, [clampOffset]);

  const reset = () => { setScale(1); setOffset({ x: 0, y: 0 }); };

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !dragStart.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setOffset(clampOffset(dragStart.current.ox + dx, dragStart.current.oy + dy, scale));
  };

  const onMouseUp = () => { setIsDragging(false); dragStart.current = null; };

  // Mouse wheel zoom
  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    zoom(e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP);
  };

  // Touch handling
  const lastTouchDist = useRef<number | null>(null);
  const lastTouchCenter = useRef<{ x: number; y: number } | null>(null);
  const touchOffsetAtStart = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[1].clientX - e.touches[0].clientX;
      const dy = e.touches[1].clientY - e.touches[0].clientY;
      lastTouchDist.current = Math.hypot(dx, dy);
      lastTouchCenter.current = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
      };
    } else if (e.touches.length === 1 && scale > 1) {
      dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, ox: offset.x, oy: offset.y };
      touchOffsetAtStart.current = { x: offset.x, y: offset.y };
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 2 && lastTouchDist.current !== null) {
      const dx = e.touches[1].clientX - e.touches[0].clientX;
      const dy = e.touches[1].clientY - e.touches[0].clientY;
      const dist = Math.hypot(dx, dy);
      const ratio = dist / lastTouchDist.current;
      setScale(prev => {
        const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev * ratio));
        setOffset(o => clampOffset(o.x, o.y, next));
        return next;
      });
      lastTouchDist.current = dist;
    } else if (e.touches.length === 1 && dragStart.current) {
      const dx = e.touches[0].clientX - dragStart.current.x;
      const dy = e.touches[0].clientY - dragStart.current.y;
      setOffset(clampOffset(dragStart.current.ox + dx, dragStart.current.oy + dy, scale));
    }
  };

  const onTouchEnd = () => {
    lastTouchDist.current = null;
    lastTouchCenter.current = null;
    dragStart.current = null;
    touchOffsetAtStart.current = null;
  };

  return (
    <div className="fixed inset-0 z-[200] flex flex-col bg-black" style={{ touchAction: 'none' }}>

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <div className="pointer-events-auto">
          <p className="text-white font-bold text-sm">{alt}</p>
          <p className="text-stone-400 text-xs">Arrastrá para explorar · Rueda del mouse o pellizco para hacer zoom</p>
        </div>
        <button
          onClick={onClose}
          className="pointer-events-auto p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors"
        >
          <X size={22} />
        </button>
      </div>

      {/* Image container */}
      <div
        ref={containerRef}
        className="flex-1 overflow-hidden flex items-center justify-center"
        style={{ cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onWheel={onWheel}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.15s ease-out',
            maxWidth: '100%',
            maxHeight: '100%',
            width: '100%',
            objectFit: 'contain',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-3 pb-5 bg-gradient-to-t from-black/80 to-transparent pt-10 pointer-events-none">
        <button
          onClick={() => zoom(-ZOOM_STEP)}
          disabled={scale <= MIN_SCALE}
          className="pointer-events-auto p-2.5 bg-stone-800/80 hover:bg-stone-700 disabled:opacity-30 rounded-full text-white transition-colors"
        >
          <ZoomOut size={20} />
        </button>

        <button
          onClick={reset}
          className="pointer-events-auto px-4 py-2 bg-stone-800/80 hover:bg-stone-700 rounded-full text-white text-sm font-bold transition-colors min-w-[60px]"
        >
          {Math.round(scale * 100)}%
        </button>

        <button
          onClick={() => zoom(ZOOM_STEP)}
          disabled={scale >= MAX_SCALE}
          className="pointer-events-auto p-2.5 bg-stone-800/80 hover:bg-stone-700 disabled:opacity-30 rounded-full text-white transition-colors"
        >
          <ZoomIn size={20} />
        </button>

        <div className="pointer-events-auto w-px h-6 bg-stone-700 mx-1" />

        <button
          onClick={reset}
          className="pointer-events-auto p-2.5 bg-stone-800/80 hover:bg-stone-700 rounded-full text-white transition-colors"
          title="Restablecer vista"
        >
          <Maximize2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default PanoramaViewer;
