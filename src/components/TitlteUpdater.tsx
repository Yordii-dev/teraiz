import { useEffect } from "react";
import { useTranslation } from "../context/TranslationContext";

export const TitleUpdater = () => {
  const { t, lang } = useTranslation();

  useEffect(() => {
    document.title = t.page.title;
    console.log("WORK: ", t.page.title);
  }, [lang]);

  return null;
};
