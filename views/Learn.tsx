import React, { useState } from 'react';
import { TRIVIA_DATA, SERVICES_DATA, SPECIES_DATA } from '../constants';
import { HelpCircle, CheckCircle, XCircle, Cloud, Droplets, Bug, ChevronDown, BookOpen, Sprout, TreePine, FlaskConical } from 'lucide-react';

const Learn: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<{qId: string, optionIdx: number} | null>(null);
  const [openBiblio, setOpenBiblio] = useState<string | null>(null);

  const handleOptionSelect = (qId: string, idx: number) => {
    setSelectedOption(prev => prev?.qId === qId ? prev : { qId, optionIdx: idx });
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'air':   return <Cloud size={40} className="text-sky-400" />;
      case 'water': return <Droplets size={40} className="text-blue-500" />;
      case 'bio':   return <Bug size={40} className="text-lime-500" />;
      default:      return <Cloud size={40} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 py-12 px-4 md:px-8">

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-white mb-4">Aprendé sobre la Selva</h1>
        <p className="text-lg text-stone-400">Conocé el jardín, poné a prueba tus conocimientos y consultá las fuentes que respaldan cada ficha.</p>
      </div>

      {/* ── Sección 1: ¿Qué es un jardín botánico? ── */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-stone-200 mb-8 flex items-center gap-2">
          <Sprout className="text-jungle-mid" size={26} />
          ¿Qué es un jardín botánico?
        </h2>
        <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800 space-y-4">
          <p className="text-stone-300 leading-relaxed">
            Los Jardines Botánicos son espacios dedicados a la conservación, estudio y exhibición de plantas nativas y exóticas. Funcionan como centros científicos que mantienen colecciones documentadas, realizan investigaciones y brindan información rigurosa sobre las especies.
          </p>
          <p className="text-stone-300 leading-relaxed">
            Además, cumplen un importante rol en la protección de plantas amenazadas o en peligro de extinción, la educación ambiental y la divulgación científica.
          </p>
          <p className="text-stone-300 leading-relaxed">
            También actúan como "aulas verdes" para estudiantes y como espacios de recreación y turismo, donde las personas pueden conectarse con la naturaleza.
          </p>
          <p className="text-stone-500 text-sm border-t border-stone-700 pt-3">
            Fuente: Jardín Botánico y Arboretum (JBA){' '}
            <a href="https://www.agro.unlp.edu.ar/" target="_blank" rel="noopener noreferrer" className="text-jungle-mid hover:text-jungle-light underline">
              https://www.agro.unlp.edu.ar/
            </a>
          </p>
        </div>
      </div>

      {/* ── Sección 2: El JBSM ── */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-stone-200 mb-8 flex items-center gap-2">
          <TreePine className="text-jungle-mid" size={26} />
          El Jardín Botánico Selva Misionera
        </h2>

        {/* Destacado institucional */}
        <div className="bg-jungle-dark/40 border border-jungle-mid/30 rounded-2xl p-6 mb-6">
          <p className="text-jungle-light font-serif text-lg leading-relaxed italic">
            "El proyecto comenzó en 1974 con fines educativos, didácticos y científicos con el objetivo de contribuir con la conservación y conocimiento de la biodiversidad florística principalmente de la Selva Paranaense de Misiones."
          </p>
          <p className="text-stone-500 text-sm mt-2">— Facultad de Ciencias Forestales, UNaM</p>
          <p className="text-stone-600 text-xs mt-3 leading-relaxed border-t border-stone-700/50 pt-3">
            Eibl, B. I., Lopez, M., Gonzalez, C., Dummel, C., Kuppers, G., Gonzalez, C., Hancherek, F., Holzmaisters, J., Rios, E., Melgarejo, J. L., Suarez, J., Resch, L., Benitez, M. A., Erbetta, D., Carbone, V., Dohmann, R., & Robledo, F. (s. f.). El Jardín Botánico Selva Misionera. Universidade Federal da Integração Latino-Americana (UNILA).{' '}
            <a href="https://dspace.unila.edu.br/server/api/core/bitstreams/1643e42e-1e57-423f-95ec-7746b251aac0/content" target="_blank" rel="noopener noreferrer" className="text-jungle-mid hover:text-jungle-light underline break-all">
              https://dspace.unila.edu.br/server/api/core/bitstreams/1643e42e-1e57-423f-95ec-7746b251aac0/content
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {[
            { valor: '2 ha', etiqueta: 'Superficie del predio', sub: 'dentro del campus de la FCF – UNaM' },
            { valor: '70+', etiqueta: 'Especies arbóreas nativas', sub: 'de la selva paranaense' },
            { valor: '200+', etiqueta: 'Especies vegetales', sub: 'de diversos sectores del ecosistema' },
          ].map(({ valor, etiqueta, sub }) => (
            <div key={etiqueta} className="bg-stone-900 rounded-2xl p-5 border border-stone-800 text-center">
              <p className="text-4xl font-serif font-bold text-jungle-light mb-1">{valor}</p>
              <p className="text-white font-bold text-sm">{etiqueta}</p>
              <p className="text-stone-500 text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              <FlaskConical size={18} className="text-jungle-mid" />
              Actividades científicas
            </h3>
            <ul className="space-y-2 text-sm text-stone-300">
              {[
                'Herbarios y fenología de especies arbóreas',
                'Banco de germoplasma',
                'Propagación de especies nativas mediante biotecnología',
                'Ensayos de semillas y dendrología nativa',
                'Anatomía de la madera',
                'Vivero y enredaderas ornamentales nativas',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-jungle-mid mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              <BookOpen size={18} className="text-jungle-mid" />
              Extensión y comunidad
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed mb-4">
              El JBSM desarrolla programas de educación ambiental orientados a la conservación de la biodiversidad, la concientización y la sensibilización comunitaria sobre las funciones de la selva.
            </p>
            <p className="text-stone-300 text-sm leading-relaxed mb-4">
              Desde el 2013 ejecuta distintos proyectos de extensión universitaria, visitas guiadas a establecimientos educativos, cursos de capacitación, entre otros. El Jardín Botánico Selva Misionera, forma parte de la Red Argentina de Jardínes Botánicos (RAJB).
            </p>
            <p className="text-stone-400 text-xs border-t border-stone-700 pt-3">
              Para visitar el jardín es necesario completar una solicitud con al menos 10 días de anticipación, indicando responsable, contacto y programa de interés.
            </p>
          </div>
        </div>
      </div>

      {/* ── Sección 3: Servicios Ecosistémicos ── */}
      <div className="max-w-5xl mx-auto bg-stone-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-stone-800 mb-20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-jungle-mid rounded-full mix-blend-overlay filter blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl font-serif font-bold text-center text-white mb-10">Servicios Ecosistémicos</h2>

          {/* 6.1 — Introducción conceptual */}
          <div className="mb-10 space-y-4 text-stone-300 leading-relaxed text-sm md:text-base">
            <p>
              Los bosques como el que alberga el Jardín Botánico Selva Misionera no son simples conjuntos de árboles: son sistemas complejos que sostienen la vida humana y no humana de múltiples maneras. Para nombrar estas relaciones, la ciencia utiliza el concepto de <strong className="text-white">servicios ecosistémicos</strong>, que son los beneficios que los ecosistemas proveen a las personas.
            </p>
            <p>
              En los últimos años, también se habla de <strong className="text-white">contribuciones de la naturaleza para la gente</strong> (NCP, por sus siglas en inglés), un concepto más amplio que reconoce que el vínculo entre los seres humanos y la naturaleza no es solo utilitario: incluye también valores culturales, espirituales y relacionales que no siempre se pueden medir en términos económicos.
            </p>
            <p>
              Estos beneficios suelen organizarse en tres grandes grupos: los <strong className="text-white">servicios de aprovisionamiento</strong> (lo que el ecosistema provee materialmente), los <strong className="text-white">servicios de regulación</strong> (los procesos que mantienen el equilibrio del ambiente) y los <strong className="text-white">servicios culturales</strong> (los vínculos no materiales que la naturaleza genera con las comunidades).
            </p>
          </div>

          {/* 6.2 — Tarjetas de regulación (desde SERVICES_DATA) */}
          <div className="grid md:grid-cols-3 gap-10 mb-14">
            {SERVICES_DATA.map((service, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-24 h-24 bg-stone-800 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border border-stone-700">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-lg font-bold text-stone-200 mb-3">{service.title}</h3>
                <p className="text-stone-400 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          {/* 6.3 — Servicios Culturales */}
          <div className="mb-10">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Servicios Culturales</h3>
            <p className="text-stone-400 text-sm mb-8">Los ecosistemas también contribuyen al bienestar humano de maneras que van más allá de lo material.</p>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  titulo: 'Educación e investigación',
                  texto: 'El Jardín Botánico es un aula viva. Alberga información científica sobre especies nativas que es fuente de aprendizaje para estudiantes de todos los niveles, docentes e investigadores. La posibilidad de observar, identificar y estudiar plantas en su entorno natural es irremplazable.',
                },
                {
                  titulo: 'Recreación y bienestar',
                  texto: 'El contacto con la naturaleza tiene efectos documentados sobre la salud mental y física de las personas. Espacios verdes como el Jardín ofrecen un lugar de descanso, contemplación y conexión con el entorno, en contraste con la vida urbana cotidiana.',
                },
                {
                  titulo: 'Identidad y patrimonio cultural',
                  texto: 'Muchas de las especies del Jardín forman parte de la historia y la memoria colectiva de la región. El lapacho que tiñe las calles de rosa en invierno, el pindó sagrado de la cultura guaraní, el ycho que alimenta tradiciones ancestrales: la flora nativa es parte de quiénes somos como comunidad misionera.',
                },
                {
                  titulo: 'Saberes tradicionales y etnobotánica',
                  texto: 'Las comunidades mbya guaraní y las poblaciones locales han desarrollado durante siglos un conocimiento profundo sobre las plantas de la selva: sus usos medicinales, alimentarios, rituales y constructivos. Preservar estos saberes es también una forma de conservación cultural.',
                },
                {
                  titulo: 'Inspiración y valor estético',
                  texto: 'La selva es fuente de inspiración para el arte, la literatura y la fotografía. La biodiversidad de formas, colores y ciclos naturales que ofrece el Jardín tiene un valor estético que enriquece la vida de quienes la frecuentan.',
                },
              ].map(({ titulo, texto }) => (
                <div key={titulo} className="bg-stone-800/60 rounded-2xl p-5 border border-stone-700">
                  <h4 className="font-bold text-jungle-light mb-2 text-sm">{titulo}</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">{texto}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 6.4 — Fuente */}
          <p className="text-stone-600 text-xs leading-relaxed border-t border-stone-700 pt-6">
            Fuente: Bentrup, G. (2008). <em>Zonas de amortiguamiento para conservación: Lineamientos para diseño de zonas de amortiguamiento, corredores y vías verdes</em> (Informe Técnico Gral. SRS-109). Departamento de Agricultura, Servicio Forestal, Estación de Investigación Sur. / Gonzalez, S., & Ghermandi, L. (2024). How to define the wildland-urban interface? <em>Frontiers in Environmental Science</em>, 11, 1284631.
          </p>
        </div>
      </div>

      {/* ── Sección 4: Desafío Botánico ── */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-stone-200 mb-8 flex items-center gap-2">
          <HelpCircle className="text-jungle-mid" />
          Desafío Botánico
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRIVIA_DATA.map((q) => {
            const isAnswered = selectedOption?.qId === q.id;
            const isCorrect = isAnswered && selectedOption.optionIdx === q.correctAnswer;
            return (
              <div key={q.id} className="bg-stone-900 rounded-2xl shadow-xl overflow-hidden border-b-4 border-jungle-mid flex flex-col border border-stone-800">
                <div className="p-6 bg-stone-800 border-b border-stone-700">
                  <h3 className="font-bold text-lg text-white">{q.question}</h3>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {q.options.map((opt, idx) => (
                      <button
                        key={idx}
                        disabled={isAnswered}
                        onClick={() => handleOptionSelect(q.id, idx)}
                        className={`w-full text-left p-3 rounded-lg border transition-all ${
                          isAnswered
                            ? idx === q.correctAnswer
                              ? 'bg-green-900/30 border-green-500/50 text-green-300 font-bold'
                              : idx === selectedOption.optionIdx
                                ? 'bg-red-900/30 border-red-500/50 text-red-300'
                                : 'bg-stone-900 border-stone-800 opacity-50 text-stone-500'
                            : 'bg-stone-800 border-stone-700 text-stone-300 hover:bg-stone-700 hover:border-jungle-mid'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{opt}</span>
                          {isAnswered && idx === q.correctAnswer && <CheckCircle size={18} className="text-green-500" />}
                          {isAnswered && idx === selectedOption.optionIdx && idx !== q.correctAnswer && <XCircle size={18} className="text-red-500" />}
                        </div>
                      </button>
                    ))}
                  </div>
                  {isAnswered && (
                    <div className={`mt-6 p-4 rounded-lg text-sm border ${isCorrect ? 'bg-green-900/20 border-green-900 text-green-200' : 'bg-red-900/20 border-red-900 text-red-200'}`}>
                      <p className="font-bold mb-1">{isCorrect ? '¡Correcto!' : '¡Casi!'}</p>
                      <p className="opacity-90">{q.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Sección 5: Fuentes bibliográficas ── */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-stone-200 mb-2 flex items-center gap-2">
          <BookOpen className="text-jungle-mid" size={26} />
          Fuentes bibliográficas
        </h2>
        <p className="text-stone-500 text-sm mb-8">
          Referencias utilizadas para construir las fichas de cada especie presente en el recorrido.
        </p>
        <div className="space-y-2">
          {SPECIES_DATA.map((species) => {
            const isOpen = openBiblio === species.id;
            return (
              <div key={species.id} className="bg-stone-900 rounded-xl border border-stone-800 overflow-hidden">
                <button
                  onClick={() => setOpenBiblio(isOpen ? null : species.id)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-stone-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold bg-jungle-dark text-jungle-light px-2 py-0.5 rounded-full border border-jungle-mid/40 shrink-0">
                      #{species.mapNumber}
                    </span>
                    <span className="font-bold text-white">{species.commonName}</span>
                    <span className="text-stone-500 text-sm italic hidden sm:inline">{species.scientificName}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-stone-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <ul className="px-5 pb-5 space-y-2 border-t border-stone-800 pt-4">
                    {species.bibliography.map((ref, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stone-400 leading-relaxed">
                        <span className="text-jungle-mid mt-1 shrink-0">—</span>
                        {ref.startsWith('http') || ref.includes('https://') ? (
                          <span>
                            {ref.replace(/https?:\/\/\S+/g, '')}
                            <a
                              href={ref.match(/https?:\/\/\S+/)?.[0]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-jungle-mid hover:text-jungle-light underline break-all"
                            >
                              {ref.match(/https?:\/\/\S+/)?.[0]}
                            </a>
                          </span>
                        ) : (
                          <span>{ref}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Learn;
