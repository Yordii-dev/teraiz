import BtnCta from "./BtnCta";
import "./Service.css";

function Service({ img, title, description, cta }: any) {
  return (
    <div className="service text-black bg-white border-radius d-flex flex-column align-items-center">
      <div className="service__img d-flex align-items-center justify-content-center">
        <img src={img} alt={title} />
      </div>

      <p className="service__title text-center size-2 weight-semibold">
        {title}
      </p>
      <p className="service__des size-3 text-center weight-regular">
        {description}
      </p>
      <div className="mt-auto">
        <BtnCta text={cta} />
      </div>
    </div>
  );
}

export default Service;
