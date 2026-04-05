import React, { useState } from 'react';
import { X, Info, Leaf, Trees, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Species } from '../types';
import PanoramaViewer from './PanoramaViewer';

interface SpeciesModalProps {
  species: Species;
  onClose: () => void;
}

const SpeciesModal: React.FC<SpeciesModalProps> = ({ species, onClose }) => {
  const [activeTab, setActiveTab] = useState<'general' | 'science' | 'culture'>('general');
  const [panoramaOpen, setPanoramaOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const prevPhoto = () => setPhotoIndex(i => (i - 1 + species.photos.length) % species.photos.length);
  const nextPhoto = () => setPhotoIndex(i => (i + 1) % species.photos.length);

  return (
    <>
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-stone-900 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative border border-stone-800">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-black/70 text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Left Side: Image viewer */}
        <div className="w-full md:w-1/2 bg-stone-950 relative flex flex-col border-r border-stone-800" style={{ minHeight: '280px' }}>
          {/* Main photo */}
          <div className="flex-1 relative overflow-hidden">
            <img
              key={photoIndex}
              src={species.photos[photoIndex]}
              alt={`${species.commonName} - foto ${photoIndex + 1}`}
              className="w-full h-full object-cover"
              style={{ minHeight: '200px' }}
            />
            {/* Navigation arrows */}
            {species.photos.length > 1 && (
              <>
                <button
                  onClick={prevPhoto}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
                  {photoIndex + 1} / {species.photos.length}
                </div>
              </>
            )}
            {/* Panorama button */}
            <button
              onClick={() => setPanoramaOpen(true)}
              className="absolute bottom-2 right-2 bg-jungle-mid/90 backdrop-blur text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:bg-jungle-mid transition-all shadow-lg border border-white/10 text-sm"
            >
              <Maximize2 size={15} />
              Panorámica
            </button>
          </div>

          {/* Thumbnail strip */}
          {species.photos.length > 1 && (
            <div className="flex gap-1 p-2 bg-stone-950 overflow-x-auto hide-scrollbar" style={{ height: '64px' }}>
              {species.photos.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setPhotoIndex(idx)}
                  className={`shrink-0 rounded overflow-hidden border-2 transition-colors ${idx === photoIndex ? 'border-jungle-mid' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  style={{ width: '80px', height: '48px' }}
                >
                  <img src={photo} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col bg-stone-900 max-h-[60vh] md:max-h-full text-stone-200">
          {/* Header */}
          <div className="p-5 border-b border-stone-800 bg-stone-900/50">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold bg-jungle-dark text-jungle-light px-2 py-0.5 rounded-full border border-jungle-mid/40">
                #{species.mapNumber}
              </span>
              <span className="text-xs text-stone-500 uppercase tracking-wider">{species.family}</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-white leading-tight">{species.commonName}</h2>
            <p className="text-jungle-mid italic">{species.scientificName}</p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-stone-800 shrink-0">
            {(['general', 'science', 'culture'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-wide transition-colors ${activeTab === tab ? 'border-b-2 border-jungle-mid text-jungle-light' : 'text-stone-500 hover:text-stone-300'}`}
              >
                {tab === 'general' ? 'Historia' : tab === 'science' ? 'Botánica' : 'Saberes'}
              </button>
            ))}
          </div>

          {/* Scrollable Content */}
          <div className="p-5 overflow-y-auto hide-scrollbar flex-1">

            {activeTab === 'general' && (
              <div className="space-y-3">
                <p className="text-stone-400 text-sm italic leading-relaxed border-l-2 border-jungle-mid/50 pl-3">
                  {species.shortDescription}
                </p>
                <div className="text-stone-300 text-sm leading-relaxed whitespace-pre-line">
                  {species.description}
                </div>
              </div>
            )}

            {activeTab === 'science' && (
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Trees className="text-jungle-mid shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="font-bold text-white text-sm">Familia</h4>
                    <p className="text-stone-400 text-sm">{species.family}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="text-jungle-mid shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="font-bold text-white text-sm">Morfología</h4>
                    <p className="text-stone-400 text-sm leading-relaxed">{species.morphology}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="text-jungle-mid shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="font-bold text-white text-sm">Usos de la madera y recursos</h4>
                    <p className="text-stone-400 text-sm leading-relaxed">{species.woodUse}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'culture' && (
              <div className="space-y-4">
                <div className="bg-amber-900/20 border-l-4 border-amber-600 p-4 rounded-r-lg">
                  <h4 className="font-bold text-amber-400 text-sm mb-2">Saberes guaraníes y populares</h4>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    {species.culturalUse}
                  </p>
                </div>
                <p className="text-xs text-stone-600">
                  * La información medicinal es referencial, recopilada de saberes locales e investigaciones académicas. No sustituye consejo médico.
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>

    {/* Full-screen panorama viewer — rendered outside the modal card */}
    {panoramaOpen && (
      <PanoramaViewer
        src={species.panoramaUrl}
        alt={`Panorámica — ${species.commonName}`}
        onClose={() => setPanoramaOpen(false)}
      />
    )}
    </>
  );
};

export default SpeciesModal;
