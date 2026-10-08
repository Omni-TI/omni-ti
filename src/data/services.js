import {
  Cpu, Network, Video, Phone, ShieldCheck, Headphones, Database, Package,
  Code2, Bot, Briefcase, GraduationCap,
} from 'lucide-react';

// Estilos por categoría (clases completas para que Tailwind las genere)
export const CATEGORIES = {
  Infraestructura: {
    icon: Network,
    tagline: 'La base física y de red sobre la que funciona todo lo demás.',
    chip: 'bg-azul-50 text-azul-700 border-azul-200',
    iconBox: 'bg-azul-50 text-azul-600',
    check: 'text-azul-500',
    bar: 'bg-azul-500',
    ring: 'hover:border-azul-200',
  },
  Operaciones: {
    icon: ShieldCheck,
    tagline: 'Continuidad, seguridad y respaldo de tu operación diaria.',
    chip: 'bg-verde-50 text-verde-700 border-verde-200',
    iconBox: 'bg-verde-50 text-verde-600',
    check: 'text-verde-500',
    bar: 'bg-verde-500',
    ring: 'hover:border-verde-200',
  },
  Estrategia: {
    icon: Briefcase,
    tagline: 'Dirección tecnológica, automatización y capacitación.',
    chip: 'bg-brand-50 text-brand-700 border-brand-200',
    iconBox: 'bg-brand-50 text-brand-600',
    check: 'text-brand-500',
    bar: 'bg-brand-500',
    ring: 'hover:border-brand-200',
  },
};

export const CATEGORY_NAMES = Object.keys(CATEGORIES);

