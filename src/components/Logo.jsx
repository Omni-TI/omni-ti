import logo from '../assets/logo-omniti.png';

export function LogoMark({ className = 'h-14 w-auto' }) {
  return <img src={logo} alt="" aria-hidden="true" className={className} width="480" height="368" />;
}

export default function Logo({ light = false }) {
  return (
    <span className="inline-flex items-center gap-3">
      {light ? (
        // El logo tiene fondo blanco: sobre fondo oscuro va dentro de una insignia blanca
        <span className="bg-white rounded-xl p-1.5 shadow-md"><LogoMark className="h-14 w-auto" /></span>
      ) : (
        <LogoMark className="h-14 w-auto" />
      )}
      <span className={`font-extrabold text-2xl tracking-tight ${light ? 'text-white' : 'text-brand-900'}`}>
        Omni<span className={light ? 'text-verde-500' : 'text-brand-500'}>TI</span>
      </span>
    </span>
  );
}
