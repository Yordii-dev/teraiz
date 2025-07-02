import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./Footer.css";
import Logodark from "../assets/LOGO-DARK.svg";
import Cta from "../components/Cta";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "../context/TranslationContext";

function Footer() {
  const { t } = useTranslation();
  const texts = t.footer;

  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderSection = (title: string, items: string[], key: string) => (
    <div key={key}>
      <div
        className={`${
          isMobile ? "cursor-pointer" : ""
        } footer__content__details__title-wrapper d-flex align-items-center`}
        onClick={() => isMobile && toggleSection(key)}
      >
        <p className="my-0 footer__content__details__title size-3 weight-semibold">
          {title}
        </p>
        {isMobile && (
          <FontAwesomeIcon
            icon={openSections[key] ? faChevronUp : faChevronDown}
            className="mleft-5 text-black"
          />
        )}
      </div>

      <div
        className={`footer__content__details__descs size-4 ${
          isMobile ? (openSections[key] ? "open" : "closed") : ""
        }`}
      >
        {items.map((item, index) => (
          <p className="weight-regular size-4 opacity-2" key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <div className="footer text-black mx-auto">
      <div className="footer__content d-flex justify-content-between mx-auto">
        <div className="footer__content__cta">
          <img className="width-logo" src={Logodark} alt="Techraiz Logo" />

          <p className="weight-semibold size-2 footer__content__cta__title">
            {texts.title}
          </p>
          <Cta
            btnBg="bg-secondary"
            textColor="text-black"
            text={texts.textCtaBtn}
            textInputColor="text-black"
            borderInput="border-black"
            hideObjections={true}
            placeholderColor="placeholder-black"
          />
        </div>

        <div className="footer__content__details d-flex flex-grow-1 justify-content-between">
          {texts.sections.map((sect) =>
            renderSection(sect.title, sect.details, sect.title)
          )}
        </div>
      </div>

      <hr />

      <div className="footer__socials d-flex size-4 d-flex justify-content-between align-items-center">
        <div className="opacity-2">
          <p>{texts.copyright}</p>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <p className="m-0 weight-semibold footer__socials__title opacity-1">
            {texts.socials}
          </p>
          <div className="d-flex footer__socials__list mleft-5 justify-content-between opacity-2 align-items-center">
            <a
              className="d-flex align-items-center justify-content-center"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="size-icon text-black"
              />
            </a>
            <a
              className="d-flex align-items-center justify-content-center"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="size-icon text-black"
              />
            </a>
            <a
              className="d-flex align-items-center justify-content-center"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="size-icon text-black"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
