import "./Faq.css";
import { useState } from "react";
import Question from "../components/Question";

function Faq() {
  const [questions, _] = useState([
    {
      question: "Qué incluye la cotización gratuita?",
      answer: `Enfoque en bienes raices, 
      dashboards, gestion de propiedades, 
      mapas, cotizadores, etc.`,
    },
    {
      question: "Qué incluye la cotización gratuita?",
      answer: `Enfoque en bienes raices, 
      dashboards, gestion de propiedades, 
      mapas, cotizadores, etc.`,
    },
    {
      question: "Qué incluye la cotización gratuita?",
      answer: `Enfoque en bienes raices, 
      dashboards, gestion de propiedades, 
      mapas, cotizadores, etc.`,
    },
  ]);

  return (
    <div className="faq text-black">
      <div className="text-center">
        <h1 className="size-1 weight-semibold">Preguntas frecuentes</h1>
      </div>

      <div className="faq_list mx-auto">
        {questions.map((q, index) => (
          <Question key={index} question={q.question} answer={q.answer} />
        ))}
      </div>
    </div>
  );
}

export default Faq;
