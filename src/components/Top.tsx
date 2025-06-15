import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

function Top() {
  return (
    <div className="bg-white fixed-top px-4 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center text-bluedark">
        <FontAwesomeIcon icon={faAt} size="2x" />
        <p className="ms-2 my-0">sales@techraiz.com</p>
      </div>
      <div className="logo">
        <img src="/img/logo-light.svg" alt="Techraiz Logo" />
      </div>

      <div className="d-flex align-items-center">
        <div className="lang text-bluedark">
          <span>EN</span>
          <span>ES</span>
        </div>
        <div className="socials">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Top;
