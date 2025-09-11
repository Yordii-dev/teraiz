import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import ContactForm from "@/components/ContactForm";
import LanguageSelector from "./LanguageSelector";
import type { langType } from "@/types/languages";
import type { TranslationType } from "@/types/Translations";
import { Button } from "./ui/button";
//import BtnCta from "./BtnCta";
interface Props {
  content: TranslationType;
  lang: langType;
  hideNav?: boolean;
}

export function LanguageAndHamburger({ content, lang, hideNav }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const CONTENT = content.header;
  const CONTACT_ID = 7;

  const tags = CONTENT.tags.map((tag) => {
    if (tag.id === CONTACT_ID) {
      return { ...tag, href: `/${lang}${tag.href}` };
    }
    return tag;
  });

  return (
    <>
      <div className="hidden md:flex items-center space-x-4">
        <LanguageSelector langProp={lang} />
      </div>

      <div className="md:hidden flex items-center space-x-2">
        <LanguageSelector langProp={lang} />

        {/* Mobile Hamburger */}
        {!hideNav && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Abrir/cerrar menú"
            className="text-gray-700 hover:text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-secondary"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-screen h-screen bg-white z-40 flex flex-col items-center justify-center">
          {/* Botón X en la esquina superior derecha */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-700 hover:text-brand-primary focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
          <nav>
            <ul
              aria-label="Menú principal"
              className="flex flex-col items-center justify-center space-y-6 w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {tags.map((tag, i) => (
                <li key={i}>
                  <a
                    href={tag.href}
                    className="text-gray-700 hover:text-brand-primary text-xl font-semibold transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {tag.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
