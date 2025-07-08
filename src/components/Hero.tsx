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
import { RESULTS_HERO } from "@/constants";

const Hero = () => {
  const { t } = useTranslation();
  const CONTENT = t.hero;

  return (
    <section
      id="inicio"
      className="relative min-h-screen lg:h-screen flex items-center lg:justify-center bg-gradient-to-br from-brand-primary via-brand-primary/95 to-brand-primary/90"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* <div className="grid lg:grid-cols-2 gap-16 items-center lg:h-screen"> */}
          <div className="grid lg:grid-cols-2 gap-0 lg:gap-16 items-center lg:h-screen">
            {/* <div className="grid lg:grid-cols-2 gap-16 items-start"> */}
            <div className="flex flex-col justify-center text-center lg:text-left text-white min-h-screen lg:min-h-0">
              {CONTENT.title}
              {CONTENT.description}
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
            <div className="space-y-8 mt-0 lg:mt-10">
              {/* Results Stats */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-white text-xl font-semibold mb-6 text-center">
                  {CONTENT.results.title}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-secondary mb-2">
                      {RESULTS_HERO.years}
                    </div>
                    <p className="text-sm text-white/80">
                      {CONTENT.results.years}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-secondary mb-2">
                      {RESULTS_HERO.projects}
                      
                    </div>
                    <p className="text-sm text-white/80">
                      {CONTENT.results.projects}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-secondary mb-2">
                      {RESULTS_HERO.clients}
                      
                    </div>
                    <p className="text-sm text-white/80">{CONTENT.results.clients}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-secondary mb-2">
                      {RESULTS_HERO.satisfaction}
                      
                    </div>
                    <p className="text-sm text-white/80">
                      {CONTENT.results.satisfaction}

                    </p>
                  </div>
                </div>
              </div>

              {/* Services Icons */}
              {/* <div className="grid grid-cols-3 gap-4">
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
              </div> */}

              {/* Trust Indicator */}
              <div className="bg-gradient-to-r from-brand-secondary/10 to-brand-secondary/5 backdrop-blur-sm rounded-xl p-6 border border-brand-secondary/20 text-center">
                <p className="text-brand-secondary font-bold text-lg mb-2">
                  🏆{CONTENT.results.partner.title}

                </p>
                <p className="text-white/90 text-sm leading-relaxed">
                  {CONTENT.results.partner.description}
                </p>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-secondary/10"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/5"></div>
      </div>
    </section>
  );
};

export default Hero;
