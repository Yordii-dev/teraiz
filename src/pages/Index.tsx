import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import Testimonials from "@/components/Testimonials";
import MapSection from "@/components/MapSection";
import FAQSection from "@/components/FAQSection";
import CTA from "@/components/Cta";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesSection />
      <ObjectionsSection />
      <Testimonials />
      <MapSection />
      <FAQSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
