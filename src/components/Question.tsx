import "./Question.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Question({ question, answer }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="question">
      <div
        className="d-flex justify-content-between align-items-center cursor-pointer"
        onClick={toggleAnswer}
      >
        <p className="my-3 size-2 weight-semibold">{question}</p>
        <FontAwesomeIcon
          icon={isOpen ? faMinus : faPlus}
          className="text-black size-icon"
        />
      </div>

      <p
        className={`m-0 question__answer size-3 ${isOpen ? "open" : "closed"}`}
      >
        {answer}
      </p>
    </div>
  );
}

export default Question;
