import "./Faq.css";
import { useState } from "react";
import Question from "../components/Question";

function Faq() {
  const [questions, _] = useState([
    {
      question: "¿Qué incluye la cotización gratuita?",
      answer:
        "Analizamos tus necesidades, te proponemos una solución personalizada y estimamos el costo del sistema. Sin compromiso.",
    },
    {
      question: "¿Trabajan solo con inmobiliarias?",
      answer:
        "Nos especializamos en inmobiliarias, lotizadoras y empresas que venden o alquilan propiedades. Conocemos bien el sector.",
    },
    {
      question: "¿Puedo integrar WhatsApp o redes sociales?",
      answer:
        "Sí. Podemos conectar tu sistema con WhatsApp, Facebook, Instagram y más, para captar y atender clientes automáticamente.",
    },
    {
      question: "¿Tienen experiencia en Perú y otros países?",
      answer:
        "Sí. Hemos trabajado con empresas en Perú, México, Colombia, Chile y EE.UU. Adaptamos las soluciones a cada mercado.",
    },
    {
      question: "¿Qué tipo de sistemas desarrollan?",
      answer:
        "Creamos CRMs, gestores de propiedades, sistemas de alquiler, mapas, cotizadores, automatización de cobros y más.",
    },
  ]);

  return (
    <div className="faq text-black">
      <div className="faq__title text-center">
        <h1 className="size-1 weight-semibold">Preguntas frecuentes</h1>
      </div>

      <div className="faq__list mx-auto">
        {questions.map((q, index) => (
          <Question key={index} question={q.question} answer={q.answer} />
        ))}
      </div>
    </div>
  );
}

export default Faq;
