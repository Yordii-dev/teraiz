import React, { createContext, useContext, useState } from "react";
import en from "../locales/en";
import es from "../locales/es";
import fr from "../locales/fr";

import type { TranslationType } from "../types/Translations";
import type { langType } from "../types/languages";

const translations: Record<string, TranslationType> = {
  en,
  es,
  fr,
};

type TranslationContextType = {
  lang: langType;
  setLang: (lang: langType) => void;
  t: TranslationType;
};

export const TranslationContext = createContext<TranslationContextType>({
  lang: "es",
  setLang: () => {},
  t: es,
});

export const TranslationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<langType>("es");
  // const [t, setT] = useState<TranslationType>(translations[lang]);

  // useEffect(() => {
  //   setT(translations[lang]);
  // }, [lang]);
  const t = translations[lang]; // directo, sin useState

  return (
    <TranslationContext.Provider value={{ lang, setLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
