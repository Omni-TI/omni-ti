import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Sparkles, BarChart, Clock, AlertCircle, DollarSign, CheckCircle2,
  Target, Bot,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import Faq from '../components/Faq';
import usePageTitle from '../hooks/usePageTitle';
import { SERVICES, CATEGORIES, CATEGORY_NAMES } from '../data/services';

const WORDS = ['más inteligente.', 'más segura.', 'más automática.', 'siempre disponible.'];

const HOME_FAQ = [
  { q: '¿Qué tipo de empresas atienden?', a: 'Principalmente pymes y empresas medianas en Santiago que necesitan un equipo de TI sin armar un departamento propio.' },
  { q: '¿Trabajan con contratos o por proyecto?', a: 'Ambas modalidades: contratos recurrentes de soporte y proyectos puntuales (cableado, ciberseguridad, desarrollo, etc.).' },
  { q: '¿Cómo empiezo?', a: 'Con el Diagnóstico TI del sitio o escribiéndonos desde la página de contacto. Revisamos tu caso y te proponemos los primeros pasos sin compromiso.' },
  { q: '¿Con quién hablo según mi consulta?', a: 'Cotizaciones: ventas@omniti.cl · Consultas generales: contacto@omniti.cl · Clientes con incidencias: soporte@omniti.cl.' },
];

