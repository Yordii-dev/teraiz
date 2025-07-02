// export type TranslationType = {
//   hero: {
//     socialproof: string;
//   };
// };

interface Service {
  title: string;
  description: string;
  textCtaBtn: string;
}

interface Testimony {
  title: string;
  author: string;
  description: string;
}

interface Authority {
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

export type TranslationType = {
  formModal: {
    title: string;
    inputPlaceholder: string;
    textCtaBtn: string;
    defaultDescription: {
      target_1: string;
      target_2: string;
      target_3: string;
    };
  };

  successModal: {
    title: string;
    description: string;
    textCtaBtn: string;
  };

  cta: {
    inputPlaceholder: string;
    objections: string[];
  };

  hero: {
    title: string;
    subtitle: string;
    textCtaBtn: string;
    socialProof: string;
    socialProofShort: string;
  };
  solutions: {
    title: React.ReactNode;
    description: string;
    offers: string[];
    textCtaBtn: string;
  };

  services: {
    title: React.ReactNode;

    list: Service[];
  };

  testimonies: {
    title: React.ReactNode;

    list: Testimony[];
  };

  authority: {
    title: React.ReactNode;

    list: Authority[];
  };

  meet: {
    title: React.ReactNode;

    description: string;
    textCtaBtn: string;
  };

  faqs: {
    title: string;
    list: Faq[];
  };

  footer: {
    title: string;
    textCtaBtn: string;
    sections: SectionFooter[];
    copyright: string;
    socials: string;
  };
};
