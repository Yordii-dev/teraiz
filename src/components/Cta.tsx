import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import ContactForm from "./ContactForm";
import { useTranslation } from "@/contexts/LanguageContext";

const CTA = () => {
  const { t } = useTranslation();
  const CONTENT = t.cta;

  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-br from-brand-primary via-brand-primary to-brand-primary/90 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          {CONTENT.title}

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {CONTENT.description}
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
            {CONTENT.checks.map((benefit, index) => (
              <div key={index} className="flex items-center text-left">
                <CheckCircle className="h-5 w-5 text-brand-secondary mr-3 flex-shrink-0" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <ContactForm
              trigger={
                <Button
                  size="lg"
                  className="bg-brand-secondary hover:bg-brand-secondary/90 text-brand-primary px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  {CONTENT.ctaText}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
            />

            {/* <ContactForm
              trigger={
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-primary px-10 py-4 text-lg font-semibold transition-all duration-300"
                >
                  Hablar con un Experto
                </Button>
              }
              defaultMessage="Hola, me gustaría hablar con un experto sobre PropTech para entender cómo puede ayudar específicamente a mi negocio inmobiliario y discutir las opciones disponibles."
            /> */}
          </div>

          {/* Urgency/Scarcity */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
            <p className="text-brand-secondary font-semibold mb-2">
              🚀 {CONTENT.offer.title}
            </p>
            <p className="text-white/90 text-sm">{CONTENT.offer.description}</p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-secondary/10"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/5"></div>
      </div>
    </section>
  );
};

export default CTA;
