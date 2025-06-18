import { useEffect } from "react";
import "./App.css";
import MoreInfo from "./components/MoreInfo";
import SuccessModal from "./components/SuccessModal";
import Top from "./components/Top";
import Bests from "./sections/Bests";
import Companies from "./sections/Companies";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import './i18n';
import { TranslationProvider } from './context/TranslationContext';
import { useTranslation } from 'react-i18next';

function App() {

  return (
    <TranslationProvider>
      <div>
        <Top></Top>
        <Hero></Hero>
        <Services></Services>
        <Companies></Companies>
        <Bests></Bests>
        <Footer></Footer>
        <MoreInfo />
        <SuccessModal />
      </div>
    </TranslationProvider>

  );
}

export default App;
