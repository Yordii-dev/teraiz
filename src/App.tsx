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

function App() {
  return (
    <TranslationProvider>
      <div>
        <Top></Top>
        <Hero></Hero>
        <div className="container-app-content mx-auto">
          <Services></Services>
          <Companies></Companies>
          {/*
            <Bests></Bests>
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
