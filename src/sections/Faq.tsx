import "./Faq.css";
import Question from "../components/Question";
import { useTranslation } from "../context/TranslationContext";

function Faq() {
  const { t } = useTranslation();
  const texts = t.faqs;

  return (
    <div className="faq text-black">
      <div className="faq__title text-center">
        <h1 className="size-1 weight-semibold">{texts.title}</h1>
      </div>

      <div className="faq__list mx-auto">
        {texts.list.map((q, index) => (
          <Question key={index} question={q.question} answer={q.answer} />
        ))}
      </div>
    </div>
  );
}

export default Faq;
