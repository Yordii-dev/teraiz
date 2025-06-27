import BtnCta from "./BtnCta";
import "./Service.css";

function Service({ img, title, description, cta }: any) {
  return (
    <div className="service bg-white border-radius d-flex flex-column align-items-center">
      <div className="service__img d-flex align-items-center justify-content-center">
        <img src={img} alt={title} />
      </div>

      <p className="service__title size-2 weight-bold text-bluesemi">{title}</p>
      <p className="service__des size-4 text-center weight-regular text-primary">
        {description}
      </p>
      <div className="solutions__cta mt-auto">
        <BtnCta text={cta} />
      </div>
      {/* <p className="service__cta size-3 weight-semibold text-secondary mt-auto">
        {cta}
      </p> */}
    </div>
  );
}

export default Service;
