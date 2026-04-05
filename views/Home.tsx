import React, { useState } from 'react';
import { ArrowRight, Map, BookOpen, Users } from 'lucide-react';
import { SPECIES_DATA } from '../constants';

interface HomeProps {
  onNavigate: (view: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  // Enlace directo de imagen (.jpg) proporcionado por el usuario
  const heroImage = "https://i.pinimg.com/736x/19/7f/fa/197ffaf33261b60aa2c6d423e0b77a9c.jpg";

  // Imagen generada por IA como respaldo por si el enlace original deja de funcionar
  const fallbackImage = "https://image.pollinations.ai/prompt/cinematic%20aerial%20drone%20shot%20of%20misiones%20jungle%20botanical%20garden%20top%20down%20view%20dense%20green%20forest%20with%20vibrant%20pink%20lapacho%20trees%20blooming%20and%20red%20soil%20paths%20golden%20hour?width=1920&height=1080&nologo=true";
  
  const [bgImage, setBgImage] = useState(heroImage);

  return (
    <div className="flex flex-col min-h-screen bg-stone-950">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-stone-950">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img 
                src={bgImage}
                onError={() => setBgImage(fallbackImage)}
                referrerPolicy="no-referrer"
                alt="Vista aérea Selva Misionera"
                className="w-full h-full object-cover opacity-60 transition-opacity duration-700 animate-in fade-in"
            />
             {/* Degradado para mejorar la lectura del texto */}
             <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Explora Nativa
          </h1>
          <p className="text-base md:text-lg text-stone-300 mb-10 max-w-3xl mx-auto font-light drop-shadow-md leading-relaxed">
            Explora nativa propone la creación de un recorrido digital interactivo con el fin de visibilizar la riqueza de la flora presente en el Jardín Botánico Selva Misionera de Eldorado, Misiones. Este espacio de 2 hectáreas, perteneciente a la Facultad de Ciencias Forestales de la Universidad Nacional de Misiones, alberga una valiosa colección de especies nativas pero su acceso al público es limitado.
          </p>
          <button 
            onClick={() => onNavigate('map')}
            className="group bg-jungle-mid hover:bg-jungle-light hover:text-jungle-dark text-white text-lg font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(5,150,105,0.3)] flex items-center gap-3 mx-auto transform hover:scale-105 border border-white/10"
          >
            Comenzar Recorrido Virtual
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Video Recorrido */}
      <section className="py-20 px-6 bg-stone-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-stone-100 mb-4">
            Recorré el Jardín Botánico
          </h2>
          <p className="text-center text-stone-400 mb-10 text-lg">
            Un paseo completo por la Selva Misionera en Eldorado
          </p>
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-stone-700" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/zX0EklfQXb8"
              title="Recorrido Jardín Botánico Selva Misionera"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Resumen del Proyecto */}
      <section className="py-20 px-6 bg-stone-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-jungle-light mb-6">Democratizando el acceso a nuestra naturaleza</h2>
            <p className="text-lg text-stone-400 leading-relaxed mb-6">
              Una experiencia inmersiva que te permitirá explorar la flora del Jardín Botánico "Selva Misionera" de la Facultad de Ciencias Forestales de la UNaM para poner en valor la importancia del cuidado del bosque y de los servicios ecosistémicos que provee.
            </p>
            <p className="text-lg text-stone-400 leading-relaxed">
              A través de la tecnología, buscamos conectar a la comunidad con las especies nativas, fomentando la conservación mediante el conocimiento.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-stone-800 p-6 rounded-2xl shadow-lg border-b-4 border-jungle-mid transform translate-y-4 hover:bg-stone-750 transition-colors">
                <Map className="text-jungle-mid mb-4" size={32} />
                <h3 className="font-bold text-lg text-stone-100 mb-2">Mapa Interactivo</h3>
                <p className="text-stone-400 text-sm">Georreferenciación de especies clave en tiempo real.</p>
             </div>
             <div className="bg-stone-800 p-6 rounded-2xl shadow-lg border-b-4 border-earth-mid hover:bg-stone-750 transition-colors">
                <BookOpen className="text-earth-mid mb-4" size={32} />
                <h3 className="font-bold text-lg text-stone-100 mb-2">Fichas Educativas</h3>
                <p className="text-stone-400 text-sm">Información científica y saberes populares integrados.</p>
             </div>
             <div className="bg-stone-800 p-6 rounded-2xl shadow-lg border-b-4 border-amber-600 col-span-2 mt-2 hover:bg-stone-750 transition-colors">
                <Users className="text-amber-600 mb-4" size={32} />
                <h3 className="font-bold text-lg text-stone-100 mb-2">Ciencia Ciudadana</h3>
                <p className="text-stone-400 text-sm">Participá registrando tus observaciones y comentarios.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Carrusel Destacados */}
      <section className="py-20 px-6 bg-stone-950 border-t border-stone-800">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-10 text-center text-stone-100">Especies Icónicas</h2>
            {/* Show only first 3 for home, or a slice */}
            <div className="grid md:grid-cols-3 gap-8">
                {SPECIES_DATA.slice(0, 3).map((species) => (
                    <div key={species.id} className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer ring-1 ring-stone-800" onClick={() => onNavigate('map')}>
                        <img
                            src={species.photos[0]}
                            alt={species.commonName}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-jungle-mid font-bold text-sm tracking-wider mb-1 uppercase">{species.family}</p>
                            <h3 className="text-2xl font-bold mb-2 text-white">{species.commonName}</h3>
                            <p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                {species.shortDescription}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
             <div className="text-center mt-12">
                 <button onClick={() => onNavigate('map')} className="text-jungle-mid hover:text-jungle-light font-bold text-lg flex items-center justify-center gap-2 mx-auto">
                     Ver las 10 especies <ArrowRight size={20} />
                 </button>
             </div>
        </div>
      </section>
    </div>
  );
};

export default Home;