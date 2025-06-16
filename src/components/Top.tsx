import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import "./Top.css";
function Top() {
  return (
    <div className="top-cotainer bg-white fixed-top px-4 d-flex justify-content-between align-items-center">
      <div className="top__sales d-flex align-items-center text-bluedark">
        <FontAwesomeIcon icon={faAt} size="2x" />
        <p className="fs-5 ms-2 my-0 fw-semibold">sales@techraiz.com</p>
      </div>
      <div className="top__logo">
        <img src="/img/logo-light.svg" alt="Techraiz Logo" />
      </div>

      <div className="top__end d-flex justify-content-between align-items-center">
        <div className="w-25 text-bluedark d-flex align-items-center justify-content-between">
          <span className="text-primary font-black" role="button">
            EN
          </span>
          <span>|</span>
          <span role="button">ES</span>
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
