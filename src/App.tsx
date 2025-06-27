//import { useEffect } from "react";
import "./App.css";
//import MoreInfo from "./components/MoreInfo";
//import SuccessModal from "./components/SuccessModal";
import Top from "./components/Top";
//import Bests from "./sections/Bests";
import Companies from "./sections/Companies";
//import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import "./i18n";
import { TranslationProvider } from "./context/TranslationContext";
import Bests from "./sections/Bests";
import Solutions from "./sections/Solutions";
import Section from "./components/Section";
import Authority from "./sections/Authority";

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
        <div className="container-app-content mx-auto">
          <Companies></Companies>
          <Bests></Bests>
          {/*
            <MoreInfo />
            <SuccessModal />
          */}
        </div>
        {/* <Footer></Footer> */}
      </div>
    </TranslationProvider>
  );
}

export default App;
