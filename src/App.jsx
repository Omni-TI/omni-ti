import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, ArrowRight, 
  Briefcase, Headphones, Cloud, Bot, 
  CheckCircle2, Shield, Zap, BarChart, 
  PlayCircle, Network, Video, GraduationCap, 
  Database, Phone, Package, Cpu, Code2,
  Trophy, Target, TrendingUp, Users,
  Mail, Linkedin, MapPin, Star, AlertCircle, Rocket, 
  DollarSign, Clock, Users as UsersIcon, ShieldCheck, Heart, Award, Sparkles
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Listado Maestro de los 12 Servicios con sus sub-divisiones exactas
  const allServices = [
    { 
      id: 'iot',
      category: 'Infraestructura',
      title: "Oficinas Inteligentes y Domótica (IoT)", 
      icon: Cpu, 
      color: "orange", 
      description: "Transformamos espacios de trabajo en entornos autónomos y eficientes para reducir costos.", 
      items: ["Sensores de presencia y clima", "Iluminación automatizada", "Gestión remota de espacios"] 
    },
    { 
      id: 'network',
      category: 'Infraestructura',
      title: "Cableado Estructurado", 
      icon: Network, 
      color: "blue", 
      description: "La base física de tu red con certificación y estándares internacionales.", 
      items: ["Instalación profesional", "Certificación Fluke", "Auditoría y Mantenimiento"] 
    },
    { 
      id: 'video',
      category: 'Infraestructura',
      title: "Videovigilancia y Seguridad Física", 
      icon: Video, 
      color: "slate", 
      description: "Protección integral mediante analítica de video y control físico de áreas.", 
      items: ["CCTV IP Alta Resolución", "Control de Acceso Biométrico", "Integración de Red"] 
    },
    { 
      id: 'voip',
      category: 'Infraestructura',
      title: "Telefonía IP y Comunicaciones", 
      icon: Phone, 
      color: "teal", 
      description: "Comunicaciones unificadas de alta fidelidad para empresas modernas.", 
      items: ["Centrales VoIP / PBX Virtual", "Videoconferencia profesional", "Movilidad empresarial"] 
    },
    { 
      id: 'cyber',
      category: 'Operaciones',
      title: "Ciberseguridad", 
      icon: ShieldCheck, 
      color: "rose", 
      description: "Protección avanzada de datos y blindaje contra amenazas externas.", 
      items: ["Cumplimiento ISO 27001", "Firewall y Redes Seguras", "Phishing y Vulnerabilidades"] 
    },
    { 
      id: 'support',
      category: 'Operaciones',
      title: "Soporte y Mantenimiento TI", 
      icon: Headphones, 
      color: "emerald", 
      description: "Garantizamos la continuidad operativa de tu infraestructura 24/7.", 
      items: ["Contratos Recurrentes", "Mesa de Ayuda (Help Desk)", "Mantenimiento Preventivo"] 
    },
    { 
      id: 'data',
      category: 'Operaciones',
      title: "Gestión de Datos y Backup", 
      icon: Database, 
      color: "cyan", 
      description: "Seguridad y resiliencia para la información vital de tu negocio.", 
      items: ["Servidores NAS/SAN", "Backup en la Nube", "Recuperación ante desastres"] 
    },
    { 
      id: 'products',
      category: 'Operaciones',
      title: "Productos Digitales y Plantillas", 
      icon: Package, 
      color: "pink", 
      description: "Herramientas listas para potenciar la productividad inmediata.", 
      items: ["Plantillas Excel avanzadas", "Manuales PDF Inteligentes", "Packs de Recursos"] 
    },
    { 
      id: 'dev',
      category: 'Estrategia',
      title: "Desarrollo Web y Soluciones Low-Code", 
      icon: Code2, 
      color: "blue", 
      description: "Digitalización ágil para procesos corporativos de alta velocidad.", 
      items: ["Sitios Web Corporativos", "Apps de gestión Low-Code", "Integración vía API"] 
    },
    { 
      id: 'ia',
      category: 'Estrategia',
      title: "Automatización con IA", 
      icon: Bot, 
      color: "purple", 
      description: "Inteligencia artificial aplicada para eliminar burocracia manual.", 
      items: ["Chatbots de atención", "Flujos de trabajo IA", "Reportes y Predicción"] 
    },
    { 
      id: 'consulting',
      category: 'Estrategia',
      title: "Consultoría y Transformación Digital", 
      icon: Briefcase, 
      color: "amber", 
      description: "Estrategia y acompañamiento en tu evolución tecnológica.", 
      items: ["Diagnóstico inicial", "Hoja de ruta digital", "Asesoría en Licitaciones"] 
    },
    { 
      id: 'training',
      category: 'Estrategia',
      title: "Capacitación y Formación", 
      icon: GraduationCap, 
      color: "indigo", 
      description: "Transferencia de conocimiento técnico para empoderar a tu equipo.", 
      items: ["Cursos presenciales", "Academia Online", "Workshops de IA"] 
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-700 flex flex-col">
      
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
              <button onClick={() => navigate('about')} className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${currentPage === 'about' ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}`}>Nosotros</button>
              
              {/* Mega Menú de Servicios */}
              <div className="group relative cursor-pointer">
                <button className="flex items-center px-4 py-2 text-sm font-medium text-slate-600 group-hover:text-blue-600 transition-all rounded-lg group-hover:bg-slate-50">
                  Servicios <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] bg-white shadow-2xl rounded-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-8 grid grid-cols-3 gap-8 mt-2">
                  <div className="space-y-4 text-left">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Infraestructura</h4>
                    {allServices.filter(s => s.category === 'Infraestructura').map(s => (
                      <button key={s.id} onClick={() => navigate('services')} className="flex items-center gap-3 text-xs font-bold text-slate-600 hover:text-blue-600 w-full text-left group/item">
                        <s.icon className="w-4 h-4 group-hover/item:scale-110 transition-transform flex-shrink-0"/> {s.title}
                      </button>
                    ))}
                  </div>
                  <div className="space-y-4 text-left">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Operaciones</h4>
                    {allServices.filter(s => s.category === 'Operaciones').map(s => (
                      <button key={s.id} onClick={() => navigate('services')} className="flex items-center gap-3 text-xs font-bold text-slate-600 hover:text-blue-600 w-full text-left group/item">
                        <s.icon className="w-4 h-4 group-hover/item:scale-110 transition-transform flex-shrink-0"/> {s.title}
                      </button>
                    ))}
                  </div>
                  <div className="space-y-4 text-left">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Estrategia</h4>
                    {allServices.filter(s => s.category === 'Estrategia').map(s => (
                      <button key={s.id} onClick={() => navigate('services')} className="flex items-center gap-3 text-xs font-bold text-slate-600 hover:text-blue-600 w-full text-left group/item">
                        <s.icon className="w-4 h-4 group-hover/item:scale-110 transition-transform flex-shrink-0"/> {s.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button onClick={() => navigate('cases')} className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${currentPage === 'cases' ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}`}>Casos</button>
              <div className="h-6 w-px bg-slate-200 mx-2"></div>
              <button onClick={() => navigate('roi')} className={`text-xs font-bold px-4 py-2 rounded-full transition-all border ${currentPage === 'roi' ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' : 'text-slate-600 border-slate-200 hover:border-emerald-300 hover:text-emerald-600'}`}>Calculadora ROI</button>
              <button onClick={() => navigate('assessment')} className={`text-xs font-bold px-4 py-2 rounded-full transition-all border ${currentPage === 'assessment' ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'}`}>Diagnóstico</button>
              <button onClick={() => navigate('contact')} className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-600 transition-all shadow-lg ml-4">Hablemos</button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600"><Menu /></button>
            </div>
          </div>
        </div>

        {/* Menú Móvil */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-4 pb-8 space-y-3 shadow-xl absolute w-full z-50 text-left animate-in slide-in-from-top duration-300">
            <button onClick={() => navigate('home')} className="block w-full text-left px-4 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 rounded-xl">Inicio</button>
            <button onClick={() => navigate('about')} className="block w-full text-left px-4 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 rounded-xl">Nosotros</button>
            <button onClick={() => navigate('services')} className="block w-full text-left px-4 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 rounded-xl">Servicios</button>
            <button onClick={() => navigate('roi')} className="block w-full text-left px-4 py-3 text-base font-bold text-emerald-600 hover:bg-emerald-50 rounded-xl">Calculadora ROI</button>
            <button onClick={() => navigate('assessment')} className="block w-full text-left px-4 py-3 text-base font-bold text-blue-600 hover:bg-blue-50 rounded-xl">Diagnóstico</button>
            <button onClick={() => navigate('contact')} className="w-full mt-4 bg-slate-900 text-white px-6 py-4 rounded-xl font-bold">Contactar ahora</button>
          </div>
        )}
      </nav>

      {/* RENDERIZADO PRINCIPAL */}
      {currentPage === 'home' && (
        <main className="animate-in fade-in duration-700">
          {/* Hero */}
          <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 bg-white overflow-hidden text-center">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold mb-8 animate-pulse">
                <Sparkles className="w-4 h-4" /> Partner Tecnológico Integral
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none text-slate-900">
                Tu tecnología, <br/>
                <span className="text-blue-600">en buenas manos.</span>
              </h1>
              <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">Infraestructura de red, ciberseguridad avanzada y automatización inteligente en un solo partner de confianza.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => navigate('services')} className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black shadow-xl shadow-blue-200 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">Explorar Servicios <ArrowRight className="w-5 h-5"/></button>
                <button onClick={() => navigate('roi')} className="bg-slate-50 text-slate-700 px-10 py-5 rounded-2xl font-black border border-slate-200">Ver Ahorro (ROI)</button>
              </div>
            </div>
          </section>

          {/* CATEGORÍAS EN HOME (LOS 12 SERVICIOS) */}
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="mb-20">
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Nuestros Pilares</h2>
                <p className="text-slate-500 font-medium text-lg">Dividimos nuestra expertise en 3 áreas clave para cubrir el 100% de tu negocio.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['Infraestructura', 'Operaciones', 'Estrategia'].map((cat, i) => (
                  <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group text-left">
                    <div className="mb-8 inline-block p-5 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
                      {cat === 'Infraestructura' ? <Network className="w-10 h-10" /> : cat === 'Operaciones' ? <ShieldCheck className="w-10 h-10" /> : <Zap className="w-10 h-10" />}
                    </div>
                    <h3 className="text-3xl font-black mb-8 text-slate-900 tracking-tight">{cat}</h3>
                    <ul className="space-y-4">
                      {allServices.filter(s => s.category === cat).map(s => (
                        <li key={s.id} className="flex items-center gap-3 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors cursor-default">
                          <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" /> {s.title}
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => navigate('services')} className="mt-12 text-blue-600 font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">Ver Catálogo Completo <ArrowRight className="w-4 h-4" /></button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'services' && <ServicesPage services={allServices} />}
      {currentPage === 'roi' && <RoiCalculatorPage />}
      {currentPage === 'assessment' && <AssessmentPage navigate={navigate} />}
      {currentPage === 'cases' && <CasesPage />}
      {currentPage === 'contact' && <ContactPage />}

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-1 md:col-span-2 text-center md:text-left">
              <div className="flex items-center gap-2 mb-6 cursor-pointer justify-center md:justify-start" onClick={() => navigate('home')}>
                <Bot className="text-blue-500 w-10 h-10" />
                <span className="font-black text-3xl text-white tracking-tighter">Omni TI</span>
              </div>
              <p className="max-w-sm mx-auto md:mx-0 leading-relaxed font-medium">Arquitectos de tu evolución digital. Aseguramos el presente, planeamos el futuro.</p>
            </div>
            <div>
              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-8 text-center md:text-left">Empresa</h4>
              <ul className="space-y-4 font-bold text-sm text-center md:text-left">
                <li><button onClick={() => navigate('about')} className="hover:text-blue-400 transition-colors">Nosotros</button></li>
                <li><button onClick={() => navigate('services')} className="hover:text-blue-400 transition-colors">Servicios</button></li>
                <li><button onClick={() => navigate('cases')} className="hover:text-blue-400 transition-colors">Casos de Éxito</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-8 text-center md:text-left">Conecta</h4>
              <ul className="space-y-4 font-bold text-sm text-center md:text-left">
                <li>Email: <a href="mailto:ventas@omniti.cl" className="hover:text-blue-400 transition-colors">ventas@omniti.cl</a></li>
                <li>LinkedIn: <a href="https://linkedin.com/omniti" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">@omniti</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-900 text-[10px] font-black text-center uppercase tracking-[0.3em] text-slate-600">
            &copy; {new Date().getFullYear()} OMNI TI. SANTIAGO, CHILE.
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- SUBPÁGINAS DETALLADAS ---

function AboutPage() {
  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      <section className="bg-slate-900 text-white py-32 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">Arquitectos de tu <span className="text-blue-500">evolución.</span></h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">Diseñamos los cimientos tecnológicos sobre los cuales las empresas chilenas escalan hacia el éxito.</p>
        </div>
      </section>
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-left">
            <div className="inline-block p-4 bg-blue-50 text-blue-600 rounded-2xl"><Target className="w-10 h-10" /></div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">Nuestro Objetivo</h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">Impulsar el crecimiento tecnológico mediante la integración inteligente de infraestructura, ciberseguridad avanzada y automatización estratégica.</p>
          </div>
          <div className="bg-slate-50 rounded-[4rem] p-16 text-left border border-slate-100">
            <h3 className="text-2xl font-black text-slate-900 mb-6 italic">Omni TI en breve</h3>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">"Nacimos para simplificar el ecosistema digital empresarial. Entendemos que cada minuto de ineficiencia técnica es capital perdido. Somos tu socio tecnológico resolutivo."</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServicesPage({ services }) {
  return (
    <div className="bg-white min-h-screen pb-24 animate-in fade-in duration-700">
      <div className="bg-slate-900 text-white py-24 md:py-32 px-4 text-center">
        <h1 className="text-5xl md:text-9xl font-black mb-8 tracking-tighter leading-none">Catálogo <br/> 100% Integral</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">Los 12 pilares tecnológicos que sostienen tu operación.</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-24 space-y-32">
        {services.map((s, index) => (
          <div key={s.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center group`}>
            <div className="w-full md:w-1/2 space-y-8 text-left">
              <div className={`w-20 h-20 bg-${s.color}-50 text-${s.color}-600 rounded-3xl flex items-center justify-center transition-transform group-hover:rotate-6`}>
                <s.icon className="w-10 h-10" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-2 block">{s.category}</span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">{s.title}</h2>
              </div>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">{s.description}</p>
              <ul className="grid grid-cols-1 gap-4 mt-8">
                {s.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                    <CheckCircle2 className={`w-6 h-6 text-${s.color}-500 mt-1 flex-shrink-0`} />
                    <span className="font-bold text-slate-700 leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 bg-slate-50 rounded-[5rem] aspect-square flex items-center justify-center border-8 border-white shadow-2xl relative overflow-hidden group">
               <s.icon className="w-64 h-64 text-slate-200 transition-transform duration-1000 group-hover:scale-125" />
               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RoiCalculatorPage() {
  const [hoursLost, setHoursLost] = useState(2);
  const [employees, setEmployees] = useState(10);
  const [hourlyCost, setHourlyCost] = useState(25);
  const annualLoss = hoursLost * employees * hourlyCost * 20 * 12;
  const potentialSaving = annualLoss * 0.75;

  return (
    <div className="bg-slate-50 min-h-screen pb-24 animate-in fade-in duration-500">
      <div className="bg-slate-900 text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter">Calculadora ROI</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">¿Cuánto dinero estás perdiendo por ineficiencia técnica?</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100 space-y-16 text-left">
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <label className="font-black text-slate-700 uppercase text-[10px] tracking-[0.2em] flex items-center gap-2"><Clock className="w-5 h-5 text-blue-600" /> Horas perdidas / día</label>
              <span className="text-blue-600 font-black text-3xl">{hoursLost}h</span>
            </div>
            <input type="range" min="0.5" max="8" step="0.5" value={hoursLost} onChange={(e) => setHoursLost(parseFloat(e.target.value))} className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600" />
          </div>
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <label className="font-black text-slate-700 uppercase text-[10px] tracking-[0.2em] flex items-center gap-2"><UsersIcon className="w-5 h-5 text-blue-600" /> Equipo afectado</label>
              <span className="text-blue-600 font-black text-3xl">{employees}</span>
            </div>
            <input type="range" min="1" max="100" value={employees} onChange={(e) => setEmployees(parseInt(e.target.value))} className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600" />
          </div>
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <label className="font-black text-slate-700 uppercase text-[10px] tracking-[0.2em] flex items-center gap-2"><DollarSign className="w-5 h-5 text-blue-600" /> Costo hora prom.</label>
              <span className="text-blue-600 font-black text-3xl">${hourlyCost}</span>
            </div>
            <input type="range" min="10" max="250" step="5" value={hourlyCost} onChange={(e) => setHourlyCost(parseInt(e.target.value))} className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600" />
          </div>
        </div>
        <div className="space-y-10">
          <div className="bg-white p-12 rounded-[4rem] border-2 border-slate-100 text-center shadow-xl">
            <h3 className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6">Pérdida Anual</h3>
            <div className="text-6xl md:text-8xl font-black text-rose-600 mb-2">${annualLoss.toLocaleString('es-CL')}</div>
            <p className="text-slate-400 font-bold text-sm">Capital quemado en procesos manuales innecesarios.</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-12 rounded-[4rem] text-center text-white shadow-2xl">
            <Zap className="w-16 h-16 text-emerald-200 mx-auto mb-6 animate-pulse" />
            <h3 className="text-emerald-100 font-black uppercase tracking-[0.3em] text-[10px] mb-6">Ahorro con Omni TI</h3>
            <div className="text-6xl md:text-9xl font-black mb-10 tracking-tighter">${potentialSaving.toLocaleString('es-CL')}</div>
            <button className="w-full bg-white text-emerald-600 py-6 rounded-3xl font-black text-xl hover:bg-slate-50 transition-all shadow-xl">Recuperar este capital hoy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssessmentPage({ navigate }) {
  const [scores, setScores] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const services = [
    { id: 'iot', name: 'Oficinas Smart (IoT)', icon: Cpu, desc: 'Espacios inteligentes y control eficiente.' },
    { id: 'dev', name: 'Desarrollo & Low-Code', icon: Code2, desc: 'Apps y webs a medida de alta velocidad.' },
    { id: 'network', name: 'Cableado Estructurado', icon: Network, desc: 'Redes físicas certificadas y estables.' },
    { id: 'cyber', name: 'Ciberseguridad', icon: ShieldCheck, desc: 'Blindaje total contra amenazas digitales.' },
    { id: 'ia', name: 'Automatización IA', icon: Bot, desc: 'Automatización inteligente de procesos.' },
    { id: 'support', name: 'Soporte TI', icon: Headphones, desc: 'Asistencia técnica experta 24/7.' },
    { id: 'video', name: 'Videovigilancia', icon: Video, desc: 'Vigilancia IP y control de acceso.' },
    { id: 'consulting', name: 'Consultoría Digital', icon: Briefcase, desc: 'Estrategia para tu evolución digital.' },
    { id: 'training', name: 'Capacitación TI', icon: GraduationCap, desc: 'Formación técnica para tu equipo.' },
    { id: 'data', name: 'Gestión de Datos', icon: Database, desc: 'Backup seguro y recuperación ante fallos.' },
    { id: 'voip', name: 'Telefonía IP', icon: Phone, desc: 'Comunicación moderna y económica.' },
    { id: 'products', name: 'Productos Digitales', icon: Package, desc: 'Plantillas y herramientas digitales.' }
  ];

  const handleScore = (id, val) => setScores(prev => ({ ...prev, [id]: val }));
  const calculateResult = () => {
    const total = Object.values(scores).reduce((a, b) => a + b, 0);
    const avg = total / services.length;
    if (avg < 1.7) return { level: 'Nivel Inicial', color: 'text-rose-600', bg: 'bg-rose-50', desc: 'Tu empresa depende de procesos manuales y corre riesgos de seguridad críticos.' };
    if (avg < 2.5) return { level: 'Nivel en Desarrollo', color: 'text-amber-600', bg: 'bg-amber-50', desc: 'Falta integración y automatización para escalar eficientemente.' };
    return { level: 'Nivel Avanzado', color: 'text-emerald-600', bg: 'bg-emerald-50', desc: 'Lideras con tecnología, el enfoque ahora debe ser la excelencia continua.' };
  };

  const results = isFinished ? calculateResult() : null;

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="bg-slate-900 text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter">Diagnóstico TI</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">Evalúa tu infraestructura actual.</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-12">
        {!isFinished ? (
          <div className="bg-white rounded-[4rem] shadow-2xl p-10 md:p-20 border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
              {services.map((s) => (
                <div key={s.id} className="space-y-5 text-left">
                  <div className="flex items-center gap-3 font-black text-slate-900 text-sm uppercase tracking-[0.2em]"><s.icon className="w-5 h-5 text-blue-600"/> {s.name}</div>
                  <div className="flex gap-4">
                    {[1, 2, 3].map((val) => (
                      <button key={val} onClick={() => handleScore(s.id, val)} className={`flex-1 py-4 rounded-2xl text-base font-black border-2 transition-all ${scores[s.id] === val ? 'bg-blue-600 text-white border-blue-600 shadow-xl scale-105' : 'bg-slate-50 text-slate-400 border-transparent hover:border-slate-200'}`}>{val}</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button disabled={Object.keys(scores).length < services.length} onClick={() => { setIsFinished(true); window.scrollTo(0, 0); }} className={`mt-20 px-20 py-6 rounded-3xl font-black text-xl text-white transition-all shadow-2xl ${Object.keys(scores).length === services.length ? 'bg-slate-900 hover:bg-blue-600' : 'bg-slate-200 cursor-not-allowed text-slate-400'}`}>Analizar Madurez</button>
          </div>
        ) : (
          <div className="space-y-16">
            <div className={`rounded-[4rem] p-16 text-center border-4 ${results.bg} border-white shadow-2xl`}>
              <Trophy className={`w-24 h-24 mx-auto mb-10 ${results.color}`} />
              <div className={`text-5xl md:text-8xl font-black mb-10 tracking-tighter ${results.color}`}>{results.level}</div>
              <p className="text-slate-600 max-w-2xl mx-auto text-2xl font-medium mb-16">{results.desc}</p>
              <button onClick={() => navigate('contact')} className="bg-blue-600 text-white px-16 py-6 rounded-3xl font-black text-xl hover:bg-blue-700 shadow-2xl">Agendar Auditoría Detallada</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CasesPage() {
  const cases = [
    { company: "Logistics Global S.A.", industry: "Logística", title: "Optimización con IA e IoT", challenge: "Pérdida de inventario y retrasos manuales críticos.", solution: "Red 6A, sensores IoT y flujos predictivos IA.", result: "Menos 95% en pérdidas y +40% en rapidez.", stat: "95%", icon: TrendingUp },
    { company: "Fintech SecurePay", industry: "Finanzas", title: "Blindaje ISO 27001", challenge: "Ataques de phishing recurrentes.", solution: "Firewalls de nueva generación y formación técnica.", result: "Cero incidentes críticos tras implementación.", stat: "ISO 27001", icon: ShieldCheck }
  ];

  return (
    <div className="bg-white min-h-screen pb-24 text-slate-700 animate-in fade-in duration-500">
      <div className="bg-slate-900 text-white py-32 px-4 text-center">
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">Impacto <br/>Real</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {cases.map((c, i) => (
          <div key={i} className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100 text-left hover:shadow-2xl transition-all group hover:-translate-y-2">
            <c.icon className="w-12 h-12 text-blue-600 mb-8 transition-transform group-hover:scale-110" />
            <h3 className="text-3xl font-black mb-6 leading-tight">{c.company}</h3>
            <div className="space-y-4 mb-10 text-lg">
              <p className="text-slate-500 font-bold leading-relaxed"><strong>Desafío:</strong> {c.challenge}</p>
              <p className="text-slate-500 font-bold leading-relaxed"><strong>Solución:</strong> {c.solution}</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] flex items-center gap-8 shadow-sm border border-slate-100">
               <div className="text-6xl font-black text-blue-600">{c.stat}</div>
               <div className="text-sm text-slate-400 font-black uppercase tracking-[0.2em] leading-relaxed">{c.result}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="bg-white min-h-screen pb-24 text-slate-700 text-center animate-in fade-in duration-500">
      <div className="bg-slate-900 text-white py-32 px-4">
        <h1 className="text-5xl md:text-9xl font-black mb-10 tracking-tighter">Hablemos.</h1>
        <p className="text-2xl text-slate-400 max-w-2xl mx-auto font-medium">Estamos listos para potenciar tu empresa.</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100 group hover:shadow-2xl transition-all hover:-translate-y-2">
          <Mail className="w-16 h-16 text-blue-600 mx-auto mb-12 group-hover:scale-110 transition-transform" />
          <h3 className="text-3xl font-black mb-4 uppercase tracking-widest text-slate-900">Ventas</h3>
          <a href="mailto:ventas@omniti.cl" className="text-3xl md:text-4xl font-black text-blue-600 hover:underline decoration-8 underline-offset-8 transition-all">ventas@omniti.cl</a>
        </div>
        <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100 group hover:shadow-2xl transition-all hover:-translate-y-2">
          <Linkedin className="w-16 h-16 text-slate-900 mx-auto mb-12 group-hover:scale-110 transition-transform" />
          <h3 className="text-3xl font-black mb-4 uppercase tracking-widest text-slate-900">LinkedIn</h3>
          <a href="https://linkedin.com/omniti" target="_blank" rel="noreferrer" className="inline-block bg-slate-900 text-white px-16 py-6 rounded-3xl font-black text-2xl shadow-2xl hover:bg-blue-600 transition-colors">Ver Perfil</a>
        </div>
      </div>
    </div>
  );
}