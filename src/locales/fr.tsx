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

const fr: TranslationType = {
  page: {
    index: {
      title: `Logiciel Immobilier | ${COMPANY_NAME}`,
      metas: {
        description: `${COMPANY_NAME} développe des logiciels sur mesure pour les agences immobilières. Numérisez votre entreprise avec des solutions PropTech, CRM immobilier, automatisation des processus et plateformes personnalisées.`,
        keywords:
          "logiciel immobilier, CRM immobilier, développement de logiciels sur mesure, numérisation des agences immobilières, PropTech, automatisation immobilière, système pour agences immobilières",

        toShared: {
          openGraph: {
            title: `Logiciel Immobilier sur Mesure | ${COMPANY_NAME}`,
            description:
              "Numérisez votre entreprise immobilière avec des solutions logicielles personnalisées, CRM et automatisation.",
          },

          twitter: {
            title: `Logiciel Immobilier sur Mesure | ${COMPANY_NAME}`,
            description:
              "Numérisez votre entreprise immobilière avec des solutions logicielles personnalisées, CRM et automatisation.",
          },
        },
      },
    },

    contact: {
      title: `Contactez-nous | ${COMPANY_NAME}`,
      metas: {
        description: `Contactez ${COMPANY_NAME} pour des solutions logicielles sur mesure et personnalisées pour les agences immobilières et les entreprises du secteur.`,
        keywords:
          "contact, logiciel immobilier sur mesure, CRM immobilier, solutions PropTech, automatisation immobilière, logiciel personnalisé",
        toShared: {
          openGraph: {
            title: `Contactez-nous | ${COMPANY_NAME}`,
            description: `Contactez ${COMPANY_NAME} pour des solutions logicielles sur mesure et personnalisées pour les agences immobilières et les entreprises du secteur.`,
          },
          twitter: {
            title: `Contactez-nous | ${COMPANY_NAME}`,
            description: `Contactez ${COMPANY_NAME} pour des solutions logicielles sur mesure et personnalisées pour les agences immobilières et les entreprises du secteur.`,
          },
        },
      },
    },

    thankyou: {
      title: `Merci | ${COMPANY_NAME}`,
      metas: {
        description: `Merci d'avoir contacté ${COMPANY_NAME}. Notre équipe se mettra en relation avec vous rapidement pour vous proposer des solutions logicielles personnalisées pour votre agence immobilière.`,
        keywords:
          "merci, message envoyé, logiciel immobilier sur mesure, CRM immobilier, solutions PropTech, automatisation immobilière",
        toShared: {
          openGraph: {
            title: `Merci | ${COMPANY_NAME}`,
            description: `Merci d'avoir contacté ${COMPANY_NAME}. Notre équipe se mettra en relation avec vous rapidement pour vous proposer des solutions logicielles personnalisées pour votre agence immobilière.`,
          },
          twitter: {
            title: `Merci | ${COMPANY_NAME}`,
            description: `Merci d'avoir contacté ${COMPANY_NAME}. Notre équipe se mettra en relation avec vous rapidement pour vous proposer des solutions logicielles personnalisées pour votre agence immobilière.`,
          },
        },
      },
    },
  },

  formModal: {
    title: "Contactez-nous",
    description: `Gérez efficacement votre agence immobilière avec ${COMPANY_NAME}. Remplissez le formulaire et notre équipe vous contactera.`,
    nameLabel: "Votre nom",
    namePlaceholder: "",

    mailLabel: "Votre adresse e-mail",
    mailPlaceholder: "vous@email.com",

    phoneLabel: "Votre numéro de téléphone",
    phonePlaceholder: "",

    textCtaBtn: "Parler à un expert",
    textCtaBtnSending: "Envoi en cours...",
  },
  successModal: {
    title: "Message envoyé !",
    description: "Nous vous contacterons très bientôt.",
    textBackBtn: "Retour à l'accueil",
  },
  header: {
    tags: [
      {
        id: 1,
        href: HREF_HEADER.home,
        name: "Accueil",
      },
      {
        id: 2,
        href: HREF_HEADER.services,
        name: "Services",
      },
      {
        id: 3,
        href: HREF_HEADER.testimonies,
        name: "Témoignages",
      },
      {
        id: 4,
        href: HREF_HEADER.presence,
        name: "Présence",
      },
      {
        id: 5,
        href: HREF_HEADER.weGetIt,
        name: "Nous comprenons",
      },
      {
        id: 6,
        href: HREF_HEADER.faqs,
        name: "FAQs",
      },
      {
        id: 7,
        href: HREF_HEADER.contact,
        name: "Contact",
      },
    ],
    ctaText: "Obtenez un devis gratuit",
  },
  hero: {
    badge: "Développement de logiciels d’entreprise",
    title: {
      text: "Logiciel pour",
      emphasis: "Agences Immobilières à Succès",
    },
    description: {
      text: "Logiciel immobilier pour",
      emphasis: "développer et automatiser votre agence.",
    },

    checks: [
      "CRM personnalisé avec automatisation des leads et suivi intelligent",
      "Intégrations avec des portails immobiliers et outils existants",
      "Support technique spécialisé et maintenance continue",
    ],
    ctaText: "Parlez à un expert",
    socialsProof:
      "Analyse gratuite des processus • Proposition technique personnalisée • Sans engagement",

    results: {
      title: "Nos Résultats",
      years: "Années à créer des logiciels",
      projects: "Projets livrés",
      clients: "Pays clients",
      satisfaction: "Satisfaction client",
      partner: {
        title: "Partenaire technologique de confiance",
        description:
          "Experts en immobilier avec des méthodes agiles et technologies avancées",
      },
    },
  },
  services: {
    title: "Services Spécialisés",
    description:
      "Solutions logicielles complètes pour chaque besoin de votre agence immobilière, avec plus de 8 ans d'expérience dans le secteur.",
    list: [
      {
        icon: Code,
        title: "Développement Web Sur Mesure",
        description:
          "Portails immobiliers personnalisés avec toutes les fonctionnalités nécessaires.",
        points: [
          "Design responsive",
          "SEO optimisé",
          "Intégration MLS",
          "Panneau d’administration",
        ],
      },
      {
        icon: Smartphone,
        title: "Applications Mobiles",
        description:
          "Applications natives iOS et Android pour améliorer l’expérience client.",
        points: [
          "Recherche avancée",
          "Visites virtuelles",
          "Chat intégré",
          "Notifications push",
        ],
      },
      {
        icon: Database,
        title: "CRM Immobilier",
        description:
          "Système de gestion de clients conçu spécialement pour les agences immobilières.",
        points: [
          "Gestion des leads",
          "Suivi automatisé",
          "Rapports avancés",
          "Intégration email",
        ],
      },
      {
        icon: BarChart3,
        title: "Analytics & BI",
        description:
          "Analyse de données et business intelligence pour des décisions éclairées.",
        points: [
          "Tableaux de bord interactifs",
          "Prédiction des prix",
          "Analyse de marché",
          "KPIs personnalisés",
        ],
      },
      {
        icon: Shield,
        title: "Sécurité & Hébergement",
        description:
          "Infrastructure sécurisée et fiable pour vos applications critiques.",
        points: [
          "Certificat SSL",
          "Sauvegardes automatiques",
          "Surveillance 24/7",
          "CDN mondial",
        ],
      },
      {
        icon: Headphones,
        title: "Support Technique",
        description:
          "Assistance continue et support spécialisé après la mise en œuvre.",
        points: [
          "Support 24/7",
          "Formation incluse",
          "Mises à jour gratuites",
          "Conseil technique",
        ],
      },
    ],
    ctaText: "Commencez à croître dès aujourd’hui",
  },
  objections: {
    title: "Nous Répondons à Vos Inquiétudes",
    description:
      "Nous connaissons les préoccupations courantes liées à la technologie. Voici nos réponses, basées sur plus de 8 ans d’expérience.",
    list: [
      {
        icon: DollarSign,
        objTitle: "Préoccupation :",
        objection: "Le développement sur mesure est trop coûteux",
        resoTitle: "Notre Solution :",
        resolution:
          "Nos projets s’amortissent en 6 à 12 mois grâce à l’augmentation de l’efficacité et des ventes. Plans de paiement flexibles et ROI garanti.",
        stats: "ROI moyen : 300 % la première année",
      },
      {
        icon: Clock,
        objTitle: "Préoccupation :",
        objection: "La mise en œuvre prend trop de temps",
        resoTitle: "Notre Solution :",
        resolution:
          "Notre méthode agile livre des prototypes fonctionnels en 2–3 semaines. Mise en œuvre complète en 2 à 4 mois, migration des données incluse.",
        stats: "Durée moyenne : 3 mois",
      },
      {
        icon: Settings,
        objTitle: "Préoccupation :",
        objection: "C’est trop compliqué à utiliser pour mon équipe",
        resoTitle: "Notre Solution :",
        resolution:
          "Nous concevons des interfaces intuitives pour les agences immobilières. Formation complète et support continu pour une adoption réussie.",
        stats: "Taux d’adoption : 95 %",
      },
      {
        icon: Users,
        objTitle: "Préoccupation :",
        objection: "Nous n’avons pas d’équipe technique pour le gérer",
        resoTitle: "Notre Solution :",
        resolution:
          "Nous nous occupons de la maintenance, des mises à jour et du support. Votre équipe vend, nous gérons la technologie.",
        stats: "Support 24/7 inclus",
      },
      {
        icon: Zap,
        objTitle: "Préoccupation :",
        objection: "Cela ne s’intègre pas à nos outils actuels",
        resoTitle: "Notre Solution :",
        resolution:
          "Experts en intégrations avec MLS, CRM, systèmes comptables, etc. Nous connectons tout votre écosystème sans interruption.",
        stats: "+50 intégrations disponibles",
      },
    ],
  },
  testimonies: {
    title: {
      text: "Histoires de Succès",
      emphasis: "Prouvées",
    },

    description:
      "Résultats réels d'entreprises ayant transformé leur activité grâce à nos solutions logicielles personnalisées",
    list: [
      {
        name: "Alberto Gomez",
        role: "Administrateur",
        company: "Entreprise locale au Mexique",
        image: T1,
        content:
          "Avec Teraiz, nous avons optimisé tous nos processus internes et de vente. En seulement 6 mois, nos opérations ont augmenté de 50 % et l'équipe gagne 10 heures par semaine en efficacité.",
        rating: 5,
        results: "+50% opérations en 6 mois",
        country: "🇲🇽",
      },
      {
        name: "Jhenifer Vasquez",
        role: "Administrateur",
        company: "Startup technologique aux USA",
        image: T2,
        content:
          "La solution Teraiz a complètement transformé notre gestion interne. La productivité de l'équipe a augmenté de 65 % et les ventes ont progressé de 35 %. Le support a été exceptionnel tout au long du processus.",
        rating: 5,
        results: "+65% productivité",
        country: "🇺🇸",
      },
      {
        name: "Carlos Mendoza",
        role: "Administrateur",
        company: "Entreprise familiale en Colombie",
        image: T3,
        content:
          "Investir dans Teraiz a été décisif pour notre croissance. Le système d'analyse prédictive nous permet de détecter les opportunités clés, triplant notre volume de ventes en moins d'un an.",
        rating: 5,
        results: "3x volume de ventes",
        country: "🇨🇴",
      },
      {
        name: "Ana Rodríguez",
        role: "Administrateur",
        company: "Entreprise locale en Argentine",
        image: T4,
        content:
          "L'équipe Teraiz a parfaitement compris nos besoins. La nouvelle plateforme web et l'application mobile ont considérablement amélioré l'expérience client et nous ont permis d'atteindre un ROI de 320 % la première année.",
        rating: 5,
        results: "320% ROI première année",
        country: "🇦🇷",
      },
    ],
  },

  authority: {
    title: "Des Résultats Qui Parlent d’Eux-Mêmes",
    description:
      "Plus de 8 ans de succès auprès des agences immobilières en Amérique latine et du Nord",
    list: [
      { icon: Users, title: "150+", description: "Agences à succès" },
      {
        icon: TrendingUp,
        title: "45%",
        description: "Croissance moyenne des ventes",
      },
      { icon: Award, title: "8+", description: "Années d’expérience" },
    ],
  },
  authorityMap: {
    title: "Présence Internationale",
    description:
      "Plus de 8 ans à créer des solutions performantes pour les agences immobilières en Amérique latine et du Nord",
    list: [
      {
        icon: "🇲🇽",
        country: "Mexique",
        description: "25+ projets réussis",
      },
      {
        icon: "🇺🇸",
        country: "États-Unis",
        description: "40+ projets réussis",
      },
      {
        icon: "🇨🇴",
        country: "Colombie",
        description: "30+ projets réussis",
      },
      {
        icon: "🇦🇷",
        country: "Argentine",
        description: "20+ projets réussis",
      },
    ],
  },
  faqs: {
    title: "Foire aux Questions",
    description:
      "Réponses aux questions les plus fréquentes sur nos services de développement logiciel pour l’immobilier.",
    list: [
      {
        question:
          "Combien de temps prend le développement d’une solution sur mesure ?",
        answer:
          "Cela dépend de la complexité. En général : sites web basiques (4–6 semaines), CRM sur mesure (8–12 semaines), applis mobiles (10–16 semaines). Nous livrons toujours des prototypes fonctionnels sous 2–3 semaines.",
      },
      {
        question: "Quel type de support offrez-vous après le lancement ?",
        answer:
          "Nous proposons un support technique 24/7, des mises à jour gratuites la première année, une formation continue pour votre équipe, un gestionnaire dédié, un monitoring proactif et des sauvegardes automatiques.",
      },
      {
        question: "Pouvez-vous intégrer nos systèmes existants ?",
        answer:
          "Oui, nous sommes experts en intégration. Nous connectons avec MLS, CRM (ex. Salesforce), systèmes comptables (ex. QuickBooks), emailing, réseaux sociaux et plus de 50 outils utilisés dans l’immobilier.",
      },
      {
        question: "Comment garantissez-vous la sécurité de nos données ?",
        answer:
          "Nous utilisons le chiffrement SSL/TLS, des sauvegardes automatiques quotidiennes, l’authentification à deux facteurs, la conformité RGPD et locale, l’hébergement certifié et des audits de sécurité réguliers.",
      },
      {
        question: "Que se passe-t-il si nous avons besoin de modifications ?",
        answer:
          "Les 3 premiers mois incluent des ajustements mineurs gratuits. Pour les changements importants, nous offrons des plans de maintenance flexibles. Notre méthode agile permet des adaptations rapides.",
      },
      {
        question: "Proposez-vous une formation pour notre équipe ?",
        answer:
          "Oui, formation complète incluse : sessions en ligne ou sur place, manuels détaillés, vidéos tutorielles et sessions de révision. Nous accompagnons jusqu’à ce que votre équipe soit à l’aise.",
      },
      {
        question: "Quel est le coût approximatif d’une solution sur mesure ?",
        answer:
          "Les prix varient selon les fonctionnalités. Sites web dès 5 000 USD, CRM sur mesure dès 15 000 USD, applis mobiles dès 20 000 USD. Plans de paiement flexibles et financement disponibles.",
      },
      {
        question:
          "Travaillez-vous avec de petites agences ou seulement les grandes ?",
        answer:
          "Nous collaborons avec des agences de toutes tailles. Nos solutions s’adaptent des agents indépendants aux grands groupes. Notre approche s’ajuste au budget et aux besoins spécifiques de chaque client.",
      },
    ],
  },
  cta: {
    title: {
      text: "Commencez votre transformation",
      emphasis: "digitale dès aujourd’hui",
    },

    description:
      "Rejoignez plus de 500 agences immobilières qui concluent plus de ventes, gagnent du temps et augmentent leur rentabilité grâce à la PropTech.",
    checks: [
      "Mise en place gratuite et migration des données incluse",
      "Support 24/7 en espagnol pendant les 30 premiers jours",
      "Formation complète pour votre équipe",
      "Sans engagement – annulez à tout moment",
    ],
    ctaText: "Consultation gratuite",
    offer: {
      title: "Offre de Lancement",
      description:
        "Les 50 premiers clients bénéficient de 3 mois gratuits + mise en place personnalisée offerte",
    },
  },
  footer: {
    description:
      "L'éditeur de logiciels immobiliers le plus avancé du marché. Nous aidons les agences à croître grâce à une technologie de pointe.",
    sections: [
      {
        title: "Produit",
        details: ["Fonctionnalités", "Tarifs", "Intégrations", "API", "Démo"],
      },
      {
        title: "Assistance",
        details: [
          "Centre d’aide",
          "Documentation",
          "Formations",
          "État du système",
          "Contact",
        ],
      },
    ],
    contact: {
      title: "Contact",
    },
    copyright: `© 2025 ${COMPANY_NAME}. Tous droits réservés.`,
    // terms: [
    //   "Politique de confidentialité",
    //   "Conditions d’utilisation",
    //   "Cookies",
    // ],
  },
  wsp: {
    message:
      "Bonjour, je souhaite en savoir plus sur vos solutions logicielles pour les agences immobilières. Pourriez-vous me donner plus d’informations ?",
    ariaLabel: "Contacter via WhatsApp",
  },
};

export default fr;
