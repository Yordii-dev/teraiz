import "./Solutions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import SolutionImg from "../assets/solution.svg";
import BtnCta from "../components/BtnCta";

function Solutions() {
  return (
    <div className="solutions text-black d-flex justify-content-between">
      <div className="d-flex flex-column">
        <h1 className="size-1">
          Tu inmobiliaria necesita <br />
          <span className="text-secondary">de nosotros</span>
        </h1>
        <p className="solutions__subtitle size-2">
          No solo pierdes tiempo, tambien dinero.
          <br />
          Cotiza gratis tu proyecto y obten:
        </p>
        <div className="solutions__off">
          <div className="d-flex">
            <FontAwesomeIcon
              className="text-secondary"
              icon={faCircleDollarToSlot}
              style={{ width: "25px", height: "25px" }}
            />
            <p className="size-4 mleft-5">1 año de mantenimiento sin costo</p>
          </div>
          <div className="d-flex">
            <FontAwesomeIcon
              className="text-secondary"
              icon={faScrewdriverWrench}
              style={{ width: "25px", height: "25px" }}
            />
            <p className="size-4 mleft-5">40% de descuento exclusivo </p>
          </div>
        </div>
        <div className="solutions__cta mt-auto">
          <BtnCta text="Solicitar esto" />
        </div>
      </div>

      <div className="solutions__img">
        <img src={SolutionImg}></img>
      </div>
    </div>
  );
}

export default Solutions;
