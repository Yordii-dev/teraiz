import { COMPANY_PHONES } from "@/constants";
import { useTranslation } from "@/contexts/LanguageContext";
import type { TranslationType } from "@/types/Translations";
import { MessageCircle } from "lucide-react";
interface WhatsAppButtonProps {
  content: TranslationType;
}
const WhatsAppButton = ({ content }: WhatsAppButtonProps) => {
  const t = content;
  const CONTENT = t.wsp;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(CONTENT.message);
    const whatsappUrl = `https://wa.me/${COMPANY_PHONES[0].phone}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
      aria-label={CONTENT.ariaLabel}
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
    </button>
  );
};

export default WhatsAppButton;
