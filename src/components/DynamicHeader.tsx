import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import ContactForm from "@/components/ContactForm";
import LanguageSelector from "./LanguageSelector";
import type { langType } from "@/types/languages";
import type { TranslationType } from "@/types/Translations";
interface Props {
  content: TranslationType;
  lang: langType;
}

export function LanguageAndCta({ content, lang }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const CONTENT = content.header;

  return (
    <>
      <div className="hidden md:flex items-center space-x-4">
        <LanguageSelector langProp={lang} />
        <ContactForm
          classBtn="bg-brand-secondary hover:bg-brand-secondary/90 text-brand-primary font-semibold px-6"
          content={content}
          textBtn={CONTENT.ctaText}
        />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center space-x-2">
        <LanguageSelector langProp={lang} />
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
      </div>
    </>
  );
}

export function ContentMenuMobil({ content, lang }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const CONTENT = content.header;

  return (
    <>
      {/* Mobile Navigation */}
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
              <ContactForm
                classBtn="w-full bg-brand-secondary hover:bg-brand-secondary/90 text-brand-primary font-semibold"
                textBtn={CONTENT.ctaText}
                content={content}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
