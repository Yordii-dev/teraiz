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
    <div className="compaines d-flex justify-content-between align-items-center mx-auto">
      <div className="w-25">
        <h1 className="text-secondary fw-bold compaines__title">2025</h1>
        <p className="text-primary compaines__des fw-semibold">
          <span className="font-extrabold text-bluedark d-block">
            Otros ya escalan
          </span>
          y tu aun lo dudas
        </p>
      </div>
      <div className="compaines__list bg-cuaternary p-4">
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
        <div className="mx-5">
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
