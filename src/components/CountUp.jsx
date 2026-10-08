import { useEffect, useRef, useState } from 'react';

// Contador animado que arranca cuando el número entra en pantalla.
export default function CountUp({ to, decimals = 0, prefix = '', suffix = '', duration = 1400 }) {
  const ref = useRef(null);
  const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const noObserver = typeof IntersectionObserver === 'undefined';
  const [value, setValue] = useState(reduce || noObserver ? to : 0);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce || noObserver) return;
    let raf;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setValue(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to, duration, reduce, noObserver]);

  return <span ref={ref}>{prefix}{value.toFixed(decimals)}{suffix}</span>;
}
