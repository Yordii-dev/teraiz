import "./Question.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

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
        <p className="size-2 weight-semibold">{question}</p>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="text-secondary size-icon"
        />
      </div>

      {isOpen && <p className="question__answer size-3">{answer}</p>}
    </div>
  );
}

export default Question;
