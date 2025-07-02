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
import Image from "./sections/Image";

function App() {
  return (
    <TranslationProvider>
      <GlobalProvider>
        <ModalProvider>
          <Top></Top>
          <Hero></Hero>

          <Section backgroundColor="white">
            <Solutions />
          </Section>
          <Section disableTop>
            <Image></Image>
          </Section>

          <Section backgroundColor="white">
            <Services />
          </Section>
          <Section backgroundColor="white">
            <Authority />
          </Section>
          <Section disableTop>
            <Image></Image>
          </Section>

          <Section backgroundColor="white">
            <Companies></Companies>
          </Section>

          <Section backgroundColor="white">
            <Meet />
          </Section>
          <Section disableTop>
            <Image></Image>
          </Section>

          <Section backgroundColor="white">
            <Faq></Faq>
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
