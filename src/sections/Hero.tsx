import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import SocialProof from "../components/SocialProof";
import Cta from "../components/Cta";
import { useTranslation } from "../context/TranslationContext";

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="hero-container px-4 bg-primary d-flex flex-column justify-content-between">
      <div className="d-flex my-auto align-content-center justify-content-center">
        <div className="me-5">
          <div className="hero-container__title text-white">
            <h1 className="m-0">Convierte el caos</h1>
            <h1 className="m-0">inmobiliario en</h1>
            <h1 className="m-0">gestion y flujo</h1>
          </div>
          <div className="hero-container__subtitle text-white mt-5">
            <p className="m-0">
              En TechRaiz diseñamos sistemas para que recuperes
            </p>
            <p className="m-0">
              el control, automatices tareas y hagas crecer tu
            </p>
            <p className="m-0">inmobiliaria.</p>
          </div>
          <div className="mt-5">
            <Cta />
            <div className="hero-container__socialproof text-white d-flex justify-content-between mt-1">
              <p className="fw-semibold">{t.hero.socialproof}</p>
              <p className="fw-semibold">Planes segun presupuesto</p>
            </div>
          </div>
          <div className="text-white mt-5">
            <p className="p-0 m-0">
              <FontAwesomeIcon icon={faCheck} className="text-secondary me-2" />
              Mantenimiento al año{" "}
              <span className="fw-bold text-secondary">gratis</span> en tu
              primer proyecto.
            </p>
            <p className="p-0 m-0 mt-1">
              <FontAwesomeIcon icon={faCheck} className="text-secondary me-2" />
              ¡Aprovecha ahora un{" "}
              <span className="fw-bold text-secondary">
                40% de descuento
              </span>{" "}
              exclusivo!
            </p>
          </div>
        </div>

        <div className="hero-container__img d-flex justify-content-center align-items-center ms-5">
          <img src="img/img-hero.svg" alt="" />
        </div>
      </div>

      <div className="socialproofs mb-5 fixed-bottom text-white text-center">
        <p>Las empresas confian en nosotros</p>
        <div className="list mx-auto d-flex justify-content-between mt-5">
          <SocialProof text="+8 años" />
          <SocialProof text="LATAM & Norteamerica" />
          <SocialProof text="Inmobiliarias" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
