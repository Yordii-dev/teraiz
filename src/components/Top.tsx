import "./Top.css";
// import { useTranslation } from "../context/TranslationContext";
import { useEffect, useState } from "react";
import Logo from "./../assets/logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Top() {
  // const { lang, setLang } = useTranslation();
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="top-container size-2 weight-regular d-flex justify-content-between align-items-center shadow-lg">
      <div className="top-container__logo">
        <img src={Logo} alt="Techraiz Logo" />
      </div>

      <div className="top__logo">
        {width}px × {height}px
      </div>

      <button className="top__cta d-flex align-items-center px-4 btn size-3 text-secondary">
        <FontAwesomeIcon
          style={{ width: "25px", height: "25px" }}
          icon={faWhatsapp}
        />
        <span className="mleft-5">Hablemos</span>
      </button>
    </div>
  );
}

export default Top;
