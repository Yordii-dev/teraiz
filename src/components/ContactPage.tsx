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
    console.log(isSubmitting)
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y subtítulo */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {CONTENT.title}
          </h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            {CONTENT.description}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto w-full">
          <div className="space-y-2">
            <Label htmlFor="name">{CONTENT.nameLabel}</Label>
            <Input
              id="name"
              type="text"
              placeholder={CONTENT.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{CONTENT.mailLabel}</Label>
            <Input
              id="email"
              type="email"
              placeholder={CONTENT.mailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">{CONTENT.phoneLabel}</Label>
            <Input
              id="phone"
              type="tel"
              placeholder={CONTENT.phonePlaceholder}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
 
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white"
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
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
