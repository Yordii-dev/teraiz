import type { TranslationType } from "../types/Translations";

const fr: TranslationType = {
  formModal: {
    title: "Parlez à un expert",
    inputPlaceholder: "Votre e-mail de contact",
    textCtaBtn: "Parlez à un expert",
    defaultDescription: {
      target_1:
        "Bonjour, je suis intéressé par les 40 % de réduction sur vos solutions immobilières. Pourriez-vous me contacter ?",
      target_2:
        "Bonjour ! Je souhaite recevoir des informations sur vos services.",
      target_3: "",
    },
  },
  languageModal: {
    title: "Sélectionnez votre langue",
    es: "Espagnol",
    en: "Anglais",
    fr: "Français",
  },

  successModal: {
    title: "Merci pour votre message !",
    description:
      "Nous avons bien reçu votre message et nous vous contacterons bientôt.",
    textCtaBtn: "Fermer",
  },

  cta: {
    inputPlaceholder: "Votre email de contact",
    objections: ["Solutions en semaines", "Plans selon budget"],
  },

  hero: {
    title: "Organisez et automatisez votre agence",
    subtitle: "Moins de chaos. Plus de ventes. Tout dans un seul système.",
    textCtaBtn: "Demandez un devis -40%",
    socialProof:
      "Confiance prouvée : 8+ ans à transformer des agences en Amérique latine & du Nord.",
    socialProofShort: "8+ ans à transformer des agences.",
  },

  solutions: {
    title: (
      <h1 className="size-0 weight-semibold">
        Boostez votre agence <br />
        <span className="text-secondary">avec la tech</span>
      </h1>
    ),

    description: `Continuer avec des processus manuels vous fait perdre du temps, des ventes et des opportunités.
    \nNous avons la solution : digitalisez votre activité et gérez biens, agents, paiements et terrains sans complications.`,
    offers: ["1 an de maintenance offert.", "Remise exclusive de 40 %."],
    textCtaBtn: "Contactez-nous maintenant",
  },

  services: {
    title: (
      <h1 className="size-1 weight-semibold">
        Que <span className="text-secondary"> faisons-nous </span>
        <br />
        pour vous&nbsp;?
      </h1>
    ),

    list: [
      {
        title: "Nous attirons des clients pour vous",
        description:
          "Nous créons des sites web immobiliers qui se positionnent sur Google, se connectent à WhatsApp et génèrent de vrais leads chaque semaine. Vous ne dépendez plus uniquement des portails.",
        textCtaBtn: "Obtenir des clients",
      },
      {
        title: "Organisez votre agence en quelques minutes",
        description:
          "CRM simple à utiliser pour gérer biens, conseillers et clients. Tout est synchronisé. Fini Excel et les messages perdus.",
        textCtaBtn: "Contrôler les processus",
      },
      {
        title: "Automatisez ce que personne ne veut faire",
        description:
          "Rappels, paiements, contrats, suivis… toutes ces tâches chronophages, on les automatise. Vous pouvez vous concentrer sur les ventes.",
        textCtaBtn: "Automatiser",
      },
      {
        title: "Faites briller votre marque",
        description:
          "Nous vous aidons à construire une présence forte : design professionnel, confiance numérique et outils modernes pour vous démarquer de la concurrence locale.",
        textCtaBtn: "Mettre en valeur ma marque",
      },
    ],
  },
  testimonies: {
    title: (
      <h1 className="size-1 weight-semibold">
        <span className="text-secondary">2025</span>
        <br />
        Ils ont grandi
        <br />
        Qu’attendez-vous&nbsp;?
      </h1>
    ),

    list: [
      {
        title:
          "TechRaiz a transformé notre gestion : des feuilles Excel à un système complet et évolutif.",
        author: "Directeur Commercial",
        description: "Groupe Immobilier Horizonte",
      },
      {
        title:
          "Nous avons doublé nos ventes en 6 mois grâce au système sur mesure développé par TechRaiz.",
        author: "PDG",
        description: "Immobilier Altavista",
      },
      {
        title:
          "Tout est enfin centralisé : biens, clients, agents et suivi automatique.",
        author: "Responsable des Opérations",
        description: "Réseau Immobilier des Andes",
      },
    ],
  },
  authority: {
    title: (
      <h1 className="size-0 weight-semibold">
        <span className="text-secondary">Experts en</span>
        <br />
        technologie
        <br />
        immobilière
      </h1>
    ),

    list: [
      {
        title: "+8 ans",
        description:
          "Nous développons des systèmes immobiliers qui organisent, automatisent et font croître votre activité.",
      },
      {
        title: "Amérique latine",
        description:
          "Nous avons transformé des agences immobilières au Pérou, en Colombie, au Mexique, au Chili et ailleurs.",
      },
      {
        title: "Amérique du Nord",
        description:
          "Nous comprenons les défis du marché américain et adaptons des solutions à son échelle.",
      },
    ],
  },
  meet: {
    title: (
      <h1 className="size-0 weight-semibold">
        Planifiez une <br />
        <span className="text-secondary">réunion</span>
        <br />
        avec nous
      </h1>
    ),

    description: `Vous avez une agence immobilière ou vous vendez des biens ?

    \n\nNous pouvons vous aider à organiser votre activité, automatiser vos processus et vendre davantage.

    \nDemandez un devis gratuit et recevez des conseils sans engagement.`,
    textCtaBtn: "Parlez à nos experts",
  },
  faqs: {
    title: "Questions fréquentes",
    list: [
      {
        question: "Que comprend le devis gratuit ?",
        answer:
          "Nous analysons vos besoins, proposons une solution personnalisée et estimons le coût du système. Sans engagement.",
      },
      {
        question: "Travaillez-vous uniquement avec des agences immobilières ?",
        answer:
          "Nous sommes spécialisés dans les agences immobilières, les lotisseurs et les entreprises qui vendent ou louent des biens. Nous connaissons bien le secteur.",
      },
      {
        question: "Puis-je intégrer WhatsApp ou les réseaux sociaux ?",
        answer:
          "Oui. Nous pouvons connecter votre système à WhatsApp, Facebook, Instagram et d'autres canaux pour attirer et servir automatiquement vos clients.",
      },
      {
        question: "Avez-vous de l'expérience au Pérou et dans d'autres pays ?",
        answer:
          "Oui. Nous avons travaillé avec des entreprises au Pérou, au Mexique, en Colombie, au Chili et aux États-Unis. Nous adaptons nos solutions à chaque marché.",
      },
      {
        question: "Quel type de systèmes développez-vous ?",
        answer:
          "Nous créons des CRM, des gestionnaires de biens, des systèmes de location, des cartes, des estimateurs, de l'automatisation des paiements, et plus encore.",
      },
    ],
  },
  footer: {
    title:
      "Boostez votre agence immobilière avec de vraies solutions numériques",
    textCtaBtn: "Planifier une réunion",
    sections: [
      {
        title: "Services",
        details: [
          "CRM pour agences immobilières",
          "Portails et catalogues de biens",
          "Systèmes de gestion et de contrôle",
          "Applications mobiles pour agents et clients",
          "Pages d’atterrissage pour la prospection",
          "Systèmes internes personnalisés",
          "Applications pour préventes et lancements",
          "Plateformes pour franchises immobilières",
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
          "Intégration avec DocuSign",
        ],
      },
      {
        title: "Points forts",
        details: [
          "Automatisation des processus",
          "Sécurité et sauvegarde",
          "Scalabilité sur mesure",
          "Intégrations externes",
          "Expertise technique approfondie",
          "Gestion de projets agile",
        ],
      },
    ],
    copyright: "© 2025 TechRaiz. Technologie pour le secteur immobilier.",
    socials: "Suivez-nous sur les réseaux",
  },
};

export default fr;
