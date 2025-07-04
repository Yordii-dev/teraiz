import { useModal } from "../context/ModalContext";
import { useTranslation } from "../context/TranslationContext";
import type { langType } from "../types/languages";
import "./LanguageModal.css";

const LanguageModal = () => {
  const { modalRefs, closeModal } = useModal();
  const { setLang, t } = useTranslation();
  const texts = t.languageModal;

  const handleSelect = (lang: langType) => {
    setLang(lang);
    // document.title = "Inicio - Mi App";

    closeModal("language");
  };

  return (
    <div
      ref={modalRefs.language}
      className="modal fade"
      tabIndex={-1}
      aria-hidden="true"
      aria-labelledby="languageModalLabel"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-radius shadow-lg">
          <div className="modal-header border-0 justify-content-center">
            <h5
              className="modal-title size-2 weight-bold text-black"
              id="languageModalLabel"
            >
              {texts.title}
            </h5>
          </div>
          <div className="modal-body text-center">
            <div className="d-flex flex-column gap-2">
              <p
                className="languag__option d-flex align-items-center gap-2 text-black weight-semibold rounded px-3 py-2 cursor-pointer justify-content-center"
                onClick={() => handleSelect("es")}
              >
                {/* <span role="img" aria-label="Español">🇪🇸</span> */}
                {texts.es}
              </p>
              <p
                className="languag__option d-flex align-items-center gap-2 text-black weight-semibold rounded px-3 py-2 cursor-pointer justify-content-center"
                onClick={() => handleSelect("en")}
              >
                {/* <span role="img" aria-label="Inglés"></span> */}
                {texts.en}
              </p>
              <p
                className="languag__option d-flex align-items-center gap-2 text-black weight-semibold rounded px-3 py-2 cursor-pointer justify-content-center"
                onClick={() => handleSelect("fr")}
              >
                {/* <span role="img" aria-label="Francés">🇫🇷</span> */}
                {texts.fr}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
