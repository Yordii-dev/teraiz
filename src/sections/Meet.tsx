import BtnCta from "../components/BtnCta";
import "./Meet.css";

function Meet() {
  return (
    <div className="meet text-black d-flex align-items-start justify-content-between">
      <div className="meet__content d-flex flex-column">
        <div className="meet__content__desc">
          <p className="size-2">
            Soluciones digitales que transforman tu empresa.
            <br />
            Cotiza gratis tu proyecto y obten:
          </p>
        </div>

        <div className="meet__content__cta mt-auto">
          <BtnCta text="Habla con nuestros expertos" />
        </div>
      </div>
      <div className="meet__title">
        <h1 className="size-1">
          Agenda una <span className="text-secondary"> reunion </span>
          <br />
          con nosotros
        </h1>
      </div>
    </div>
  );
}

export default Meet;
