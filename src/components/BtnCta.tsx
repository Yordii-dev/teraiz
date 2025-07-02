import "./BtnCta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

function BtnCta({ text, bgBtn, textColor, borderColor, hideIcon }: any) {
  return (
    <button
      type="submit"
      className={`btn__cta ${borderColor} ${bgBtn} ${textColor} d-flex align-items-center justify-content-center size-3`}
    >
      <span className="weight-semibold">{text}</span>
      {!hideIcon && (
        <FontAwesomeIcon className="mleft-5 size-icon" icon={faMessage} />
      )}
    </button>
  );
}

export default BtnCta;
