import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, ArrowRight, 
  Briefcase, Headphones, Cloud, Bot, 
  CheckCircle2, Shield, Zap, BarChart, 
  PlayCircle, Network, Video, GraduationCap, 
  Database, Phone, Package, Cpu, Code2,
  Trophy, Target, TrendingUp, Users,
  Mail, Linkedin, MapPin, Star, AlertCircle, Rocket, 
  DollarSign, Clock, Users as UsersIcon, ShieldCheck, Heart, Award, Sparkles,
  MousePointer2
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Listado Maestro de los 12 Servicios
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
              
              <div className="group relative cursor-pointer">
                <button className="flex items-center px-4 py-2 text-sm font-medium text-slate-600 group-hover:text-blue-600 transition-all rounded-lg group-hover:bg-slate-50">
                  Servicios <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] bg-white shadow-2xl rounded-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-8 grid grid-cols-3 gap-8 mt-2">
                  <div className="space-y-4 text-left text-xs">
                    <h4 className="font-black text-slate-400 uppercase tracking-widest mb-4">Infraestructura</h4>
                    {allServices.filter(s => s.category === 'Infraestructura').map(s => (
                      <button key={s.id} onClick={() => navigate('services')} className="flex items-center gap-3 text-slate-600 hover:text-blue-600 w-full text-left font-bold transition-colors">
                        <s.icon className="w-4 h-4 flex-shrink-0"/> {s.title}
                      </button>
                    ))}
                  </div>
                  <div className="space-y-4 text-left text-xs">
                    <h4 className="font-black text-slate-400 uppercase tracking-widest mb-4">Operaciones</h4>
                    {allServices.filter(s => s.category === 'Operaciones').map(s => (
                      <button key={s.id} onClick={() => navigate('services')} className="flex items-center gap-3 text-slate-600 hover:text-blue-600 w-full text-left font-bold transition-colors">
                        <s.icon className="w-4 h-4 flex-shrink-0"/> {s.title}
                      </button>
                    ))}
                  </div>
                  <div className="space-y-4 text-left text-xs">
                    <h4 className="font-black text-slate-400 uppercase tracking-widest mb-4">Estrategia</h4>
                    {allServices.filter(s => s.category === 'Estrategia').map(s => (
                      <button key={s.id} onClick={() => navigate('services')} className="flex items-center gap-3 text-slate-600 hover:text-blue-600 w-full text-left font-bold transition-colors">
                        <s.icon className="w-4 h-4 flex-shrink-0"/> {s.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

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
          
          {/* HERO SECTION */}
          <section className="relative pt-16 pb-24 md:pt-32 md:pb-40 bg-white overflow-hidden text-center">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 animate-bounce">
                <Sparkles className="w-4 h-4" /> Partner Tecnológico Integral
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none text-slate-900">
                Tu departamento TI, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">pero más inteligente.</span>
              </h1>
              <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                Elimina las barreras tecnológicas. Desde infraestructura física hasta automatización con IA, Omni TI unifica tu operación para que tú solo te enfoques en crecer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => navigate('services')} 
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-xl shadow-blue-200 hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  Explorar Soluciones <ArrowRight className="w-5 h-5"/>
                </button>
                <button 
                  onClick={() => navigate('roi')} 
                  className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-2xl font-black transition-all hover:bg-slate-50 flex items-center justify-center gap-3 shadow-sm"
                >
                  <BarChart className="w-5 h-5 text-emerald-500" /> Calcular Ahorro
                </button>
              </div>
            </div>
            {/* Decoración de fondo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[120px]"></div>
            </div>
          </section>

          {/* BARRA DE ESTADÍSTICAS - ACTUALIZADA PARA EMPRESA NUEVA */}
          <div className="border-y border-slate-100 bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { l: "Uptime Garantizado", v: "99.9%" },
                { l: "Soporte Remoto", v: "24/7" },
                { l: "Estándar de Seguridad", v: "ISO 27001" },
                { l: "Experiencia Técnica", v: "+10 Años" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-black text-slate-900 mb-2">{stat.v}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* SECCIÓN "¿TE SUENA FAMILIAR?" */}
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">¿Te suena familiar?</h2>
              <p className="text-slate-500 mb-16 font-medium text-lg">La tecnología debería trabajar para ti, no al revés.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { t: "Lentitud Operativa", d: "Procesos manuales y sistemas que fallan cuando más los necesitas.", i: Clock, c: "text-amber-500" },
                  { t: "Incertidumbre Digital", d: "¿Están mis datos seguros? ¿Qué pasa si pierdo mi información?", i: AlertCircle, c: "text-rose-500" },
                  { t: "Costos Ocultos", d: "Pagar múltiples proveedores y licencias sin ver resultados claros.", i: DollarSign, c: "text-emerald-500" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-left group">
                    <item.i className={`w-12 h-12 ${item.c} mb-8 group-hover:scale-110 transition-transform`} />
                    <h3 className="text-2xl font-black mb-4 text-slate-900">{item.t}</h3>
                    <p className="text-slate-500 leading-relaxed font-medium">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECCIÓN SOLUCIONES 360° */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-center md:text-left">
                <div className="max-w-xl">
                  <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-none">Soluciones 360° para la era moderna.</h2>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed">No somos solo soporte; somos la base sobre la que escalas tu negocio.</p>
                </div>
                <button onClick={() => navigate('services')} className="text-blue-600 font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:gap-5 transition-all group">
                  Ver catálogo completo <ArrowRight className="w-5 h-5"/>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {['Infraestructura', 'Operaciones', 'Estrategia'].map((cat, i) => (
                  <div key={i} className="bg-slate-50/50 p-12 rounded-[4rem] border border-slate-100 hover:shadow-2xl transition-all group relative overflow-hidden">
                    <div className="mb-10 inline-block p-5 bg-white text-blue-600 rounded-3xl shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all">
                      {cat === 'Infraestructura' ? <Network className="w-10 h-10" /> : cat === 'Operaciones' ? <ShieldCheck className="w-10 h-10" /> : <Zap className="w-10 h-10" />}
                    </div>
                    <h3 className="text-3xl font-black mb-8 text-slate-900 tracking-tight">{cat}</h3>
                    <ul className="space-y-5">
                      {allServices.filter(s => s.category === cat).map(s => (
                        <li key={s.id} className="flex items-center gap-3 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer" onClick={() => navigate('services')}>
                          <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" /> {s.title}
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => navigate('services')} className="mt-12 text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                      Ver detalles <ArrowRight className="w-4 h-4" />
                    </button>
                    {/* Elemento visual decorativo */}
                    <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:scale-125 transition-transform duration-1000 text-slate-300">
                      {cat === 'Infraestructura' ? <Network className="w-48 h-48" /> : cat === 'Operaciones' ? <ShieldCheck className="w-48 h-48" /> : <Zap className="w-48 h-48" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECCIÓN HERRAMIENTAS INTERACTIVAS */}
          <section className="py-24 bg-slate-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center text-white">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">¿Listo para dejar de perder tiempo?</h2>
              <p className="text-slate-400 mb-16 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
                Usa nuestras herramientas interactivas para entender tu nivel tecnológico actual o cuánto dinero podrías ahorrar hoy mismo.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                <div 
                  onClick={() => navigate('roi')} 
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3.5rem] text-left hover:bg-white/10 transition-all cursor-pointer group"
                >
                  <DollarSign className="w-14 h-14 text-emerald-500 mb-8" />
                  <h3 className="text-3xl font-black mb-4">Calculadora ROI</h3>
                  <p className="text-slate-400 font-medium mb-10 leading-relaxed">Mide el impacto financiero de la ineficiencia en tu equipo y descubre cuánto capital puedes recuperar.</p>
                  <button className="text-emerald-500 font-black text-sm uppercase tracking widest flex items-center gap-3 group-hover:gap-5 transition-all">
                    Iniciar cálculo <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                
                <div 
                  onClick={() => navigate('assessment')} 
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3.5rem] text-left hover:bg-white/10 transition-all cursor-pointer group"
                >
                  <Target className="w-14 h-14 text-blue-500 mb-8" />
                  <h3 className="text-3xl font-black mb-4">Test de Madurez</h3>
                  <p className="text-slate-400 font-medium mb-10 leading-relaxed">Pon a prueba tu empresa y obtén un plan de mejora gratuito basado en tu estado actual.</p>
                  <button className="text-blue-500 font-black text-sm uppercase tracking-widest flex items-center gap-3 group-hover:gap-5 transition-all">
                    Comenzar test <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            {/* Background Blurs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-10"></div>
          </section>

          {/* CTA FINAL */}
          <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="bg-blue-600 rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-none">Hagamos que la tecnología sea tu aliada.</h2>
                  <p className="text-blue-100 mb-12 text-xl font-medium max-w-xl mx-auto leading-relaxed">
                    Solicita una auditoría inicial sin compromiso y descubre el potencial real de tu infraestructura.
                  </p>
                  <button 
                    onClick={() => navigate('contact')}
                    className="bg-white text-blue-600 px-12 py-6 rounded-3xl font-black text-xl hover:bg-slate-50 transition-all shadow-xl active:scale-95"
                  >
                    Agendar Consultoría Gratuita
                  </button>
                </div>
                <Bot className="absolute -bottom-10 -right-10 w-72 h-72 text-white/10 -rotate-12" />
              </div>
            </div>
          </section>

        </main>
      )}

      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'services' && <ServicesPage services={allServices} />}
      {currentPage === 'roi' && <RoiCalculatorPage />}
      {currentPage === 'assessment' && <AssessmentPage navigate={navigate} />}
      {currentPage === 'contact' && <ContactPage />}

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-1 md:col-span-2 text-center md:text-left">
              <div className="flex items-center gap-2 mb-8 justify-center md:justify-start">
                <Bot className="text-blue-500 w-10 h-10" />
                <span className="font-black text-3xl text-white tracking-tighter">Omni TI</span>
              </div>
              <p className="max-w-sm mx-auto md:mx-0 leading-relaxed font-medium">
                Haciendo la tecnología empresarial accesible, segura y automática. Tu partner estratégico en Chile.
              </p>
            </div>
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8 text-center md:text-left">Empresa</h4>
              <ul className="space-y-4 font-bold text-sm text-center md:text-left">
                <li><button onClick={() => navigate('about')} className="hover:text-blue-400 transition-colors">Nosotros</button></li>
                <li><button onClick={() => navigate('services')} className="hover:text-blue-400 transition-colors">Servicios</button></li>
                <li><button onClick={() => navigate('roi')} className="hover:text-blue-400 transition-colors">Calculadora ROI</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8 text-center md:text-left">Conecta</h4>
              <ul className="space-y-4 font-bold text-sm text-center md:text-left">
                <li>Email: <a href="mailto:ventas@omniti.cl" className="hover:text-blue-400 transition-colors">ventas@omniti.cl</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/company/omni-ti/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">Omni TI</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-900 text-[10px] font-black text-center uppercase tracking-[0.4em] text-slate-600">
            &copy; {new Date().getFullYear()} OMNI TI. SANTIAGO, CHILE.
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- SUBPÁGINAS ---

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
        <h1 className="text-5xl md:text-9xl font-black mb-8 tracking-tighter leading-none">Catálogo <br/> Integral</h1>
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

function ContactPage() {
  return (
    <div className="bg-white min-h-screen pb-24 text-slate-700 text-center animate-in fade-in duration-500">
      <div className="bg-slate-900 text-white py-32 px-4">
        <h1 className="text-5xl md:text-9xl font-black mb-10 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Hablemos.</h1>
        <p className="text-2xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">Estamos listos para potenciar tu empresa.</p>
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
          <a href="https://www.linkedin.com/company/omni-ti/" target="_blank" rel="noreferrer" className="inline-block bg-slate-900 text-white px-16 py-6 rounded-3xl font-black text-2xl shadow-2xl hover:bg-blue-600 transition-colors">Ver Perfil</a>
        </div>
      </div>
    </div>
  );
}