export const SERVICES = [
  {
    id: 'iot', category: 'Infraestructura', icon: Cpu,
    title: 'Oficinas Inteligentes y Domótica (IoT)',
    description: 'Transformamos espacios de trabajo en entornos autónomos y eficientes para reducir costos.',
    items: ['Sensores de presencia y clima', 'Iluminación automatizada', 'Gestión remota de espacios'],
    problem: 'Se paga climatización e iluminación por espacios vacíos y nadie tiene visibilidad real de cómo se usa la oficina.',
    solution: 'Instalamos sensores y automatizaciones que ajustan clima y luz según la ocupación, con un panel para controlar todo de forma remota.',
    faqs: [
      { q: '¿Se puede instalar en una oficina que ya está en uso?', a: 'Sí. Planificamos la instalación por zonas y en horarios que no interrumpan tu operación.' },
      { q: '¿Necesito cambiar toda mi iluminación?', a: 'No necesariamente. Evaluamos qué se puede integrar con lo existente antes de proponer reemplazos.' },
    ],
  },
  {
    id: 'cableado', category: 'Infraestructura', icon: Network,
    title: 'Cableado Estructurado',
    description: 'La base física de tu red con certificación y estándares internacionales.',
    items: ['Instalación profesional', 'Certificación Fluke', 'Auditoría y Mantenimiento'],
    problem: 'Cables sin rotular, puntos de red que fallan y una red lenta cuyo origen nadie logra encontrar.',
    solution: 'Diseñamos, instalamos y certificamos el cableado con normas internacionales, y dejamos todo documentado y rotulado.',
    faqs: [
      { q: '¿Qué significa que el cableado esté certificado?', a: 'Que cada punto se mide con un equipo certificador (Fluke) y se entrega un informe con los resultados de cada enlace.' },
      { q: '¿Pueden ordenar un rack que ya existe?', a: 'Sí. Hacemos auditoría, rotulado y reordenamiento del cableado existente.' },
    ],
  },
  {
    id: 'videovigilancia', category: 'Infraestructura', icon: Video,
    title: 'Videovigilancia y Seguridad Física',
    description: 'Protección integral mediante analítica de video y control físico de áreas.',
    items: ['CCTV IP Alta Resolución', 'Control de Acceso Biométrico', 'Integración de Red'],
    problem: 'Cámaras que no graban cuando se necesitan, accesos sin registro y ninguna forma de revisar qué pasó.',
    solution: 'Implementamos CCTV IP y control de acceso integrados a tu red, con grabación respaldada y acceso remoto seguro.',
    faqs: [
      { q: '¿Puedo ver las cámaras desde el celular?', a: 'Sí, con acceso remoto configurado de forma segura y con permisos por usuario.' },
      { q: '¿Se integra con el control de acceso?', a: 'Sí. Podemos asociar eventos de acceso a la grabación correspondiente.' },
    ],
  },
  {
    id: 'telefonia', category: 'Infraestructura', icon: Phone,
    title: 'Telefonía IP y Comunicaciones',
    description: 'Comunicaciones unificadas de alta fidelidad para empresas modernas.',
    items: ['Centrales VoIP / PBX Virtual', 'Videoconferencia profesional', 'Movilidad empresarial'],
    problem: 'Cuentas telefónicas caras, anexos que no funcionan fuera de la oficina y reuniones con mala calidad de audio.',
    solution: 'Migramos tu telefonía a una central IP o virtual, con anexos móviles y salas de videoconferencia bien equipadas.',
    faqs: [
      { q: '¿Puedo conservar mis números actuales?', a: 'En la mayoría de los casos sí, mediante portabilidad numérica. Lo confirmamos en el diagnóstico.' },
      { q: '¿Funciona con teletrabajo?', a: 'Sí. Los anexos pueden usarse desde el celular o el computador en cualquier lugar.' },
    ],
  },
  {
    id: 'ciberseguridad', category: 'Operaciones', icon: ShieldCheck,
    title: 'Ciberseguridad',
    description: 'Protección avanzada de datos y blindaje contra amenazas externas.',
    items: ['Preparación para ISO 27001', 'Firewall y Redes Seguras', 'Phishing y Vulnerabilidades'],
    problem: 'Un solo correo falso o una contraseña débil pueden detener tu empresa, y casi nadie sabe qué hacer si ocurre.',
    solution: 'Reducimos tu superficie de ataque con firewall, políticas de acceso, revisión de vulnerabilidades y simulacros de phishing para tu equipo.',
    faqs: [
      { q: '¿Qué pasa si ya sufrí un incidente?', a: 'Escríbenos de inmediato a soporte. Contener el incidente es lo primero; luego revisamos cómo ocurrió y cómo evitarlo.' },
      { q: '¿Me ayudan con requisitos de ISO 27001?', a: 'Te acompañamos en la preparación técnica: brechas, políticas y controles. La certificación la otorga un organismo externo.' },
    ],
  },
  {
    id: 'soporte', category: 'Operaciones', icon: Headphones,
    title: 'Soporte y Mantenimiento TI',
    description: 'Garantizamos la continuidad operativa de tu infraestructura.',
    items: ['Contratos Recurrentes', 'Mesa de Ayuda (Help Desk)', 'Mantenimiento Preventivo'],
    problem: 'Cada falla detiene a tu equipo y dependes de que alguien “sepa de computadores” para resolverla.',
    solution: 'Un equipo técnico a tu disposición con mesa de ayuda, monitoreo y mantenimiento preventivo para evitar que las fallas ocurran.',
    faqs: [
      { q: '¿Cómo pido ayuda?', a: 'Escribiendo a soporte@omniti.cl. Los clientes con contrato reciben además canales y tiempos de respuesta definidos.' },
      { q: '¿Atienden en terreno?', a: 'Sí, en Santiago. Para otras ciudades lo coordinamos según el caso.' },
    ],
  },
  {
    id: 'datos', category: 'Operaciones', icon: Database,
    title: 'Gestión de Datos y Backup',
    description: 'Seguridad y resiliencia para la información vital de tu negocio.',
    items: ['Servidores NAS/SAN', 'Backup en la Nube', 'Recuperación ante desastres'],
    problem: 'Información repartida en computadores personales y respaldos que nadie ha probado restaurar.',
    solution: 'Centralizamos tus datos, automatizamos los respaldos (local y nube) y probamos la recuperación para que funcione cuando se necesite.',
    faqs: [
      { q: '¿Cada cuánto se respalda la información?', a: 'Se define contigo según qué tan crítica sea cada información; puede ser diario o incluso continuo.' },
      { q: '¿Qué pasa si falla el servidor?', a: 'Dejamos un plan de recuperación documentado y probado para restablecer el servicio lo antes posible.' },
    ],
  },
  {
    id: 'productos', category: 'Operaciones', icon: Package,
    title: 'Productos Digitales y Plantillas',
    description: 'Herramientas listas para potenciar la productividad inmediata.',
    items: ['Plantillas Excel avanzadas', 'Manuales PDF Inteligentes', 'Packs de Recursos'],
    problem: 'Se pierde tiempo armando desde cero planillas y documentos que ya deberían existir.',
    solution: 'Ofrecemos plantillas y manuales listos para usar, y podemos adaptarlos a la forma de trabajar de tu empresa.',
    faqs: [
      { q: '¿Puedo pedir una plantilla a medida?', a: 'Sí. Cuéntanos qué proceso quieres cubrir y te cotizamos una versión personalizada.' },
    ],
  },
  {
    id: 'desarrollo', category: 'Estrategia', icon: Code2,
    title: 'Desarrollo Web y Soluciones Low-Code',
    description: 'Digitalización ágil para procesos corporativos de alta velocidad.',
    items: ['Sitios Web Corporativos', 'Apps de gestión Low-Code', 'Integración vía API'],
    problem: 'Procesos que viven en planillas y correos, y herramientas que no se hablan entre sí.',
    solution: 'Construimos sitios y aplicaciones de gestión a la medida, con plataformas low-code cuando conviene para entregar más rápido.',
    faqs: [
      { q: '¿Cuánto demora un proyecto?', a: 'Depende del alcance. Una app de gestión simple puede estar operativa en pocas semanas; lo definimos en la propuesta.' },
      { q: '¿Se integra con los sistemas que ya uso?', a: 'Sí, cuando el sistema ofrece API o exportación de datos.' },
    ],
  },
  {
    id: 'ia', category: 'Estrategia', icon: Bot,
    title: 'Automatización con IA',
    description: 'Inteligencia artificial aplicada para eliminar burocracia manual.',
    items: ['Chatbots de atención', 'Flujos de trabajo IA', 'Reportes y Predicción'],
    problem: 'Tu equipo repite las mismas tareas todos los días: responder lo mismo, copiar datos, armar reportes.',
    solution: 'Identificamos las tareas repetitivas y las automatizamos con flujos e IA, manteniendo siempre a una persona en las decisiones importantes.',
    faqs: [
      { q: '¿Mis datos se usan para entrenar modelos públicos?', a: 'Diseñamos las soluciones cuidando qué información se comparte y con qué proveedor. Lo definimos contigo desde el inicio.' },
      { q: '¿Por dónde conviene empezar?', a: 'Por un proceso concreto y repetitivo. El Diagnóstico TI del sitio te ayuda a identificarlo.' },
    ],
  },
  {
    id: 'consultoria', category: 'Estrategia', icon: Briefcase,
    title: 'Consultoría y Transformación Digital',
    description: 'Estrategia y acompañamiento en tu evolución tecnológica.',
    items: ['Diagnóstico inicial', 'Hoja de ruta digital', 'Asesoría en Licitaciones'],
    problem: 'Mucha tecnología y poca claridad sobre qué priorizar, cuánto invertir y en qué orden.',
    solution: 'Evaluamos tu situación actual y entregamos una hoja de ruta priorizada, con costos y plazos estimados.',
    faqs: [
      { q: '¿Qué recibo al final del diagnóstico?', a: 'Un informe con hallazgos, riesgos y una hoja de ruta ordenada por prioridad e impacto.' },
    ],
  },
  {
    id: 'capacitacion', category: 'Estrategia', icon: GraduationCap,
    title: 'Capacitación y Formación',
    description: 'Transferencia de conocimiento técnico para empoderar a tu equipo.',
    items: ['Cursos presenciales', 'Academia Online', 'Workshops de IA'],
    problem: 'La tecnología está implementada, pero el equipo no la aprovecha o no sabe usarla de forma segura.',
    solution: 'Formamos a tu equipo con cursos y workshops prácticos, adaptados a su nivel y a las herramientas que ya usan.',
    faqs: [
      { q: '¿Se pueden hacer a medida para mi equipo?', a: 'Sí. Ajustamos contenido, duración y modalidad (presencial u online).' },
    ],
  },
];

export const getService = (id) => SERVICES.find((s) => s.id === id);
