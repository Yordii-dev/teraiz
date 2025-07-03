import "./Top.css";
import { useTranslation } from "../context/TranslationContext";
import { useEffect, useState, type JSX } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { useModal } from "../context/ModalContext";
import type { langType } from "../types/languages";
import FlagEn from "./../assets/icons/flagEn.svg";
import FlagEs from "./../assets/icons/flagEs.svg";
import FlagFr from "./../assets/icons/flagFr.svg";

// import Logolight from "./../assets/LOGO-LIGHT.svg";
import LogoDark from "./../assets/LOGO-DARK.svg";

function Top() {
  const { lang } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const { width, height } = useWindowSize();
  const { openModal } = useModal();

  const handleClick = () => {
    openModal("language");
  };

  useEffect(() => {
    const handleScroll = () => {
      const hasPassed100vh = window.scrollY > window.innerHeight - 100;
      console.log(window.scrollY);

      setScrolled(hasPassed100vh);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const MostrarLang = (lang: langType): JSX.Element => {
    const flags: Record<langType, { src: string; label: string }> = {
      es: { src: FlagEs, label: "ES" },
      en: { src: FlagEn, label: "EN" },
      fr: { src: FlagFr, label: "FR" },
    };

    const { src, label } = flags[lang];

    return (
      <p className="d-flex align-items-center gap-2 m-0">
        <img src={src} alt={label} width={20} height={20} />
        {label}
      </p>
    );
  };

  return (
    <div
      className={`${
        scrolled ? "bg-white shadow-lg" : ""
      } top-container size-2 weight-regular d-flex justify-content-between align-items-center`}
    >
      <div className="top-container__logo">
        <img
          className="width-logo"
          src={scrolled ? LogoDark : LogoDark}
          alt="Techraiz Logo"
        />
      </div>

      <div className="top__logo tetx-black d-none">
        {width}px × {height}px{" "}
      </div>

      <div
        onClick={handleClick}
        role="button"
        className={`size-4 ${scrolled ? "text-black" : "text-black"}`}
      >
        {MostrarLang(lang)}
      </div>
    </div>
  );
}

export default Top;
