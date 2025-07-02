import BtnCta from "../components/BtnCta";
import { useGlobal } from "../context/GlobalContext";
import { useModal } from "../context/ModalContext";
import { useTranslation } from "../context/TranslationContext";
import { useFlexWrap } from "../hooks/useFlexWrap";
import TextWithBreaks from "../utils/TextWithBreak";
import "./Meet.css";

function Meet() {
  const { containerRef, isWrapped } = useFlexWrap<HTMLDivElement>();
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
          <TextWithBreaks
            text={texts.description}
            className="solutions__content__subtitle size-3"
          />
        </div>

        <div className="meet__content__cta mt-auto" onClick={handleClick}>
          <BtnCta
            text={texts.textCtaBtn}
            bgBtn="bg-secondary"
            textColor="text-black"
          />
        </div>
      </div>
      <div className={`meet__title ${isWrapped ? "order-1" : "order-2"}`}>
        {texts.title}
      </div>
    </div>
  );
}

export default Meet;
