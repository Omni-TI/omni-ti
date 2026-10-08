import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl bg-white overflow-hidden">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-semibold text-slate-900 hover:bg-brand-50 transition-colors"
              >
                {it.q}
                <ChevronDown className={`w-5 h-5 flex-shrink-0 text-brand-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
            </h3>
            <div id={`faq-${i}`} role="region" hidden={!isOpen} className="px-5 pb-5 text-slate-600 leading-relaxed">
              {it.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
