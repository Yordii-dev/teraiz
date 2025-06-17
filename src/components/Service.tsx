import "./Service.css";

function Service({ img, title, description }: any) {
  return (
    <div className="service bg-gray1 d-flex flex-column align-items-center justify-content-center">
      <div className="service__img d-flex align-items-center justify-content-center">
        <img className="mt-2" src={img} alt={title} />
      </div>

      <p className="service__title fw-semibold text-bluesemi font-semibold mt-4">
        {title}
      </p>
      <p className="service__des text-center p-4 fw-medium flex-grow-1 text-primary font-regular">
        {description}
      </p>
    </div>
  );
}

export default Service;
