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

const en: TranslationType = {
  page: {
    index: {
      title: `Real Estate Software | ${COMPANY_NAME}`,
      metas: {       
        description: `${COMPANY_NAME} develops custom software for real estate companies. Digitize your business with PropTech solutions, real estate CRM, process automation, and personalized platforms.`,
        keywords: "real estate software, real estate CRM, custom software development, digitalization of real estate, PropTech, real estate automation, real estate system",      
        
        toShared: {
          openGraph: {
            title: `Custom Real Estate Software | ${COMPANY_NAME}`,
            description: "Digitize your real estate business with personalized software solutions, CRM, and automation."
          },
          
          twitter: {
            title: `Custom Real Estate Software | ${COMPANY_NAME}`,
            description: "Digitize your real estate business with personalized software solutions, CRM, and automation."
          }
        }
      }
    },

    contact: {
      title: `Contact Us | ${COMPANY_NAME}`,
      metas: {
        description: `Get in touch with ${COMPANY_NAME} for custom and personalized software solutions for real estate companies and businesses in the sector.`,
        keywords: "contact, custom real estate software, real estate CRM, PropTech solutions, real estate automation, personalized software",
        toShared: {
          openGraph: {
            title: `Contact Us | ${COMPANY_NAME}`,
            description: `Get in touch with ${COMPANY_NAME} for custom and personalized software solutions for real estate companies and businesses in the sector.`
          },
          twitter: {
            title: `Contact Us | ${COMPANY_NAME}`,
            description: `Get in touch with ${COMPANY_NAME} for custom and personalized software solutions for real estate companies and businesses in the sector.`
          }
        }
      }
    }
  },

  formModal: {
    title: "Contact Us",
    nameLabel: "Your name",
    namePlaceholder: "",

    mailLabel: "Your contact email",
    mailPlaceholder: "you@email.com",

    phoneLabel: "Your phone number",
    phonePlaceholder: "",

    textCtaBtn: "Talk to an expert",
    textCtaBtnSending: "Sending...",
  },
  successModal: {
    title: "Message sent!",
    description: "We’ll get in touch with you very soon.",
  },
  header: {
    tags: [
      {
        id: 1,
        href: HREF_HEADER["home"],
        name: "Home",
      },
      {
      id: 2,
        href: HREF_HEADER["services"],
        name: "Services",
      },
      {
        id: 3,
        href: HREF_HEADER["testimonies"],
        name: "Testimonials",
      },
      {
        id: 4,
        href: HREF_HEADER["faqs"],
        name: "FAQs",
      },
      {
        id: 5,
        href: HREF_HEADER["contact"],
        name: "Contact",
      },
    ],
    ctaText: "Get a free quote",
  },

  hero: {
    badge: "Enterprise Software Development",
    title: {
      text: "Software for",
      emphasis: "Successful Real Estate Agencies",
    },

    description: {
      text: "Real estate software to",
      emphasis: "grow and automate your business.",
    },

    checks: [
      "Custom CRM with lead automation and smart follow-up",
      "Integrations with real estate portals and existing tools",
      "Expert technical support and ongoing maintenance",
    ],
    ctaText: "Talk to an expert",
    socialsProof:
      "Free process analysis • Personalized technical proposal • No obligation",
    results: {
      title: "Our Results",
      years: "Years Building Software",
      projects: "Delivered Projects",
      clients: "Client Countries",
      satisfaction: "Client Satisfaction",
      partner: {
        title: "Trusted Tech Partner",
        description:
          "Experts in real estate using agile methods and cutting-edge tech",
      },
    },
  },

  services: {
    title: "Specialized Services",
    description:
      "Complete software solutions for every need of your real estate business, backed by over 8 years of industry experience.",
    list: [
      {
        icon: Code,
        title: "Custom Web Development",
        description:
          "Tailor-made real estate portals with all the features you need.",
        points: [
          "Responsive design",
          "SEO optimized",
          "MLS integration",
          "Admin panel",
        ],
      },
      {
        icon: Smartphone,
        title: "Mobile Applications",
        description:
          "Native apps for iOS and Android that enhance your clients' experience.",
        points: [
          "Advanced search",
          "Virtual tours",
          "Integrated chat",
          "Push notifications",
        ],
      },
      {
        icon: Database,
        title: "Real Estate CRM",
        description:
          "Client management system specifically designed for real estate businesses.",
        points: [
          "Lead management",
          "Automated follow-up",
          "Advanced reports",
          "Email integration",
        ],
      },
      {
        icon: BarChart3,
        title: "Analytics & BI",
        description:
          "Data analysis and business intelligence for informed decision-making.",
        points: [
          "Interactive dashboards",
          "Price prediction",
          "Market analysis",
          "Custom KPIs",
        ],
      },
      {
        icon: Shield,
        title: "Security & Hosting",
        description:
          "Secure and reliable infrastructure for your mission-critical applications.",
        points: [
          "SSL certificate",
          "Automatic backups",
          "24/7 monitoring",
          "Global CDN",
        ],
      },
      {
        icon: Headphones,
        title: "Technical Support",
        description:
          "Ongoing assistance and specialized support after implementation.",
        points: [
          "24/7 support",
          "Included training",
          "Free updates",
          "Technical consulting",
        ],
      },
    ],
    ctaText: "Start growing today",
  },
  objections: {
    title: "We Address Your Concerns",
    description:
      "We understand the common doubts about technology. Here are our answers based on over 8 years of experience.",
    list: [
      {
        icon: DollarSign,
        objTitle: "Concern:",
        objection: "Custom software development is too expensive",
        resoTitle: "Our Solution:",
        resolution:
          "Our projects pay for themselves within 6–12 months due to increased efficiency and sales. We offer flexible payment plans and guaranteed ROI.",
        stats: "Average ROI: 300% in the first year",
      },
      {
        icon: Clock,
        objTitle: "Concern:",
        objection: "It takes too long to implement a solution",
        resoTitle: "Our Solution:",
        resolution:
          "Our agile process delivers working prototypes in 2–3 weeks. Full implementation takes 2–4 months, including data migration.",
        stats: "Average time: 3 months",
      },
      {
        icon: Settings,
        objTitle: "Concern:",
        objection: "It's too complicated for my team to use",
        resoTitle: "Our Solution:",
        resolution:
          "We design intuitive interfaces tailored for real estate teams. Full training and ongoing support ensure successful adoption.",
        stats: "User adoption rate: 95%",
      },
      {
        icon: Users,
        objTitle: "Concern:",
        objection: "We don't have technical staff to maintain it",
        resoTitle: "Our Solution:",
        resolution:
          "We handle maintenance, updates, and support. Your team focuses on selling — we take care of the tech.",
        stats: "24/7 support included",
      },
      {
        icon: Zap,
        objTitle: "Concern:",
        objection: "It doesn’t integrate with our current tools",
        resoTitle: "Our Solution:",
        resolution:
          "We specialize in integrations with MLS, CRMs, accounting systems, and more. We connect your entire tech stack seamlessly.",
        stats: "50+ integrations available",
      },
    ],
  },
  testimonies: {
    title: {
      text: "Proven",
      emphasis: "Success Stories",
    },
    description:
      "Real results from real estate agencies that have transformed their business with our custom software solutions",
    list: [
      {
        name: "Alberto Gomez",
        role: "Commercial Director",
        company: "Inmobiliaria Premier México",
        image: T1,

        content:
          "Since implementing the RealTechPro platform, our sales have increased by 45% in 6 months. CRM automation saves us 15 hours per week, and the ROI has been outstanding.",
        rating: 5,
        results: "+45% sales in 6 months",
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
        results: "+60% productivity",
        country: "🇺🇸",
      },
      {
        name: "Carlos Mendoza",
        role: "General Manager",
        company: "PropiedadesColombia S.A.S",
        image: T3,
        content:
          "The best tech investment we’ve made. The predictive analytics system helps us spot top opportunities. We've tripled our sales volume.",
        rating: 5,
        results: "3x sales volume",
        country: "🇨🇴",
      },
      {
        name: "Ana Rodríguez",
        role: "Founder",
        company: "Urban Properties Argentina",
        image: T4,
        content:
          "The RealTechPro team truly understood our needs. The website and mobile app have greatly improved our clients’ experience. 300% ROI in the first year.",
        rating: 5,
        results: "300% ROI first year",
        country: "🇦🇷",
      },
    ],
  },
  authority: {
    title: "Results That Speak for Themselves",
    description:
      "Over 8 years driving success for real estate in LATAM and North America",
    list: [
      { icon: Users, title: "150+", description: "Successful agencies" },
      { icon: TrendingUp, title: "45%", description: "Average sales growth" },
      { icon: Award, title: "8+", description: "Years of experience" },
    ],
  },
  authorityMap: {
    title: "International Presence",
    description:
      "Over 8 years building successful solutions for real estate agencies across LATAM and North America",
    list: [
      {
        icon: "🇲🇽",
        country: "Mexico",
        description: "25+ successful projects",
      },
      {
        icon: "🇺🇸",
        country: "United States",
        description: "40+ successful projects",
      },
      {
        icon: "🇨🇴",
        country: "Colombia",
        description: "30+ successful projects",
      },
      {
        icon: "🇦🇷",
        country: "Argentina",
        description: "20+ successful projects",
      },
    ],
  },
  faqs: {
    title: "Frequently Asked Questions",
    description:
      "Answers to the most common questions about our real estate software development services.",
    list: [
      {
        question: "How long does it take to develop a custom solution?",
        answer:
          "It depends on complexity, but typically: Basic websites (4–6 weeks), custom CRMs (8–12 weeks), mobile apps (10–16 weeks). We always deliver functional prototypes within the first 2–3 weeks.",
      },
      {
        question: "What kind of support do you offer after launch?",
        answer:
          "We provide 24/7 technical support, free updates during the first year, continuous team training, a dedicated account manager, proactive monitoring, and automated backups.",
      },
      {
        question: "Can you integrate with our current systems?",
        answer:
          "Yes, we’re integration experts. We connect with MLS, CRMs like Salesforce, accounting systems like QuickBooks, email marketing platforms, social media, and 50+ common tools in the real estate sector.",
      },
      {
        question: "How do you ensure our data is secure?",
        answer:
          "We implement SSL/TLS encryption, daily automatic backups, two-factor authentication, GDPR and local compliance, certified server hosting, and regular security audits.",
      },
      {
        question: "What if we need changes after development?",
        answer:
          "We include minor changes for free during the first 3 months. For major updates, we offer flexible maintenance plans. Our agile process allows quick adjustments as your business evolves.",
      },
      {
        question: "Do you provide training for our team?",
        answer:
          "Yes, we provide full training: in-person or virtual sessions, detailed manuals, tutorial videos, and review sessions. We continue supporting until your team is fully comfortable with the tech.",
      },
      {
        question: "What’s the approximate cost of a custom solution?",
        answer:
          "Costs vary by features. Websites from $5,000 USD, custom CRMs from $15,000 USD, mobile apps from $20,000 USD. We offer flexible payment plans and financing options.",
      },
      {
        question: "Do you work with small agencies or only large companies?",
        answer:
          "We work with real estate agencies of all sizes. Our solutions scale from independent agents to large corporations. We tailor our approach to each client’s budget and goals.",
      },
    ],
  },
  cta: {
    title: {
      text: "Start your transformation",
      emphasis: "today with digital tools",
    },
    description:
      "Join 500+ real estate companies already closing more deals, saving time, and boosting profitability with PropTech.",
    checks: [
      "Free setup and data migration included",
      "24/7 Spanish support during the first 30 days",
      "Full training for your team",
      "No commitment – cancel anytime",
    ],
    ctaText: "Get Free Consultation",
    offer: {
      title: "Launch Offer",
      description:
        "First 50 clients get 3 months free + custom setup at no cost",
    },
  },
  footer: {
    description:
      "The most advanced real estate software company on the market. We empower real estate agencies with cutting-edge technology.",
    sections: [
      {
        title: "Product",
        details: ["Features", "Pricing", "Integrations", "API", "Demo"],
      },
      {
        title: "Support",
        details: [
          "Help Center",
          "Documentation",
          "Training",
          "System Status",
          "Contact",
        ],
      },
    ],
    contact: {
      title: "Contact",
    },
    copyright: `© 2025 ${COMPANY_NAME}. All rights reserved.`,
    // terms: ["Privacy Policy", "Terms of Service", "Cookies"],
  },
  wsp: {
    message:
      "Hi, I’m interested in learning more about your software solutions for real estate companies. Could you provide more information?",
    ariaLabel: "Contact via WhatsApp",
  },
};

export default en;
