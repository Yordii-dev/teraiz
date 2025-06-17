import Service from "../components/Service";
import "./Services.css";

import ControlImg from "./../assets/services/control.svg";
import PropiedadImg from "./../assets/services/propiedad.svg";
import VentaImg from "./../assets/services/venta.svg";
import AlquilerImg from "./../assets/services/alquiler.svg";
import PreventaImg from "./../assets/services/preventa.svg";
import EquipoImg from "./../assets/services/equipo.svg";
import { useState } from "react";

function Services() {
  const [services, _] = useState([
    {
      img: ControlImg,
      title: "Control digital para caos",
      description: `Enfoque en bienes raices, 
      dashboards, gestion de propiedades, 
      mapas, cotizadores, etc.`,
    },
    {
      img: PropiedadImg,
      title: "Propiedades se venden",
      description: `Creamos sistemas donde puedes 
      mostrar tus propiedades, captar 
      clientes y medir resultados.`,
    },
    {
      img: VentaImg,
      title: "Ventas sin fricción",
      description: `Herramientas para que tus agentes vendan más con menos esfuerzo. Agendamiento de visitas, 
      seguimiento de leads y alertas inteligentes.`,
    },
    {
      img: AlquilerImg,
      title: "Alquileres automatizados",
      description: `Con nuestras apps puedes gestionar 
      alquileres, cobros, mantenimientos y 
      reportes desde un solo lugar.`,
    },
    {
      img: PreventaImg,
      title: "Preventas online",
      description: `Plataformas para constructoras e inmobiliarias que lanzan proyectos: reservas en línea, pagos iniciales y seguimiento a clientes.`,
    },
    {
      img: EquipoImg,
      title: "Equipo tech",
      description: `Nos encargamos de todo el proceso digital: diseño, desarrollo, soporte y mejora continua.`,
    },
  ]);

  return (
    <div className="services bg-white">
      <div className="services__title text-center text-bluesemi">
        <h1 className="m-0">No solo pierdes tiempo, </h1>
        <h1 className="m-0">también dinero</h1>
      </div>

      <div className="services_list mx-auto">
        {services.map((service, index) => (
          <Service
            key={index}
            img={service.img}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
