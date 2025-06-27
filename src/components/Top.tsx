import "./Top.css";
// import { useTranslation } from "../context/TranslationContext";
import { useEffect, useState } from "react";
import Logolight from "./../assets/LOGO-LIGHT.svg";

import LogoDark from "./../assets/LOGO-DARK.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Top() {
  // const { lang, setLang } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  // const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // setWidth(window.innerWidth);
      // setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${
        scrolled ? "bg-white" : ""
      } top-container size-2 weight-regular d-flex justify-content-between align-items-center shadow-lg`}
    >
      <div className="top-container__logo">
        <img src={scrolled ? LogoDark : Logolight} alt="Techraiz Logo" />
      </div>

      <div className="top__logo"> {/* {width}px × {height}px{" "} */}</div>

      <button className="top__cta border-secondary d-flex align-items-center px-4 btn size-3 text-secondary">
        <FontAwesomeIcon className="size-icon" icon={faWhatsapp} />
        <span className="mleft-5">Cotiza</span>
      </button>
    </div>
  );
}

export default Top;
