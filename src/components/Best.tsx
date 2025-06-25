import "./Best.css";

function Best({ img, title, description }: any) {
  return (
    <div className="best d-flex align-items-center justify-content-between border-radius">
      <div className="best__img d-flex align-items-center justify-content-center">
        <img src={img} alt={title} />
      </div>

      <div className="best-content d-flex flex-column justify-content-start">
        <p className="best__title size-2 weight-bold text-bluesemi">{title}</p>
        <p className="best__des size-4 weight-regular text-primary">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Best;
