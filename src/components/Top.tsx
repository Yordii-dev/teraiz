import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Top.css";
import { useTranslation } from "../context/TranslationContext";
import Corporate from "./Corporate";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Top() {
  const { lang, setLang } = useTranslation();

  return (
    <div className="top-container size-2 fw-semibold text-bluedark px-4 d-flex justify-content-between align-items-center shadow-lg">
       <div className="top__start">
        <div className="show-desktop">
          <Corporate />
        </div>

        <div className="show-mobile">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ width: "25px", height: "25px" }}
          />
        </div>
      </div>

      <div className="top__logo">
        <img src="/img/logo-light.svg" alt="Techraiz Logo" />
      </div>

      <div className="top__end d-flex justify-content-between align-items-center">
        <div className="d-flex mx-auto align-items-center justify-content-between">
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
        <div className="top__end__socials d-flex justify-content-between align-items-center ms-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="text-bluedark"
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
              className="text-bluedark"
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
              className="text-bluedark"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Top;
