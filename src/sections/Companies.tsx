import { useState } from "react";
import "./Companies.css";

import img from "../assets/react.svg";
import Company from "../components/Company";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Companies() {
  const [companies] = useState([
    {
      img,
      title:
        "Antes de trabajar con Protech, todo era un caos: Excel, mensajes sueltos, cero control.",
      author: "Director Comercial",
      description:
        "Perdíamos tiempo y clientes cada semana. Ahora todo está automatizado y nuestras ventas crecieron sin aumentar el equipo.",
    },
    {
      img,
      title:
        "Nuestra operación inmobiliaria se volvió más ágil y profesional desde que usamos TechRaiz.",
      author: "CEO",
      description:
        "Ahora respondemos más rápido a nuestros clientes y tenemos visibilidad total de cada proceso. Ha sido clave para nuestro crecimiento.",
    },
    {
      img,
      title:
        "TechRaiz nos ayudó a centralizar todo: propiedades, clientes y asesores en una sola plataforma.",
      author: "Gerente de Operaciones",
      description:
        "Antes todo era manual, ahora tenemos reportes en tiempo real y podemos tomar decisiones con datos, no con suposiciones.",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? companies.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === companies.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="compaines text-black d-flex align-items-center justify-content-between">
      <div className="compaines__title">
        <h1 className="size-1 weight-semibold">
          <span className="text-secondary">2025 </span>
          <br />
          Es el año para
          <br />
          escalar
        </h1>
      </div>
      <div className="compaines__list h-100 border-radius">
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          className="compaines__list__prev"
          onClick={goPrev}
        />
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          className="compaines__list__next"
          onClick={goNext}
        />
        <div className="">
          <Company
            key={currentIndex}
            img={companies[currentIndex].img}
            title={companies[currentIndex].title}
            author={companies[currentIndex].author}
            description={companies[currentIndex].description}
          />
        </div>
      </div>
    </div>
  );
}

export default Companies;
