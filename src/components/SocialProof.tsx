import "./SocialProof.css";

function Top({ text }: any) {
  return (
    <div className="socialproof bg-bluesemi d-flex flex-direction-column align-items-center justify-content-center">
      <p className="fw-semibold">{text}</p>
    </div>
  );
}

export default Top;
