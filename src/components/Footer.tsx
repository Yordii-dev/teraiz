
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-brand-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Building2 className="h-8 w-8 text-brand-secondary mr-3" />
              <h3 className="text-2xl font-bold">
                PropTech<span className="text-brand-secondary">.</span>
              </h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              La plataforma de software inmobiliario más avanzada del mercado. 
              Potenciamos el crecimiento de inmobiliarias con tecnología de punta.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-secondary transition-colors cursor-pointer">
                <span className="text-sm font-bold">Li</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-secondary transition-colors cursor-pointer">
                <span className="text-sm font-bold">Tw</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-secondary transition-colors cursor-pointer">
                <span className="text-sm font-bold">Fb</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Producto</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/80 hover:text-brand-secondary transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-brand-secondary transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-brand-secondary transition-colors">
                  Integraciones
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-brand-secondary transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-brand-secondary transition-colors">
                  Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Soporte</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/80 hover:text-brand-secondary transition-colors">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-brand-secondary transition-colors">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-brand-secondary transition-colors">
                  Capacitaciones
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-brand-secondary transition-colors">
                  Estado del Sistema
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-brand-secondary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-brand-secondary mr-3" />
                <span className="text-white/80">hola@proptech.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-brand-secondary mr-3" />
                <span className="text-white/80">+34 900 123 456</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-secondary mr-3 mt-1" />
                <span className="text-white/80">
                  Calle Serrano 123<br />
                  28006 Madrid, España
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
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
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 PropTech Solutions. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-brand-secondary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-white/60 hover:text-brand-secondary transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-white/60 hover:text-brand-secondary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
