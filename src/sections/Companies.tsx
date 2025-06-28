import { useRef, useState } from "react";
import "./Companies.css";

import img from "../assets/react.svg";
import Company from "../components/Company";

function Companies() {
  const [companies] = useState([
    {
      img,
      title: "TechRaiz ordenó nuestro caos con un sistema hecho a medida.",
      author: "Director Comercial",
      description:
        "Usábamos Excel, WhatsApp y documentos por todos lados. La agencia entendió nuestro proceso y lo digitalizó todo. Ahora somos más eficientes y vendemos más sin crecer en personal.",
    },
    {
      img,
      title:
        "Nuestra inmobiliaria creció gracias al sistema que nos desarrolló TechRaiz.",
      author: "CEO",
      description:
        "Desde la atención al cliente hasta la gestión interna, todo está más rápido y claro. Trabajar con una agencia que entiende el rubro inmobiliario marcó la diferencia.",
    },
    {
      img,
      title: "Todo en un solo sistema: propiedades, clientes y agentes.",
      author: "Gerente de Operaciones",
      description:
        "Con TechRaiz pasamos de procesos manuales a reportes automáticos. Tomamos decisiones basadas en datos y tenemos visibilidad completa del negocio.",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? companies.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === companies.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="compaines text-black d-flex align-items-center justify-content-between">
      <div className={`compaines__title`}>
        <h1 className="size-1 weight-semibold">
          <span className="text-secondary">2025 </span>
          <br />
          Es el año para
          <br />
          escalar
        </h1>
      </div>

      <div
        className={`compaines__list h-100 border-radius swipe-container`}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const endX = e.changedTouches[0].clientX;
          const diff = touchStartX.current - endX;
          if (diff > 50) goNext();
          else if (diff < -50) goPrev();
        }}
      >
        <div className="">
          <Company
            key={currentIndex}
            img={companies[currentIndex].img}
            title={companies[currentIndex].title}
            author={companies[currentIndex].author}
            description={companies[currentIndex].description}
          />
        </div>
        <div className="dots">
          {companies.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Companies;
