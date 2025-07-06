
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar una solución personalizada?",
      answer: "El tiempo varía según la complejidad, pero típicamente: Sitios web básicos (4-6 semanas), CRM personalizado (8-12 semanas), Apps móviles (10-16 semanas). Siempre entregamos prototipos funcionales en las primeras 2-3 semanas."
    },
    {
      question: "¿Qué tipo de soporte ofrecen después del lanzamiento?",
      answer: "Ofrecemos soporte técnico 24/7, actualizaciones gratuitas durante el primer año, capacitación continua para tu equipo, y un gerente de cuenta dedicado. También incluimos monitoreo proactivo y backups automáticos."
    },
    {
      question: "¿Pueden integrar con nuestros sistemas actuales?",
      answer: "Sí, somos expertos en integraciones. Conectamos con MLS, CRMs como Salesforce, sistemas contables como QuickBooks, plataformas de email marketing, redes sociales, y más de 50 herramientas comunes en el sector inmobiliario."
    },
    {
      question: "¿Cómo garantizan la seguridad de nuestros datos?",
      answer: "Implementamos encriptación SSL/TLS, backups automáticos diarios, autenticación de dos factores, cumplimiento con GDPR y regulaciones locales, hosting en servidores certificados, y auditorías de seguridad regulares."
    },
    {
      question: "¿Qué pasa si necesitamos cambios después del desarrollo?",
      answer: "Los primeros 3 meses incluyen ajustes menores sin costo. Para cambios mayores, ofrecemos planes de mantenimiento flexibles. Nuestro proceso ágil permite adaptaciones rápidas según evolucionen tus necesidades de negocio."
    },
    {
      question: "¿Ofrecen capacitación para nuestro equipo?",
      answer: "Sí, incluimos capacitación completa: sesiones presenciales o virtuales, manuales detallados, videos tutoriales, y sesiones de repaso. Continuamos el soporte hasta que tu equipo esté 100% cómodo con la nueva tecnología."
    },
    {
      question: "¿Cuál es el costo aproximado de una solución personalizada?",
      answer: "Los costos varían según las funcionalidades requeridas. Sitios web desde $5,000 USD, CRM personalizado desde $15,000 USD, Apps móviles desde $20,000 USD. Ofrecemos planes de pago flexibles y financiamiento disponible."
    },
    {
      question: "¿Trabajan con inmobiliarias pequeñas o solo grandes empresas?",
      answer: "Trabajamos con inmobiliarias de todos los tamaños. Tenemos soluciones escalables desde agentes independientes hasta grandes corporativos. Nuestro enfoque se adapta al presupuesto y necesidades específicas de cada cliente."
    }
  ];

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Respuestas a las preguntas más comunes sobre nuestros servicios de desarrollo de software inmobiliario.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-brand-primary pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-brand-secondary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-brand-secondary flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
