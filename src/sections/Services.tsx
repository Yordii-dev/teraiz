import Service from "../components/Service";
import "./Services.css";

import {
  faBullhorn,
  faLayerGroup,
  faRobot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

function Services() {
  const [services, _] = useState([
    {
      icon: faBullhorn,
      title: "Captamos clientes por ti",
      description: `Creamos sitios web inmobiliarios que posicionan en Google, conectan con WhatsApp y generan leads reales cada semana. Ya no dependes solo de portales.`,
      cta: "Obtener clientes",
    },
    {
      icon: faLayerGroup,
      title: "Organiza tu inmobiliaria en minutos",
      description: `CRM fácil de usar para gestionar propiedades, asesores y clientes. Todo sincronizado. Adiós a los Excel y mensajes perdidos.`,
      cta: "Controlar procesos",
    },
    {
      icon: faRobot,
      title: "Automatiza lo que nadie quiere hacer",
      description: `Recordatorios, pagos, contratos, seguimientos… todo lo que consume tiempo, lo automatizamos. Así tú y tu equipo se enfocan en cerrar ventas.`,
      cta: "Automatizar",
    },
    {
      icon: faStar,
      title: "Haz que tu marca destaque",
      description: `Te ayudamos a construir una presencia sólida: diseño profesional, confianza digital y herramientas modernas que te diferencian de la competencia local.`,
      cta: "Destacar mi marca",
    },
  ]);

  return (
    <div className="services text-black">
      <div className="services__title text-center">
        <h1 className="size-1 weight-semibold">
          ¿Que{" "}
          <span className="text-secondary">
            hacemos <br />
          </span>
          por ti? <br />
        </h1>
      </div>

      <div className="services_list mx-auto">
        {services.map((service, index) => (
          <Service
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            cta={service.cta}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
