import { useTranslation } from "@/contexts/LanguageContext";
import { useEffect } from "react";

export const TitleUpdater = () => {
  const { t, lang } = useTranslation();

  useEffect(() => {
    document.title = t.page.title;
  }, [lang]);

  return null;
};
