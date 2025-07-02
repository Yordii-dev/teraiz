import "./Solutions.css";
import dollarIcon from "./../assets/40-icon.svg";
import maintenanceIcon from "./../assets/maintenance-icon.svg";
import { useTranslation } from "../context/TranslationContext";
import SolutionImg from "../assets/solution.svg";
import BtnCta from "../components/BtnCta";
import { useModal } from "../context/ModalContext";
import { useGlobal } from "../context/GlobalContext";
import TextWithBreaks from "../utils/TextWithBreak";

function Solutions() {
  const { openModal } = useModal();
  const { setTargetModalContact } = useGlobal();
  const { t } = useTranslation();
  const texts = t.solutions;

  const handleClick = (e: any) => {
    e.preventDefault();
    setTargetModalContact("target_1");
    openModal("contact");
  };
  return (
    <div className="solutions text-black d-flex justify-content-between">
      <div className="solutions__content d-flex flex-column">
        {texts.title}
        <p className="solutions__content__subtitle size-2"></p>

        <TextWithBreaks
          text={texts.description}
          className="solutions__content__subtitle size-3"
        />

        <div className="solutions__content__off">
          <div className="d-flex align-items-center">
            <img src={dollarIcon} />
            <p className="size-3 mleft-5 my-0">{texts.offers[0]}</p>
          </div>
          <div className="d-flex align-items-center">
            <img src={maintenanceIcon} />
            <p className="size-3 mleft-5 my-0">{texts.offers[1]}</p>
          </div>
        </div>
        <div className="solutions__content__cta mt-auto" onClick={handleClick}>
          <BtnCta
            text={texts.textCtaBtn}
            bgBtn="bg-secondary"
            textColor="text-black"
          />
        </div>
      </div>

      <div className={`solutions__img`}>
        <img src={SolutionImg}></img>
      </div>
    </div>
  );
}

export default Solutions;
