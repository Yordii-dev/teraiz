import "./Hero.scss";

import SocialProof from "../components/SocialProof";
import Cta from "../components/Cta";

function Hero() {
  return (
    <div className="hero-container bg-primary d-flex flex-column justify-content-between">
      <div className="hero-container__hero mx-auto my-auto d-flex align-items-center justify-content-center">
        <div className="hero-container__hero__content text-white d-flex flex-column justify-content-center">
          <div className="hero-container__hero__content__title">
            <h1 className="size-1 weight-bold">
              Del desorden a las ventas: ordena tu inmobiliaria y acelera el
              cierre.{" "}
            </h1>
          </div>
          <div className="hero-container__hero__content__subtitle">
            <p className="size-2 weight-regular opacity-1">
              En TechRaiz diseñamos sistemas para que recuperes el control de tu
              inmobiliaria.
            </p>
          </div>
          <Cta />

          <div className="hero-container__hero__content__free size-4 weight-regular text-white">
            <p className="p-0 m-0 mt-2">
              ¡Aprovecha ahora un{" "}
              <span className="weight-semibold text-secondary">
                40% de descuento
              </span>{" "}
              exclusivo!
            </p>
            <p className="p-0 m-0 hero-container__hero__content__free__maintenance">
              Mantenimiento al año{" "}
              <span className="weight-semibold text-secondary">gratis</span> en
              tu primer proyecto.
            </p>
            <p className="p-0 m-0 d-none hero-container__hero__content__free__socialproof">
              <span className="weight-semibold text-secondary">+8 años</span>{" "}
              creando sistemas a medida para inmobiliarias.
            </p>
          </div>
        </div>

        <div className="hero-container__img d-flex justify-content-center align-items-center">
          <img src="img/img-hero.svg" alt="" />
        </div>
      </div>

      <div className="socialproofs mx-auto text-white text-center">
        <p className="socialproofs__title size-3 opacity-1">
          Las empresas confian en nosotros
        </p>
        <div className="socialproofs__list d-flex justify-content-between">
          <SocialProof text="+8 años" />
          <SocialProof text="LATAM & Norteamerica" />
          <SocialProof text="Inmobiliarias" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
