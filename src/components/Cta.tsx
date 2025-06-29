import { useState } from "react";
import "./Cta.css";
import { useTranslation } from "../context/TranslationContext";

function Cta({
  text,
  btnBg,
  textColor,
  textInputColor,
  borderInput,
  hideObjections,
}: any) {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");

  return (
    <div className="container__cta d-flex flex-column">
      <input
        className={`${textInputColor} ${borderInput} size-3 flex-grow-1 border-radius`}
        type="email"
        placeholder="Tu email de contacto"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!hideObjections && (
        <div className="container__cta__objections size-4 opacity-2 weight-regular text-white d-flex justify-content-between">
          <p>{t.hero.socialproof}</p>
          <p>Planes segun presupuesto</p>
        </div>
      )}
      <button
        className={`w-100 btn ${textColor} size-3 ${btnBg} weight-semibold border-radius`}
         data-bs-toggle="modal"
        data-bs-target="#successModal"
        disabled={!email.trim()}
      >
        {text}
      </button>
    </div>
  );
}

export default Cta;