export default function Home() {
  usePageTitle('');
  const [wordIdx, setWordIdx] = useState(0);
  const [tab, setTab] = useState(CATEGORY_NAMES[0]);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setWordIdx((i) => (i + 1) % WORDS.length), 2600);
    return () => clearInterval(id);
  }, []);

  const cat = CATEGORIES[tab];

  return (
    <main id="contenido">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white text-center pt-16 pb-20 md:pt-28 md:pb-32">
        <div className="absolute inset-0 -z-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-10 left-1/4 w-[480px] h-[480px] bg-brand-100 rounded-full blur-[120px] opacity-70" />
          <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-azul-100 rounded-full blur-[120px] opacity-60" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 animate-fade-up">
          <p className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-brand-50 text-brand-700 rounded-full text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> Partner tecnológico integral
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-brand-950">
            Tu departamento TI,<br />
            <span className="text-brand-600 inline-block min-h-[1.1em]" aria-live="polite">{WORDS[wordIdx]}</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Desde infraestructura física hasta automatización con IA, Omni TI unifica tu operación para que tú solo te enfoques en crecer.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/servicios" className="inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-brand-200 transition-all hover:-translate-y-0.5">
              Explorar soluciones <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/roi" className="inline-flex items-center justify-center gap-2 bg-white text-brand-900 border-2 border-slate-200 hover:border-verde-500 px-8 py-4 rounded-2xl font-bold transition-all">
              <BarChart className="w-5 h-5 text-verde-600" /> Calcular ahorro
            </Link>
          </div>

          {/* Selector rápido */}
          <div className="mt-14">
            <p className="text-sm font-semibold text-slate-500 mb-4">¿Qué necesitas resolver hoy?</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[['Proteger mis datos', 'ciberseguridad'], ['Soporte técnico', 'soporte'], ['Automatizar tareas', 'ia'], ['Ordenar mi red', 'cableado'], ['Un sitio o app', 'desarrollo']].map(([label, id]) => (
                <Link key={id} to={`/servicios/${id}`} className="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:border-brand-500 hover:text-brand-700 hover:bg-brand-50 transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ESTADÍSTICAS */}
      <section className="border-y border-slate-200 bg-white py-14" aria-label="Cifras">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { l: 'Uptime objetivo', v: <CountUp to={99.9} decimals={1} suffix="%" /> },
            { l: 'Soporte remoto', v: '24/7' },
            { l: 'Estándar de seguridad', v: 'ISO 27001' },
            { l: 'Experiencia técnica', v: <CountUp to={10} prefix="+" suffix=" años" /> },
          ].map((s) => (
            <Reveal key={s.l}>
              <div className="text-3xl md:text-4xl font-extrabold text-brand-700">{s.v}</div>
              <div className="mt-2 text-xs font-bold text-slate-500 uppercase tracking-widest">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DOLORES */}
      <section className="py-20 md:py-24 bg-brand-50/60">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-950 tracking-tight">¿Te suena familiar?</h2>
            <p className="mt-3 text-lg text-slate-600">La tecnología debería trabajar para ti, no al revés.</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: 'Lentitud operativa', d: 'Procesos manuales y sistemas que fallan cuando más los necesitas.', i: Clock, c: 'text-azul-600 bg-azul-50', to: '/servicios/ia' },
              { t: 'Incertidumbre digital', d: '¿Están mis datos seguros? ¿Qué pasa si pierdo mi información?', i: AlertCircle, c: 'text-brand-600 bg-brand-50', to: '/servicios/ciberseguridad' },
              { t: 'Costos ocultos', d: 'Pagar múltiples proveedores y licencias sin ver resultados claros.', i: DollarSign, c: 'text-verde-600 bg-verde-50', to: '/roi' },
            ].map((item, idx) => (
              <Reveal key={item.t} delay={idx * 100}>
                <Link to={item.to} className="group block h-full bg-white p-8 rounded-3xl border border-slate-200 text-left hover:shadow-xl hover:-translate-y-1 transition-all">
                  <span className={`inline-flex p-3 rounded-2xl ${item.c}`}><item.i className="w-8 h-8" /></span>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">{item.t}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{item.d}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-700 group-hover:gap-2 transition-all">Ver cómo lo resolvemos <ArrowRight className="w-4 h-4" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUCIONES 360 (tabs) */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-950 tracking-tight">Soluciones 360° para la era moderna</h2>
            <p className="mt-3 text-lg text-slate-600">No somos solo soporte; somos la base sobre la que escalas tu negocio.</p>
          </Reveal>

          <div role="tablist" aria-label="Categorías de servicios" className="mt-10 flex flex-wrap justify-center gap-2">
            {CATEGORY_NAMES.map((name) => {
              const C = CATEGORIES[name];
              const active = tab === name;
              return (
                <button
                  key={name}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTab(name)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-bold transition-all ${active ? 'bg-brand-700 text-white border-brand-700 shadow-lg' : 'bg-white text-slate-700 border-slate-200 hover:border-brand-300'}`}
                >
                  <C.icon className="w-4 h-4" /> {name}
                </button>
              );
            })}
          </div>

          <div role="tabpanel" className="mt-8 bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-10 animate-fade-up" key={tab}>
            <p className="text-slate-600 font-medium mb-6">{cat.tagline}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {SERVICES.filter((s) => s.category === tab).map((s) => (
                <li key={s.id}>
                  <Link to={`/servicios/${s.id}`} className={`flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 ${cat.ring} hover:shadow-md transition-all group`}>
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${cat.check}`} />
                    <span className="font-semibold text-slate-800 flex-1">{s.title}</span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <Link to="/servicios" className="inline-flex items-center gap-2 font-bold text-brand-700 hover:gap-3 transition-all">Ver catálogo completo <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* HERRAMIENTAS */}
      <section className="relative overflow-hidden py-20 md:py-24 bg-brand-950 text-white">
        <div className="absolute -top-20 right-0 w-96 h-96 bg-brand-500/30 rounded-full blur-[130px]" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-azul-500/20 rounded-full blur-[130px]" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">¿Listo para dejar de perder tiempo?</h2>
            <p className="mt-4 text-lg text-brand-100/80 max-w-2xl mx-auto">
              Usa nuestras herramientas gratuitas para conocer tu nivel tecnológico o cuánto podrías ahorrar.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <Link to="/roi" className="group block h-full text-left bg-white/5 border border-white/10 hover:bg-white/10 p-8 md:p-10 rounded-3xl transition-all">
                <DollarSign className="w-12 h-12 text-verde-500" />
                <h3 className="mt-6 text-2xl font-bold">Calculadora ROI</h3>
                <p className="mt-2 text-brand-100/70 leading-relaxed">Estima el costo de la ineficiencia en tu equipo y cuánto podrías recuperar.</p>
                <span className="mt-6 inline-flex items-center gap-2 font-bold text-verde-500 group-hover:gap-3 transition-all">Iniciar cálculo <ArrowRight className="w-5 h-5" /></span>
              </Link>
            </Reveal>
            <Reveal delay={100}>
              <Link to="/diagnostico" className="group block h-full text-left bg-white/5 border border-white/10 hover:bg-white/10 p-8 md:p-10 rounded-3xl transition-all">
                <Target className="w-12 h-12 text-azul-200" />
                <h3 className="mt-6 text-2xl font-bold">Diagnóstico TI</h3>
                <p className="mt-2 text-brand-100/70 leading-relaxed">Responde 12 preguntas rápidas y recibe prioridades de mejora para tu empresa.</p>
                <span className="mt-6 inline-flex items-center gap-2 font-bold text-azul-200 group-hover:gap-3 transition-all">Comenzar diagnóstico <ArrowRight className="w-5 h-5" /></span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-950 tracking-tight text-center mb-10">Preguntas frecuentes</h2>
            <Faq items={HOME_FAQ} />
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-20 md:pb-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <Reveal className="relative overflow-hidden bg-brand-700 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl shadow-brand-200">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Hagamos que la tecnología sea tu aliada</h2>
              <p className="mt-4 text-brand-100 text-lg max-w-xl mx-auto">Solicita una conversación inicial sin compromiso y descubre el potencial real de tu infraestructura.</p>
              <Link to="/contacto" className="mt-8 inline-flex items-center gap-2 bg-white text-brand-800 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-verde-50 transition-colors active:scale-95">
                Hablemos de tu proyecto <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <Bot className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10 -rotate-12" aria-hidden="true" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
