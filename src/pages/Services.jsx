import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, X } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import usePageTitle from '../hooks/usePageTitle';
import { SERVICES, CATEGORIES, CATEGORY_NAMES } from '../data/services';

const norm = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export default function Services() {
  usePageTitle('Servicios');
  const [category, setCategory] = useState('Todos');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = norm(query.trim());
    return SERVICES.filter((s) => {
      if (category !== 'Todos' && s.category !== category) return false;
      if (!q) return true;
      return norm([s.title, s.description, ...s.items].join(' ')).includes(q);
    });
  }, [category, query]);

  return (
    <main id="contenido">
      <PageHeader eyebrow="Servicios" title="Catálogo integral" subtitle="Los 12 pilares tecnológicos que sostienen tu operación. Elige uno para ver el detalle." />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
            {['Todos', ...CATEGORY_NAMES].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${category === c ? 'bg-brand-700 text-white border-brand-700' : 'bg-white text-slate-700 border-slate-200 hover:border-brand-300'}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar servicio…"
              aria-label="Buscar servicio"
              className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:outline-none"
            />
            {query && (
              <button onClick={() => setQuery('')} aria-label="Borrar búsqueda" className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700"><X className="w-4 h-4" /></button>
            )}
          </div>
        </div>

        <p className="mt-6 text-sm text-slate-500" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'servicio' : 'servicios'}</p>

        {filtered.length === 0 ? (
          <div className="mt-6 text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
            <p className="font-semibold text-slate-700">No encontramos servicios con esa búsqueda.</p>
            <p className="text-slate-500 mt-1">Prueba con otra palabra o <Link to="/contacto" className="text-brand-700 font-bold underline">cuéntanos qué necesitas</Link>.</p>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s, i) => {
              const C = CATEGORIES[s.category];
              return (
                <Reveal key={s.id} delay={(i % 3) * 80}>
                  <Link to={`/servicios/${s.id}`} className={`group flex flex-col h-full bg-white p-7 rounded-3xl border border-slate-200 ${C.ring} hover:shadow-xl hover:-translate-y-1 transition-all`}>
                    <span className={`inline-flex self-start p-3 rounded-2xl ${C.iconBox}`}><s.icon className="w-7 h-7" /></span>
                    <span className={`mt-5 self-start text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${C.chip}`}>{s.category}</span>
                    <h2 className="mt-3 text-xl font-bold text-slate-900 leading-snug">{s.title}</h2>
                    <p className="mt-2 text-slate-600 text-sm leading-relaxed flex-1">{s.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-700 group-hover:gap-2 transition-all">Ver detalle <ArrowRight className="w-4 h-4" /></span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
