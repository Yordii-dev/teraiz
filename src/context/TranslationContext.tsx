import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../locales/en";
import es from "../locales/es";
import type { TranslationType } from "../types/Translations";

const translations: Record<string, TranslationType> = {
  en,
  es,
};

type TranslationContextType = {
  lang: string;
  setLang: (lang: string) => void;
  t: TranslationType;
};

export const TranslationContext = createContext<TranslationContextType>({
  lang: "es",
  //setLang: (lang: string) => {},
  setLang: () => {},
  t: es,
});

export const TranslationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<string>("es");
  const [t, setT] = useState<TranslationType>(translations[lang]);

  useEffect(() => {
    setT(translations[lang]);
  }, [lang]);

  return (
    <TranslationContext.Provider value={{ lang, setLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
