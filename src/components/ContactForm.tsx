import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { MailSend } from "./services/MailZoho";

interface ContactFormProps {
  trigger: React.ReactNode;
  defaultMessage?: string;
}

const ContactForm = ({ trigger }: ContactFormProps) => {
  const { t } = useTranslation();
  const CONTENT = t.formModal;
  const CONTENT_SUCCESS = t.successModal;

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(CONTENT.defaultDescription);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulamos el envío del formulario
    setTimeout(() => {
      toast({
        title: CONTENT_SUCCESS.title,
        description: CONTENT_SUCCESS.description,
      });
      setIsSubmitting(false);
      setIsOpen(false);
      setEmail("");
      setMessage(CONTENT.defaultDescription);
    }, 1000);

    await MailSend({ email, message });

  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
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
            <Label htmlFor="email">{CONTENT.mailInput}</Label>
            <Input
              id="email"
              type="email"
              placeholder={CONTENT.inputPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{CONTENT.messageInput}</Label>
            <Textarea
              id="message"
              placeholder={CONTENT.messagePlaceholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
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
