import "./BtnCta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../context/ModalContext";
import { useGlobal } from "../context/GlobalContext";
function BtnCta({ text, bgBtn, textColor, borderColor }: any) {
  const { openModal } = useModal();
  const {setTargetModalContact} = useGlobal()

  const handleClick = (e: any) => {
    e.preventDefault();
    setTargetModalContact("target_2")
    openModal("contact");
  };

  return (
    <button
      onClick={handleClick}
      className={`btn__cta ${borderColor} d-flex align-items-center btn size-3 ${bgBtn} ${textColor}`}
    >
      <span className="weight-semibold">{text}</span>
      <FontAwesomeIcon className="mleft-5 size-icon" icon={faPaperPlane} />
    </button>
  );
}

export default BtnCta;
