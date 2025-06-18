import { useState } from "react";
import "./Cta.css";

function Cta() {
  const [email, setEmail] = useState("");

  return (
    <div className="container__cta mt-5 d-flex justify-content-between">
      <input
        className="flex-grow-1 me-2 ps-4 text-white"
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={(e: any) => {
          console.log(document.querySelector(".top-container"));

          document
            .querySelector(".top-container")
            ?.classList.add("top-container-modal-open");
        }}
        data-bs-toggle="modal"
        data-bs-target="#successModal"
        className="btn bg-secondary text-primary fw-semibold"
        disabled={!email.trim()}
      >
        Cotiza gratis
      </button>
    </div>
  );
}

export default Cta;
