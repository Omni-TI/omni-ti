import { Link } from 'react-router-dom';
import { Users, ShieldCheck, Shield, Search, Layout, Rocket, Headphones, MapPin } from 'lucide-react';
import Reveal from '../components/Reveal';
import PageHeader from '../components/PageHeader';
import usePageTitle from '../hooks/usePageTitle';

const STEPS = [
  { n: '01', t: 'Auditoría', d: 'Analizamos tu situación actual y tus riesgos de seguridad.', i: Search, c: 'text-azul-600 bg-azul-50' },
  { n: '02', t: 'Diseño', d: 'Creamos un plano tecnológico a la medida de tu escala.', i: Layout, c: 'text-brand-600 bg-brand-50' },
  { n: '03', t: 'Ejecución', d: 'Implementamos sin interrumpir tu flujo de negocio.', i: Rocket, c: 'text-verde-600 bg-verde-50' },
  { n: '04', t: 'Soporte', d: 'Acompañamos y monitoreamos para que nada se te quede atrás.', i: Headphones, c: 'text-azul-600 bg-azul-50' },
];

export default function About() {
  usePageTitle('Nosotros');
  return (
    <main id="contenido">
      <PageHeader
        eyebrow="Nosotros"
        title={<>Arquitectos de tu <span className="text-verde-500">evolución digital</span></>}
        subtitle="Vimos que muchas pymes en Chile estaban atrapadas en procesos obsoletos e infraestructuras vulnerables. Fundamos Omni TI para traer la eficiencia de la IA y el estándar corporativo al mercado local."
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal className="bg-brand-50 p-10 rounded-3xl border border-brand-100 space-y-5">
            <span className="inline-flex p-3 rounded-2xl bg-white text-brand-600 shadow-sm"><Users className="w-7 h-7" /></span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-950">De técnicos a socios</h2>
            <p className="text-slate-600 leading-relaxed">
              Aunque somos una empresa joven, nuestro equipo suma <strong className="text-brand-800">más de 10 años de experiencia</strong> liderando departamentos de TI y administrando infraestructuras críticas. No somos solo un proveedor: somos tu brazo técnico de confianza en Santiago.
            </p>
          </Reveal>
          <Reveal delay={100} className="relative overflow-hidden bg-brand-700 p-10 rounded-3xl text-white space-y-5">
            <span className="inline-flex p-3 rounded-2xl bg-white/10"><ShieldCheck className="w-7 h-7" /></span>
            <h2 className="text-2xl md:text-3xl font-extrabold">Seguridad como estándar</h2>
            <p className="text-brand-100 leading-relaxed">
              No instalamos cables: construimos activos digitales protegidos. Trabajamos con buenas prácticas alineadas a la norma <strong>ISO 27001</strong> para que tu infraestructura cumpla altos estándares de seguridad de la información.
            </p>
            <Shield className="absolute -bottom-8 -right-8 w-44 h-44 text-white/10 -rotate-12" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-4 bg-brand-50/60">
        <Reveal className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-950 tracking-tight">El Camino Omni</h2>
          <p className="mt-3 text-slate-600 text-lg">Una metodología de 4 pasos diseñada para evitar el caos tecnológico.</p>
        </Reveal>
        <ol className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 100} className="relative bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
              <span className="absolute top-4 right-6 text-5xl font-extrabold text-slate-100" aria-hidden="true">{s.n}</span>
              <span className={`relative inline-flex p-3 rounded-2xl ${s.c}`}><s.i className="w-7 h-7" /></span>
              <h3 className="relative mt-5 text-xl font-bold text-slate-900">{s.t}</h3>
              <p className="relative mt-2 text-sm text-slate-600 leading-relaxed">{s.d}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="py-20 px-4 bg-white">
        <Reveal className="relative overflow-hidden max-w-4xl mx-auto bg-brand-950 rounded-[2.5rem] p-10 md:p-16 text-center text-white">
          <p className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-verde-200 font-bold text-xs uppercase tracking-widest">
            <MapPin className="w-4 h-4" /> Basados en Santiago de Chile
          </p>
          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight">¿Necesitas un socio local que hable tu idioma?</h2>
          <p className="mt-4 text-brand-100/80 text-lg max-w-xl mx-auto">Entendemos el mercado chileno y la urgencia de soporte en terreno. Estamos a un café o una llamada de distancia.</p>
          <Link to="/contacto?motivo=contacto" className="mt-8 inline-block bg-verde-500 hover:bg-verde-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-colors">Coordinemos una visita</Link>
        </Reveal>
      </section>
    </main>
  );
}
