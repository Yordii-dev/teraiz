import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import ContactForm from "./ContactForm";
import Logo from "@/assets/logo.svg";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const CONTENT = t.header;

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-brand-primary">
              <img src={Logo}></img>
              {/* RealTech<span className="text-brand-secondary">Pro</span> */}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {CONTENT.tags.map((tag, i) => (
                <a
                  key={i}
                  href={tag.href}
                  className="text-gray-700 hover:text-brand-primary transition-colors duration-200"
                >
                  {tag.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side with language selector and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <ContactForm
              trigger={
                <Button className="bg-brand-secondary hover:bg-brand-secondary/90 text-brand-primary font-semibold px-6">
                  {CONTENT.ctaText}
                </Button>
              }
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
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
        </div>

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
                  trigger={
                    <Button className="w-full bg-brand-secondary hover:bg-brand-secondary/90 text-brand-primary font-semibold">
                      Demo Gratuita{" "}
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
