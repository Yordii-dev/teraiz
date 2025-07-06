
import { CheckCircle, Clock, DollarSign, Settings, Users, Zap } from 'lucide-react';

const ObjectionsSection = () => {
  const objections = [
    {
      icon: DollarSign,
      objection: "Es muy costoso desarrollar software personalizado",
      resolution: "Nuestros proyectos se pagan solos en 6-12 meses por el aumento en eficiencia y ventas. Ofrecemos planes de pago flexibles y ROI garantizado.",
      stats: "ROI promedio: 300% en el primer año"
    },
    {
      icon: Clock,
      objection: "Toma mucho tiempo implementar una solución",
      resolution: "Nuestro proceso ágil permite tener prototipos funcionando en 2-3 semanas. Implementación completa en 2-4 meses con migración de datos incluida.",
      stats: "Tiempo promedio: 3 meses"
    },
    {
      icon: Settings,
      objection: "Es muy complicado de usar para mi equipo",
      resolution: "Diseñamos interfaces intuitivas específicas para inmobiliarias. Incluimos capacitación completa y soporte continuo para garantizar adopción exitosa.",
      stats: "95% tasa de adopción por usuarios"
    },
    {
      icon: Users,
      objection: "No tenemos personal técnico para mantenerlo",
      resolution: "Nos encargamos del mantenimiento, actualizaciones y soporte técnico. Tu equipo se enfoca en vender, nosotros en la tecnología.",
      stats: "Soporte 24/7 incluido"
    },
    {
      icon: Zap,
      objection: "No se integra con nuestras herramientas actuales",
      resolution: "Especializados en integraciones con MLS, CRMs, sistemas contables y más. Conectamos todo tu ecosistema tecnológico sin interrupciones.",
      stats: "+50 integraciones disponibles"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4">
            Resolvemos tus Inquietudes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conocemos las preocupaciones comunes sobre la tecnología. 
            Aquí están nuestras respuestas basadas en 8+ años de experiencia.
          </p>
        </div>

        <div className="space-y-8">
          {objections.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-primary mb-2">
                      "Preocupación:"
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.objection}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-primary mb-2">
                      Nuestra Solución:
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.resolution}
                    </p>
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
