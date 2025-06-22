import { faAt, faCheck, faClone } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Corporate() {
  const [copied, setCopied] = useState(false);
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
    <div className="top__sales d-flex align-items-center">
      <FontAwesomeIcon icon={faAt} size="2x" />
      <div className="ms-2 my-0 d-inline-flex align-items-center gap-2">
        <p
          className="m-0"
          data-bs-toggle="modal"
          data-bs-target="#moreInfoModal"
          role="button"
        >
          sales@techraiz.com
        </p>
        <p className="m-0 text-secondary position-relative d-flex align-items-center">
          <FontAwesomeIcon
            icon={copied ? faCheck : faClone}
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard();
            }}
            style={{ cursor: "pointer", fontSize: "1.6rem" }}
            title={copied ? "Copiado!" : "Copiar"}
          />
          {copied && (
            <span
              className="position-absolute top-100 start-50 translate-middle-x"
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
  );
}

export default Corporate;
