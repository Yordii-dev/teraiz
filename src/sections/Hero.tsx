import "./Hero.scss";
import Cta from "../components/Cta";
import ShieldIcon from "./../assets/shield-icon.svg";
import { useTranslation } from "../context/TranslationContext";

function Hero() {
  const { t } = useTranslation();
  const texts = t.hero;
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
          <h1 className="hero__title size-0 weight-semibold">{texts.title}</h1>
          <p className="hero__subtitle size-2">{texts.subtitle}</p>

          <Cta
            text={texts.textCtaBtn}
            btnBg="bg-secondary"
            textColor="text-black"
            textInputColor="text-black"
            borderInput="border-black"
            placeholderColor="placeholder-cuaternary"
          />
        </div>
        <div className="mt-auto">
          <div className="d-flex align-items-center">
            <img src={ShieldIcon} />

            <p className="my-0 mleft-5 hero__content__socialproof-lg">
              {texts.socialProof}
            </p>

            <p className="my-0 mleft-5 hero__content__socialproof-sm d-none">
              {texts.socialProofShort}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
