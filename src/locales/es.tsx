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
import EmersonImg from "@/assets/testimonies/emerson.webp?url";
import AnaImg from "@/assets/testimonies/ana.webp?url";
import ApalImg from "@/assets/testimonies/apal.webp?url";
import LotizaImg from "@/assets/testimonies/lotiza.webp?url";

const es: TranslationType = {
  seo: {
    index: {
      title: `Consultoría y Desarrollo de Software a Medida | ${COMPANY_NAME}`,
      metas: {
        description: `${COMPANY_NAME} es una empresa de consultoría y desarrollo de software a medida. Analizamos, validamos y construimos sistemas escalables para empresas y emprendedores.`,
        keywords:
          "consultoría de software, desarrollo de software a medida, análisis de proyectos digitales, desarrollo de sistemas empresariales, software SaaS, automatización de procesos, transformación digital",

        toShared: {
          openGraph: {
            title: `Consultoría y Desarrollo de Software | ${COMPANY_NAME}`,
            description:
              "Análisis, validación y desarrollo de sistemas de software a medida para empresas y emprendedores.",
          },
          twitter: {
            title: `Consultoría y Desarrollo de Software | ${COMPANY_NAME}`,
            description:
              "Construimos software a medida con enfoque estratégico y escalable.",
          },
        },
      },
    },

    contact: {
      title: `Contacto | ${COMPANY_NAME}`,
      metas: {
        description: `Agenda una reunión con ${COMPANY_NAME} y recibe asesoría profesional para evaluar y desarrollar tu proyecto de software.`,
        keywords:
          "contacto consultoría de software, reunión de análisis de proyecto, desarrollo de sistemas a medida, asesoría tecnológica empresarial",
        toShared: {
          openGraph: {
            title: `Agenda una reunión | ${COMPANY_NAME}`,
            description:
              "Hablemos de tu idea o sistema y evaluemos juntos la mejor solución tecnológica.",
          },
          twitter: {
            title: `Agenda una reunión | ${COMPANY_NAME}`,
            description:
              "Asesoría y evaluación profesional de proyectos de software.",
          },
        },
      },
    },

    thankyou: {
      title: `Solicitud Enviada | ${COMPANY_NAME}`,
      metas: {
        description: `Gracias por contactar a ${COMPANY_NAME}. Revisaremos tu solicitud y coordinaremos una reunión para analizar tu proyecto.`,
        keywords:
          "solicitud enviada, consultoría de software, evaluación de proyectos digitales, desarrollo de software empresarial",
        toShared: {
          openGraph: {
            title: `Gracias por contactarnos | ${COMPANY_NAME}`,
            description:
              "Tu solicitud fue recibida. Nuestro equipo te contactará para evaluar tu proyecto.",
          },
          twitter: {
            title: `Gracias por contactarnos | ${COMPANY_NAME}`,
            description:
              "Pronto coordinaremos una reunión para analizar tu proyecto.",
          },
        },
      },
    },
  },

  formModal: {
    title: "Hablemos de tu proyecto",
    description: `En ${COMPANY_NAME} analizamos, validamos y desarrollamos sistemas de software a medida. Completa el formulario y agenda una conversación con nuestro equipo.`,

    nameLabel: "Nombre completo",
    namePlaceholder: "Ej. Juan Pérez",

    mailLabel: "Correo de contacto",
    mailPlaceholder: "tu@empresa.com",

    phoneLabel: "Teléfono / WhatsApp",
    phonePlaceholder: "+51 999 999 999",

    textCtaBtn: "Agendar reunión",
    textCtaBtnSending: "Enviando solicitud...",
  },

  successModal: {
    title: "Solicitud enviada",
    description:
      "Hemos recibido tu mensaje. Nuestro equipo se pondrá en contacto contigo para coordinar una reunión y evaluar tu proyecto.",
    textBackBtn: "Volver al inicio",
  },

  header: {
    tags: [
      {
        id: 1,
        href: HREF_HEADER.home,
        name: "Inicio",
      },
      {
        id: 2,
        href: HREF_HEADER.services,
        name: "Sistemas",
      },
      {
        id: 3,
        href: HREF_HEADER.testimonies,
        name: "Testimonios",
      },
      // {
      //   id: 4,
      //   href: HREF_HEADER.presence,
      //   name: "Presencia",
      // },
      // {
      //   id: 5,
      //   href: HREF_HEADER.weGetIt,
      //   name: "Te entendemos",
      // },
      {
        id: 6,
        href: HREF_HEADER.faqs,
        name: "Dudas",
      },
      {
        id: 7,
        href: HREF_HEADER.contact,
        name: "Contacto",
      },
    ],
    ctaText: "Cotiza gratis",
  },

  hero: {
    badge: "Consultoría y Desarrollo de Software",
    title: {
      text: "Desarrollamos",
      emphasis: "Sistemas que Funcionan",
    },
    description: {
      text: "Asesoramos y construimos",
      emphasis: "proyectos digitales reales, no promesas.",
    },
    checks: [
      "Asesoría técnica para ideas y proyectos en construcción",
      "Desarrollo de sistemas y plataformas a medida",
      "Acompañamiento técnico de inicio a fin",
    ],
    ctaText: "Solicitar asesoría",
    socialsProof: "Análisis inicial • Propuesta clara • Sin compromiso",

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
    title: "Nuestros Servicios",
    description:
      "Soluciones tecnológicas adaptadas a la etapa y necesidad de cada proyecto.",

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
      text: "Casos de éxito",
      emphasis: "reales",
    },
    description:
      "Proyectos que demuestran cómo ayudamos a empresas y emprendedores a desarrollar sus ideas.",
    list: [
      {
        name: "Emerson",
        role: "Emprendedor",
        company: "El Cruce – Taller Mecánico",
        image: EmersonImg,
        content:
          "El sistema de Teraiz transformó la gestión de nuestro taller. Ahora controlamos reparaciones, repuestos, tiempos y costos en un solo lugar. Redujimos errores operativos y mejoramos significativamente la atención al cliente.",
        rating: 5,
        results: "Control total del taller",
        country: "🇵🇪",
      },
      {
        name: "Ana",
        role: "Universitaria / RRHH",
        company: "Hermos – Empresa Industrial",
        image: AnaImg,
        content:
          "La plataforma de gestión vacacional nos permitió automatizar solicitudes, validar antigüedad y llevar un control claro por empleado. El flujo de aprobación por correo facilitó el trabajo tanto para RRHH como para los jefes directos.",
        rating: 5,
        results: "Procesos de RRHH automatizados",
        country: "🇵🇪",
      },
      {
        name: "Cristian",
        role: "Gerente de Operaciones",
        company: "Empresa R&R – ApalWorkflow",
        image: ApalImg,
        content:
          "Con ApalWorkflow logramos centralizar la logística administrativa y la operación en campo. La app para operadores y el panel administrativo nos dieron trazabilidad completa de rutas, pedidos y estados en tiempo real.",
        rating: 5,
        results: "Logística en tiempo real",
        country: "🇵🇪",
      },
      {
        name: "Inmobiliaria Lotiza",
        role: "Dirección Comercial",
        company: "Lotiza – Plataforma Inmobiliaria",
        image: LotizaImg,
        content:
          "El SaaS multiempresa desarrollado por Teraiz nos permitió gestionar proyectos de lotización, ventas, contratos y recordatorios automáticos. Hoy contamos con un ecosistema digital completo para el sector inmobiliario.",
        rating: 5,
        results: "Gestión inmobiliaria integral",
        country: "🇵🇪",
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
    description: "Dudas comunes antes de trabajar con Teraiz Consultora.",
    list: [
      {
        question: "¿Qué servicios ofrece Teraiz Consultora?",
        answer:
          "Brindamos consultoría y asesoría tecnológica, además del desarrollo de sistemas a medida, plataformas SaaS y aplicaciones móviles.",
      },
      {
        question:
          "¿Pueden ayudarnos si solo tenemos una idea o dudas técnicas?",
        answer:
          "Sí. Acompañamos desde la etapa de idea, validamos la viabilidad técnica y definimos la mejor solución antes de desarrollar.",
      },
      {
        question: "¿Cómo es el primer contacto y el proceso inicial?",
        answer:
          "Agendamos una conversación gratuita, entendemos tu necesidad y te proponemos una ruta clara: asesoría, consultoría o desarrollo, según tu caso.",
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
      "Hola, quiero conocer más sobre las soluciones de software y consultoría de Teraiz.",
    ariaLabel: "Contactar a Teraiz por WhatsApp",
  },
};

export default es;
