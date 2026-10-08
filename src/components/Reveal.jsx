import { createElement, useEffect, useRef, useState } from 'react';

// Hace aparecer el contenido suavemente al entrar en pantalla.
export default function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // eslint-disable-next-line react-hooks/refs -- falso positivo: createElement asigna el ref al elemento
  return createElement(as, {
    ref,
    style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    className: `reveal ${visible ? 'reveal-visible' : ''} ${className}`,
  }, children);
}
