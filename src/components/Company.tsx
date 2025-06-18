import "./Company.css";

function Company({ img, title, author, description }: any) {
  return (
    <div className="company d-flex justify-content-between align-items-center mx-auto">
      <div className="company__img me-3 d-flex justify-content-center align-items-center">
        <img src={img} alt={title} />
      </div>
      <div className="ms-3">
        <p className="company__title fw-semibold text-primary">"{title}"</p>
        <p className="company__author fw-bold text-secondary">{author}</p>
        <p className="company__desc fw-font-medium text-primary">
          "{description}"
        </p>
      </div>
    </div>
  );
}

export default Company;
