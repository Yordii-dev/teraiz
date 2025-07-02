import { useModal } from "../context/ModalContext";
import { useTranslation } from "../context/TranslationContext";
import "./SuccessModal.css";

const SuccessModal = () => {
  const { modalRefs } = useModal();
  const { t } = useTranslation();
  const texts = t.successModal;

  return (
    <div
      ref={modalRefs.success}
      className="modal fade"
      tabIndex={-1}
      aria-hidden="true"
      aria-labelledby="successModalLabel"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-radius shadow-lg">
          <div className="modal-header border-0 justify-content-center">
            <h5
              className="modal-title size-2 weight-bold text-black"
              id="successModalLabel"
            >
              {texts.title}
            </h5>
          </div>

          <div className="modal-body text-center">
            <p className="size-3 weight-regular text-black opacity-2">
              {texts.description}
            </p>
          </div>

          <div className="modal-footer border-0 justify-content-center">
            <button
              type="button"
              className="border-0 size-5 bg-gray1 text-black weight-semibold border-radius px-5 py-3"
              data-bs-dismiss="modal"
            >
              {texts.textCtaBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
