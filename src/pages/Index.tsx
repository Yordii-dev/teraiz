import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import Testimonials from "@/components/Testimonials";
import MapSection from "@/components/MapSection";
import FAQSection from "@/components/FAQSection";
import CTA from "@/components/Cta";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { TitleUpdater } from "@/components/TitlteUpdater";
import { Card } from "@/components/ui/card";
import { Clock, Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TitleUpdater />
      <Header />
      <Hero />
      <ServicesSection />
      <Testimonials />
      <MapSection />
      <ObjectionsSection />
      <FAQSection />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
