import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useTranslation();
  const CONTENT = t.faqs;

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4">
            {CONTENT.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {CONTENT.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {CONTENT.list.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
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
