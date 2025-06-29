import { useEffect, useRef, useState } from "react";

import "./Cta.css";
import { useTranslation } from "../context/TranslationContext";
import { useModal } from "../context/ModalContext";

function Cta({
  text,
  btnBg,
  textColor,
  textInputColor,
  borderInput,
  hideObjections,
  placeholderColor,
}: any) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { openSuccessModal } = useModal();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email.trim()) {
      setError(true);
      inputRef.current?.focus();
      return;
    }
    setError(false);
    openSuccessModal();
  };
  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [error]);
  return (
    <form onSubmit={handleSubmit} className="container__cta d-flex flex-column">
      <input
        ref={inputRef}
        className={`${
          !error ? borderInput : "input-error"
        } ${textInputColor} ${placeholderColor} size-3 flex-grow-1 border-radius`}
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
      >
        {text}
      </button>
    </form>
  );
}

export default Cta;
