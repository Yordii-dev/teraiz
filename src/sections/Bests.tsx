import { use, useState } from "react";
import Best from "../components/Best";

import "./Bests.css";
import PresupuestoImg from "../assets/bests/presupuesto.svg";
import TimeImg from "../assets/bests/tieme.svg";
import AlertImg from "../assets/bests/alert.svg";
import FreeImg from "../assets/bests/free.svg";
import WspImg from "../assets/bests/sms.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";

function Bests() {
  const [bests] = useState([
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

  const [promo] = useState({
    img: FreeImg,
    title: "¡POR TIEMPO LIMITADO, el 40% de tus requerimientos es GRATIS!",
    description:
      "Inicia tu proyecto sin compromisos. Analizamos, diseñamos y desarrollamos parte de tu solución sin costo. Tú solo decides si seguimos.",
    ctaText: "Cuentanos tus ideas y cotizalo gratis",
  });

  const [wsp] = useState({
    img: WspImg,
    title: "Atencion por whatsapp",
    description:
      "Escribenos al +51 945 234 917 y cuentanos tu idea.Te ayudaremos al instante.",
    ctaText: "Escribenos ahora",
  });

  return (
    <div className="bests bg-white">
      <div className="bests__title text-center text-bluesemi">
        <h1 className="m-0">Somos tu mejor opcion</h1>
      </div>

      <div className="bests__list mx-auto">
        {bests.map((best, index) => (
          <Best
            key={index}
            img={best.img}
            title={best.title}
            description={best.description}
          />
        ))}
      </div>

      <div className="bests__promo mx-auto d-flex justify-content-between align-items-center">
        <div className="bests__promo__free d-flex align-items-center justify-content-between">
          <div className="bests__promo__free__img">
            <img className="mt-2" src={promo.img} alt={promo.title} />
          </div>

          <div className="d-flex flex-column h-100 justify-content-between p-5">
            <p className="bests__promo__free__title text-white fw-semibold font-bold mt-4">
              {promo.title}
            </p>
            <p className="bests__promo__free__des text-white font-semibold flex-grow-1">
              {promo.description}
            </p>

            <p
              data-bs-toggle="modal"
              data-bs-target="#moreInfoModal"
              role="button"
              className="bests__promo__ctatext mt-4 fw-bold text-secondary font-semibold flex-grow-1"
            >
              {promo.ctaText}
              <FontAwesomeIcon icon={faComments} className="ms-3" />
            </p>
          </div>
        </div>

        <div className="bests__promo__wsp p-5">
          <div className="d-flex justify-content-between align-items-center">
            <p className="bests__promo__wsp__title text-secondary fw-bold">
              {wsp.title}
            </p>
            <img className="mt-2" src={wsp.img} alt={wsp.title} />
          </div>
          <p className="text-bluesemi fw-semibold mt-3">
            {wsp.description} <br />
          </p>
          <a
            className="bests__promo__ctatext d-block mt-4 text-primary fw-bold"
            href="https://api.whatsapp.com/send?phone=51945234917&text=Hola,%20me%20gustaria%20saber%20mas%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
          >
            {wsp.ctaText}

            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Bests;
