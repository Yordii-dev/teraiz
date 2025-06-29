import "./Hero.scss";
import Cta from "../components/Cta";
import ShieldIcon from "./../assets/shield-icon.svg";

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
            Ordena y automatiza tu inmobiliaria
          </h1>
          <p className="hero__subtitle size-2">
            Menos caos. Más ventas. Todo en un solo sistema.
          </p>

          <Cta
            text="Cotiza con 40% de descuento"
            btnBg="bg-secondary"
            textColor="text-black"
            textInputColor="text-white"
            borderInput="border-cuaternary"
            placeholderColor="placeholder-cuaternary"
          />
        </div>
        <div className="mt-auto">
          <div className="d-flex align-items-center">
            <img src={ShieldIcon} />

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
