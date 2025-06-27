//import { useEffect } from "react";
import "./App.css";
//import MoreInfo from "./components/MoreInfo";
//import SuccessModal from "./components/SuccessModal";
import Top from "./components/Top";
import Companies from "./sections/Companies";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import "./i18n";
import { TranslationProvider } from "./context/TranslationContext";
// import Bests from "./sections/Bests";
import Solutions from "./sections/Solutions";
import Section from "./components/Section";
import Authority from "./sections/Authority";
import Meet from "./sections/Meet";
import Faq from "./sections/Faq";

function App() {
  return (
    <TranslationProvider>
      <div>
        <Top></Top>
        <Hero></Hero>
        <Section backgroundColor="white">
          <Solutions />
        </Section>
        <Section backgroundColor="#EEEEEE">
          <Services />
        </Section>
        <Section backgroundColor="white">
          <Authority />
        </Section>
        <Section backgroundColor="#EEEEEE">
          <Meet />
        </Section>
        <Section backgroundColor="white">
          <Companies></Companies>
        </Section>
        <Section backgroundColor="#EEEEEE">
          <Faq></Faq>
        </Section>

        <Footer></Footer>
      </div>
    </TranslationProvider>
  );
}

export default App;
