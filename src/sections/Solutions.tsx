import "./Solutions.css";
import dollarIcon from "./../assets/40-icon.svg";
import maintenanceIcon from "./../assets/maintenance-icon.svg";
import { useTranslation } from "../context/TranslationContext";
// import SolutionImg from "../assets/solution.svg";
// import BtnCta from "../components/BtnCta";
import { useModal } from "../context/ModalContext";
import { useGlobal } from "../context/GlobalContext";
import TextWithBreaks from "../utils/TextWithBreak";
import Image from "./Image";
import Imagen1 from "./../assets/image1.jpg";
import BtnCta from "../components/BtnCta";

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
    <div>
      <div className="solutions text-black d-flex align-items-start justify-content-between">
        <div className={`solutions__img`}>
          {/* <img src={SolutionImg}></img> */}
          {texts.title}
        </div>

        <div className="solutions__content d-flex flex-column">
          <TextWithBreaks
            text={texts.description}
            className="solutions__content__subtitle size-3"
          />

          {/* <div className="solutions__content__cta mt-auto" onClick={handleClick}>
          <BtnCta
            text={texts.textCtaBtn}
            bgBtn="bg-secondary"
            textColor="text-black"
          />
        </div> */}
        </div>
      </div>
      <Image
        img={Imagen1}
        children={
          <div>
            <div className="solutions__content__off">
              <div className="solutions__content__off__detail d-flex align-items-center">
                <img src={dollarIcon} />
                <TextWithBreaks
                  text={texts.offers[0]}
                  className="size-3 mleft-5 my-0"
                />
              </div>
              <div className="solutions__content__off__detail d-flex align-items-center">
                <img src={maintenanceIcon} />
                <p className="size-3 mleft-5 my-0">{texts.offers[1]}</p>
              </div>
            </div>
            <div
              className="solutions__content__cta mt-auto"
              onClick={handleClick}
            >
              <BtnCta
                text={texts.textCtaBtn}
                bgBtn="bg-secondary"
                // hideIcon={true}
                textColor="text-white"
              />
            </div>
          </div>
        }
        badgeType="badge-left"
        alignItems="align-items-start"
      ></Image>
    </div>
  );
}

export default Solutions;
