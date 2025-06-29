import "./BtnCta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../context/ModalContext";
function BtnCta({ text }: any) {
  const { openModal } = useModal();
  const handleClick = (e: any) => {
    e.preventDefault();
    openModal("contact");
  };
  return (
    <button
      onClick={handleClick}
      className="btn__cta d-flex align-items-center btn size-2 text-white"
    >
      <span className="weight-semibold">{text}</span>
      <FontAwesomeIcon className="mleft-5 size-icon" icon={faPaperPlane} />
    </button>
  );
}

export default BtnCta;
