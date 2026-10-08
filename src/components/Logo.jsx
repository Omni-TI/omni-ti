export function LogoMark({ className = 'w-10 h-10' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#55269F" />
      <circle cx="32" cy="32" r="13" fill="none" stroke="#fff" strokeWidth="6" />
      <circle cx="47" cy="17" r="5.5" fill="#12B886" />
      <circle cx="17" cy="47" r="5.5" fill="#2F6FED" />
    </svg>
  );
}

export default function Logo({ light = false }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      <span className={`font-extrabold text-2xl tracking-tight ${light ? 'text-white' : 'text-brand-900'}`}>
        Omni<span className={light ? 'text-verde-500' : 'text-brand-500'}>TI</span>
      </span>
    </span>
  );
}
