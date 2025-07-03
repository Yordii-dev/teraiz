import "./App.css";
import FormModal from "./components/FormModal";
import SuccessModal from "./components/SuccessModal";
import Top from "./components/Top";
import Companies from "./sections/Companies";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import "./i18n";
import { TranslationProvider } from "./context/TranslationContext";
import Solutions from "./sections/Solutions";
import Section from "./components/Section";
import Authority from "./sections/Authority";
import Meet from "./sections/Meet";
import Faq from "./sections/Faq";
import { ModalProvider } from "./context/ModalContext";
import LanguageModal from "./components/LanguageModal";
import { GlobalProvider } from "./context/GlobalContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <TranslationProvider>
      <GlobalProvider>
        <ModalProvider>
          <Top></Top>
          <Hero></Hero>

          <Section backgroundColor="white">
            <div data-aos="fade-up">
              <Solutions />
            </div>
          </Section>

          <Section backgroundColor="white">
            <div data-aos="fade-up">
              <Services />
            </div>
          </Section>

          <Section backgroundColor="white">
            <div data-aos="fade-up">
              <Authority />
            </div>
          </Section>

          <Section backgroundColor="white">
            <div data-aos="fade-up">
              <Companies></Companies>
            </div>
          </Section>

          <Section backgroundColor="white">
            <div data-aos="fade-up">
              <Meet />
            </div>
          </Section>

          <Section backgroundColor="white">
            <div data-aos="fade-up">
              <Faq></Faq>
            </div>
          </Section>

          <div className="bg-gray1">
            <Footer />
          </div>

          <FormModal />
          <SuccessModal />
          <LanguageModal />
        </ModalProvider>
      </GlobalProvider>
    </TranslationProvider>
  );
}

export default App;
