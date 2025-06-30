import { useEffect, useRef, useState } from "react";
import { useModal } from "../context/ModalContext";
import "./FormModal.css";

const FormModal = () => {
  const { modalRefs } = useModal();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const defaultDescription =
    "Hola, me interesa el 40% de descuento en sus soluciones inmobiliarias. ¿Podrían escribirme?.";
  const inputRef = useRef<HTMLInputElement>(null);
  const { openModal, closeModal } = useModal();
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
    resetTextDefault();
    closeModal("contact");
    openModal("success");
  };
  const resetTextDefault = () => {
    if (textRef.current) {
      textRef.current.value = defaultDescription;
    }
  };

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  useEffect(() => {
    const modalEl = modalRefs.contact.current;

    if (modalEl) {
      const handleClose = () => {
        resetTextDefault();
      };

      modalEl.addEventListener("hidden.bs.modal", handleClose);

      return () => {
        modalEl.removeEventListener("hidden.bs.modal", handleClose);
      };
    }
  }, []);
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
              Hablar con un experto
            </h5>
          </div>

          <div className="modal-body text-center">
            <input
              ref={inputRef}
              className={`${
                !error ? "border-black" : "input-error"
              } text-black placeholder-black size-3 flex-grow-1 border-radius`}
              type="email"
              placeholder="Tu email de contacto"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              ref={textRef}
              placeholder="Describenos tus problemas"
              className={`border-black text-black placeholder-black size-3 flex-grow-1 border-radius`}
              defaultValue={defaultDescription}
            ></textarea>
          </div>

          <div className="modal-footer border-0 justify-content-center">
            <button
              type="submit"
              className="btn size-3 bg-secondary text-black weight-semibold border-radius px-4 py-3"
            >
              Hablar con un experto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
