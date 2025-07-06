import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  CheckCircle,
  Award,
  Globe,
  TrendingUp,
} from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import ContactForm from "./ContactForm";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="inicio"
      className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-primary text-sm font-medium">
              <Award className="w-4 h-4 text-brand-secondary mr-2" />
              Software líder para inmobiliarias{" "}
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-primary leading-tight">
                Transformamos
                <span className="block text-brand-secondary">
                  inmobiliarias
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl">
                  con tecnología de vanguardia
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Soluciones de software personalizadas que automatizan procesos,
                aumentan ventas y escalan negocios inmobiliarios. +8 años
                creando éxito en LATAM y Norteamérica.
              </p>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-secondary mb-1">
                  8+
                </div>
                <p className="text-sm text-gray-600">+8 años de experiencia</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-secondary mb-1">
                  150+
                </div>
                <p className="text-sm text-gray-600">+150 proyectos exitosos</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-secondary mb-1">
                  12
                </div>
                <p className="text-sm text-gray-600">12 países atendidos</p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-brand-secondary mr-3" />
                <span>Software 100% personalizado para inmobiliarias</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-brand-secondary mr-3" />
                <span>Experiencia comprobada en LATAM y Norteamérica</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-brand-secondary mr-3" />
                <span>Soporte técnico 24/7 y capacitación incluida</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <ContactForm
                trigger={
                  <Button
                    size="lg"
                    className="bg-brand-secondary hover:bg-brand-secondary/90 text-brand-primary px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    <TrendingUp className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Solicitar Propuesta{" "}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                }
                defaultMessage="Hola, me interesa conocer más sobre sus soluciones de software personalizadas para inmobiliarias. Me gustaría recibir una propuesta detallada para mi empresa."
              />

              <ContactForm
                trigger={
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 group"
                  >
                    <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Ver Casos de Éxito{" "}
                  </Button>
                }
                defaultMessage="Hola, me gustaría conocer casos de éxito específicos de inmobiliarias que han implementado sus soluciones de software y entender el ROI obtenido."
              />
            </div>
          </div>

          {/* Right Column - Trust Elements & Visual */}
          <div className="relative">
            {/* Main Trust Card */}
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-brand-secondary mr-3" />
                    <h3 className="text-2xl font-bold text-brand-primary">
                      Presencia Global
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Soluciones exitosas en múltiples mercados
                  </p>
                </div>

                {/* Countries Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-brand-primary to-brand-primary/80 text-white p-4 rounded-xl text-center">
                    <div className="text-xl font-bold mb-1">🇲🇽 México</div>
                    <div className="text-sm opacity-90">25+ proyectos</div>
                  </div>
                  <div className="bg-gradient-to-br from-brand-secondary to-brand-secondary/80 text-brand-primary p-4 rounded-xl text-center">
                    <div className="text-xl font-bold mb-1">🇺🇸 USA</div>
                    <div className="text-sm opacity-90">40+ proyectos</div>
                  </div>
                  <div className="bg-gray-100 text-brand-primary p-4 rounded-xl text-center">
                    <div className="text-xl font-bold mb-1">🇨🇴 Colombia</div>
                    <div className="text-sm">30+ proyectos</div>
                  </div>
                  <div className="bg-gray-100 text-brand-primary p-4 rounded-xl text-center">
                    <div className="text-xl font-bold mb-1">🇦🇷 Argentina</div>
                    <div className="text-sm">20+ proyectos</div>
                  </div>
                </div>

                {/* Bottom Trust Element */}
                <div className="bg-brand-secondary/10 border border-brand-secondary/20 rounded-lg p-4 text-center">
                  <p className="text-brand-primary font-semibold">
                    🚀 ROI promedio del 300% en el primer año
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Testimonial */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs border border-brand-secondary/20">
              <div className="flex items-center mb-2">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b775?w=40&h=40&fit=crop&crop=face"
                  alt="Cliente"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <div className="text-sm font-semibold text-brand-primary">
                    María G.
                  </div>
                  <div className="text-xs text-gray-500">
                    CEO, Inmobiliaria Premier
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                "Aumentamos ventas 45% en 6 meses"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-brand-secondary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-brand-primary/3 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
