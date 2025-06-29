import { useModal } from "../context/ModalContext";
import "./SuccessModal.css";

const SuccessModal = () => {
  const { successModalRef } = useModal();

  return (
    <div
      ref={successModalRef}
      className="modal fade"
      id="successModal"
      tabIndex={-1}
      aria-hidden="true"
      data-bs-backdrop="static"
      aria-labelledby="successModalLabel"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-radius bg-gray1 shadow-lg px-4">
          <div className="modal-header border-0 justify-content-center pt-4">
            <h5
              className="modal-title size-2 weight-bold text-black"
              id="successModalLabel"
            >
              ¡Gracias por tu mensaje!
            </h5>
          </div>

          <div className="modal-body text-center py-3">
            <p className="size-3 weight-regular text-black opacity-2">
              Hemos recibido tu mensaje y nos pondremos en contacto pronto.
            </p>
          </div>

          <div className="modal-footer border-0 justify-content-center pb-4">
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
