import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import "./Footer.css"; // Assuming you have a CSS file for styling
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
    <div className="footer bg-bluedark text-white px-4">
      <div className="d-flex justify-content-between mx-auto">
        <div className="me-5">
          <div className="">
            <img src="/img/logo-dark.svg" alt="Techraiz Logo" />
          </div>
          <p className="fw-bold mt-5 footer__cta_title">
            Control para tu inmobiliaria, adaptado a tu presupuesto.
          </p>
          <Cta />
        </div>

        <div className="d-flex ms-5 w-75 justify-content-between">
          <div>
            <p className="footer__field fw-bold">SERVICIOS</p>
            <div className="mt-3">
              {data.servicios.map((service, index) => (
                <p className="font-regular m-0 my-1" key={index}>
                  {service}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="footer__field fw-bold">TECNOLOGIA</p>
            <div className="mt-3">
              {data.techs.map((tech, index) => (
                <p className="font-regular m-0 my-1" key={index}>
                  {tech}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="footer__field fw-bold">ESPECIALIDADES</p>
            <div className="mt-3">
              {data.especialidades.map((es, index) => (
                <p className="font-regular m-0 my-1" key={index}>
                  {es}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="footer__field fw-bold">PROCESOS</p>
            <div className="mt-3">
              {data.procesos.map((proceso, index) => (
                <p className="font-regular m-0 my-1" key={index}>
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
