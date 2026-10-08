import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

export default function NotFound() {
  usePageTitle('Página no encontrada');
  return (
    <main id="contenido" className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24">
      <p className="text-7xl font-extrabold text-brand-600">404</p>
      <h1 className="mt-4 text-2xl md:text-3xl font-extrabold text-brand-950">No encontramos esta página</h1>
      <p className="mt-2 text-slate-600">Puede que el enlace haya cambiado o ya no exista.</p>
      <div className="mt-8 flex gap-3">
        <Link to="/" className="bg-brand-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-600">Ir al inicio</Link>
        <Link to="/servicios" className="border border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-bold hover:border-brand-500">Ver servicios</Link>
      </div>
    </main>
  );
}
