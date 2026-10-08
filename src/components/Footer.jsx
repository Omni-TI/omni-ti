import { Link } from 'react-router-dom';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import Logo from './Logo';
import { SITE } from '../data/site';

const linkCls = 'hover:text-verde-500 transition-colors';

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100/70 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Logo light />
            <p className="mt-5 max-w-sm leading-relaxed">
              Haciendo la tecnología empresarial accesible, segura y automática. Tu partner estratégico en Chile.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm"><MapPin className="w-4 h-4 text-verde-500" /> {SITE.city}</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Empresa</h2>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/nosotros" className={linkCls}>Nosotros</Link></li>
              <li><Link to="/servicios" className={linkCls}>Servicios</Link></li>
              <li><Link to="/roi" className={linkCls}>Calculadora ROI</Link></li>
              <li><Link to="/diagnostico" className={linkCls}>Diagnóstico TI</Link></li>
              <li><Link to="/contacto" className={linkCls}>Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Conecta</h2>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-azul-500" /><span>Ventas: <a href={`mailto:${SITE.emails.ventas}`} className={linkCls}>{SITE.emails.ventas}</a></span></li>
              <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-azul-500" /><span>Contacto: <a href={`mailto:${SITE.emails.contacto}`} className={linkCls}>{SITE.emails.contacto}</a></span></li>
              <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-azul-500" /><span>Soporte: <a href={`mailto:${SITE.emails.soporte}`} className={linkCls}>{SITE.emails.soporte}</a></span></li>
              <li className="flex gap-2"><Linkedin className="w-4 h-4 mt-0.5 text-azul-500" /><a href={SITE.linkedin} target="_blank" rel="noreferrer" className={linkCls}>LinkedIn Omni TI</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-white/10 text-xs text-center text-brand-100/50">
          &copy; {new Date().getFullYear()} Omni TI · Santiago, Chile
        </div>
      </div>
    </footer>
  );
}
