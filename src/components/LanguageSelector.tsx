import { Globe } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { lang, setLang } = useTranslation();

  const languages = [
    { code: "es", name: "ES", flag: "🇪🇸" },
    { code: "en", name: "EN", flag: "🇺🇸" },
    { code: "fr", name: "FR", flag: "🇫🇷" },
  ];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">{lang.toUpperCase()}</span>
      </button>

      <div className="absolute right-0 top-full mt-1 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1">
          {languages.map((langP) => (
            <button
              key={langP.code}
              onClick={() => setLang(langP.code as "es" | "en" | "fr")}
              className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                lang === langP.code
                  ? "bg-brand-secondary/10 text-brand-primary"
                  : "text-gray-700"
              }`}
            >
              <span>{langP.flag}</span>
              <span>{langP.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
