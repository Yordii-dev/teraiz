import {
  Code,
  Database,
  Smartphone,
  BarChart3,
  Shield,
  Headphones,
} from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import ContactForm from "./ContactForm";
import { Button } from "./ui/button";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      title: "Desarrollo Web Personalizado",
      description:
        "Portales inmobiliarios a medida con todas las funcionalidades que necesitas.",
      features: [
        "Diseño responsive",
        "SEO optimizado",
        "Integración MLS",
        "Panel administrativo",
      ],
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description:
        "Apps nativas para iOS y Android que potencian la experiencia de tus clientes.",
      features: [
        "Búsqueda avanzada",
        "Tours virtuales",
        "Chat integrado",
        "Notificaciones push",
      ],
    },
    {
      icon: Database,
      title: "CRM Inmobiliario",
      description:
        "Sistema de gestión de clientes diseñado específicamente para inmobiliarias.",
      features: [
        "Gestión de leads",
        "Seguimiento automatizado",
        "Reportes avanzados",
        "Integración email",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics & BI",
      description:
        "Análisis de datos e inteligencia de negocios para decisiones informadas.",
      features: [
        "Dashboards interactivos",
        "Predicción de precios",
        "Análisis de mercado",
        "KPIs personalizados",
      ],
    },
    {
      icon: Shield,
      title: "Seguridad & Hosting",
      description:
        "Infraestructura segura y confiable para tus aplicaciones críticas.",
      features: [
        "SSL certificado",
        "Backups automáticos",
        "Monitoreo 24/7",
        "CDN global",
      ],
    },
    {
      icon: Headphones,
      title: "Soporte Técnico",
      description:
        "Acompañamiento continuo y soporte especializado post-implementación.",
      features: [
        "Soporte 24/7",
        "Capacitación incluida",
        "Actualizaciones gratuitas",
        "Consultoría técnica",
      ],
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4">
            Servicios Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones completas de software para cada necesidad de tu
            inmobiliaria, respaldadas por más de 8 años de experiencia en el
            sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-secondary/20 transition-colors">
                <service.icon className="h-6 w-6 text-brand-secondary" />
              </div>

              <h3 className="text-xl font-semibold text-brand-primary mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <ContactForm
            trigger={
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4"
              >
                Consultar Servicios
              </Button>
            }
            defaultMessage="Hola, me interesa conocer más detalles sobre sus servicios de desarrollo de software para inmobiliarias. Me gustaría discutir mis necesidades específicas."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
