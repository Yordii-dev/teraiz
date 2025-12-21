import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Send } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import { MailSend } from "./services/MailZoho";
import type { TranslationType } from "@/types/Translations";
import { SITE_URL } from "@/constants";

interface ContactPageProps {
  lang: string;
  classBtn: string;
  content: TranslationType;
  textBtn: string;
  sizeBtn?: "sm" | "icon" | "lg";
  visibleIcon?: boolean;
}

const ContactPage = ({
  lang,
  classBtn,
  content,
  textBtn,
  visibleIcon,
  sizeBtn,
}: ContactPageProps) => {
  const t = content;

  const CONTENT = t.formModal;
  const CONTENT_SUCCESS = t.successModal;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isSubmitting);
    setIsSubmitting(true);

    MailSend({
      origin: SITE_URL,
      name,
      email,
      phone,
    });

    setIsSubmitting(false);
    setIsOpen(false);

    setEmail("");
    setName("");
    setPhone("");

    const newPath = `/${lang}/thankyou`;
    window.location.href = newPath;
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            {CONTENT.title}
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            {CONTENT.description}
          </p>
        </div>

        {/* Card del formulario */}
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nombre */}
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {CONTENT.nameLabel}
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={CONTENT.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="
                h-11
                rounded-lg
                border-gray-300
                focus:border-brand-primary
                focus:ring-brand-primary/20
              "
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {CONTENT.mailLabel}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={CONTENT.mailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="
                h-11
                rounded-lg
                border-gray-300
                focus:border-brand-primary
                focus:ring-brand-primary/20
              "
                />
              </div>

              {/* Teléfono */}
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {CONTENT.phoneLabel}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={CONTENT.phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="
                h-11
                rounded-lg
                border-gray-300
                focus:border-brand-primary
                focus:ring-brand-primary/20
              "
                />
              </div>

              {/* CTA */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="
              w-full
              h-11
              rounded-lg
              bg-brand-primary
              text-white
              font-medium
              hover:bg-brand-primary/90
              shadow-md
              transition-all
            "
              >
                {isSubmitting ? (
                  CONTENT.textCtaBtnSending
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {CONTENT.textCtaBtn}
                  </>
                )}
              </Button>

              {/* Texto de confianza */}
              <p className="text-xs text-center text-gray-400">
                Te contactamos en menos de 24 horas · Reunión sin compromiso
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
