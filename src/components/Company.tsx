import "./Company.css";

function Company({ img, title, author, description }: any) {
  return (
    <div className="company bg-gray1 d-flex align-items-center justify-content-center border-radius mx-auto">
      <div className="company__content">
        <p className="company__title size-2 weight-semibold text-dark">
          "{title}"
        </p>
        <div className="d-flex align-items-center">
          <div className="company__img d-flex align-items-center">
            <img src={img} alt={title} />
          </div>
          <div>
            <p className="company__author size-4 weight-regular text-secondary">
              {author}
            </p>
            <p className="company__desc size-3 weight-regular text-dark">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
