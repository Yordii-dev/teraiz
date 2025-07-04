import "./BtnCta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";

function BtnCta({ text, bgBtn, textColor, borderColor, hideIcon }: any) {
  return (
    <button
      type="submit"
      className={`btn__cta size-2 ${borderColor} ${bgBtn} ${textColor} d-flex align-items-center justify-content-center`}
    >
      <span className="weight-semibold">{text}</span>
      {!hideIcon && (
        <FontAwesomeIcon className="mleft-5 size-icon" icon={faCommentDots} />
      )}
    </button>
  );
}

export default BtnCta;
