import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Trophy, RotateCcw } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import usePageTitle from '../hooks/usePageTitle';
import { SERVICES, CATEGORIES } from '../data/services';

const OPTIONS = [
  { v: 1, t: 'Casi no lo tenemos', d: 'Es manual, informal o inexistente.' },
  { v: 2, t: 'Lo tenemos en parte', d: 'Existe, pero falta orden, integración o documentación.' },
  { v: 3, t: 'Está bien resuelto', d: 'Funciona, está documentado y se revisa periódicamente.' },
];

function levelFor(avg) {
  if (avg < 1.7) return { name: 'Nivel inicial', color: 'text-azul-700', bg: 'bg-azul-50', desc: 'Tu empresa depende de procesos manuales y tiene riesgos que conviene atender pronto.' };
  if (avg < 2.5) return { name: 'Nivel en desarrollo', color: 'text-brand-700', bg: 'bg-brand-50', desc: 'Tienes una base. Falta integrar y automatizar para escalar con eficiencia.' };
  return { name: 'Nivel avanzado', color: 'text-verde-700', bg: 'bg-verde-50', desc: 'Lideras con tecnología. El foco ahora es la mejora continua y la seguridad.' };
}

export default function Assessment() {
  usePageTitle('Diagnóstico TI');
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({});
  const done = step >= SERVICES.length;
  const current = SERVICES[step];

  const choose = (v) => {
    setScores((p) => ({ ...p, [current.id]: v }));
    setStep((s) => s + 1);
  };
  const reset = () => { setScores({}); setStep(0); };

  const avg = done ? SERVICES.reduce((a, s) => a + scores[s.id], 0) / SERVICES.length : 0;
  const level = done ? levelFor(avg) : null;
  const priorities = done ? [...SERVICES].sort((a, b) => scores[a.id] - scores[b.id]).filter((s) => scores[s.id] < 3).slice(0, 3) : [];
  const message = done
    ? `Hice el Diagnóstico TI y obtuve "${level.name}" (${avg.toFixed(1)}/3). Áreas prioritarias: ${priorities.map((p) => p.title).join(', ') || 'ninguna crítica'}. Me gustaría una revisión detallada.`
    : '';

  return (
    <main id="contenido" className="bg-slate-50">
      <PageHeader eyebrow="Herramienta gratuita" title="Diagnóstico TI" subtitle="12 preguntas rápidas para saber en qué punto está tu tecnología y qué conviene priorizar." />

      <div className="max-w-3xl mx-auto px-4 py-12">
        {!done ? (
          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 md:p-10">
            <div className="flex justify-between text-sm font-semibold text-slate-500 mb-2">
              <span>Pregunta {step + 1} de {SERVICES.length}</span>
              <span>{Math.round((step / SERVICES.length) * 100)}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={SERVICES.length} aria-valuenow={step}>
              <div className="h-full bg-gradient-to-r from-brand-500 to-azul-500 transition-all duration-500" style={{ width: `${(step / SERVICES.length) * 100}%` }} />
            </div>

            <div key={current.id} className="mt-8 animate-fade-up">
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold ${CATEGORIES[current.category].chip}`}>
                <current.icon className="w-4 h-4" aria-hidden="true" /> {current.category}
              </span>
              <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-brand-950">{current.title}</h2>
              <p className="mt-2 text-slate-600">¿Cómo está hoy este aspecto en tu empresa?</p>

              <div className="mt-6 space-y-3">
                {OPTIONS.map((o) => (
                  <button key={o.v} onClick={() => choose(o.v)} className={`w-full text-left p-5 rounded-2xl border-2 transition-all hover:border-brand-500 hover:bg-brand-50 ${scores[current.id] === o.v ? 'border-brand-600 bg-brand-50' : 'border-slate-200 bg-white'}`}>
                    <span className="block font-bold text-slate-900">{o.t}</span>
                    <span className="block text-sm text-slate-600 mt-0.5">{o.d}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 disabled:opacity-30 hover:text-brand-700"><ArrowLeft className="w-4 h-4" /> Anterior</button>
              <button onClick={() => setStep((s) => s + 1)} disabled={!scores[current.id]} className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 disabled:opacity-30 hover:text-brand-700">Siguiente <ArrowRight className="w-4 h-4" /></button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-fade-up">
            <div className={`rounded-3xl p-8 md:p-10 text-center border border-white shadow-lg ${level.bg}`}>
              <Trophy className={`w-14 h-14 mx-auto ${level.color}`} aria-hidden="true" />
              <h2 className={`mt-4 text-4xl md:text-5xl font-extrabold ${level.color}`}>{level.name}</h2>
              <p className="mt-1 text-sm font-bold text-slate-500">Puntaje: {avg.toFixed(1)} de 3</p>
              <p className="mt-4 text-slate-700 text-lg max-w-xl mx-auto">{level.desc}</p>
            </div>

            {priorities.length > 0 && (
              <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8">
                <h3 className="text-xl font-extrabold text-brand-950">Tus prioridades</h3>
                <ul className="mt-4 space-y-3">
                  {priorities.map((p) => (
                    <li key={p.id}>
                      <Link to={`/servicios/${p.id}`} className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200 hover:border-brand-400 hover:bg-brand-50 transition-colors">
                        <p.icon className="w-6 h-6 text-brand-600 flex-shrink-0" aria-hidden="true" />
                        <span className="font-semibold text-slate-800 flex-1">{p.title}</span>
                        <ArrowRight className="w-4 h-4 text-slate-400" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8">
              <h3 className="text-xl font-extrabold text-brand-950">Resultado por área</h3>
              <ul className="mt-4 space-y-3">
                {SERVICES.map((s) => (
                  <li key={s.id} className="flex items-center gap-3 text-sm">
                    <span className="w-44 md:w-64 font-semibold text-slate-700 truncate" title={s.title}>{s.title}</span>
                    <span className="flex-1 h-2.5 rounded-full bg-slate-100 overflow-hidden"><span className={`block h-full ${CATEGORIES[s.category].bar}`} style={{ width: `${(scores[s.id] / 3) * 100}%` }} /></span>
                    <span className="w-8 text-right font-bold text-slate-500">{scores[s.id]}/3</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to={`/contacto?motivo=ventas&mensaje=${encodeURIComponent(message)}`} className="text-center bg-brand-700 hover:bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold transition-colors">Solicitar revisión detallada</Link>
              <button onClick={reset} className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:border-brand-500"><RotateCcw className="w-4 h-4" /> Repetir diagnóstico</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
