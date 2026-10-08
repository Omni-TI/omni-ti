import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react';
import Reveal from '../components/Reveal';
import Faq from '../components/Faq';
import usePageTitle from '../hooks/usePageTitle';
import NotFound from './NotFound';
import { SERVICES, CATEGORIES, getService } from '../data/services';

export default function ServiceDetail() {
  const { id } = useParams();
  const s = getService(id);
  usePageTitle(s ? s.title : 'Servicio no encontrado');
  if (!s) return <NotFound />;

  const C = CATEGORIES[s.category];
  const related = SERVICES.filter((x) => x.category === s.category && x.id !== s.id).slice(0, 3);

  return (
    <main id="contenido">
      <header className="relative overflow-hidden bg-brand-950 text-white">
        <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-brand-500/30 blur-[120px]" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20 animate-fade-up">
          <Link to="/servicios" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-100/80 hover:text-white"><ArrowLeft className="w-4 h-4" /> Todos los servicios</Link>
          <div className="mt-6 flex items-start gap-5">
            <span className={`hidden sm:inline-flex p-4 rounded-3xl ${C.iconBox}`}><s.icon className="w-10 h-10" /></span>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-verde-200">{s.category}</p>
              <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">{s.title}</h1>
              <p className="mt-4 text-lg text-brand-100/80 max-w-2xl">{s.description}</p>
            </div>
          </div>
          <Link to={`/contacto?motivo=ventas&servicio=${s.id}`} className="mt-8 inline-flex items-center gap-2 bg-verde-500 hover:bg-verde-600 text-white px-8 py-3.5 rounded-2xl font-bold transition-colors">
            Cotizar este servicio <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Reveal className="bg-azul-50 border border-azul-100 rounded-3xl p-8">
          <AlertCircle className="w-8 h-8 text-azul-600" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-bold text-slate-900">El problema</h2>
          <p className="mt-2 text-slate-700 leading-relaxed">{s.problem}</p>
        </Reveal>
        <Reveal delay={100} className="bg-verde-50 border border-verde-100 rounded-3xl p-8">
          <Lightbulb className="w-8 h-8 text-verde-600" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-bold text-slate-900">Cómo lo resolvemos</h2>
          <p className="mt-2 text-slate-700 leading-relaxed">{s.solution}</p>
        </Reveal>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-950">Qué incluye</h2>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {s.items.map((item) => (
              <li key={item} className="flex items-start gap-3 p-5 bg-white rounded-2xl border border-slate-200">
                <CheckCircle2 className={`w-6 h-6 flex-shrink-0 ${C.check}`} aria-hidden="true" />
                <span className="font-semibold text-slate-800">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {s.faqs?.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 pb-14">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-950 mb-6">Preguntas frecuentes</h2>
            <Faq items={s.faqs} />
          </Reveal>
        </section>
      )}

      {related.length > 0 && (
        <section className="bg-brand-50/60 py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-brand-950 mb-6">Otros servicios de {s.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.id} to={`/servicios/${r.id}`} className="flex items-center gap-3 p-5 bg-white rounded-2xl border border-slate-200 hover:shadow-md hover:border-brand-300 transition-all">
                  <r.icon className={`w-6 h-6 flex-shrink-0 ${C.check}`} aria-hidden="true" />
                  <span className="font-semibold text-slate-800">{r.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
