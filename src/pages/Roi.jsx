import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, DollarSign, Zap, Info } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import usePageTitle from '../hooks/usePageTitle';

const clp = (n) => `$${Math.round(n).toLocaleString('es-CL')}`;
const WORK_DAYS = 20; // días hábiles por mes
const RECOVERABLE = 0.75; // supuesto: parte de la pérdida que se puede recuperar

function Slider({ icon, label, value, display, min, max, step = 1, onChange }) {
  const id = label.replace(/\s/g, '-');
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center gap-4">
        <label htmlFor={id} className="font-bold text-slate-700 text-sm flex items-center gap-2">{icon} {label}</label>
        <output htmlFor={id} className="text-brand-700 font-extrabold text-2xl">{display}</output>
      </div>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(parseFloat(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600" />
    </div>
  );
}

export default function Roi() {
  usePageTitle('Calculadora ROI');
  const [hoursLost, setHoursLost] = useState(2);
  const [employees, setEmployees] = useState(10);
  const [hourlyCost, setHourlyCost] = useState(8000);

  const annualLoss = hoursLost * employees * hourlyCost * WORK_DAYS * 12;
  const saving = annualLoss * RECOVERABLE;

  const message = `Usé la calculadora ROI: ${employees} personas pierden ${hoursLost} h/día (costo hora ${clp(hourlyCost)}). Pérdida anual estimada ${clp(annualLoss)}. Me gustaría conversar cómo recuperarla.`;

  return (
    <main id="contenido" className="bg-slate-50">
      <PageHeader eyebrow="Herramienta gratuita" title="Calculadora ROI" subtitle="¿Cuánto dinero pierdes al año por ineficiencia técnica? Mueve los controles y míralo al instante." />

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-200 space-y-10">
          <Slider icon={<Clock className="w-5 h-5 text-brand-600" aria-hidden="true" />} label="Horas perdidas por persona al día" value={hoursLost} display={`${hoursLost} h`} min={0.5} max={8} step={0.5} onChange={setHoursLost} />
          <Slider icon={<Users className="w-5 h-5 text-brand-600" aria-hidden="true" />} label="Personas afectadas" value={employees} display={employees} min={1} max={100} onChange={setEmployees} />
          <Slider icon={<DollarSign className="w-5 h-5 text-brand-600" aria-hidden="true" />} label="Costo promedio por hora (CLP)" value={hourlyCost} display={clp(hourlyCost)} min={3000} max={50000} step={500} onChange={setHourlyCost} />
          <p className="flex gap-2 text-xs text-slate-500 leading-relaxed"><Info className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
            Estimación referencial: {WORK_DAYS} días hábiles al mes, 12 meses, y un {RECOVERABLE * 100}% de la pérdida considerado recuperable. Los resultados reales dependen de cada empresa.</p>
        </div>

        <div className="space-y-6" aria-live="polite">
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 text-center shadow-lg">
            <h2 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-4">Pérdida anual estimada</h2>
            <div className="text-4xl sm:text-6xl font-extrabold text-brand-700 break-words">{clp(annualLoss)}</div>
            <p className="mt-2 text-slate-500 text-sm">en tiempo perdido por procesos manuales y fallas técnicas.</p>
          </div>
          <div className="bg-gradient-to-br from-verde-500 to-verde-700 p-8 md:p-10 rounded-3xl text-center text-white shadow-xl">
            <Zap className="w-12 h-12 text-verde-100 mx-auto mb-3" aria-hidden="true" />
            <h2 className="text-verde-100 font-bold uppercase tracking-widest text-xs mb-4">Ahorro potencial con Omni TI</h2>
            <div className="text-4xl sm:text-6xl font-extrabold tracking-tight break-words">{clp(saving)}</div>
            <Link to={`/contacto?motivo=ventas&mensaje=${encodeURIComponent(message)}`} className="mt-8 block w-full bg-white text-verde-700 py-4 rounded-2xl font-bold text-lg hover:bg-verde-50 transition-colors">
              Quiero recuperar este ahorro
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
