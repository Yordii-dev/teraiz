import "./SuccessModal.css";

const SuccessModal = () => {
  return (
    <div
      className="modal fade"
      id="successModal"
      tabIndex={-1}
      aria-hidden="true"
      aria-labelledby="successModalLabel"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modern-modal">
          <div className="modal-header modern-header justify-content-center">
            <h5 className="modal-title modal__title" id="successModalLabel">
              ¡Gracias por tu mensaje!
            </h5>
          </div>

          <div className="modal-body modern-body text-center">
            <p className="success__message">
              Hemos recibido tu mensaje y nos pondremos en contacto pronto.
            </p>
          </div>

          <div className="modal-footer modern-footer justify-content-center">
            <button
              onClick={(e: any) => {
                console.log(document.querySelector(".top-container"));

                document
                  .querySelector(".top-container")
                  ?.classList.remove("top-container-modal-open");
              }}
              className="modal__button btn bg-secondary text-primary fw-semibold"
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
