import { useModal } from "../context/ModalContext";
import "./SuccessModal.css";

const LanguageModal = ({
  onSelectLanguage,
}: {
  onSelectLanguage: (lang: string) => void;
}) => {
  const { modalRefs } = useModal();

  const handleSelect = (lang: string) => {
    onSelectLanguage(lang);
  };

  return (
    <div
      ref={modalRefs.language}
      className="modal fade"
      tabIndex={-1}
      aria-hidden="true"
      data-bs-backdrop="static"
      aria-labelledby="languageModalLabel"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-radius bg-gray1 shadow-lg">
          <div className="modal-header border-0 justify-content-center">
            <h5
              className="modal-title size-2 weight-bold text-black"
              id="languageModalLabel"
            >
              Selecciona tu idioma
            </h5>
          </div>

          <div className="modal-body text-center">
            <div className="d-flex flex-column gap-3">
              <button
                className="btn bg-secondary text-black weight-semibold border-radius px-4 py-2"
                onClick={() => handleSelect("es")}
              >
                Español
              </button>
              <button
                className="btn bg-secondary text-black weight-semibold border-radius px-4 py-2"
                onClick={() => handleSelect("en")}
              >
                English
              </button>
              <button
                className="btn bg-secondary text-black weight-semibold border-radius px-4 py-2"
                onClick={() => handleSelect("fr")}
              >
                Français
              </button>
            </div>
          </div>

          <div className="modal-footer border-0 justify-content-center">
            <button
              type="button"
              className="btn size-3 bg-light text-black weight-semibold border-radius px-4 py-2"
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

export default LanguageModal;
