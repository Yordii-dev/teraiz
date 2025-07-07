import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  CheckCircle,
  Award,
  Globe,
  TrendingUp,
  Building2,
  Users,
  Shield,
} from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import ContactForm from "./ContactForm";

const Hero = () => {
  const { t } = useTranslation();
  const CONTENT = t.hero;

  return (
    <section
      id="inicio"
      className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary/95 to-brand-primary/90"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Column */}
            <div className="text-center lg:text-left text-white">
              {/* Trust Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-secondary/15 border border-brand-secondary/30 text-brand-secondary text-sm font-medium mb-8">
                <Shield className="w-4 h-4 mr-2" />
                {CONTENT.badge}
              </div>

              {/* Main Headline */}
              {CONTENT.title}

              {/* Subheadline */}
              {CONTENT.description}

              {/* Key Value Props */}
              <div className="space-y-4 mb-10">
                {CONTENT.checks.map((check) => (
                  <div className="flex items-start justify-center lg:justify-start text-white/90">
                    <CheckCircle className="w-5 h-5 text-brand-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-left">{check}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="space-y-6">
                <ContactForm
                  trigger={
                    <Button
                      size="lg"
                      className="bg-brand-secondary hover:bg-brand-secondary/90 text-brand-primary px-12 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    >
                      <TrendingUp className="mr-2 h-5 w-5" />
                      {CONTENT.ctaText}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  }
                  defaultMessage="Hola, soy [Nombre] de [Inmobiliaria]. Estamos buscando desarrollar una solución de software personalizada para optimizar nuestros procesos de ventas y gestión de propiedades. Me gustaría agendar una consulta para discutir nuestras necesidades específicas."
                />

                <p className="text-sm text-white/70 max-w-md mx-auto lg:mx-0">
                  {CONTENT.socialsProof}
                </p>
              </div>
            </div>

            {/* Trust & Results Column */}
            <div className="space-y-8">
              {/* Results Stats */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-white text-xl font-semibold mb-6 text-center">
                  Nuestros Resultados
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-secondary mb-2">
                      8+
                    </div>
                    <p className="text-sm text-white/80">
                      Años Desarrollando Software
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-secondary mb-2">
                      50+
                    </div>
                    <p className="text-sm text-white/80">
                      Proyectos Entregados
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-secondary mb-2">
                      15+
                    </div>
                    <p className="text-sm text-white/80">Países con Clientes</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-secondary mb-2">
                      95%
                    </div>
                    <p className="text-sm text-white/80">
                      Satisfacción Cliente
                    </p>
                  </div>
                </div>
              </div>

              {/* Services Icons */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:bg-white/10 transition-colors">
                  <Building2 className="h-10 w-10 text-brand-secondary mx-auto mb-3" />
                  <p className="text-white/90 text-sm font-medium">
                    Desarrollo
                    <br />
                    Personalizado
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:bg-white/10 transition-colors">
                  <Users className="h-10 w-10 text-brand-secondary mx-auto mb-3" />
                  <p className="text-white/90 text-sm font-medium">
                    Soporte
                    <br />
                    Especializado
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:bg-white/10 transition-colors">
                  <Award className="h-10 w-10 text-brand-secondary mx-auto mb-3" />
                  <p className="text-white/90 text-sm font-medium">
                    Calidad
                    <br />
                    Garantizada
                  </p>
                </div>
              </div>

              {/* Trust Indicator */}
              <div className="bg-gradient-to-r from-brand-secondary/10 to-brand-secondary/5 backdrop-blur-sm rounded-xl p-6 border border-brand-secondary/20 text-center">
                <p className="text-brand-secondary font-bold text-lg mb-2">
                  🏆 Partner Tecnológico de Confianza
                </p>
                <p className="text-white/90 text-sm leading-relaxed">
                  Especializados en el sector inmobiliario con metodologías
                  ágiles y tecnologías de vanguardia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-brand-secondary/3 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-white/3 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
