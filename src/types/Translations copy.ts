interface Service {
  icon:object;
  title: string;
  description: string;
  points: string[];
}

interface Pain {
  icon:object;
  painTitle: string;
  painDescription: string;
  solutionTitle: string;
  solutionDescription: string;
  badge:string;
}

interface Testimony {
  countryAcronyms: string;
  description: string;
  badge: string;
  photo:object;
  author: string;
  position: string;
  company: string;
}

interface Authority {
  icon?: object;
  title: string;
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

interface Contact{
  icon:object;
  name : string;
}

export type TranslationType = {
  page: {
    title: string;
  };
  formModal: {
    title: string;
    inputPlaceholder: string;
    defaultDescription: string;
    textCtaBtn: string;
  };

  successModal: {
    title: string;
    description: string;
  };

  hero: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    description: string;
    authorities: Authority[];
    checks: string[];
    ctaText: string;
  };

  services: {
    title: string;
    description: string;
    list: Service[];
    ctaText: string;
  };

  pains: {
    title: string;
    description: string;
    list: Pain[];
    ctaText: string;

  };

  testimonies: {
    title: React.ReactNode;
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
    list: Authority[];
  };
 

  faqs: {
    title: string;
    description: string;
    list: Faq[];
  };

  cta:{
    title: React.ReactNode;
    description: string;
    checks: string[];
    ctaText: string;
    offer:{
      title: string;
      description: string;
    }
  }
  footer: {
    description: string;
    sections: SectionFooter[];
    contact: {
      title:string;
      list : Contact[]
    };
    copyright: string;
    terms: string[];
  };
};
