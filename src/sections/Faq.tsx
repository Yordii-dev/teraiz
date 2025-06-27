import { useState } from "react";
import "./Faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Faq() {
  const [questions, _] = useState([
    {
      question: "Qué incluye la cotización gratuita?",
      answer: `Enfoque en bienes raices, 
      dashboards, gestion de propiedades, 
      mapas, cotizadores, etc.`,
    },
  ]);

  return (
    <div className="services text-black">
      <div className="services__title text-center">
        <h1 className="size-1">Preguntas frecuentes</h1>
      </div>

      <div className="services_list mx-auto">
        {questions.map((q, index) => (
          <div key={index}>
            <div className="d-flex justify-content-between align-items-center">
              <p className="m-0 size-2 weight-semibold">{q.question}</p>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-secondary"
              />
            </div>

            <p className="m-0 size-3">{q.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
