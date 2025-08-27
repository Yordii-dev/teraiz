import {
  Award,
  BarChart3,
  Clock,
  Code,
  Database,
  DollarSign,
  Headphones,
  Settings,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import type { TranslationType } from "@/types/Translations";
import { COMPANY_NAME, HREF_HEADER } from "@/constants";
import T1 from "@/assets/testimonies/t1.jpg?url";
import T2 from "@/assets/testimonies/t2.jpg?url";
import T3 from "@/assets/testimonies/t3.jpg?url";
import T4 from "@/assets/testimonies/t4.png?url";

const es: TranslationType = {
  page: {
    title: `Software Inmobiliario - ${COMPANY_NAME}`,
  },
  formModal: {
    title: "Contactanos",

    nameLabel: "Tu nombre",
    namePlaceholder: "",

    mailLabel: "Tu correo de contacto",
    mailPlaceholder: "tu@mail.com",

    phoneLabel: "Tu número de teléfono",
    phonePlaceholder: "",

    textCtaBtn: "Hablar con un experto",
    textCtaBtnSending: "Enviando...",
  },
  successModal: {
    title: "¡Mensaje enviado!",
    description: "Nos pondremos en contacto contigo muy pronto.",
  },

  header: {
    tags: [
      {
        href: HREF_HEADER["home"],
        name: "Inicio",
      },
      {
        href: HREF_HEADER["services"],
        name: "Servicios",
      },
      {
        href: HREF_HEADER["testimonies"],
        name: "Testimonios",
      },
      {
        href: HREF_HEADER["faqs"],
        name: "Dudas",
      },
      {
        href: HREF_HEADER["contact"],
        name: "Contacto",
      },
    ],
    ctaText: "Cotiza gratis",
  },

  hero: {
    badge: "Desarrollo de Software Empresarial",
    title: {
      text: "Software para",
      emphasis: "Inmobiliarias Exitosas",
    },

    description: {
      text: "Software inmobiliario para",
      emphasis: "crecer y automatizar tu negocio.",
    },
    checks: [
      "CRM personalizado con automatización de leads y seguimiento inteligente",
      "Integraciones con portales inmobiliarios y herramientas existentes",
      "Soporte técnico especializado y mantenimiento continuo",
    ],
    ctaText: "Habla con un experto",
    socialsProof:
      "Análisis gratuito de procesos • Propuesta técnica personalizada • Sin compromiso",
    results: {
      title: "Nuestros Resultados",
      years: "Años Desarrollando Software",
      projects: "Proyectos Entregados",
      clients: "Países con Clientes",
      satisfaction: "Satisfacción Cliente",
      partner: {
        title: "Partner Tecnológico de Confianza",
        description:
          "Especializados en el sector inmobiliario con metodologías ágiles y tecnologías de vanguardia",
      },
    },
  },
  services: {
    title: "Servicios Especializados",
    description:
      "Soluciones completas de software para cada necesidad de tu inmobiliaria, respaldadas por más de 8 años de experiencia en el sector.",
    list: [
      {
        icon: Code,
        title: "Desarrollo Web Personalizado",
        description:
          "Portales inmobiliarios a medida con todas las funcionalidades que necesitas.",
        points: [
          "Diseño responsive",
          "SEO optimizado",
          "Integración MLS",
          "Panel administrativo",
        ],
      },
      {
        icon: Smartphone,
        title: "Aplicaciones Móviles",
        description:
          "Apps nativas para iOS y Android que potencian la experiencia de tus clientes.",
        points: [
          "Búsqueda avanzada",
          "Tours virtuales",
          "Chat integrado",
          "Notificaciones push",
        ],
      },
      {
        icon: Database,
        title: "CRM Inmobiliario",
        description:
          "Sistema de gestión de clientes diseñado específicamente para inmobiliarias.",
        points: [
          "Gestión de leads",
          "Seguimiento automatizado",
          "Reportes avanzados",
          "Integración email",
        ],
      },
      {
        icon: BarChart3,
        title: "Analytics & BI",
        description:
          "Análisis de datos e inteligencia de negocios para decisiones informadas.",
        points: [
          "Dashboards interactivos",
          "Predicción de precios",
          "Análisis de mercado",
          "KPIs personalizados",
        ],
      },
      {
        icon: Shield,
        title: "Seguridad & Hosting",
        description:
          "Infraestructura segura y confiable para tus aplicaciones críticas.",
        points: [
          "SSL certificado",
          "Backups automáticos",
          "Monitoreo 24/7",
          "CDN global",
        ],
      },
      {
        icon: Headphones,
        title: "Soporte Técnico",
        description:
          "Acompañamiento continuo y soporte especializado post-implementación.",
        points: [
          "Soporte 24/7",
          "Capacitación incluida",
          "Actualizaciones gratuitas",
          "Consultoría técnica",
        ],
      },
    ],
    ctaText: "Empieza a crecer hoy",
  },
  objections: {
    title: "Resolvemos tus Inquietudes",
    description:
      "Conocemos las preocupaciones comunes sobre la tecnología. Aquí están nuestras respuestas basadas en 8+ años de experiencia.",
    list: [
      {
        icon: DollarSign,
        objTitle: "Preocupación:",
        objection: "Es muy costoso desarrollar software personalizado",
        resoTitle: "Nuestra Solución:",
        resolution:
          "Nuestros proyectos se pagan solos en 6-12 meses por el aumento en eficiencia y ventas. Ofrecemos planes de pago flexibles y ROI garantizado.",
        stats: "ROI promedio: 300% en el primer año",
      },
      {
        icon: Clock,
        objTitle: "Preocupación:",
        objection: "Toma mucho tiempo implementar una solución",
        resoTitle: "Nuestra Solución:",
        resolution:
          "Nuestro proceso ágil permite tener prototipos funcionando en 2-3 semanas. Implementación completa en 2-4 meses con migración de datos incluida.",
        stats: "Tiempo promedio: 3 meses",
      },
      {
        icon: Settings,
        objTitle: "Preocupación:",

        objection: "Es muy complicado de usar para mi equipo",
        resoTitle: "Nuestra Solución:",
        resolution:
          "Diseñamos interfaces intuitivas específicas para inmobiliarias. Incluimos capacitación completa y soporte continuo para garantizar adopción exitosa.",
        stats: "95% tasa de adopción por usuarios",
      },
      {
        icon: Users,
        objTitle: "Preocupación:",

        objection: "No tenemos personal técnico para mantenerlo",
        resoTitle: "Nuestra Solución:",
        resolution:
          "Nos encargamos del mantenimiento, actualizaciones y soporte técnico. Tu equipo se enfoca en vender, nosotros en la tecnología.",
        stats: "Soporte 24/7 incluido",
      },
      {
        icon: Zap,
        objTitle: "Preocupación:",

        objection: "No se integra con nuestras herramientas actuales",
        resoTitle: "Nuestra Solución:",
        resolution:
          "Especializados en integraciones con MLS, CRMs, sistemas contables y más. Conectamos todo tu ecosistema tecnológico sin interrupciones.",
        stats: "+50 integraciones disponibles",
      },
    ],
  },
  testimonies: {
    title: {
      text: "Casos de Éxito",
      emphasis: "Comprobados",
    },

    description:
      "Resultados reales de inmobiliarias que han transformado su negocio con nuestras soluciones de software personalizado",
    list: [
      {
        name: "Alberto Gomez",
        role: "Directora Comercial",
        company: "Inmobiliaria Premier México",
        image: T1,
        content:
          "Desde que implementamos la plataforma de RealTechPro, nuestras ventas aumentaron 45% en 6 meses. La automatización del CRM nos ahorra 15 horas semanales y el ROI ha sido excepcional.",
        rating: 5,
        results: "+45% ventas en 6 meses",
        country: "🇲🇽",
      },
      {
        name: "Jhenifer Vasquez",
        role: "CEO",
        company: "Wilson Real Estate Group",
        image: T2,
        content:
          "The custom software solution transformed our business operations. We've seen a 60% increase in productivity and our agents close 30% more deals. Outstanding support throughout the entire process.",
        rating: 5,
        results: "+60% productividad",
        country: "🇺🇸",
      },
      {
        name: "Carlos Mendoza",
        role: "Gerente General",
        company: "PropiedadesColombia S.A.S",
        image: T3,
        content:
          "La mejor inversión tecnológica que hemos hecho. El sistema de analytics predictivos nos ayuda a identificar las mejores oportunidades. Hemos multiplicado por 3 nuestro volumen de ventas.",
        rating: 5,
        results: "3x volumen de ventas",
        country: "🇨🇴",
      },
      {
        name: "Ana Rodríguez",
        role: "Fundadora",
        company: "Urban Properties Argentina",
        image: T4,

        content:
          "El equipo de RealTechPro entendió perfectamente nuestras necesidades. El portal web y la app móvil han mejorado significativamente la experiencia de nuestros clientes. ROI del 300% en el primer año.",
        rating: 5,
        results: "300% ROI primer año",
        country: "🇦🇷",
      },
    ],
  },
  authority: {
    title: "Resultados que Hablan por Sí Solos",
    description:
      "Más de 8 años creando éxito para inmobiliarias en LATAM y Norteamérica",
    list: [
      { icon: Users, title: "150+", description: "Inmobiliarias exitosas" },
      {
        icon: TrendingUp,
        title: "45%",
        description: "Aumento promedio en ventas",
      },
      { icon: Award, title: "8+", description: "Años de experiencia" },
    ],
  },
  authorityMap: {
    title: "Presencia Internacional",
    description:
      "Más de 8 años creando soluciones exitosas para inmobiliarias en LATAM y Norteamérica",
    list: [
      {
        icon: "🇲🇽",
        country: "México",
        description: "25+ proyectos exitosos",
      },
      {
        icon: "🇺🇸",
        country: "Estados Unidos",
        description: "40+ proyectos exitosos",
      },
      {
        icon: "🇨🇴",
        country: "Colombia",
        description: "30+ proyectos exitosos",
      },
      {
        icon: "🇦🇷",
        country: "Argentina",
        description: "20+ proyectos exitosos",
      },
    ],
  },
  faqs: {
    title: "Preguntas Frecuentes",
    description:
      "Respuestas a las preguntas más comunes sobre nuestros servicios de desarrollo de software inmobiliario.",
    list: [
      {
        question: "¿Cuánto tiempo toma desarrollar una solución personalizada?",
        answer:
          "El tiempo varía según la complejidad, pero típicamente: Sitios web básicos (4-6 semanas), CRM personalizado (8-12 semanas), Apps móviles (10-16 semanas). Siempre entregamos prototipos funcionales en las primeras 2-3 semanas.",
      },
      {
        question: "¿Qué tipo de soporte ofrecen después del lanzamiento?",
        answer:
          "Ofrecemos soporte técnico 24/7, actualizaciones gratuitas durante el primer año, capacitación continua para tu equipo, y un gerente de cuenta dedicado. También incluimos monitoreo proactivo y backups automáticos.",
      },
      {
        question: "¿Pueden integrar con nuestros sistemas actuales?",
        answer:
          "Sí, somos expertos en integraciones. Conectamos con MLS, CRMs como Salesforce, sistemas contables como QuickBooks, plataformas de email marketing, redes sociales, y más de 50 herramientas comunes en el sector inmobiliario.",
      },
      {
        question: "¿Cómo garantizan la seguridad de nuestros datos?",
        answer:
          "Implementamos encriptación SSL/TLS, backups automáticos diarios, autenticación de dos factores, cumplimiento con GDPR y regulaciones locales, hosting en servidores certificados, y auditorías de seguridad regulares.",
      },
      {
        question: "¿Qué pasa si necesitamos cambios después del desarrollo?",
        answer:
          "Los primeros 3 meses incluyen ajustes menores sin costo. Para cambios mayores, ofrecemos planes de mantenimiento flexibles. Nuestro proceso ágil permite adaptaciones rápidas según evolucionen tus necesidades de negocio.",
      },
      {
        question: "¿Ofrecen capacitación para nuestro equipo?",
        answer:
          "Sí, incluimos capacitación completa: sesiones presenciales o virtuales, manuales detallados, videos tutoriales, y sesiones de repaso. Continuamos el soporte hasta que tu equipo esté 100% cómodo con la nueva tecnología.",
      },
      {
        question: "¿Cuál es el costo aproximado de una solución personalizada?",
        answer:
          "Los costos varían según las funcionalidades requeridas. Sitios web desde $5,000 USD, CRM personalizado desde $15,000 USD, Apps móviles desde $20,000 USD. Ofrecemos planes de pago flexibles y financiamiento disponible.",
      },
      {
        question:
          "¿Trabajan con inmobiliarias pequeñas o solo grandes empresas?",
        answer:
          "Trabajamos con inmobiliarias de todos los tamaños. Tenemos soluciones escalables desde agentes independientes hasta grandes corporativos. Nuestro enfoque se adapta al presupuesto y necesidades específicas de cada cliente.",
      },
    ],
  },
  cta: {
    title: {
      text: "Comienza tu transformación",
      emphasis: "digital hoy mismo",
    },

    description:
      "Únete a las 500+ inmobiliarias que ya están cerrando más deals, ahorrando tiempo y aumentando su rentabilidad con PropTech.",
    checks: [
      "Setup gratuito y migración de datos incluida",
      "Soporte 24/7 en español durante los primeros 30 días",
      "Capacitación completa para tu equipo",
      "Sin compromiso - cancela cuando quieras",
    ],
    ctaText: "Solicita tu asesoria sin costo",
    offer: {
      title: "Oferta de Lanzamiento",
      description:
        "Los primeros 50 clientes obtienen 3 meses gratis + setup personalizado sin costo",
    },
  },
  footer: {
    description:
      "La empresa de software inmobiliario más avanzada del mercado. Potenciamos el crecimiento de inmobiliarias con tecnología de punta.",
    sections: [
      {
        title: "Producto",
        details: ["Características", "Precios", "Integraciones", "API", "Demo"],
      },
      {
        title: "Soporte",
        details: [
          "Centro de Ayuda",
          "Documentación",
          "Capacitaciones",
          "Estado del Sistema",
          "Contacto",
        ],
      },
    ],
    contact: {
      title: "Contacto",
    },
    copyright: `© 2025 ${COMPANY_NAME}. Todos los derechos reservados.`,
    // terms: ["Política de Privacidad", "Términos de Servicio", "Cookies"],
  },
  wsp: {
    message:
      "Hola, me interesa conocer más sobre sus soluciones de software para inmobiliarias. ¿Podrían proporcionarme más información?",
    ariaLabel: "Contactar por WhatsApp",
  },
};

export default es;
