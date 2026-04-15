import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, ArrowRight, 
  Briefcase, Headphones, Cloud, Bot, 
  CheckCircle2, Shield, Zap, BarChart, 
  PlayCircle, Network, Video, GraduationCap, 
  Database, Phone, Package, Cpu, Code2,
  Trophy, Target, TrendingUp, Users,
  Mail, Linkedin, MapPin, Star, AlertCircle, Rocket, 
  DollarSign, Clock, Users as UsersIcon, ShieldCheck, MousePointer2, Sparkles
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-700">
      
      {/* NAVEGACIÓN */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div onClick={() => navigate('home')} className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center transition-all group-hover:rotate-6 group-hover:scale-110 shadow-lg shadow-blue-200">
                <Bot className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-900">Omni<span className="text-blue-600">TI</span></span>
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:flex items-center space-x-1">
              <button onClick={() => navigate('home')} className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${currentPage === 'home' ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}`}>Inicio</button>
              
              <div className="group relative cursor-pointer">
                <button className="flex items-center px-4 py-2 text-sm font-medium text-slate-600 group-hover:text-blue-600 transition-all rounded-lg group-hover:bg-slate-50">
                  Servicios <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white shadow-2xl rounded-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-8 grid grid-cols-3 gap-8 mt-2">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Infraestructura</h4>
                    <button onClick={() => navigate('services')} className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 group/item"><Network className="w-4 h-4 text-blue-500 group-hover/item:scale-110 transition-transform"/> Cableado Estructurado</button>
                    <button onClick={() => navigate('services')} className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 group/item"><Video className="w-4 h-4 text-slate-700 group-hover/item:scale-110 transition-transform"/> Videovigilancia</button>
                    <button onClick={() => navigate('services')} className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 group/item"><Cpu className="w-4 h-4 text-orange-500 group-hover/item:scale-110 transition-transform"/> Oficinas Smart (IoT)</button>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Operaciones</h4>
                    <button onClick={() => navigate('services')} className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 group/item"><Headphones className="w-4 h-4 text-emerald-500 group-hover/item:scale-110 transition-transform"/> Soporte & Mantenimiento</button>
                    <button onClick={() => navigate('services')} className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 group/item"><ShieldCheck className="w-4 h-4 text-rose-500 group-hover/item:scale-110 transition-transform"/> Ciberseguridad</button>
                    <button onClick={() => navigate('services')} className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 group/item"><Database className="w-4 h-4 text-cyan-500 group-hover/item:scale-110 transition-transform"/> Gestión de Datos</button>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Estrategia</h4>
                    <button onClick={() => navigate('services')} className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 group/item"><Zap className="w-4 h-4 text-purple-500 group-hover/item:scale-110 transition-transform"/> Automatización IA</button>
                    <button onClick={() => navigate('services')} className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 group/item"><Code2 className="w-4 h-4 text-blue-600 group-hover/item:scale-110 transition-transform"/> Desarrollo Low-Code</button>
                    <button onClick={() => navigate('services')} className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 group/item"><Briefcase className="w-4 h-4 text-amber-500 group-hover/item:scale-110 transition-transform"/> Consultoría Digital</button>
                  </div>
                </div>
              </div>

              <button onClick={() => navigate('cases')} className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${currentPage === 'cases' ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}`}>Casos</button>
              
              <div className="h-6 w-px bg-slate-200 mx-2"></div>

              <button 
                onClick={() => navigate('assessment')} 
                className={`text-xs font-bold px-4 py-2 rounded-full transition-all border ${currentPage === 'assessment' ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'}`}
              >
                Diagnóstico
              </button>

              <button 
                onClick={() => navigate('roi')} 
                className={`text-xs font-bold px-4 py-2 rounded-full transition-all border ${currentPage === 'roi' ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' : 'text-slate-600 border-slate-200 hover:border-emerald-300 hover:text-emerald-600'}`}
              >
                Calculadora ROI
              </button>

              <button 
                onClick={() => navigate('contact')} 
                className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-600 hover:-translate-y-0.5 transition-all shadow-lg active:scale-95"
              >
                Hablemos
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600">
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-4 pb-8 space-y-3 shadow-xl absolute w-full z-50">
            <button onClick={() => navigate('home')} className="block w-full text-left px-4 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 rounded-xl">Inicio</button>
            <button onClick={() => navigate('services')} className="block w-full text-left px-4 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 rounded-xl">Servicios</button>
            <button onClick={() => navigate('roi')} className="block w-full text-left px-4 py-3 text-base font-bold text-emerald-600 hover:bg-emerald-50 rounded-xl">Calculadora ROI</button>
            <button onClick={() => navigate('assessment')} className="block w-full text-left px-4 py-3 text-base font-bold text-blue-600 hover:bg-blue-50 rounded-xl">¡Pon tu empresa a prueba!</button>
            <button onClick={() => navigate('contact')} className="w-full mt-4 bg-slate-900 text-white px-6 py-4 rounded-xl font-bold">Contactar ahora</button>
          </div>
        )}
      </nav>

      {/* RENDER CONDICIONAL PRINCIPAL */}
      {currentPage === 'home' && (
        <main className="animate-in fade-in duration-700">
          
          {/* HERO SECTION MEJORADO */}
          <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold mb-8 animate-bounce">
                <Sparkles className="w-4 h-4" /> Partner Tecnológico Integral
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight text-slate-900 leading-[1.1]">
                Tu departamento TI, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">pero más inteligente.</span>
              </h1>
              <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                Elimina las barreras tecnológicas. Desde infraestructura física hasta automatización con IA, Omni TI unifica tu operación para que tú solo te enfoques en crecer.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={() => navigate('services')} 
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-xl shadow-blue-200 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
                >
                  Explorar Soluciones <ArrowRight className="w-5 h-5"/>
                </button>
                <button 
                  onClick={() => navigate('roi')} 
                  className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-2xl font-black transition-all hover:bg-slate-50 flex items-center justify-center gap-3"
                >
                  <BarChart className="w-5 h-5 text-emerald-500" /> Calcular Ahorro
                </button>
              </div>
            </div>
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-[100px]"></div>
            </div>
          </section>

          {/* SOCIAL PROOF BAR */}
          <div className="border-y border-slate-100 bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { l: "Uptime Garantizado", v: "99.9%" },
                { l: "Soporte", v: "24/7" },
                { l: "Proyectos Exitosos", v: "+100" },
                { l: "Eficiencia Ganada", v: "75%" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-black text-slate-900 mb-1">{stat.v}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* PROBLEMAS / DOLORES */}
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">¿Te suena familiar?</h2>
              <p className="text-slate-500 mb-16 font-medium">La tecnología debería trabajar para ti, no al revés.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {[
                  { t: "Lentitud Operativa", d: "Procesos manuales y sistemas que fallan cuando más los necesitas.", i: Clock, c: "text-amber-500" },
                  { t: "Incertidumbre Digital", d: "¿Están mis datos seguros? ¿Qué pasa si pierdo mi información?", i: AlertCircle, c: "text-rose-500" },
                  { t: "Costos Ocultos", d: "Pagar múltiples proveedores y licencias sin ver resultados claros.", i: DollarSign, c: "text-emerald-500" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                    <item.i className={`w-12 h-12 ${item.c} mb-6`} />
                    <h3 className="text-xl font-black mb-4">{item.t}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm font-medium">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICIOS DESTACADOS (HOME) */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                <div className="max-w-xl">
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Soluciones 360° para la era moderna.</h2>
                  <p className="text-lg text-slate-500 font-medium">No somos solo soporte; somos la base sobre la que escalas tu negocio.</p>
                </div>
                <button onClick={() => navigate('services')} className="text-blue-600 font-black flex items-center gap-2 hover:gap-4 transition-all group">
                  Ver catálogo completo <ArrowRight className="w-5 h-5"/>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { n: 'Ciberseguridad', i: ShieldCheck, c: 'text-rose-600', b: 'bg-rose-50', d: 'Blindaje total ISO 27001.' },
                  { n: 'Automatización IA', i: Zap, c: 'text-purple-600', b: 'bg-purple-50', d: 'Chatbots y flujos inteligentes.' },
                  { n: 'Infraestructura', i: Network, c: 'text-blue-600', b: 'bg-blue-50', d: 'Cableado y redes certificadas.' },
                  { n: 'Gestión de Datos', i: Database, c: 'text-cyan-600', b: 'bg-cyan-50', d: 'Backup en nube y DRP.' },
                ].map((s, idx) => (
                  <div key={idx} className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100 transition-all cursor-pointer" onClick={() => navigate('services')}>
                    <div className={`${s.b} ${s.c} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                      <s.i className="w-7 h-7" />
                    </div>
                    <h3 className="font-black text-slate-900 mb-2">{s.n}</h3>
                    <p className="text-slate-400 text-sm font-bold mb-6">{s.d}</p>
                    <div className="text-blue-600 text-xs font-black uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver más <ArrowRight className="w-3 h-3"/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* INTERACTIVE CALL TO ACTION */}
          <section className="py-24 bg-slate-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">¿Listo para dejar de perder tiempo?</h2>
              <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                Usa nuestras herramientas interactivas para entender tu nivel tecnológico actual o cuánto dinero podrías ahorrar hoy mismo.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div onClick={() => navigate('roi')} className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] text-left hover:bg-white/10 transition-all cursor-pointer group">
                  <DollarSign className="w-12 h-12 text-emerald-500 mb-6" />
                  <h3 className="text-2xl font-black text-white mb-2">Calculadora ROI</h3>
                  <p className="text-slate-400 text-sm mb-6">Mide el impacto financiero de la ineficiencia en tu equipo.</p>
                  <button className="text-emerald-500 font-black text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Iniciar cálculo <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div onClick={() => navigate('assessment')} className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] text-left hover:bg-white/10 transition-all cursor-pointer group">
                  <Target className="w-12 h-12 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-black text-white mb-2">Test de Madurez</h3>
                  <p className="text-slate-400 text-sm mb-6">Pon a prueba tu empresa y obtén un plan de mejora gratis.</p>
                  <button className="text-blue-500 font-black text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Comenzar test <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-10"></div>
          </section>

          {/* CONTACT CTA */}
          <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
               <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">Hagamos que la tecnología sea tu aliada.</h2>
                <p className="text-blue-100 mb-12 text-lg font-medium max-w-xl mx-auto">Solicita una auditoría inicial sin compromiso y descubre el potencial real de tu infraestructura.</p>
                <button 
                  onClick={() => navigate('contact')}
                  className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-xl active:scale-95"
                >
                  Agendar Consultoría Gratuita
                </button>
               </div>
               <Bot className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 -rotate-12" />
            </div>
          </section>

        </main>
      )}

      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'cases' && <CasesPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'assessment' && <AssessmentPage navigate={navigate} />}
      {currentPage === 'roi' && <RoiCalculatorPage navigate={navigate} />}

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 text-center md:text-left">
              <div className="flex items-center gap-2 mb-6 cursor-pointer justify-center md:justify-start" onClick={() => navigate('home')}>
                <Bot className="text-blue-500 w-8 h-8" />
                <span className="font-black text-2xl text-white tracking-tighter">Omni TI</span>
              </div>
              <p className="max-w-sm mx-auto md:mx-0 leading-relaxed font-medium">Haciendo la tecnología empresarial accesible, segura y automática. Tu partner estratégico en Chile.</p>
            </div>
            <div>
              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">Empresa</h4>
              <ul className="space-y-4 font-bold text-sm">
                <li><button onClick={() => navigate('services')} className="hover:text-blue-400 transition-colors">Servicios</button></li>
                <li><button onClick={() => navigate('roi')} className="hover:text-blue-400 transition-colors">Calculadora ROI</button></li>
                <li><button onClick={() => navigate('cases')} className="hover:text-blue-400 transition-colors">Casos de Éxito</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">Conecta</h4>
              <ul className="space-y-4 font-bold text-sm">
                <li>Email: <a href="mailto:ventas@omniti.cl" className="hover:text-blue-400 transition-colors">ventas@omniti.cl</a></li>
                <li>LinkedIn: <a href="https://linkedin.com/omniti" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">@omniti</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-900 text-[10px] font-bold text-center uppercase tracking-widest text-slate-600">
            &copy; {new Date().getFullYear()} Omni TI. Todos los derechos reservados. Diseñado con propósito.
          </div>
        </div>
      </footer>
    </div>
  );
}

// COMPONENTE: CALCULADORA ROI
function RoiCalculatorPage({ navigate }) {
  const [hoursLost, setHoursLost] = useState(2);
  const [employees, setEmployees] = useState(10);
  const [hourlyCost, setHourlyCost] = useState(25);

  const annualLoss = hoursLost * employees * hourlyCost * 20 * 12;
  const potentialSaving = annualLoss * 0.75;

  return (
    <div className="bg-slate-50 min-h-screen pb-24 animate-in fade-in duration-500">
      <div className="bg-slate-900 text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Impacto Financiero TI</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
          Mide la pérdida por ineficiencia y descubre el potencial de ahorro con automatización.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-200 space-y-12">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="font-black text-slate-700 flex items-center gap-2 uppercase text-xs tracking-widest">
                <Clock className="w-5 h-5 text-blue-600" /> Horas perdidas / día
              </label>
              <span className="text-blue-600 font-black text-2xl">{hoursLost}h</span>
            </div>
            <input 
              type="range" min="0.5" max="8" step="0.5" 
              value={hoursLost} onChange={(e) => setHoursLost(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="font-black text-slate-700 flex items-center gap-2 uppercase text-xs tracking-widest">
                <UsersIcon className="w-5 h-5 text-blue-600" /> Equipo afectado
              </label>
              <span className="text-blue-600 font-black text-2xl">{employees}</span>
            </div>
            <input 
              type="range" min="1" max="100" 
              value={employees} onChange={(e) => setEmployees(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="font-black text-slate-700 flex items-center gap-2 uppercase text-xs tracking-widest">
                <DollarSign className="w-5 h-5 text-blue-600" /> Costo hora prom.
              </label>
              <span className="text-blue-600 font-black text-2xl">${hourlyCost}</span>
            </div>
            <input 
              type="range" min="10" max="200" step="5"
              value={hourlyCost} onChange={(e) => setHourlyCost(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-10 rounded-[3rem] border-2 border-slate-100 text-center shadow-lg">
            <h3 className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Pérdida Anual Estimada</h3>
            <div className="text-5xl md:text-7xl font-black text-rose-600 mb-4 tracking-tight">
              ${annualLoss.toLocaleString('es-CL')}
            </div>
            <p className="text-slate-500 font-bold text-sm">Dinero desperdiciado en procesos manuales y fallos TI.</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-10 rounded-[3rem] text-center text-white shadow-2xl shadow-emerald-200">
            <Zap className="w-12 h-12 text-emerald-200 mx-auto mb-4 animate-pulse" />
            <h3 className="text-emerald-100 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Ahorro con Omni TI</h3>
            <div className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
              ${potentialSaving.toLocaleString('es-CL')}
            </div>
            <button 
              onClick={() => navigate('contact')}
              className="w-full bg-white text-emerald-600 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 shadow-xl transition-all"
            >
              Recuperar mi capital ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// COMPONENTE: DIAGNÓSTICO (Pon tu empresa a prueba)
function AssessmentPage({ navigate }) {
  const [scores, setScores] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const services = [
    { id: 'iot', name: 'Oficinas Smart (IoT)', icon: Cpu, desc: 'Espacios inteligentes y control eficiente.' },
    { id: 'dev', name: 'Desarrollo & Low-Code', icon: Code2, desc: 'Apps y webs a medida de alta velocidad.' },
    { id: 'network', name: 'Cableado Estructurado', icon: Network, desc: 'Redes físicas certificadas y estables.' },
    { id: 'cyber', name: 'Ciberseguridad', icon: Shield, desc: 'Blindaje total contra amenazas digitales.' },
    { id: 'ia', name: 'Automatización con IA', icon: Bot, desc: 'Automatización inteligente de procesos.' },
    { id: 'support', name: 'Soporte & Mantenimiento', icon: Headphones, desc: 'Asistencia técnica experta 24/7.' },
    { id: 'video', name: 'Videovigilancia', icon: Video, desc: 'Vigilancia IP y control de acceso.' },
    { id: 'consulting', name: 'Consultoría Digital', icon: Briefcase, desc: 'Estrategia para tu evolución digital.' },
    { id: 'training', name: 'Capacitación TI', icon: GraduationCap, desc: 'Formación técnica para tu equipo.' },
    { id: 'data', name: 'Gestión de Datos', icon: Database, desc: 'Backup seguro y recuperación ante fallos.' },
    { id: 'voip', name: 'Telefonía IP (VoIP)', icon: Phone, desc: 'Comunicación moderna y económica.' },
    { id: 'products', name: 'Productos Digitales', icon: Package, desc: 'Plantillas y herramientas digitales.' }
  ];

  const handleScore = (id, val) => {
    setScores(prev => ({ ...prev, [id]: val }));
  };

  const calculateResult = () => {
    const total = Object.values(scores).reduce((a, b) => a + b, 0);
    const avg = total / services.length;
    
    if (avg < 1.7) return { 
      level: 'Nivel Inicial / Reactivo', 
      color: 'text-rose-600', 
      bg: 'bg-rose-50',
      desc: 'Tu empresa depende de procesos manuales y corre riesgos de seguridad críticos.',
      plan: 'Priorizar ciberseguridad y respaldo de datos inmediatamente para estabilizar la operación.'
    };
    if (avg < 2.5) return { 
      level: 'Nivel en Desarrollo / Proactivo', 
      color: 'text-amber-600', 
      bg: 'bg-amber-50',
      desc: 'Cuentas con una base tecnológica, pero falta integración y automatización para escalar.',
      plan: 'Implementar flujos de IA y soluciones Cloud para eliminar cuellos de botella operativos.'
    };
    return { 
      level: 'Nivel Avanzado / Innovador', 
      color: 'text-emerald-600', 
      bg: 'bg-emerald-50',
      desc: 'Lideras con tecnología, tu enfoque debe ser el mantenimiento de la excelencia y la expansión.',
      plan: 'Focalizar en analítica predictiva y optimización de IoT para maximizar la rentabilidad.'
    };
  };

  const results = isFinished ? calculateResult() : null;

  return (
    <div className="bg-slate-50 min-h-screen pb-24 animate-in fade-in duration-500">
      <div className="bg-slate-900 text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Diagnóstico TI Empresarial</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
          Califica tu estado actual (1: Bajo, 2: Medio, 3: Alto) y obtén tu plan de mejora.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-12">
        {!isFinished ? (
          <div className="bg-white rounded-[3rem] shadow-xl p-8 md:p-16 border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {services.map((s) => (
                <div key={s.id} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg"><s.icon className="w-4 h-4 text-blue-600" /></div>
                    <h3 className="font-black text-slate-900 text-sm uppercase tracking-widest">{s.name}</h3>
                  </div>
                  <p className="text-xs text-slate-400 font-bold">{s.desc}</p>
                  <div className="flex gap-3">
                    {[1, 2, 3].map((val) => (
                      <button
                        key={val}
                        onClick={() => handleScore(s.id, val)}
                        className={`flex-1 py-3 rounded-xl text-sm font-black transition-all border-2 ${
                          scores[s.id] === val 
                          ? 'bg-blue-600 text-white border-blue-600 shadow-lg' 
                          : 'bg-slate-50 text-slate-400 border-transparent hover:border-slate-200'
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <button
                disabled={Object.keys(scores).length < services.length}
                onClick={() => { setIsFinished(true); window.scrollTo(0, 0); }}
                className={`px-16 py-5 rounded-2xl font-black text-lg text-white transition-all shadow-xl ${
                  Object.keys(scores).length === services.length 
                  ? 'bg-slate-900 hover:bg-blue-600 hover:-translate-y-1' 
                  : 'bg-slate-200 cursor-not-allowed text-slate-400'
                }`}
              >
                Analizar Madurez Tecnológica
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <div className={`rounded-[3rem] p-12 text-center border-4 ${results.bg} border-white shadow-2xl`}>
              <Trophy className={`w-20 h-20 mx-auto mb-8 ${results.color}`} />
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Resultado de Auditoría</h2>
              <div className={`text-4xl md:text-7xl font-black mb-8 tracking-tighter ${results.color}`}>
                {results.level}
              </div>
              <p className="text-slate-600 max-w-xl mx-auto text-xl font-medium mb-12">{results.desc}</p>
              <div className="bg-white p-10 rounded-[2.5rem] text-left shadow-lg max-w-3xl mx-auto">
                <h4 className="flex items-center gap-3 font-black text-slate-900 mb-6 uppercase text-sm tracking-widest">
                  <Rocket className="w-5 h-5 text-blue-600" /> Plan de Acción Recomendado:
                </h4>
                <p className="text-slate-600 leading-relaxed font-bold italic text-lg">"{results.plan}"</p>
              </div>
            </div>
            <div className="text-center">
              <button onClick={() => navigate('contact')} className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl transition-all">Programar Auditoría Real</button>
              <button onClick={() => { setIsFinished(false); setScores({}); }} className="block mt-8 mx-auto text-slate-400 font-bold hover:text-slate-900 transition-all underline decoration-2 underline-offset-4">Reiniciar Test</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// COMPONENTE: SERVICIOS
function ServicesPage() {
  const servicesData = [
    { title: "Oficinas Smart (IoT)", icon: Cpu, color: "orange", description: "Espacios autónomos y eficientes para reducir costos.", items: [{t: "Salas Smart", d: "Audio y video automático."}, {t: "Energía", d: "Ahorro vía sensores IoT."}, {t: "Monitoreo", d: "Control de salas críticas."}] },
    { title: "Desarrollo & Low-Code", icon: Code2, color: "blue", description: "Digitalización ágil sin largos tiempos de espera.", items: [{t: "Webs", d: "Presencia digital optimizada."}, {t: "Apps", d: "Gestión de tareas a medida."}, {t: "APIs", d: "Conexión entre sistemas."}] },
    { title: "Cableado Estructurado", icon: Network, color: "blue", description: "Redes físicas bajo estándares internacionales.", items: [{t: "Instalación", d: "Voz y datos profesional."}, {t: "Certificación", d: "Validación con equipos Fluke."}, {t: "Auditoría", d: "Detección de puntos de falla."}] },
    { title: "Ciberseguridad", icon: ShieldCheck, color: "rose", description: "Blindaje total contra amenazas digitales.", items: [{t: "ISO 27001", d: "Políticas de seguridad."}, {t: "Firewall", d: "Protección perimetral."}, {t: "Phishing", d: "Capacitación de personal."}] },
    { title: "Automatización con IA", icon: Bot, color: "purple", description: "IA aplicada para eliminar procesos manuales.", items: [{t: "Chatbots", d: "Atención con IA conversacional."}, {t: "RPA", d: "Flujos de oficina automáticos."}, {t: "Analítica", d: "Predicción de tendencias."}] },
    { title: "Soporte & Mantenimiento", icon: Headphones, color: "emerald", description: "Soporte técnico experto y resolutivo.", items: [{t: "24/7", d: "Mantenimiento preventivo mensual."}, {t: "Help Desk", d: "Atención rápida remota."}, {t: "Hardware", d: "Salud de equipos y servidores."}] },
    { title: "Videovigilancia", icon: Video, color: "slate", description: "Protección inteligente de instalaciones.", items: [{t: "CCTV IP", d: "Analítica de video avanzada."}, {t: "Accesos", d: "Biometría y tarjetas."}, {t: "Seguridad", d: "Integración centralizada."}] },
    { title: "Consultoría Digital", icon: Briefcase, color: "amber", description: "Alineación tecnológica con visión de negocio.", items: [{t: "Roadmap", d: "Plan de pasos estratégicos."}, {t: "Diagnóstico", d: "Evaluación de sistemas."}, {t: "Licitación", d: "Asesoría técnica experta."}] },
    { title: "Capacitación TI", icon: GraduationCap, color: "indigo", description: "Empoderamiento técnico de tu capital humano.", items: [{t: "Cursos", d: "Talleres in-company."}, {t: "Online", d: "Academia e-learning propia."}, {t: "IA/Cyber", d: "Nivelación para empleados."}] },
    { title: "Gestión de Datos", icon: Database, color: "cyan", description: "Backup seguro y redundancia contra desastres.", items: [{t: "NAS/SAN", d: "Almacenamiento local seguro."}, {t: "Cloud", d: "Respaldo automático externo."}, {t: "DRP", d: "Recuperación ante fallos."}] },
    { title: "Telefonía IP", icon: Phone, color: "teal", description: "Comunicación de alta fidelidad y bajo costo.", items: [{t: "VoIP", d: "Centrales PBX escalables."}, {t: "Video", d: "Salas de reunión unificadas."}, {t: "App", d: "Extensiones en el celular."}] },
    { title: "Productos Digitales", icon: Package, color: "pink", description: "Soluciones llave en mano de rápida entrega.", items: [{t: "Excel", d: "Macros de gestión avanzada."}, {t: "PDFs", d: "Manuales inteligentes."}, {t: "Packs", d: "Herramientas corporativas."}] }
  ];

  return (
    <div className="bg-white min-h-screen pb-24 text-slate-700 animate-in fade-in duration-500">
      <div className="bg-slate-900 text-white py-32 px-4 text-center">
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">Especialidades <br/>Omni TI</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">Infraestructura, seguridad y software. Unificamos cada ángulo de tu tecnología empresarial.</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 space-y-32">
        {servicesData.map((service, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center group`}>
            <div className="w-full md:w-1/2 space-y-8 text-left">
              <div className={`w-20 h-20 bg-${service.color}-50 text-${service.color}-600 rounded-3xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                <service.icon className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">{service.title}</h2>
              <p className="text-slate-500 leading-relaxed text-xl font-medium">{service.description}</p>
              <ul className="grid grid-cols-1 gap-6 mt-12">
                {service.items.map((item, idx) => (
                  <li key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
                    <CheckCircle2 className={`w-6 h-6 text-${service.color}-500 mt-1 flex-shrink-0`} />
                    <div><span className="font-black text-slate-900 block mb-1">{item.t}</span><span className="text-sm text-slate-400 font-bold">{item.d}</span></div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 bg-slate-50 rounded-[4rem] aspect-square flex items-center justify-center border-4 border-white shadow-2xl relative overflow-hidden group">
               <service.icon className="w-48 h-48 text-slate-200 transition-transform group-hover:scale-125 duration-700" />
               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// COMPONENTE: CASOS DE ÉXITO
function CasesPage() {
  const cases = [
    { company: "Logistics Global S.A.", industry: "Logística", title: "Optimización con IA e IoT", challenge: "Pérdida de inventario y retrasos manuales.", solution: "Red 6A, sensores IoT y flujos predictivos IA.", result: "Menos 95% en pérdidas y +40% en rapidez.", stat: "95%", icon: TrendingUp },
    { company: "Fintech SecurePay", industry: "Finanzas", title: "Blindaje ISO 27001", challenge: "Ataques de phishing y brechas de seguridad.", solution: "Firewalls de nueva generación y formación técnica.", result: "Certificación obtenida sin incidentes críticos.", stat: "ISO 27001", icon: ShieldCheck },
    { company: "Inmobiliaria Norte", industry: "Real Estate", title: "Oficina Smart y VoIP", challenge: "Gastos eléctricos altos y telefonía obsoleta.", solution: "Domótica IoT y migración total a telefonía IP.", result: "60% ahorro en telefonía y 30% en electricidad.", stat: "60%", icon: Zap },
    { company: "Bufete Jurídico Asociado", industry: "Legal", title: "Digitalización Documental", challenge: "Riesgo de pérdida de papel y búsquedas lentas.", solution: "Plataforma Low-Code y Backup Cloud redundante.", result: "Acceso instantáneo y seguridad total de datos.", stat: "Búsqueda 0s", icon: Database }
  ];

  return (
    <div className="bg-white min-h-screen pb-24 text-slate-700 animate-in fade-in duration-500">
      <div className="bg-slate-900 text-white py-32 px-4 text-center">
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">Impacto <br/>Omni TI</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">Casos reales de transformación digital con resultados medibles.</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {cases.map((c, i) => (
          <div key={i} className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 hover:shadow-2xl transition-all group hover:-translate-y-2">
            <div className="flex justify-between items-start mb-10">
              <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform"><c.icon className="w-10 h-10 text-blue-600" /></div>
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">{c.industry}</span>
            </div>
            <h3 className="text-3xl font-black mb-6 text-slate-900 leading-tight">{c.company}</h3>
            <div className="space-y-6 mb-12">
               <p className="text-slate-500 font-bold leading-relaxed"><span className="text-slate-900 uppercase text-[10px] tracking-widest block mb-1">El Desafío</span> {c.challenge}</p>
               <p className="text-slate-500 font-bold leading-relaxed"><span className="text-slate-900 uppercase text-[10px] tracking-widest block mb-1">Solución Omni TI</span> {c.solution}</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 flex items-center gap-6 shadow-sm">
               <div className="text-5xl font-black text-blue-600">{c.stat}</div>
               <div className="text-xs text-slate-400 font-black uppercase tracking-widest leading-relaxed">{c.result}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// COMPONENTE: CONTACTO
function ContactPage() {
  return (
    <div className="bg-white min-h-screen pb-24 text-slate-700 text-center animate-in fade-in duration-500">
      <div className="bg-slate-900 text-white py-32 px-4">
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Hablemos.</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">Estamos listos para potenciar tu infraestructura tecnológica hoy mismo.</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100 hover:shadow-2xl transition-all group hover:-translate-y-2">
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-sm group-hover:scale-110 transition-transform"><Mail className="w-10 h-10 text-blue-600" /></div>
          <h3 className="text-2xl font-black mb-4">Ventas & Consultas</h3>
          <p className="text-slate-400 mb-10 text-sm font-bold uppercase tracking-widest">Respuesta en menos de 24h.</p>
          <a href="mailto:ventas@omniti.cl" className="text-2xl md:text-3xl font-black text-blue-600 hover:underline decoration-4 underline-offset-8">ventas@omniti.cl</a>
        </div>
        <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100 hover:shadow-2xl transition-all group hover:-translate-y-2 text-center">
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-sm group-hover:scale-110 transition-transform"><Linkedin className="w-10 h-10 text-slate-900" /></div>
          <h3 className="text-2xl font-black mb-4">LinkedIn</h3>
          <p className="text-slate-400 mb-10 text-sm font-bold uppercase tracking-widest">Comunidad & Noticias.</p>
          <a href="https://linkedin.com/omniti" target="_blank" rel="noreferrer" className="inline-block bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl">Ver Perfil</a>
        </div>
      </div>
    </div>
  );
}