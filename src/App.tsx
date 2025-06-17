import "./App.css";
import Top from "./components/Top";
import Bests from "./views/Bests";
import Hero from "./views/Hero";
import Services from "./views/Services";

function App() {
  return (
    <div className="">
      <Top />
      <Hero></Hero>
      <Services></Services>
      <Bests></Bests>
    </div>
  );
}

export default App;
