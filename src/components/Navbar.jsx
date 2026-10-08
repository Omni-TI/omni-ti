import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { SERVICES, CATEGORY_NAMES } from '../data/services';

const linkBase = 'px-4 py-2 text-sm font-semibold rounded-lg transition-colors';
const linkClass = ({ isActive }) =>
  `${linkBase} ${isActive ? 'text-brand-700 bg-brand-50' : 'text-slate-600 hover:text-brand-700 hover:bg-brand-50'}`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef(null);
  const { pathname } = useLocation();

  // Cierra los menús al cambiar de página (ajuste de estado durante el render)
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) { setLastPath(pathname); setMobileOpen(false); setServicesOpen(false); }

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') { setServicesOpen(false); setMobileOpen(false); } };
    const onClick = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setServicesOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onClick); };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200" aria-label="Principal">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:z-50">
        Saltar al contenido
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" aria-label="Omni TI, ir al inicio"><Logo /></Link>

          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" end className={linkClass}>Inicio</NavLink>
            <NavLink to="/nosotros" className={linkClass}>Nosotros</NavLink>

            <div
              ref={menuRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((o) => !o)}
                className={`${linkBase} flex items-center ${pathname.startsWith('/servicios') ? 'text-brand-700 bg-brand-50' : 'text-slate-600 hover:text-brand-700 hover:bg-brand-50'}`}
              >
                Servicios <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[860px] max-w-[95vw]">
                  <div className="bg-white shadow-2xl rounded-2xl border border-slate-200 p-8 grid grid-cols-3 gap-8 animate-fade-up">
                    {CATEGORY_NAMES.map((cat) => (
                      <div key={cat}>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{cat}</h4>
                        <ul className="space-y-1">
                          {SERVICES.filter((s) => s.category === cat).map((s) => (
                            <li key={s.id}>
                              <Link to={`/servicios/${s.id}`} className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-brand-700 hover:bg-brand-50">
                                <s.icon className="w-4 h-4 flex-shrink-0" /> {s.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="col-span-3 pt-4 border-t border-slate-100 text-sm">
                      <Link to="/servicios" className="font-bold text-brand-700 hover:underline">Ver el catálogo completo →</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <span className="h-6 w-px bg-slate-200 mx-2" aria-hidden="true" />
            <NavLink to="/roi" className={({ isActive }) => `text-xs font-bold px-4 py-2 rounded-full border transition-colors ${isActive ? 'bg-verde-600 text-white border-verde-600' : 'text-slate-600 border-slate-200 hover:border-verde-500 hover:text-verde-700'}`}>Calculadora ROI</NavLink>
            <NavLink to="/diagnostico" className={({ isActive }) => `text-xs font-bold px-4 py-2 rounded-full border transition-colors ${isActive ? 'bg-azul-600 text-white border-azul-600' : 'text-slate-600 border-slate-200 hover:border-azul-500 hover:text-azul-700'}`}>Diagnóstico</NavLink>
            <Link to="/contacto" className="ml-3 bg-brand-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-600 transition-colors shadow-md shadow-brand-200">Hablemos</Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-slate-700 rounded-lg hover:bg-brand-50"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            aria-controls="menu-movil"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="menu-movil" className="md:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 shadow-xl absolute w-full max-h-[80vh] overflow-y-auto">
          {[['/', 'Inicio'], ['/nosotros', 'Nosotros'], ['/servicios', 'Servicios'], ['/roi', 'Calculadora ROI'], ['/diagnostico', 'Diagnóstico']].map(([to, label]) => (
            <Link key={to} to={to} className="block px-4 py-3 text-base font-semibold text-slate-800 hover:bg-brand-50 rounded-xl">{label}</Link>
          ))}
          <Link to="/contacto" className="block text-center mt-4 bg-brand-700 text-white px-6 py-4 rounded-xl font-bold">Contactar ahora</Link>
        </div>
      )}
    </nav>
  );
}
