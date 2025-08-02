import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

interface Tag {
  href: string;
  name: string;
}
interface Objection {
  icon: LucideIcon;
  objTitle: string;
  objection: string;
  resoTitle: string;
  resolution: string;
  stats: string;
}

interface Testimony {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  results: string;
  country: string;
}

interface Authority {
  icon?: LucideIcon;
  title: string;
  description: string;
}

interface Country {
  icon: string;
  country: string;
  description: string;
}

interface Faq {
  question: string;
  answer: string;
}

interface SectionFooter {
  title: string;
  details: string[];
}

export type TranslationType = {
  page: {
    title: string;
  };

  formModal: {
    title: string;
    nameLabel: string;
    namePlaceholder: string;

    mailLabel: string;
    mailPlaceholder: string;

    phoneLabel: string;
    phonePlaceholder: string;

    textCtaBtn: string;
    textCtaBtnSending: string;
  };

  successModal: {
    title: string;
    description: string;
  };

  header: {
    tags: Tag[];
    ctaText: string;
  };

  hero: {
    badge: string;
    title: {
      text: string;
      emphasis: string;
    };

    description: {
      text: string;
      emphasis: string;
    };

    checks: string[];
    ctaText: string;
    socialsProof: string;
    results: {
      title: string;
      years: string;
      projects: string;
      clients: string;
      satisfaction: string;
      partner: {
        title: string;
        description: string;
      };
    };
  };

  services: {
    title: string;
    description: string;
    list: Service[];
    ctaText: string;
  };

  objections: {
    title: string;
    description: string;
    list: Objection[];
  };

  testimonies: {
    title: {
      text: string;
      emphasis: string;
    };
    description: string;

    list: Testimony[];
  };

  authority: {
    title: string;
    description: string;
    list: Authority[];
  };

  authorityMap: {
    title: string;
    description: string;
    list: Country[];
  };

  faqs: {
    title: string;
    description: string;
    list: Faq[];
  };

  cta: {
    title: {
      text: string;
      emphasis: string;
    };
    description: string;
    checks: string[];
    ctaText: string;
    offer: {
      title: string;
      description: string;
    };
  };
  footer: {
    description: string;
    sections: SectionFooter[];
    contact: {
      title: string;
    };
    copyright: string;
    // terms: string[];
  };
  wsp: {
    message: string;
    ariaLabel: string;
  };
};
