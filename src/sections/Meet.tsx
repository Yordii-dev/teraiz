import BtnCta from "../components/BtnCta";
import { useGlobal } from "../context/GlobalContext";
import { useModal } from "../context/ModalContext";
import { useTranslation } from "../context/TranslationContext";
import { useFlexWrap } from "../hooks/useFlexWrap";
import TextWithBreaks from "../utils/TextWithBreak";
import Image from "./Image";
import "./Meet.css";
import Imagen1 from "./../assets/call.jpg";

function Meet() {
  const { containerRef } = useFlexWrap<HTMLDivElement>();
  const { openModal } = useModal();
  const { setTargetModalContact } = useGlobal();
  const { t } = useTranslation();
  const texts = t.meet;

  const handleClick = (e: any) => {
    e.preventDefault();
    setTargetModalContact("target_2");
    openModal("contact");
  };
  return (
    <div>
      <div
        ref={containerRef}
        className={`meet text-black d-flex align-items-center justify-content-between`}
      >
        <div className={`meet__title`}>{texts.title}</div>

        <div className={`meet__content d-flex justify-content-end`}>
          <TextWithBreaks
            text={texts.description}
            className="solutions__content__subtitle size-3"
          />
          {/* <div className="meet__content__desc">
        </div> */}
        </div>
      </div>
      <Image
        img={Imagen1}
        children={
          <div>
            <div className="meet__content__cta mt-auto" onClick={handleClick}>
              <BtnCta
                text={texts.textCtaBtn}
                bgBtn="bg-white"
                hideIcon={true}
                textColor="text-black"
              />
            </div>
          </div>
        }
        badgeType="badge-right"
        alignItems="align-items-end"
      ></Image>
    </div>
  );
}

export default Meet;
