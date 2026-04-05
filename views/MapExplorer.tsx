import React, { useState } from 'react';
import { SPECIES_DATA } from '../constants';
import { Species } from '../types';
import SpeciesModal from '../components/SpeciesModal';

const MapExplorer: React.FC = () => {
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);
  const [hoveredId, setHoveredId]             = useState<string | null>(null);

  const col1 = SPECIES_DATA.filter(s => s.mapNumber <= 5).sort((a, b) => a.mapNumber - b.mapNumber);
  const col2 = SPECIES_DATA.filter(s => s.mapNumber >= 6).sort((a, b) => a.mapNumber - b.mapNumber);

  const SpeciesBtn = ({ species }: { species: Species }) => {
    const isHovered = hoveredId === species.id;
    return (
      <button
        onClick={() => setSelectedSpecies(species)}
        onMouseEnter={() => setHoveredId(species.id)}
        onMouseLeave={() => setHoveredId(null)}
        className="flex flex-col items-center gap-1.5 p-2 rounded-xl w-full transition-colors group focus:outline-none"
        style={{ background: isHovered ? 'rgba(5,150,105,0.15)' : 'transparent' }}
        title={species.commonName}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-200 shrink-0"
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
    <div className="flex bg-stone-900" style={{ height: 'calc(100vh - 64px)' }}>

      {/* ── Map area ── */}
      <div className="flex-1 overflow-auto custom-scrollbar bg-stone-950 relative">
        <img
          src="/images/mapa.png"
          alt="Mapa Jardín Botánico Selva Misionera"
          className="w-full h-auto"
          draggable={false}
        />

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-stone-900/90 backdrop-blur p-3 rounded-xl border border-stone-800 z-10">
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
      </div>

      {/* ── Species sidebar ── */}
      <div className="w-44 md:w-52 bg-stone-900 border-l border-stone-800 flex flex-col justify-center py-6 px-2 shrink-0">
        <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-4 text-center">
          Hacé clic para explorar
        </p>
        <div className="grid grid-cols-2 gap-1">
          {/* Columna 1: especies 1–5 */}
          <div className="flex flex-col gap-1">
            {col1.map(s => <SpeciesBtn key={s.id} species={s} />)}
          </div>
          {/* Columna 2: especies 6–10 */}
          <div className="flex flex-col gap-1">
            {col2.map(s => <SpeciesBtn key={s.id} species={s} />)}
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
