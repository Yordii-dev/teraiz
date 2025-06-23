import "./SocialProof.css";

function Top({ text }: any) {
  return (
    <div className="socialproof border-radius bg-bluesemi d-flex justify-content-center align-items-center">
      <p className="m-0 weight-semibold opacity-1 size-2">{text}</p>
    </div>
  );
}

export default Top;
