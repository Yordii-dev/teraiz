import BtnCta from "./BtnCta";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Service({ icon, title, description, cta }: any) {
  return (
    <div className="service text-black bg-gray1 border-radius d-flex flex-column align-items-center">
      <div className="service__img d-flex align-items-center justify-content-center">
        <FontAwesomeIcon icon={icon} size="3x" className="text-secondary" />
      </div>

      <p className="service__title text-center size-2 weight-semibold">
        {title}
      </p>
      <p className="service__des size-3 weight-regular">{description}</p>
      <div className="service__cta mt-auto">
        <BtnCta
          text={cta}
          bgBtn="bg-white"
          textColor="text-black"
          borderColor="border-black"
        />
      </div>
    </div>
  );
}

export default Service;
