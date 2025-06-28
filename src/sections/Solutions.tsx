import "./Solutions.css";
import dollarIcon from "./../assets/40-icon.svg";
import maintenanceIcon from "./../assets/maintenance-icon.svg";

import SolutionImg from "../assets/solution.svg";
import BtnCta from "../components/BtnCta";

function Solutions() {
  return (
    <div className="solutions text-black d-flex justify-content-between">
      <div className={`solutions__content d-flex flex-column`}>
        <h1 className="size-1 weight-semibold">
          Haz crecer tu inmobiliaria <br />
          <span className="text-secondary">con tecnología real</span>
        </h1>

        <p className="solutions__content__subtitle size-2">
          Cada día con procesos manuales, <br />
          pierdes tiempo, ventas y oportunidades.
          <br />
          <br />
          Digitaliza tu operación y obtén:
        </p>

        <ul className="solutions__benefits-list size-2 mt-3">
          <li>Clientes directos a tu WhatsApp</li>
          <li>Gestión de agentes y propiedades</li>
          <li>Cobros y seguimientos automáticos</li>
          <li>Control de terrenos y lotizaciones</li>
        </ul>

        <div className="solutions__content__off">
          <div className="d-flex align-items-center">
            <img src={dollarIcon} />
            <p className="size-3 mleft-5 my-0">
              1 año de mantenimiento sin costo
            </p>
          </div>
          <div className="d-flex align-items-center">
            <img src={maintenanceIcon} />
            <p className="size-3 mleft-5 my-0">40% de descuento exclusivo </p>
          </div>
        </div>
        <div className="solutions__content__cta mt-auto">
          <BtnCta text="Cotiza gratis hoy" />
        </div>
      </div>

      <div className={`solutions__img`}>
        <img src={SolutionImg}></img>
      </div>
    </div>
  );
}

export default Solutions;
