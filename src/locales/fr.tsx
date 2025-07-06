import type { TranslationType } from "../types/Translations";

const fr: TranslationType = {
  page: {
    title: "Teraiz - Tecnologia inmobiliaria",
  },
  formModal: {
    title: "Contactanos",
    inputPlaceholder: "Tu email de contacto",
    textCtaBtn: "Enviar Mensaje",
    defaultDescription: {
      target_1:
        "Hola, me interesa conocer más sobre sus soluciones de software personalizadas para inmobiliarias. Me gustaría recibir una propuesta detallada para mi empresa.",
      target_2: "SEGUNDA DESCRIPCION",
      target_3: "",
    },
  },
  // languageModal: {
  //   title: "Selecciona tu idioma",
  //   es: "Español",
  //   en: "Ingles",
  //   fr: "Frances",
  // },
  successModal: {
    title: "¡Mensaje enviado!",
    description: "Nos pondremos en contacto contigo muy pronto.",
    // textCtaBtn: "Close",
  },

  // cta: {
  //   inputPlaceholder: "Tu email de contacto",
  //   objections: ["Soluciones en semanas", "Planes segun presupuesto"],
  // },

  hero: {
    title: `
      Transformamos
      inmobiliarias
      con tecnología de vanguardia`,
    subtitle: `Soluciones de software personalizadas que automatizan procesos, aumentan ventas y escalan negocios inmobiliarios. +8 años creando éxito en LATAM y Norteamérica.`,
    textCtaBtn: "Cotiza con 40% de descuento",
    socialProof:
      "Confianza comprobada: +8 años transformando inmobiliarias en LATAM & Norteamérica.",

    socialProofShort: "+8 años transformando inmobiliarias.",
  },

  solutions: {
    title: (
      <h1 className="size-0 weight-semibold">
        Crece tu inmobiliaria <br />
        <span className="text-secondary">con tecnología</span>
      </h1>
    ),
    description: `Seguir con procesos manuales te hace perder tiempo, ventas y oportunidad.
      \nNosotros lo solucionamos: digitaliza tu operación y gestiona propiedades, agentes, cobros y terrenos sin complicaciones.`,
    offers: [
      `1 año gratis en 
      mantenimiento.`,
      "40% de descuento exclusivo.",
    ],
    textCtaBtn: "Contactanos ahora",
  },

  services: {
    title: (
      <h1 className="size-1 weight-semibold">
        ¿Que <span className="text-secondary"> hacemos </span>
        <br />
        por ti?
      </h1>
    ),
    list: [
      {
        title: "Captamos clientes por ti",
        description:
          "Creamos sitios web inmobiliarios que posicionan en Google, conectan con WhatsApp y generan leads reales cada semana. Ya no dependes solo de portales.",
        textCtaBtn: "Obtenerlos",
      },
      {
        title: "Organiza tu inmobiliaria en minutos",
        description:
          "CRM fácil de usar para gestionar propiedades, asesores y clientes. Todo sincronizado. Adiós a los Excel y mensajes perdidos.",
        textCtaBtn: "Controlar",
      },
      {
        title: "Automatiza lo que nadie quiere hacer",
        description:
          "Recordatorios, pagos, contratos, seguimientos… todo lo que consume tiempo, lo automatizamos. Así tú y tu equipo se enfocan en cerrar ventas.",
        textCtaBtn: "Automatizar",
      },
      {
        title: "Haz que tu marca destaque",
        description:
          "Te ayudamos a construir una presencia sólida: diseño profesional, confianza digital y herramientas modernas que te diferencian de la competencia local.",
        textCtaBtn: "Destacar",
      },
    ],
  },

  testimonies: {
    title: (
      <h1 className="size-1 weight-semibold">
        <span className="text-secondary"> 2025 </span>
        <br />
        Ellos crecieron
        <br />
        ¿Que esperas?
      </h1>
    ),
    list: [
      {
        title:
          "Teraiz transformó nuestra operación: de hojas de Excel a un sistema integral y escalable.",
        author: "Director Comercial",
        description: "Grupo Inmobiliario Horizonte",
      },
      {
        title:
          "Duplicamos ventas en 6 meses con el sistema personalizado que nos desarrolló Teraiz.",
        author: "CEO",
        description: "Inmobiliaria Altavista",
      },
      {
        title:
          "Por fin tenemos todo en un solo lugar: propiedades, clientes, agentes y seguimiento automático.",
        author: "Gerente de Operaciones",
        description: "Red de Bienes Raíces Andes",
      },
    ],
  },
  authority: {
    title: (
      <h1 className="size-0 weight-semibold">
        <span className="text-secondary">Expertos en </span>
        <br />
        tecnologia
        <br />
        inmobiliaria
      </h1>
    ),
    list: [
      {
        title: "+8 años",
        description:
          "Desarrollando sistemas inmobiliarios que ordenan, automatizan y hacen crecer.",
      },
      {
        title: "LATAM",
        description:
          "Hemos transformado inmobiliarias en Perú, Colombia, México, Chile y más.",
      },
      {
        title: "Norte America",
        description:
          "Conocemos los retos del mercado en EE.UU. y adaptamos soluciones a su escala.",
      },
    ],
  },

  meet: {
    title: (
      <h1 className="size-0 weight-semibold">
        Agenda una <br />
        <span className="text-secondary">reunion</span>
        <br />
        con nosotros
      </h1>
    ),
    description: `¿Tienes una inmobiliaria o vendes propiedades?

        \n\nPodemos ayudarte a organizar tu operación, automatizar procesos y vender más.

        \nCotiza gratis tu sistema y obtén asesoría sin compromiso.`,

    textCtaBtn: "Habla con un experto",
  },
  faqs: {
    title: "Preguntas frecuentes",
    list: [
      {
        question: "¿Qué incluye la cotización gratuita?",
        answer:
          "Analizamos tus necesidades, te proponemos una solución personalizada y estimamos el costo del sistema. Sin compromiso.",
      },
      {
        question: "¿Trabajan solo con inmobiliarias?",
        answer:
          "Nos especializamos en inmobiliarias, lotizadoras y empresas que venden o alquilan propiedades. Conocemos bien el sector.",
      },
      {
        question: "¿Puedo integrar WhatsApp o redes sociales?",
        answer:
          "Sí. Podemos conectar tu sistema con WhatsApp, Facebook, Instagram y más, para captar y atender clientes automáticamente.",
      },
      {
        question: "¿Tienen experiencia en Perú y otros países?",
        answer:
          "Sí. Hemos trabajado con empresas en Perú, México, Colombia, Chile y EE.UU. Adaptamos las soluciones a cada mercado.",
      },
      {
        question: "¿Qué tipo de sistemas desarrollan?",
        answer:
          "Creamos CRMs, gestores de propiedades, sistemas de alquiler, mapas, cotizadores, automatización de cobros y más.",
      },
    ],
  },

  footer: {
    title: "Impulsa tu inmobiliaria con soluciones digitales reales",
    textCtaBtn: "Agendar una reunion",
    sections: [
      {
        title: "Servicios",
        details: [
          "CRM para inmobiliarias",
          "Portales y catálogos de propiedades",
          "Sistemas de gestión y control",
          "Apps móviles para agentes y clientes",
          "Landing pages de captación",
          "Sistemas internos personalizados",
          "Apps para preventa y lanzamientos",
          "Plataformas para franquicias inmobiliarias",
        ],
      },
      {
        title: "Tecnologías",
        details: [
          "Azure & AWS",
          "Oracle / SQL Server",
          "Power BI & Google Cloud",
          "Docker & DevOps",
          "ASP.NET Core / JavaScript",
          "Integración con DocuSign",
        ],
      },
      {
        title: "Fortalezas",
        details: [
          "Automatización de procesos",
          "Seguridad y respaldo",
          "Escalabilidad a medida",
          "Integraciones externas",
          "Expertise técnico profundo",
          "Gestión ágil de proyectos",
        ],
      },
    ],
    copyright: "© 2025 Teraiz. Tecnologia para el sector inmobiliario.",
    socials: "Siguenos en redes",
  },
};

export default fr;
