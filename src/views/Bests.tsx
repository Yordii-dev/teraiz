import { useState } from "react";
import Best from "../components/Best";

import "./Bests.css";
import PresupuestoImg from "../assets/bests/presupuesto.svg";
import TimeImg from "../assets/bests/tieme.svg";
import AlertImg from "../assets/bests/alert.svg";

function Bests() {
  const [bests, _] = useState([
    {
      img: PresupuestoImg,
      title: "Nos adaptamos \na tu \npresupuesto",
      description:
        "Pagos flexibles, por etapas o mensuales. \n\nNo hay excusas para mejorar tus operaciones inmobiliarias.",
    },
    {
      img: TimeImg,
      title: "Mientras tu dudas, \ntu competencia avanza",
      description:
        "Ellos están ganándote la carrera. En el juego de la innovación, el que se detiene... pierde. \n\n¿Te quedarás atrás?",
    },
    {
      img: AlertImg,
      title: "Tienes problemas, \nNosotros \nsoluciónes",
      description:
        "Procesos lentos, caos y clientes que se van. \n\nPierdes tiempo, pierdes ventas. Así de claro.",
    },
  ]);

  return (
    <div className="bests vh-100 bg-white">
      <div className="bests__title text-center text-bluesemi">
        <h1 className="m-0">Somos tu mejor opcion</h1>
      </div>

      <div className="bests_list mx-auto">
        {bests.map((best, index) => (
          <Best
            key={index}
            img={best.img}
            title={best.title}
            description={best.description}
          />
        ))}
      </div>
    </div>
  );
}
export default Bests;
