import { useEffect, useRef, useState } from "react";
import { useModal } from "../context/ModalContext";
import "./FormModal.css";
import { useGlobal } from "../context/GlobalContext";
import BtnCta from "./BtnCta";
import { useTranslation } from "../context/TranslationContext";

const FormModal = () => {
  const { t } = useTranslation();
  const texts = t.formModal;
  const { targetModalContact } = useGlobal();
  const { modalRefs, openModal, closeModal } = useModal();

  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [description, setDescription] = useState(
    texts.defaultDescription[targetModalContact]
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const inputVisible =
      inputRef.current &&
      window.getComputedStyle(inputRef.current).display !== "none";

    //Validar que input tenga correo solo si esta visible
    if (inputVisible) {
      if (!email.trim()) {
        setError(true);
        inputRef.current?.focus();
        return;
      }
      setError(false);
      setEmail("");
    }
    setDescription(texts.defaultDescription[targetModalContact]);

    closeModal("contact");
    openModal("success");
  };

  useEffect(() => {
    const modalEl = modalRefs.contact.current;
    if (!modalEl) return;

    const handleClose = () => {
      setDescription(texts.defaultDescription[targetModalContact]);
    };

    modalEl.addEventListener("hidden.bs.modal", handleClose);
    return () => modalEl.removeEventListener("hidden.bs.modal", handleClose);
  }, [texts, targetModalContact]);

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => setError(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  useEffect(() => {
    setDescription(texts.defaultDescription[targetModalContact]);
  }, [targetModalContact, texts]);

  return (
    <div
      ref={modalRefs.contact}
      className="modal fade"
      tabIndex={-1}
      aria-hidden="true"
      aria-labelledby="FormModalLabel"
    >
      <div className="modal-dialog modal-dialog-centered">
        <form
          onSubmit={handleSubmit}
          className="modal-content border-radius bg-gray1 shadow-lg"
        >
          <div className="modal-header border-0 justify-content-center">
            <h5
              className="modal-title size-2 weight-bold text-black"
              id="FormModalLabel"
            >
              {texts.title}
            </h5>
          </div>

          <div className="modal-body text-center">
            <input
              ref={inputRef}
              className={`${
                !error ? "border-black" : "input-error"
              } text-black placeholder-black size-3 flex-grow-1 border-radius`}
              type="email"
              placeholder={texts.inputPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              ref={textRef}
              placeholder="Describenos tus problemas"
              className={`border-black text-black placeholder-black size-3 flex-grow-1 border-radius`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="modal-footer border-0 justify-content-center">
            <div className="meet__content__cta mt-auto">
              <BtnCta
                text={texts.textCtaBtn}
                bgBtn="bg-secondary"
                textColor="text-black"
                hideIcon={true}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
