import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import type { langType } from "@/types/languages";
import { useTranslation } from "@/contexts/LanguageContext";
interface Props {
  langProp: langType;
}
const LanguageSelector = ({ langProp }: Props) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { setLang } = useTranslation();

  const languages = [
    { code: "es", name: "ES", flag: "🇪🇸" },
    { code: "en", name: "EN", flag: "🇺🇸" },
    { code: "fr", name: "FR", flag: "🇫🇷" },
  ];
  // Cierra si haces clic fuera del menú
  useEffect(() => {
    setLang(langProp);
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">{langProp.toUpperCase()}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 bg-white rounded-md shadow-lg border border-gray-200 z-50">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  // En un componente React
                  const path =
                    typeof window !== "undefined"
                      ? window.location.pathname
                      : "";
                  const parts = path.split("/");
                  parts[1] = lang.code;
                  const newPath = parts.join("/") || "/";

                  window.location.href = newPath;

                  // setLang(langP.code as "es" | "en" | "fr");
                  // setOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                  langProp === lang.code
                    ? "bg-brand-secondary/10 text-brand-primary"
                    : "text-gray-700"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
