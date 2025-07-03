import { useGlobal } from "../context/GlobalContext";
import { useModal } from "../context/ModalContext";
import BtnCta from "./BtnCta";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Service({ icon, title, description, cta }: any) {
  console.log(cta);

  const { openModal } = useModal();
  const { setTargetModalContact } = useGlobal();

  const handleClick = (e: any) => {
    e.preventDefault();
    setTargetModalContact("target_2");
    openModal("contact");
  };

  return (
    <div className="service border-black-opacity text-black border-radius d-flex flex-column align-items-center">
      <div className="service__img d-flex align-items-center justify-content-center">
        <FontAwesomeIcon icon={icon} size="3x" className="text-secondary" />
      </div>

      <p className="service__title size-2 text-center weight-semibold">
        {title}
      </p>
      <p className="service__des size-3 weight-regular">{description}</p>
      <div className="service__cta mt-auto" onClick={handleClick}>
        <BtnCta
          text={cta}
          bgBtn="bg-white"
          textColor="text-black"
          borderColor="border-black-opacity"
        />
      </div>
    </div>
  );
}

export default Service;
