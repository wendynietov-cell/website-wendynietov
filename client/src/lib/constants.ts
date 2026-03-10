import { Home, Briefcase, BarChart, Newspaper, User, Mail, Utensils, Smartphone, Store, Camera, Terminal, Cloud, Shield } from "lucide-react";

export const NAVIGATION = [
  { name: "Inicio", path: "/", icon: Home },
  { name: "Servicios", path: "/servicios", icon: Briefcase,
    subLinks: [
      { name: "Tecnología Restaurantes", path: "/servicios/tecnologia-restaurantes" },
      { name: "Estrategia Plataformas", path: "/servicios/plataformas" },
      { name: "Cocinas Ocultas", path: "/servicios/cocinas-ocultas" },
      { name: "Economía Creativa", path: "/servicios/economia-creativa" },
    ]
  },
  { name: "Estudios", path: "/estudios", icon: BarChart },
  { name: "Insights", path: "/insights", icon: Newspaper },
  { name: "Sobre Mí", path: "/sobre-mi", icon: User },
  { name: "Contacto", path: "/contacto", icon: Mail },
];

export const SERVICES = [
  {
    slug: "tecnologia-restaurantes",
    title: "Tecnología para Restaurantes",
    shortDesc: "Sistemas POS, integraciones de delivery y optimización de operaciones gastronómicas.",
    icon: Utensils,
    metrics: [
      { label: "Reducción de tiempos", value: "-35%" },
      { label: "Aumento de ticket", value: "+15%" },
      { label: "Precisión de inventario", value: "99.9%" }
    ],
    problem: "Los restaurantes modernos sufren por la fragmentación tecnológica: múltiples tablets para delivery, un POS desactualizado y pérdida de control sobre los márgenes operativos reales.",
    solution: "Implementamos una arquitectura unificada que centraliza todas las órdenes, sincroniza inventarios en tiempo real y proporciona dashboards de inteligencia de negocios para tomar decisiones basadas en datos."
  },
  {
    slug: "plataformas",
    title: "Estrategia de Plataformas",
    shortDesc: "Escalabilidad, retención y marketplaces para startups de alto crecimiento.",
    icon: Smartphone,
    metrics: [
      { label: "Escalabilidad", value: "10x" },
      { label: "Costo de adquisición", value: "-40%" },
      { label: "Retención de usuarios", value: "+25%" }
    ],
    problem: "Las startups de marketplaces enfrentan el clásico problema del 'huevo y la gallina', además de arquitecturas monolíticas que colapsan durante picos de demanda.",
    solution: "Diseñamos estrategias de liquidez de red, sistemas de matching algorítmico y microservicios escalables para soportar hipercrecimiento transaccional sostenido."
  },
  {
    slug: "cocinas-ocultas",
    title: "Cocinas Ocultas (Ghost Kitchens)",
    shortDesc: "Despliegue operativo y tecnológico para marcas virtuales multicanal.",
    icon: Store,
    metrics: [
      { label: "Eficiencia de espacio", value: "+50%" },
      { label: "Tiempo de entrega", value: "< 20 min" },
      { label: "Lanzamiento de marca", value: "2 sem" }
    ],
    problem: "Operar múltiples marcas desde una sola cocina genera caos en la preparación, empaque incorrecto de pedidos y un enrutamiento logístico ineficiente.",
    solution: "Desplegamos Kitchen Display Systems (KDS) avanzados, ruteo predictivo de repartidores y flujos de ensamblaje optimizados para maximizar la capacidad de producción por metro cuadrado."
  },
  {
    slug: "economia-creativa",
    title: "Economía Creativa",
    shortDesc: "Sistemas de monetización y distribución para creadores UGC.",
    icon: Camera,
    metrics: [
      { label: "Monetización", value: "+300%" },
      { label: "Engagement", value: "4.5x" },
      { label: "Diversificación", value: "3 canales" }
    ],
    problem: "Los creadores de contenido dependen de la monetización de un solo algoritmo (YouTube, TikTok) y carecen de infraestructura para escalar sus propios productos digitales.",
    solution: "Arquitectamos plataformas propias de membresía, comercio electrónico sin fricción y distribución omnicanal para que los creadores sean dueños de su audiencia."
  }
];

export const STUDIES = [
  {
    id: 1,
    title: "Arquitecto de Plataformas LATAM",
    company: "DiDi Food",
    period: "2021 - 2023",
    description: "Lideré la unificación de microservicios para la expansión en 4 países, logrando soportar más de 2M de transacciones diarias.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Lead Tech Operations",
    company: "Rappi",
    period: "2018 - 2021",
    description: "Diseño e implementación del algoritmo de asignación de pedidos (Courier Matching) reduciendo el tiempo de entrega promedio en 12%.",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "CTO & Co-founder",
    company: "GhostKitchens Mx",
    period: "2016 - 2018",
    description: "Desarrollo del sistema operativo completo (POS, KDS, Logistics) para la primera red de cocinas ocultas operando 15 marcas virtuales.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=60"
  }
];

export const SKILLS = [
  { name: "Arquitectura de Microservicios", percentage: 95, icon: Cloud },
  { name: "Estrategia de Marketplaces", percentage: 90, icon: Smartphone },
  { name: "Operaciones Gastronómicas Tech", percentage: 85, icon: Utensils },
  { name: "Node.js & React Ecosystem", percentage: 88, icon: Terminal },
  { name: "Ciberseguridad y Cumplimiento", percentage: 75, icon: Shield },
];

export const INSIGHTS = [
  {
    id: 1,
    title: "El futuro de las Ghost Kitchens tras la pandemia",
    excerpt: "Analizamos cómo la rentabilidad se trasladó del hipercrecimiento a la eficiencia operativa pura por metro cuadrado.",
    category: "Operaciones",
    date: "12 Oct 2023",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Escalabilidad algorítmica en Apps de Delivery",
    excerpt: "Por qué el 'Courier Matching' es el cuello de botella de cualquier plataforma de última milla y cómo resolverlo.",
    category: "Arquitectura",
    date: "28 Ago 2023",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "UGC y la descentralización del e-commerce",
    excerpt: "Cómo los creadores de contenido están reemplazando a las vitrinas tradicionales en la decisión de compra.",
    category: "Tendencias",
    date: "05 Jul 2023",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=600&auto=format&fit=crop&q=60"
  }
];
