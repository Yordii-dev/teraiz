import "./Company.css";

function Company({ img, title, author, description }: any) {
  return (
    <div className="company bg-gray1 border-radius d-flex justify-content-between align-items-center mx-auto">
      <div className="company__img d-flex align-items-center justify-content-center">
        <img src={img} alt={title} />
      </div>
      <div className="company__content">
        <p className="company__title size-2 weight-semibold text-dark">
          "{title}"
        </p>
        <p className="company__author size-4 weight-regular text-secondary">
          {author}
        </p>
        <p className="company__desc size-3 weight-regular text-dark">
          "{description}"
        </p>
      </div>
    </div>
  );
}

export default Company;
