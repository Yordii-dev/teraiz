import "./BtnCta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function BtnCta({ text }: any) {
  return (
    <button className="btn__cta d-flex align-items-center btn size-3 text-black weight-semibold">
      <span>{text}</span>
      <FontAwesomeIcon
        className="mleft-5"
        style={{ width: "20px", height: "20px" }}
        icon={faArrowRight}
      />
    </button>
  );
}

export default BtnCta;
