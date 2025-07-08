import { useTranslation } from "@/contexts/LanguageContext";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const { t } = useTranslation();
  const CONTENT = t.testimonies;
  const CONTENT_AUTHORITY = t.authority;

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {CONTENT.title}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {CONTENT.list.map((testimonial, index) => (
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
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
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
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-brand-primary to-brand-primary/90 rounded-2xl p-8 sm:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              {CONTENT_AUTHORITY.title}
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              {CONTENT_AUTHORITY.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {CONTENT_AUTHORITY.list.map((stat, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-brand-secondary/20 rounded-full flex items-center justify-center group-hover:bg-brand-secondary/30 transition-colors">
                    <stat.icon className="h-8 w-8 text-brand-secondary" />
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-brand-secondary mb-2">
                  {stat.title}
                </div>
                <p className="text-white/90">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
