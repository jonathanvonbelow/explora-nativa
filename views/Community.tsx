import React, { useState, useEffect } from 'react';
import { User, Send, MessageSquare, Leaf, BarChart2, CheckCircle } from 'lucide-react';
import { Comment } from '../types';

// ─── Types ───────────────────────────────────────────────────────────────────

interface SurveyQuestion {
  id: string;
  text: string;
  type: 'likert' | 'choice';
  options: string[];
}

type SurveyResults = Record<string, Record<string, number>>;

// ─── Constants ────────────────────────────────────────────────────────────────

const STORAGE_KEY_COMMENTS = 'explora-nativa-comments';
const STORAGE_KEY_SURVEY   = 'explora-nativa-survey';

const SEED_COMMENTS: Comment[] = [
  { id: '1', author: 'Ana López',  text: '¡Increíble la altura de los Lapachos! No sabía que tenían tantos usos medicinales.', date: '2 abr 2026' },
  { id: '2', author: 'Carlos M.',  text: 'El recorrido virtual me dio ganas de visitar el jardín en persona. Muy buena info.',  date: '28 mar 2026' },
];

const SURVEY_QUESTIONS: SurveyQuestion[] = [
  { id: 'q1',  type: 'likert', text: '¿Cómo calificarías tu experiencia general en el jardín?',            options: ['1','2','3','4','5'] },
  { id: 'q2',  type: 'likert', text: '¿El recorrido virtual te resultó útil para conocer las especies?',   options: ['1','2','3','4','5'] },
  { id: 'q3',  type: 'likert', text: '¿Qué tanto aprendiste sobre la biodiversidad misionera?',            options: ['1','2','3','4','5'] },
  { id: 'q4',  type: 'likert', text: '¿Recomendarías visitar el Jardín Botánico a otras personas?',        options: ['1','2','3','4','5'] },
  { id: 'q5',  type: 'likert', text: '¿Considerás importante conservar la Selva Misionera?',               options: ['1','2','3','4','5'] },
  { id: 'q6',  type: 'choice', text: '¿Con qué frecuencia visitás espacios naturales?',                    options: ['Nunca', 'Una vez al año', 'Varias veces al año', 'Mensualmente o más'] },
  { id: 'q7',  type: 'choice', text: '¿Cuál es tu especie favorita del jardín?',                           options: ['Lapacho rosado', 'Palo Rosa', 'Timbó', 'Cedro misionero', 'Otra'] },
  { id: 'q8',  type: 'choice', text: '¿Cómo conociste este proyecto?',                                     options: ['Redes sociales', 'La universidad', 'Familia o amigos', 'Visita al jardín', 'Otro'] },
  { id: 'q9',  type: 'choice', text: '¿Qué servicio del ecosistema te parece más valioso?',                options: ['Regulación del agua', 'Biodiversidad', 'Regulación del clima', 'Suelos y nutrientes'] },
  { id: 'q10', type: 'choice', text: '¿Cuál es tu vínculo con el jardín?',                                 options: ['Estudiante', 'Docente / Investigador', 'Visitante ocasional', 'Vecino/a de la zona'] },
];

const LIKERT_COLORS = ['#ef4444', '#f97316', '#eab308', '#84cc16', '#22c55e'];
const CHOICE_COLORS = ['#059669', '#d97706', '#7c3aed', '#dc2626', '#0284c7', '#ec4899'];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function loadComments(): Comment[] {
  try { const r = localStorage.getItem(STORAGE_KEY_COMMENTS); if (r) return JSON.parse(r); } catch {}
  return SEED_COMMENTS;
}

function loadSurveyResults(): SurveyResults {
  try { const r = localStorage.getItem(STORAGE_KEY_SURVEY); if (r) return JSON.parse(r); } catch {}
  const empty: SurveyResults = {};
  SURVEY_QUESTIONS.forEach(q => { empty[q.id] = {}; });
  return empty;
}

function formatDate(d: Date) {
  return d.toLocaleDateString('es-AR', { day: 'numeric', month: 'short', year: 'numeric' });
}

