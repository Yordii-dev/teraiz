import "./Service.css";

function Service({ img, title, description }: any) {
  return (
    <div className="service bg-grays1 border-radius d-flex flex-column align-items-center justify-content-center">
      <div className="service__img d-flex align-items-center justify-content-center">
        <img src={img} alt={title} />
      </div>

      <p className="service__title size-2 weight-bold text-bluesemi">{title}</p>
      <p className="service__des size-4 text-center weight-regular text-primary">
        {description}
      </p>
    </div>
  );
}

export default Service;
