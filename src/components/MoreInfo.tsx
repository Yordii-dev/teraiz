import { useEffect, useRef, useState } from "react";
import "./MoreInfo.css"; // Importamos el CSS separado

const MoreInfo = () => {
  const inputRef = useRef<any>(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const modal = document.getElementById("moreInfoModal");

    const handleFocus = () => {
      inputRef.current?.focus();
    };

    modal?.addEventListener("shown.bs.modal", handleFocus);

    return () => {
      modal?.removeEventListener("shown.bs.modal", handleFocus);
    };
  }, []);
  return (
    <div
      className="modal fade"
      id="moreInfoModal"
      aria-hidden="true"
      aria-labelledby="moreInfoModalLabel"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modern-modal">
          <div className="modal-header modern-header">
            <h5 className="modal-title modal__title" id="moreInfoModalLabel">
              Cuéntanos tu idea
            </h5>
            <button
              type="button"
              className="btn-close modal__close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>

          <div className="modal-body modern-body">
            <form>
              <div className="form-group">
                <label htmlFor="email" className="modal__field">
                  Correo electrónico
                </label>
                <input
                  ref={inputRef}
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nombre@ejemplo.com"
                  className="form-control modern-input border-black"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje" className="modal__field">
                  Tu mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  placeholder="Escríbenos los detalles de tu idea..."
                  className="form-control modern-input border-black"
                ></textarea>
              </div>
            </form>
          </div>

          <div className="modal-footer modern-footer">
            <button
              data-bs-toggle="modal"
              data-bs-target="#successModal"
              disabled={!email.trim()}
              className="modal__button btn bg-secondary text-primary fw-semibold"
            >
              Cotiza gratis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
