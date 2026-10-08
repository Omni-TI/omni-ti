export default function PageHeader({ eyebrow, title, subtitle, children }) {
  return (
    <header className="relative overflow-hidden bg-brand-950 text-white">
      <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-brand-500/30 blur-[120px]" aria-hidden="true" />
      <div className="absolute -bottom-24 left-0 w-80 h-80 rounded-full bg-azul-500/20 blur-[120px]" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center animate-fade-up">
        {eyebrow && (
          <p className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-verde-200 text-xs font-bold uppercase tracking-widest">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">{title}</h1>
        {subtitle && <p className="mt-5 text-lg md:text-xl text-brand-100/80 max-w-2xl mx-auto">{subtitle}</p>}
        {children}
      </div>
    </header>
  );
}
