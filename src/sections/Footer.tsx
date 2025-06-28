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


function Footer() {
  const [data, _] = useState({
    servicios: [
      "CRM Inmobiliario",
      "Portales inmobiliarios",
      "Sistemas de gestion",
      "Apps mobiles",
      "Landing pages",
      "Sistemas de gestion internos",
      "Apps para preventas",
      "Plataformas para franquicias",
    ],
    techs: [
      "Microsoft Azure",
      "AWS",
      "Oracle Database",
      "Microsoft SQL Server",
      "Power BI",
      "Google Cloud Platform",
      "DocuSign",
      "ASP.NET Core",
      "Javascript",
      "Docker",
      "IIS & Azure DevOps",
    ],

    especialidades: [
      "Automatizacion",
      "Seguridad",
      "Escalabilidad",
      "Integracion",
      "Base de datos",
      "Experiencia tecnica",
    ],

    procesos: ["Gestion de proyectos agiles", "Testeos"],
  });

  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1300);
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
    <div>
      <div
        className="footer__content__details__title-wrapper d-flex align-items-center cursor-pointer"
        onClick={() => isMobile && toggleSection(key)}
      >
        <p className="footer__content__details__title size-3 weight-semibold">{title}</p>
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
    <div className="footer bg-white text-black">
      <div className="footer__content d-flex justify-content-between mx-auto">
        <div>
          <img className="width-logo" src={Logodark} alt="Techraiz Logo" />

          <p className="weight-semibold size-2 footer__cta_title">
            Control para tu inmobiliaria, adaptado a tu presupuesto.
          </p>
          <Cta
            btnBg="bg-secondary"
            textColor="text-black"
            text="Agendar una asesoria"
            textInputColor="text-black"
            borderInput="border-black"
          />
        </div>

        <div className="footer__content__details d-flex flex-grow-1 justify-content-between">
          {renderSection("Servicios", data.servicios, "servicios")}
          {renderSection("Tecnología", data.techs, "techs")}
          {renderSection("Especialidades", data.especialidades, "especialidades")}
          {renderSection("Procesos", data.procesos, "procesos")}
        </div>
      </div>

      <hr />
      
      <div className="footer__socials d-flex size-4 d-flex justify-content-between align-items-center">
      
        <div className="opacity-2">
          <p>© 2025 TechRaiz. Software para el sector inmobiliario.</p>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <p className="weight-semibold footer__socials__title opacity-1">
            Siguenos en redes
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
