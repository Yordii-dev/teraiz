import { useModal } from "../context/ModalContext";
import "./SuccessModal.css";

const SuccessModal = () => {
  const { modalRefs } = useModal();

  return (
    <div
      ref={modalRefs.success}
      className="modal fade"
      tabIndex={-1}
      aria-hidden="true"
      data-bs-backdrop="static"
      aria-labelledby="successModalLabel"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-radius bg-gray1 shadow-lg">
          <div className="modal-header border-0 justify-content-center">
            <h5
              className="modal-title size-2 weight-bold text-black"
              id="successModalLabel"
            >
              ¡Gracias por tu mensaje!
            </h5>
          </div>

          <div className="modal-body text-center">
            <p className="size-3 weight-regular text-black opacity-2">
              Hemos recibido tu mensaje y nos pondremos en contacto pronto.
            </p>
          </div>

          <div className="modal-footer border-0 justify-content-center">
            <button
              type="button"
              className="btn size-3 bg-secondary text-black weight-semibold border-radius px-4 py-2"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