function totalResponses(results: SurveyResults): number {
  const q = results['q1'];
  if (!q) return 0;
  return Object.values(q).reduce((a, b) => a + b, 0);
}

// ─── Chart: Vertical bars (Likert 1-5) ───────────────────────────────────────

const LikertChart: React.FC<{ q: SurveyQuestion; data: Record<string, number> }> = ({ q, data }) => {
  const counts  = q.options.map(o => data[o] ?? 0);
  const total   = counts.reduce((a, b) => a + b, 0);
  const maxVal  = Math.max(...counts, 1);

  return (
    <div className="bg-stone-900 rounded-2xl border border-stone-800 p-5">
      <p className="text-sm font-medium text-stone-300 mb-1 leading-snug">{q.text}</p>
      <p className="text-xs text-stone-600 mb-4">1 = Muy bajo · 5 = Muy alto</p>
      <div className="flex items-end gap-2" style={{ height: 96 }}>
        {q.options.map((opt, i) => {
          const count  = counts[i];
          const pct    = total === 0 ? 0 : Math.round((count / total) * 100);
          const barH   = total === 0 ? 0 : Math.max((count / maxVal) * 88, count > 0 ? 6 : 0);
          return (
            <div key={opt} className="flex-1 flex flex-col items-center justify-end h-full gap-1">
              {count > 0 && <span className="text-xs font-bold text-stone-300">{pct}%</span>}
              <div
                className="w-full rounded-t-lg transition-all duration-700"
                style={{ height: barH, backgroundColor: LIKERT_COLORS[i] }}
              />
              <span className="text-sm font-bold" style={{ color: LIKERT_COLORS[i] }}>{opt}</span>
            </div>
          );
        })}
      </div>
      <p className="text-xs text-stone-600 mt-3 text-right">{total} respuesta{total !== 1 ? 's' : ''}</p>
    </div>
  );
};

