import "./best.css";

function Best({ img, title, description }: any) {
  return (
    <div className="best d-flex align-items-center justify-content-between">
      <div className="best__img d-flex align-items-center justify-content-center">
        <img className="mt-2" src={img} alt={title} />
      </div>

      <div className="best-content d-flex flex-column align-items-center justify-content-lg-start">
        <p className="best__title fw-semibold text-bluedark font-bold mt-4">
          {title}
        </p>
        <p className="best__des p-4 font-semibold flex-grow-1 text-primary font-regular">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Best;
