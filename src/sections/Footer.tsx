import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Footer.css";
import Logodark from "../assets/LOGO-DARK.svg";

import Cta from "../components/Cta";
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

  return (
    <div className="footer bg-white text-black">
      <div className="footer__cta d-flex justify-content-between mx-auto">
        <div className="me-5">
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

        <div className="d-flex ms-5 w-75 justify-content-between">
          <div>
            <p className="size-3 weight-semibold">Servicios</p>
            <div className="footer__descs size-4">
              {data.servicios.map((service, index) => (
                <p className="weight-regular size-3 opacity-2" key={index}>
                  {service}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="size-3 weight-semibold">Tecnologia</p>
            <div className="footer__descs size-4">
              {data.techs.map((tech, index) => (
                <p className="weight-regular size-3 opacity-2" key={index}>
                  {tech}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="size-3 weight-semibold">Especialidades</p>
            <div className="footer__descs size-4">
              {data.especialidades.map((es, index) => (
                <p className="weight-regular size-3 opacity-2" key={index}>
                  {es}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="size-3 weight-semibold">Procesos</p>
            <div className="footer__descs size-4">
              {data.procesos.map((proceso, index) => (
                <p className="weight-regular size-3 opacity-2" key={index}>
                  {proceso}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex footer__socials justify-content-end align-items-center mx-auto">
        <p className="fw-bold me-5 footer__socials__title m-0">
          Siguenos en redes
        </p>
        <div className="d-flex footer__socials__list justify-content-between align-items-center">
          <a
            className="d-flex align-items-center justify-content-center"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="text-white"
              style={{ width: "25px", height: "25px" }}
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
              style={{ width: "25px", height: "25px" }}
              className="text-white"
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
              style={{ width: "25px", height: "25px" }}
              className="text-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