// ─── Chart: Pie (choice questions) ───────────────────────────────────────────

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function slicePath(cx: number, cy: number, r: number, start: number, end: number): string {
  if (end - start >= 359.9) {
    return `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx - 0.01} ${cy - r} Z`;
  }
  const s = polarToCartesian(cx, cy, r, start);
  const e = polarToCartesian(cx, cy, r, end);
  const large = end - start > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y} Z`;
}

const PieChart: React.FC<{ q: SurveyQuestion; data: Record<string, number> }> = ({ q, data }) => {
  const total = q.options.reduce((a, o) => a + (data[o] ?? 0), 0);

  if (total === 0) {
    return (
      <div className="bg-stone-900 rounded-2xl border border-stone-800 p-5">
        <p className="text-sm font-medium text-stone-300 mb-4 leading-snug">{q.text}</p>
        <div className="flex items-center justify-center h-24">
          <p className="text-stone-600 text-sm">Sin respuestas aún</p>
        </div>
      </div>
    );
  }

  let cumAngle = 0;
  const slices = q.options
    .map((opt, i) => {
      const count = data[opt] ?? 0;
      const angle = (count / total) * 360;
      const start = cumAngle;
      cumAngle += angle;
      return { opt, count, angle, start, color: CHOICE_COLORS[i % CHOICE_COLORS.length] };
    })
    .filter(s => s.count > 0);

  const cx = 52, cy = 52, r = 48;

  return (
    <div className="bg-stone-900 rounded-2xl border border-stone-800 p-5">
      <p className="text-sm font-medium text-stone-300 mb-4 leading-snug">{q.text}</p>
      <div className="flex items-center gap-5">
        <svg width={104} height={104} className="shrink-0">
          {slices.map(s => (
            <path
              key={s.opt}
              d={slicePath(cx, cy, r, s.start, s.start + s.angle)}
              fill={s.color}
              stroke="#1c1917"
              strokeWidth={1.5}
            />
          ))}
        </svg>
        <div className="flex-1 space-y-2 min-w-0">
          {slices.map(s => (
            <div key={s.opt} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
              <span className="text-xs text-stone-400 flex-1 truncate leading-tight">{s.opt}</span>
              <span className="text-xs font-bold text-stone-200 shrink-0">
                {Math.round((s.count / total) * 100)}%
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-stone-600 mt-3 text-right">{total} respuesta{total !== 1 ? 's' : ''}</p>
    </div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────

const Community: React.FC = () => {
  // Comments
  const [comments,     setComments]     = useState<Comment[]>(loadComments);
  const [authorInput,  setAuthorInput]  = useState('');
  const [textInput,    setTextInput]    = useState('');
  const [commentSent,  setCommentSent]  = useState(false);

  // Survey
  const [surveyAnswers,  setSurveyAnswers]  = useState<Record<string, string>>({});
  const [surveyResults,  setSurveyResults]  = useState<SurveyResults>(loadSurveyResults);
  const [surveySent,     setSurveySent]     = useState(false);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_COMMENTS, JSON.stringify(comments)); } catch {}
  }, [comments]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_SURVEY, JSON.stringify(surveyResults)); } catch {}
  }, [surveyResults]);

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    const author = authorInput.trim();
    const text   = textInput.trim();
    if (!author || !text) return;
    const next = [{ id: Date.now().toString(), author, text, date: formatDate(new Date()) }, ...comments];
    setComments(next);
    setAuthorInput('');
    setTextInput('');
    setCommentSent(true);
    setTimeout(() => setCommentSent(false), 3000);
  };

  const surveyComplete = SURVEY_QUESTIONS.every(q => surveyAnswers[q.id]);

  const handleSurvey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!surveyComplete) return;
    const next: SurveyResults = { ...surveyResults };
    SURVEY_QUESTIONS.forEach(q => {
      const ans = surveyAnswers[q.id];
      if (!next[q.id]) next[q.id] = {};
      next[q.id][ans] = (next[q.id][ans] ?? 0) + 1;
    });
    setSurveyResults(next);
    setSurveyAnswers({});
    setSurveySent(true);
    setTimeout(() => setSurveySent(false), 4000);
  };

  const likertQs = SURVEY_QUESTIONS.filter(q => q.type === 'likert');
  const choiceQs = SURVEY_QUESTIONS.filter(q => q.type === 'choice');
  const nTotal   = totalResponses(surveyResults);

  return (
    <div className="min-h-screen bg-stone-950 py-12 px-4">
      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-amber-600/20 text-amber-400 text-sm font-bold tracking-widest uppercase mb-4 border border-amber-600/30">
            <Leaf size={14} /> Ciencia Ciudadana
          </span>
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Comunidad Explora Nativa</h1>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Compartí tus saberes populares, respondé la encuesta y dejá tu huella en nuestro muro de visitas.
          </p>
        </div>

        {/* ── Muro de visitas ── */}
        <div className="grid md:grid-cols-3 gap-8 items-start mb-16">

          {/* Formulario de comentario */}
          <div className="md:col-span-1">
            <div className="bg-stone-900 p-6 rounded-2xl border border-stone-800 shadow-xl">
              <div className="flex items-center gap-2 mb-5">
                <MessageSquare size={18} className="text-amber-500" />
                <h3 className="font-bold text-lg text-amber-400">Dejá tu mensaje</h3>
              </div>
              <form onSubmit={handleComment} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Tu nombre</label>
                  <div className="relative">
                    <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
                    <input
                      type="text"
                      className="w-full pl-9 pr-3 py-2.5 bg-stone-950 border border-stone-700 rounded-lg focus:ring-2 focus:ring-amber-600 focus:outline-none text-stone-200 placeholder-stone-600 text-sm"
                      placeholder="Ej: María González"
                      value={authorInput}
                      maxLength={60}
                      onChange={e => setAuthorInput(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Tu mensaje</label>
                  <textarea
                    className="w-full p-3 bg-stone-950 border border-stone-700 rounded-lg focus:ring-2 focus:ring-amber-600 focus:outline-none resize-none h-28 text-stone-200 placeholder-stone-600 text-sm"
                    placeholder="¿Qué aprendiste? ¿Conocés algún uso medicinal de estas especies?"
                    value={textInput}
                    maxLength={500}
                    onChange={e => setTextInput(e.target.value)}
                  />
                  <p className="text-right text-xs text-stone-600 mt-1">{textInput.length}/500</p>
                </div>
                <button
                  type="submit"
                  disabled={!authorInput.trim() || !textInput.trim()}
                  className="w-full bg-amber-700 hover:bg-amber-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm"
                >
                  <Send size={15} /> Publicar en el muro
                </button>
                {commentSent && (
                  <p className="text-center text-sm text-jungle-mid font-semibold animate-in fade-in flex items-center justify-center gap-1">
                    <CheckCircle size={15} /> ¡Tu mensaje fue publicado!
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Muro */}
          <div className="md:col-span-2">
            <div className="bg-stone-900 rounded-2xl border border-stone-800 shadow-xl overflow-hidden">
              <div className="bg-stone-800 px-5 py-4 border-b border-stone-700 flex items-center justify-between">
                <h3 className="font-bold text-stone-200 flex items-center gap-2">
                  <MessageSquare size={15} className="text-amber-500" /> Muro de Visitantes
                </h3>
                <span className="text-xs text-stone-500 bg-stone-900 px-2 py-1 rounded-full">
                  {comments.length} {comments.length === 1 ? 'mensaje' : 'mensajes'}
                </span>
              </div>
              <div className="p-5 space-y-4 max-h-[520px] overflow-y-auto custom-scrollbar">
                {comments.length === 0 && (
                  <p className="text-center text-stone-600 py-10 text-sm">Sé el primero en dejar un mensaje.</p>
                )}
                {comments.map(c => (
                  <div key={c.id} className="flex gap-3 animate-in fade-in slide-in-from-bottom-2">
                    <div className="w-9 h-9 bg-amber-700/20 rounded-full flex items-center justify-center shrink-0 border border-amber-700/40 mt-0.5">
                      <User size={15} className="text-amber-500" />
                    </div>
                    <div className="flex-1 bg-stone-950 p-4 rounded-xl rounded-tl-none border border-stone-800">
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <span className="font-bold text-stone-100 text-sm">{c.author}</span>
                        <span className="text-xs text-stone-600 shrink-0">{c.date}</span>
                      </div>
                      <p className="text-stone-400 text-sm leading-relaxed">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Encuesta ── */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BarChart2 size={24} className="text-jungle-mid" />
            <div>
              <h2 className="text-2xl font-serif font-bold text-white">Encuesta de visitantes</h2>
              <p className="text-stone-500 text-sm">Tus respuestas alimentan los gráficos en tiempo real</p>
            </div>
          </div>

          <form onSubmit={handleSurvey} className="space-y-8">
            {/* Likert */}
            <div>
              <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4">
                Valoración — Escala del 1 (muy bajo) al 5 (muy alto)
              </p>
              <div className="space-y-4">
                {likertQs.map((q, qi) => (
                  <div key={q.id} className="bg-stone-900 rounded-2xl border border-stone-800 p-5">
                    <p className="text-stone-200 font-medium mb-4 text-sm">
                      <span className="text-stone-500 mr-2">{qi + 1}.</span>{q.text}
                    </p>
                    <div className="flex gap-2">
                      {q.options.map((opt, i) => {
                        const selected = surveyAnswers[q.id] === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setSurveyAnswers(prev => ({ ...prev, [q.id]: opt }))}
                            className="flex-1 py-2.5 rounded-xl text-sm font-bold border-2 transition-all duration-200"
                            style={selected
                              ? { backgroundColor: LIKERT_COLORS[i], borderColor: LIKERT_COLORS[i], color: '#fff' }
                              : { backgroundColor: 'transparent', borderColor: '#44403c', color: '#a8a29e' }
                            }
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Choice */}
            <div>
              <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4">
                Preguntas generales — Elegí una opción
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {choiceQs.map((q, qi) => (
                  <div key={q.id} className="bg-stone-900 rounded-2xl border border-stone-800 p-5">
                    <p className="text-stone-200 font-medium mb-3 text-sm">
                      <span className="text-stone-500 mr-2">{likertQs.length + qi + 1}.</span>{q.text}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((opt, i) => {
                        const selected = surveyAnswers[q.id] === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setSurveyAnswers(prev => ({ ...prev, [q.id]: opt }))}
                            className="w-full text-left px-4 py-2.5 rounded-xl text-sm border-2 transition-all duration-200 flex items-center gap-3"
                            style={selected
                              ? { backgroundColor: CHOICE_COLORS[i % CHOICE_COLORS.length] + '22', borderColor: CHOICE_COLORS[i % CHOICE_COLORS.length], color: '#e7e5e4' }
                              : { backgroundColor: 'transparent', borderColor: '#44403c', color: '#a8a29e' }
                            }
                          >
                            <span
                              className="w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center"
                              style={{ borderColor: selected ? CHOICE_COLORS[i % CHOICE_COLORS.length] : '#57534e' }}
                            >
                              {selected && (
                                <span className="w-2 h-2 rounded-full block" style={{ backgroundColor: CHOICE_COLORS[i % CHOICE_COLORS.length] }} />
                              )}
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col items-center gap-3">
              <button
                type="submit"
                disabled={!surveyComplete}
                className="bg-jungle-mid hover:bg-jungle-light hover:text-jungle-dark disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3 px-12 rounded-full flex items-center gap-2 transition-all text-base shadow-lg"
              >
                <Send size={16} /> Enviar mis respuestas
              </button>
              {!surveyComplete && (
                <p className="text-xs text-stone-600">
                  Respondé las {SURVEY_QUESTIONS.length} preguntas para poder enviar
                </p>
              )}
              {surveySent && (
                <p className="text-jungle-mid font-semibold text-sm flex items-center gap-2 animate-in fade-in">
                  <CheckCircle size={16} /> ¡Gracias por participar! Tus respuestas ya aparecen en los gráficos.
                </p>
              )}
            </div>
          </form>
        </section>

        {/* ── Resultados ── */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-white">Resultados en tiempo real</h2>
              <p className="text-stone-500 text-sm">{nTotal} {nTotal === 1 ? 'encuesta completada' : 'encuestas completadas'}</p>
            </div>
          </div>

          {/* Gráficos de barras — Likert */}
          <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4">Valoración (escala 1-5)</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {likertQs.map(q => (
              <LikertChart key={q.id} q={q} data={surveyResults[q.id] ?? {}} />
            ))}
          </div>

          {/* Gráficos de torta — Choice */}
          <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4">Preguntas generales</p>
          <div className="grid md:grid-cols-2 gap-4">
            {choiceQs.map(q => (
              <PieChart key={q.id} q={q} data={surveyResults[q.id] ?? {}} />
            ))}
          </div>
        </section>

        {/* ── Créditos ── */}
        <div className="mt-20 pt-8 border-t border-stone-800 text-center text-stone-500 text-sm space-y-1.5">
          <p className="text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Este producto es parte del Trabajo Final Integrador de la Especialización de la Comunicación,
            Gestión y Producción Cultural de la Ciencia y la Tecnología dictado en la
            <span className="text-stone-200"> Universidad Nacional de Quilmes</span>.
          </p>
          <p>Autora: <span className="text-stone-200">Melisa Jeanet Vega</span></p>
          <p>Director: <span className="text-stone-200">Mgter. Aníbal Rossi</span> (Universidad Nacional de Rosario)</p>
          <p>Co-director: <span className="text-stone-200">Dr. Luis Ritter</span> (Facultad de Ciencias Forestales — UNaM)</p>
          <p>WebDeveloper: <span className="text-stone-200">Dr. Jonathan von Below</span></p>
          <p className="mt-4 opacity-40">© 2026 Explora Nativa. Todos los derechos reservados.</p>
        </div>

      </div>
    </div>
  );
};

export default Community;
