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

interface ContactFormProps {
  classBtn: string;
  content: TranslationType;
  textBtn: string;
  sizeBtn?: "sm" | "icon" | "lg";
  visibleIcon?: boolean;
}

const ContactForm = ({
  classBtn,
  content,
  textBtn,
  visibleIcon,
  sizeBtn,
}: ContactFormProps) => {
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
    setIsSubmitting(true);

    MailSend({
      name,
      email,
      phone,
    });

    toast({
      title: CONTENT_SUCCESS.title,
      description: CONTENT_SUCCESS.description,
    });
    setIsSubmitting(false);
    setIsOpen(false);

    setEmail("");
    setName("");
    setPhone("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size={sizeBtn} className={classBtn}>
          {textBtn}
          {visibleIcon && (
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          )}
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[500px]"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-brand-primary">
            {CONTENT.title}
          </DialogTitle>
          {/* <DialogDescription>
            Completa el formulario y nos pondremos en contacto contigo para
            agendar tu demo gratuita.
          </DialogDescription> */}
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
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
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
