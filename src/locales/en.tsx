import type { TranslationType } from "../types/Translations";

const en: TranslationType = {
  page: {
    title: "Teraiz - Real Estate Technology",
  },
  formModal: {
    title: "Talk to an expert",
    inputPlaceholder: "Your contact email",
    textCtaBtn: "Talk to an expert",
    defaultDescription: {
      target_1:
        "Hi, I'm interested in the 40% discount on your real estate solutions. Could you contact me?",
      target_2: "Hi! I'd like to receive information about your services.",
      target_3: "",
    },
  },
  languageModal: {
    title: "Select your language",
    es: "Spanish",
    en: "English",
    fr: "French",
  },
  successModal: {
    title: "Thank you for your message!",
    description: "We have received your message and will get in touch soon.",
    textCtaBtn: "Close",
  },

  cta: {
    inputPlaceholder: "Your contact email",
    objections: ["Solutions in weeks", "Plans based on budget"],
  },

  hero: {
    title: "Organize and automate your agency",
    subtitle: "Less chaos. More sales. All in one system.",
    textCtaBtn: "Get a quote with 40% off",
    socialProof:
      "Proven trust: 8+ years transforming agencies in LATAM & North America.",
    socialProofShort: "8+ years transforming agencies.",
  },

  solutions: {
    title: (
      <h1 className="size-0 weight-semibold">
        Grow your agency <br />
        <span className="text-secondary">with tech</span>
      </h1>
    ),

    description: `Sticking to manual processes costs you time, sales, and opportunity.
    \nWe fix that: digitize your operations and manage properties, agents, payments, and land with ease.`,
    offers: ["1 year of free maintenance.", "Exclusive 40% discount."],
    textCtaBtn: "Contact us now",
  },

  services: {
    title: (
      <h1 className="size-1 weight-semibold">
        What <span className="text-secondary"> do we </span>
        <br />
        do for you?
      </h1>
    ),

    list: [
      {
        title: "We bring clients to you",
        description:
          "We create real estate websites that rank on Google, connect with WhatsApp, and generate real leads every week. You no longer depend only on listing portals.",
        textCtaBtn: "Get them",
      },
      {
        title: "Organize your agency in minutes",
        description:
          "Easy-to-use CRM to manage properties, agents, and clients. Everything stays in sync. Say goodbye to Excel and lost messages.",
        textCtaBtn: "Control",
      },
      {
        title: "Automate what no one wants to do",
        description:
          "Reminders, payments, contracts, follow-ups… all those time-consuming tasks—we automate them. So you and your team can focus on closing deals.",
        textCtaBtn: "Automate",
      },
      {
        title: "Make your brand stand out",
        description:
          "We help you build a strong presence: professional design, digital trust, and modern tools that set you apart from the local competition.",
        textCtaBtn: "Highlight",
      },
    ],
  },

  testimonies: {
    title: (
      <h1 className="size-1 weight-semibold">
        <span className="text-secondary">2025</span>
        <br />
        They grew.
        <br />
        Will you?
      </h1>
    ),

    list: [
      {
        title:
          "Teraiz transformed our operation: from Excel sheets to a complete and scalable system.",
        author: "Commercial Director",
        description: "Horizonte Real Estate Group",
      },
      {
        title:
          "We doubled our sales in 6 months with the custom system Teraiz built for us.",
        author: "CEO",
        description: "Altavista Real Estate",
      },
      {
        title:
          "Everything is finally in one place: properties, clients, agents, and automated tracking.",
        author: "Operations Manager",
        description: "Andes Real Estate Network",
      },
    ],
  },

  authority: {
    title: (
      <h1 className="size-0 weight-semibold">
        <span className="text-secondary">Experts in</span>
        <br />
        real estate
        <br />
        technology
      </h1>
    ),

    list: [
      {
        title: "+8 years",
        description:
          "Developing real estate systems that organize, automate, and help you grow.",
      },
      {
        title: "LATAM",
        description:
          "We’ve transformed real estate agencies in Peru, Colombia, Mexico, Chile, and more.",
      },
      {
        title: "North America",
        description:
          "We understand the challenges of the U.S. market and adapt solutions to its scale.",
      },
    ],
  },
  meet: {
    title: (
      <h1 className="size-0 weight-semibold">
        Schedule a <br />
        <span className="text-secondary">meeting</span>
        <br />
        with us
      </h1>
    ),

    description: `Do you run a real estate agency or sell properties?

      \n\nWe can help you organize your operations, automate processes, and increase sales.

      \nGet a free quote and expert advice with no obligation.`,
    textCtaBtn: "Talk to our experts",
  },
  faqs: {
    title: "Frequently Asked Questions",
    list: [
      {
        question: "What does the free quote include?",
        answer:
          "We analyze your needs, propose a personalized solution, and estimate the system cost. No strings attached.",
      },
      {
        question: "Do you work only with real estate agencies?",
        answer:
          "We specialize in real estate agencies, land developers, and companies that sell or rent properties. We know the industry well.",
      },
      {
        question: "Can I integrate WhatsApp or social media?",
        answer:
          "Yes. We can connect your system with WhatsApp, Facebook, Instagram, and more to automatically attract and serve clients.",
      },
      {
        question: "Do you have experience in Peru and other countries?",
        answer:
          "Yes. We've worked with companies in Peru, Mexico, Colombia, Chile, and the U.S. We adapt solutions to each market.",
      },
      {
        question: "What kind of systems do you develop?",
        answer:
          "We build CRMs, property managers, rental systems, maps, quote tools, payment automation, and more.",
      },
    ],
  },
  footer: {
    title: "Boost your real estate agency with real digital solutions",
    textCtaBtn: "Schedule a meeting",
    sections: [
      {
        title: "Services",
        details: [
          "CRM for real estate agencies",
          "Property portals and catalogs",
          "Management and control systems",
          "Mobile apps for agents and clients",
          "Lead generation landing pages",
          "Custom internal systems",
          "Apps for presales and launches",
          "Platforms for real estate franchises",
        ],
      },
      {
        title: "Technologies",
        details: [
          "Azure & AWS",
          "Oracle / SQL Server",
          "Power BI & Google Cloud",
          "Docker & DevOps",
          "ASP.NET Core / JavaScript",
          "DocuSign integration",
        ],
      },
      {
        title: "Strengths",
        details: [
          "Process automation",
          "Security and backup",
          "Custom scalability",
          "External integrations",
          "Deep technical expertise",
          "Agile project management",
        ],
      },
    ],
    copyright: "© 2025 Teraiz. Technology for the real estate sector.",
    socials: "Follow us on social media",
  },
};

export default en;
