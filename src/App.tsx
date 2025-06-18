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

function App() {
  return (
    <div className="">
      <Top></Top>
      <Hero></Hero>
      <Services></Services>
      <Companies></Companies>
      <Bests></Bests>
      <Footer></Footer>
      <MoreInfo />
      <SuccessModal />
    </div>
  );
}

export default App;
