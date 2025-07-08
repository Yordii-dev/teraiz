import { Building2, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/assets/logo2.svg";
import { useTranslation } from "@/contexts/LanguageContext";
import {
  COMPANY_ADDRESS,
  COMPANY_MAIL,
  COMPANY_PHONES,
  LINK_SOCIALS_MEDIA,
} from "@/constants";

const Footer = () => {
  const { t } = useTranslation();
  const CONTENT = t.footer;

  return (
    <footer className="bg-brand-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              {/* <Building2 className="h-8 w-8 text-brand-secondary mr-3" /> */}
              <h3 className="text-2xl font-bold">
                {/* PropTech<span className="text-brand-secondary">.</span> */}
                <img src={Logo}></img>
              </h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              {CONTENT.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={LINK_SOCIALS_MEDIA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-secondary transition-colors"
              >
                <span className="text-sm font-bold">Li</span>
              </a>
              <a
                href={LINK_SOCIALS_MEDIA.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-secondary transition-colors"
              >
                <span className="text-sm font-bold">Fb</span>
              </a>
            </div>
          </div>

          {/* Product Links */}
          {CONTENT.sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.details.map((detail, subIndex) => (
                  <li
                    className="text-white/80 transition-colors"
                    key={subIndex}
                  >
                    {/* <a
                      href="#"
                      className="text-white/80 hover:text-brand-secondary transition-colors"
                    > */}
                    {detail}
                    {/* </a> */}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {CONTENT.contact.title}
            </h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-brand-secondary mr-3" />
                <a
                  href={`mailto:${COMPANY_MAIL}`}
                  className="text-white/80 hover:text-brand-secondary transition-colors hover:underline"
                >
                  {COMPANY_MAIL}
                </a>
              </div>

              {COMPANY_PHONES.map((item, index) => (
                <div key={index} className="flex items-center mt-2">
                  <Phone className="h-5 w-5 text-brand-secondary mr-3" />
                  <a
                    href={`tel:${item.phone}`}
                    className="text-white/80 hover:text-brand-secondary transition-colors hover:underline"
                  >
                    {item.text}
                  </a>
                </div>
              ))}

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-secondary mr-3 mt-1" />
                <span className="text-white/80">{COMPANY_ADDRESS}</span>
              </div>
            </div>

            {/* Newsletter */}
            {/* <div className="mt-8">
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                />
                <button className="px-4 py-2 bg-brand-secondary text-brand-primary rounded-r-lg font-semibold hover:bg-brand-secondary/90 transition-colors">
                  Suscribir
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              {CONTENT.copyright}
            </p>
            {/* <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-white/60 hover:text-brand-secondary transition-colors"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-brand-secondary transition-colors"
              >
                Términos de Servicio
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-brand-secondary transition-colors"
              >
                Cookies
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
