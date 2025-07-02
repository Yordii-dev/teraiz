import type { TranslationType } from "../types/Translations";

const es: TranslationType = {
  formModal: {
    title: "Hablar con un experto",
    inputPlaceholder: "Tu email de contacto",
    textCtaBtn: "Habla con un experto",
    defaultDescription: {
      target_1:
        "Hola, me interesa el 40% de descuento en sus soluciones inmobiliarias. ¿Podrían escribirme?.",
      target_2: "Hola!, deseo recibir informacion sobre sus servicios",
      target_3: "",
    },
  },
  successModal: {
    title: "Thank you for your message!",
    description: "We have received your message and will get in touch soon.",
    textCtaBtn: "Close",
  },

  cta: {
    inputPlaceholder: "Tu email de contacto",
    objections: ["Soluciones en semanas", "Planes segun presupuesto"],
  },

  hero: {
    title: "Ordena y automatiza tu inmobiliaria",
    subtitle: "Menos caos. Más ventas. Todo en un solo sistema.",
    textCtaBtn: "Cotiza con 40% de descuento",
    socialProof:
      "Confianza comprobada: +8 años transformando inmobiliarias en LATAM & Norteamérica.",

    socialProofShort: "+8 años transformando inmobiliarias.",
  },

  solutions: {
    title: (
      <h1 className="size-0 weight-semibold">
        Haz crecer tu inmobiliaria <br />
        <span className="text-secondary">con tecnología</span>
      </h1>
    ),
    description: `Seguir con procesos manuales te hace perder tiempo, ventas y oportunidad.
      \nNosotros lo solucionamos: digitaliza tu operación y gestiona propiedades, agentes, cobros y terrenos sin complicaciones.`,
    offers: [
      "1 año de mantenimiento sin costo.",
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
        textCtaBtn: "Obtener clientes",
      },
      {
        title: "Organiza tu inmobiliaria en minutos",
        description:
          "CRM fácil de usar para gestionar propiedades, asesores y clientes. Todo sincronizado. Adiós a los Excel y mensajes perdidos.",
        textCtaBtn: "Controlar procesos",
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
        textCtaBtn: "Destacar mi marca",
      },
    ],
  },

  testimonies: {
    title: (
      <h1 className="size-0 weight-semibold">
        <span className="text-secondary"> 2025 </span>
        <br />
        Ellos crecieron
        <br />
        ¿Que esperas?
      </h1>
    ),
    list: [
      {
        title: "TechRaiz ordenó nuestro caos con un sistema hecho a medida.",
        author: "Director Comercial",
        description:
          "Usábamos Excel, WhatsApp y documentos por todos lados. La agencia entendió nuestro proceso y lo digitalizó todo. Ahora somos más eficientes y vendemos más sin crecer en personal.",
      },
      {
        title:
          "Nuestra inmobiliaria creció gracias al sistema que nos desarrolló TechRaiz.",
        author: "CEO",
        description:
          "Desde la atención al cliente hasta la gestión interna, todo está más rápido y claro. Trabajar con una agencia que entiende el rubro inmobiliario marcó la diferencia.",
      },
      {
        title: "Todo en un solo sistema: propiedades, clientes y agentes.",
        author: "Gerente de Operaciones",
        description:
          "Con TechRaiz pasamos de procesos manuales a reportes automáticos. Tomamos decisiones basadas en datos y tenemos visibilidad completa del negocio.",
      },
    ],
  },
  authority: {
    title: (
      <h1 className="size-1 weight-semibold">
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

    textCtaBtn: "Habla con nuestros expertos",
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
    copyright: "© 2025 TechRaiz. Tecnologia para el sector inmobiliario.",
    socials: "Siguenos en redes",
  },
};

export default es;
