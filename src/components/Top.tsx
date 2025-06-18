import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAt, faCheck, faClone } from "@fortawesome/free-solid-svg-icons";
import "./Top.css";
import { useState } from "react";
import { useTranslation } from '../context/TranslationContext';

function Top() {
  const [copied, setCopied] = useState(false);
  const { lang, setLang } = useTranslation();
  const mailText = "sales@techraiz.com";


  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(mailText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error copiando al portapapeles", err);
    }
  };

  return (
    <div className="top-container px-4 d-flex justify-content-between align-items-center shadow-lg">
      <div className="top__sales d-flex align-items-center text-bluedark">
        <FontAwesomeIcon icon={faAt} size="2x" />
        <div className="ms-2 my-0 fw-semibold d-inline-flex align-items-center gap-2">
          <p
            className="m-0"
            data-bs-toggle="modal"
            data-bs-target="#moreInfoModal"
            role="button"
          >
            sales@techraiz.com
          </p>
          <p className="m-0 position-relative d-flex align-items-center">
            <FontAwesomeIcon
              icon={copied ? faCheck : faClone}
              onClick={(e) => {
                e.stopPropagation();
                copyToClipboard();
              }}
              className="text-secondary"
              style={{ cursor: "pointer", fontSize: "1.6rem" }}
              title={copied ? "Copiado!" : "Copiar"}
            />
            {copied && (
              <span
                className="position-absolute top-100 start-50 translate-middle-x text-secondary"
                style={{
                  fontSize: "1.2rem",
                  marginTop: "0.2rem",
                  opacity: 0.85,
                  whiteSpace: "nowrap",
                }}
              >
                ¡Copiado!
              </span>
            )}
          </p>
        </div>
      </div>
      <div className="top__logo">
        <img src="/img/logo-light.svg" alt="Techraiz Logo" />
      </div>

      <div className="top__end d-flex justify-content-between align-items-center">
        <div className="w-25 text-bluedark d-flex align-items-center justify-content-between">
          <span
            className={lang === "es" ? "font-black" : ""}
            role="button"
            onClick={() => setLang("es")}
          >
            ES
          </span>
          <span className="mx-2">|</span>
          <span
            className={lang === "en" ? "font-black" : ""}
            role="button"
            onClick={() => setLang("en")}
          >
            EN
          </span>
        </div>
        <div className="w-50 d-flex justify-content-between align-items-center ms-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="text-primary"
              style={{ width: "25px", height: "25px" }}
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ width: "25px", height: "25px" }}
              className="text-primary"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ width: "25px", height: "25px" }}
              className="text-primary"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Top;
