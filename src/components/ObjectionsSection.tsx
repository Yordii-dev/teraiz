import { useTranslation } from "@/contexts/LanguageContext";
import { CheckCircle } from "lucide-react";

const ObjectionsSection = () => {
  const { t } = useTranslation();
  const CONTENT = t.objections;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4">
            Resolvemos tus Inquietudes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conocemos las preocupaciones comunes sobre la tecnología. Aquí están
            nuestras respuestas basadas en 8+ años de experiencia.
          </p>
        </div>

        <div className="space-y-8">
          {CONTENT.list.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-primary mb-2">
                      "{item.objTitle}"
                    </h3>
                    <p className="text-gray-600 text-sm">{item.objection}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-primary mb-2">
                      {item.resoTitle}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.resolution}</p>
                  </div>
                </div>

                <div className="bg-brand-secondary/10 p-4 rounded-lg text-center">
                  <div className="text-brand-primary font-bold text-lg">
                    {item.stats}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
