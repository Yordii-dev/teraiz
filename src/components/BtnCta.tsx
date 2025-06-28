import "./BtnCta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
function BtnCta({ text }: any) {
  return (
    <button className="btn__cta border-black d-flex align-items-center btn size-2 text-black">
      <span className="weight-semibold">{text}</span>
      <FontAwesomeIcon className="mleft-5 size-icon" icon={faPaperPlane} />
    </button>
  );
}

export default BtnCta;
