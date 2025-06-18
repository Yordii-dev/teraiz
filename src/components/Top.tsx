import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAt, faCheck, faClone } from "@fortawesome/free-solid-svg-icons";
import "./Top.css";
import { useState } from "react";
function Top() {
  const [copied, setCopied] = useState(false);
  const [idioma, setIdioma] = useState("EN"); // valor inicial: español

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("sales@techraiz.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // vuelve al ícono original
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
            className={idioma === "EN" ? "font-black" : ""}
            role="button"
            onClick={() => setIdioma("EN")}
          >
            EN
          </span>
          <span className="mx-2">|</span>
          <span
            className={idioma === "ES" ? "font-black" : ""}
            role="button"
            onClick={() => setIdioma("ES")}
          >
            ES
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
