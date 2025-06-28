import BtnCta from "../components/BtnCta";
import { useFlexWrap } from "../hooks/useFlexWrap";
import "./Meet.css";

function Meet() {
  const { containerRef, isWrapped } = useFlexWrap<HTMLDivElement>();

  return (
    <div
      ref={containerRef}
      className={`meet text-black d-flex align-items-start justify-content-between`}
    >
      <div
        className={`meet__content d-flex flex-column ${
          isWrapped ? "order-2" : "order-1"
        }`}
      >
        <div className="meet__content__desc">
          <p className="size-2">
            ¿Tienes una inmobiliaria o vendes propiedades? <br />
            <br />
            Podemos ayudarte a organizar tu operación, <br />
            automatizar procesos y vender más. <br />
            <br />
            Cotiza gratis tu sistema y obtén asesoría sin compromiso.
          </p>
        </div>

        <div className="meet__content__cta mt-auto">
          <BtnCta text="Habla con nuestros expertos" />
        </div>
      </div>
      <div className={`meet__title ${isWrapped ? "order-1" : "order-2"}`}>
        <h1 className="size-1 weight-semibold">
          Agenda una <span className="text-secondary"> reunion </span>
          <br />
          con nosotros
        </h1>
      </div>
    </div>
  );
}

export default Meet;
