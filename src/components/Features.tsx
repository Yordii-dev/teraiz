
import { BarChart3, Users, Building, Zap, Shield, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Analytics Avanzado",
      description: "Insights en tiempo real sobre tu mercado, tendencias de precios y oportunidades de inversión con IA predictiva."
    },
    {
      icon: Users,
      title: "CRM Inteligente",
      description: "Gestiona clientes, leads y seguimientos automatizados. Aumenta tu tasa de conversión hasta un 40%."
    },
    {
      icon: Building,
      title: "Gestión de Propiedades",
      description: "Centraliza toda tu cartera de propiedades con fotos 360°, documentos y historial completo."
    },
    {
      icon: Zap,
      title: "Automatización",
      description: "Automatiza tareas repetitivas: reportes, seguimientos y notificaciones para enfocar en cerrar ventas."
    },
    {
      icon: Shield,
      title: "Seguridad Total",
      description: "Encriptación bancaria, backups automáticos y cumplimiento GDPR. Tus datos están 100% seguros."
    },
    {
      icon: TrendingUp,
      title: "ROI Comprobado",
      description: "Nuestros clientes reportan un aumento promedio del 65% en productividad y 30% en ventas."
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4">
            Todo lo que necesitas para
            <span className="text-brand-secondary"> dominar el mercado</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Herramientas profesionales diseñadas específicamente para agentes inmobiliarios 
            y empresas que buscan escalar su negocio.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-brand-secondary/20"
            >
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-secondary/20 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-brand-secondary" />
              </div>
              
              <h3 className="text-xl font-semibold text-brand-primary mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-gray-600 mb-6">
              Únete a más de 500 inmobiliarias que ya están usando nuestra plataforma 
              para aumentar sus ventas y optimizar sus operaciones.
            </p>
            <button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
              Solicitar Demo Personalizada
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
