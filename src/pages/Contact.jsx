import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Linkedin, Headphones, Send, CheckCircle2, MapPin } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import usePageTitle from '../hooks/usePageTitle';
import { SITE, MOTIVOS } from '../data/site';
import { SERVICES } from '../data/services';

const field = 'w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200';

export default function Contact() {
  usePageTitle('Contacto');
  const [params] = useSearchParams();
  const initialMotivo = MOTIVOS.some((m) => m.id === params.get('motivo')) ? params.get('motivo') : 'ventas';
  const initialServicio = SERVICES.some((s) => s.id === params.get('servicio')) ? params.get('servicio') : '';

  const [form, setForm] = useState({
    nombre: '', empresa: '', email: '', telefono: '',
    motivo: initialMotivo, servicio: initialServicio, mensaje: params.get('mensaje') || '',
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const destino = MOTIVOS.find((m) => m.id === form.motivo);

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.nombre.trim()) err.nombre = 'Ingresa tu nombre.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Ingresa un correo válido.';
    if (form.mensaje.trim().length < 10) err.mensaje = 'Cuéntanos un poco más (mínimo 10 caracteres).';
    setErrors(err);
    if (Object.keys(err).length) return;

    const servicio = SERVICES.find((s) => s.id === form.servicio);
    const subject = `[${destino.label}] ${form.nombre}${form.empresa ? ` - ${form.empresa}` : ''}`;
    const body = [
      `Nombre: ${form.nombre}`,
      form.empresa && `Empresa: ${form.empresa}`,
      `Correo: ${form.email}`,
      form.telefono && `Teléfono: ${form.telefono}`,
      servicio && `Servicio de interés: ${servicio.title}`,
      '', form.mensaje,
    ].filter((l) => l !== false && l !== '').join('\n');
    const href = `mailto:${destino.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent({ email: destino.email, href });
    window.location.href = href;
  };

  return (
    <main id="contenido" className="bg-slate-50">
      <PageHeader eyebrow="Contacto" title="Hablemos" subtitle="Cuéntanos qué necesitas. Elige el motivo y tu mensaje llegará al equipo correcto." />

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
        <aside className="lg:col-span-2 space-y-4">
          {[
            { icon: Mail, color: 'text-brand-600 bg-brand-50', t: 'Ventas y cotizaciones', e: SITE.emails.ventas },
            { icon: Mail, color: 'text-azul-600 bg-azul-50', t: 'Consultas generales', e: SITE.emails.contacto },
            { icon: Headphones, color: 'text-verde-600 bg-verde-50', t: 'Soporte para clientes', e: SITE.emails.soporte },
          ].map((c) => (
            <div key={c.e} className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4">
              <span className={`p-3 rounded-xl ${c.color}`}><c.icon className="w-6 h-6" aria-hidden="true" /></span>
              <div className="min-w-0">
                <p className="text-sm font-bold text-slate-900">{c.t}</p>
                <a href={`mailto:${c.e}`} className="text-brand-700 font-semibold hover:underline break-all">{c.e}</a>
              </div>
            </div>
          ))}
          <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4 hover:border-azul-500 transition-colors">
            <span className="p-3 rounded-xl text-azul-600 bg-azul-50"><Linkedin className="w-6 h-6" aria-hidden="true" /></span>
            <div><p className="text-sm font-bold text-slate-900">LinkedIn</p><p className="text-azul-700 font-semibold">Síguenos en Omni TI</p></div>
          </a>
          <p className="flex items-center gap-2 text-sm text-slate-500 px-1"><MapPin className="w-4 h-4" aria-hidden="true" /> {SITE.city}</p>
        </aside>

        <section className="lg:col-span-3 bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-lg" aria-labelledby="form-title">
          {sent ? (
            <div className="text-center py-8 animate-fade-up" role="status">
              <CheckCircle2 className="w-14 h-14 text-verde-500 mx-auto" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-extrabold text-brand-950">¡Casi listo!</h2>
              <p className="mt-3 text-slate-600 max-w-md mx-auto">
                Abrimos tu programa de correo con el mensaje listo para enviar a <strong>{sent.email}</strong>. Solo falta que presiones “Enviar” allí.
              </p>
              <p className="mt-3 text-sm text-slate-500">¿No se abrió? <a href={sent.href} className="text-brand-700 font-bold underline">Intenta de nuevo</a> o escríbenos directamente a {sent.email}.</p>
              <button onClick={() => setSent(null)} className="mt-6 text-sm font-bold text-brand-700 hover:underline">Editar mensaje</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-5">
              <h2 id="form-title" className="text-2xl font-extrabold text-brand-950">Envíanos un mensaje</h2>

              <div>
                <label htmlFor="motivo" className="block text-sm font-bold text-slate-700 mb-1.5">Motivo</label>
                <select id="motivo" value={form.motivo} onChange={set('motivo')} className={field}>
                  {MOTIVOS.map((m) => <option key={m.id} value={m.id}>{m.label}</option>)}
                </select>
                <p className="mt-1.5 text-xs text-slate-500">Se enviará a {destino.email}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-bold text-slate-700 mb-1.5">Nombre *</label>
                  <input id="nombre" value={form.nombre} onChange={set('nombre')} autoComplete="name" aria-invalid={!!errors.nombre} className={field} />
                  {errors.nombre && <p className="mt-1 text-sm text-red-600">{errors.nombre}</p>}
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-sm font-bold text-slate-700 mb-1.5">Empresa</label>
                  <input id="empresa" value={form.empresa} onChange={set('empresa')} autoComplete="organization" className={field} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1.5">Correo *</label>
                  <input id="email" type="email" value={form.email} onChange={set('email')} autoComplete="email" aria-invalid={!!errors.email} className={field} />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-bold text-slate-700 mb-1.5">Teléfono</label>
                  <input id="telefono" type="tel" value={form.telefono} onChange={set('telefono')} autoComplete="tel" className={field} />
                </div>
              </div>

              <div>
                <label htmlFor="servicio" className="block text-sm font-bold text-slate-700 mb-1.5">Servicio de interés</label>
                <select id="servicio" value={form.servicio} onChange={set('servicio')} className={field}>
                  <option value="">Aún no lo sé / varios</option>
                  {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-bold text-slate-700 mb-1.5">Mensaje *</label>
                <textarea id="mensaje" rows={5} value={form.mensaje} onChange={set('mensaje')} aria-invalid={!!errors.mensaje} className={field} />
                {errors.mensaje && <p className="mt-1 text-sm text-red-600">{errors.mensaje}</p>}
              </div>

              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-600 text-white py-4 rounded-2xl font-bold text-lg transition-colors">
                <Send className="w-5 h-5" /> Enviar mensaje
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}
