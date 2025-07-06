
import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Directora Comercial",
      company: "Inmobiliaria Premier México",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b775?w=150&h=150&fit=crop&crop=face",
      content: "Desde que implementamos la plataforma de RealTechPro, nuestras ventas aumentaron 45% en 6 meses. La automatización del CRM nos ahorra 15 horas semanales y el ROI ha sido excepcional.",
      rating: 5,
      results: "+45% ventas en 6 meses",
      country: "🇲🇽"
    },
    {
      name: "James Wilson",
      role: "CEO",
      company: "Wilson Real Estate Group",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The custom software solution transformed our business operations. We've seen a 60% increase in productivity and our agents close 30% more deals. Outstanding support throughout the entire process.",
      rating: 5,
      results: "+60% productividad",
      country: "🇺🇸"
    },
    {
      name: "Carlos Mendoza",
      role: "Gerente General",
      company: "PropiedadesColombia S.A.S",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "La mejor inversión tecnológica que hemos hecho. El sistema de analytics predictivos nos ayuda a identificar las mejores oportunidades. Hemos multiplicado por 3 nuestro volumen de ventas.",
      rating: 5,
      results: "3x volumen de ventas",
      country: "🇨🇴"
    },
    {
      name: "Ana Rodríguez",
      role: "Fundadora",
      company: "Urban Properties Argentina",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      content: "El equipo de RealTechPro entendió perfectamente nuestras necesidades. El portal web y la app móvil han mejorado significativamente la experiencia de nuestros clientes. ROI del 300% en el primer año.",
      rating: 5,
      results: "300% ROI primer año",
      country: "🇦🇷"
    }
  ];

  const stats = [
    { icon: Users, number: "150+", label: "Inmobiliarias exitosas" },
    { icon: TrendingUp, number: "45%", label: "Aumento promedio en ventas" },
    { icon: Award, number: "8+", label: "Años de experiencia" },
  ];

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4">
            Casos de Éxito
            <span className="text-brand-secondary"> Comprobados</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Resultados reales de inmobiliarias que han transformado su negocio con nuestras soluciones de software personalizado
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-2xl relative group hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-secondary/20"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand-secondary rounded-full flex items-center justify-center">
                <Quote className="h-4 w-4 text-white" />
              </div>

              {/* Country flag */}
              <div className="absolute -top-2 -right-2 text-2xl">
                {testimonial.country}
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              {/* Results badge */}
              <div className="bg-brand-secondary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
                📈 {testimonial.results}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-brand-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-brand-primary to-brand-primary/90 rounded-2xl p-8 sm:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Resultados que Hablan por Sí Solos
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Más de 8 años creando éxito para inmobiliarias en LATAM y Norteamérica
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-brand-secondary/20 rounded-full flex items-center justify-center group-hover:bg-brand-secondary/30 transition-colors">
                    <stat.icon className="h-8 w-8 text-brand-secondary" />
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-brand-secondary mb-2">
                  {stat.number}
                </div>
                <p className="text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
