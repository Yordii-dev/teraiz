import "./Hero.scss";
import Cta from "../components/Cta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />
      <div
        className="hero__content d-flex 
        flex-column align-items-center justify-content-center 
         "
      >
        <div className="my-auto">
          <h1 className="hero__title size-0 weight-semibold">
            Convierte el caos inmobiliario en <br /> gestión y flujo
          </h1>
          <p className="hero__subtitle size-2">
            Expertos en sistemas para que recuperes el control,
            <br /> automatices tareas y hagas{" "}
          </p>

          <Cta
            text="Cotiza gratis con 40% dsct"
            btnBg="bg-secondary"
            textColor="text-black"
            textInputColor="text-white"
            borderInput="border-cuaternary"
          />
        </div>
        <div className="mt-auto">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon className="size-icon" icon={faShield} />

            <p className="my-0 mleft-5 hero__content__socialproof-lg">
              Confianza comprobada: +8 años transformando inmobiliarias en LATAM
              & Norteamérica.
            </p>
            <p className="my-0 mleft-5 hero__content__socialproof-sm d-none">
              +8 años transformando inmobiliarias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
