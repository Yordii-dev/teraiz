import { useState } from "react";
import Best from "../components/Best";

import "./Bests.css";
import PresupuestoImg from "../assets/bests/presupuesto.svg";
import TimeImg from "../assets/bests/tieme.svg";
import AlertImg from "../assets/bests/alert.svg";
import FreeImg from "../assets/bests/free.svg";
import WspImg from "../assets/bests/sms.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  const [extras] = useState([
    {
      img: WspImg,
      title: "Mantenimiento gratis",
      description: "Mantenimiento al año gratis en tu primer proyecto.",
      ctaText: "Escribenos ahora",
    },
    {
      img: FreeImg,
      title: "¡POR TIEMPO LIMITADO, el 40% de tus requerimientos es GRATIS!",
      description:
        "Inicia tu proyecto sin compromisos. Analizamos, diseñamos y desarrollamos parte de tu solución sin costo. Tú solo decides si seguimos.",
      ctaText: "Cuentanos tus ideas y cotizalo gratis",
    },
  ]);

  return (
    <div className="bests">
      <div className="bests__title text-center text-bluesemi">
        <h1 className="m-0 size-1 weight-semibold">Somos tu mejor opcion</h1>
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

        {extras.map((extra, index) => (
          <div
            key={index}
            className="bests__list__extra d-flex flex-column justify-content-between border-radius"
          >
            <p className="size-2 weight-bold text-bluesemi">{extra.title}</p>
            <p className="bests__list__extra__des size-4 weight-regular text-primary">
              {extra.description}
            </p>

            <p
              data-bs-toggle="modal"
              data-bs-target="#moreInfoModal"
              role="button"
              className="bests__list__extra__ctatext size-3 weight-semibold text-secondary mt-auto"
            >
              {extra.ctaText}
              <FontAwesomeIcon icon={faComments} className="ms-3" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Bests;
