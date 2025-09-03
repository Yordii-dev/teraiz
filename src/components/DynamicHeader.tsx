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

  const tags = CONTENT.tags.map(tag => {
    if (tag.id === 5) {
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
          <div
            className="md:hidden fixed top-0 left-0 w-screen h-screen bg-white z-40 flex flex-col items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Botón X en la esquina superior derecha */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-700 hover:text-brand-primary focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
            <div
              className="flex flex-col items-center justify-center space-y-6 w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {tags.map((tag, i) => (
                <a
                  key={i}
                  href={tag.href}
                  className="text-gray-700 hover:text-brand-primary text-xl font-semibold transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {tag.name}
                </a>
              ))}
            </div>
          </div>
      )}
    </>
  );
}

/*
export function ContentMenuMobil({ content, lang }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const CONTENT = content.header;

  return (
    <>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            {CONTENT.tags.map((tag, i) => (
              <a
                key={i}
                href={tag.href}
                className="block px-3 py-2 text-gray-700 hover:text-brand-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {tag.name}
              </a>
            ))}

            <div className="px-3 py-2">
               <BtnCta
                lang={lang}
                textBtn={CONTENT.ctaText}
                classBtn="w-full bg-brand-secondary hover:bg-brand-secondary/90 text-brand-primary font-semibold"
              />
 
            </div>
          </div>
        </div>
      )}
    </>
  );
}
*/
