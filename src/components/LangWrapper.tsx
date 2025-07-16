import { useTranslation } from "@/contexts/LanguageContext";
import Index from "@/pages/Index";
import { langType } from "@/types/languages";
import { useEffect } from "react";

const LangWrapper = ({ lang }: { lang: langType }) => {
  const { setLang } = useTranslation();

  useEffect(() => {
    setLang(lang); // cambiar el contexto según ruta
  }, [lang]);

  return <Index />; // o tu componente de página
};

export default LangWrapper;
