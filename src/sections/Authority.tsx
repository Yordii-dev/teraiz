import "./Authority.css";

function Authority() {
  return (
    <div className="authority text-black d-flex align-items-start justify-content-between">
      <div className="authority__title">
        <h1 className="size-1">
          Somos<span className="text-secondary"> expertos </span> en
          <br />
          lo que hacemos
        </h1>
      </div>

      <div className="authority__socialproofs d-flex flex-column">
        <div className="authority__socialproofs__proof  d-flex align-items-center">
          <p className="size-2 my-0 weight-semibold text-start">+8 años</p>
          <p className="size-2 my-0">
            Soluciones digitales que transforman tu empresa.
          </p>
        </div>
        <div className="authority__socialproofs__proof d-flex align-items-center">
          <p className="size-2 my-0 weight-semibold text-start">LATAM</p>
          <p className="size-2 my-0">
            Soluciones digitales que transforman tu empresa.
            <br />
            Soluciones digitales que transforman tu empresa.
          </p>
        </div>
        <div className="authority__socialproofs__proof d-flex align-items-center">
          <p className="size-2 my-0 weight-semibold text-start">
            Norte <br />
            America
          </p>
          <p className="size-2 my-0">
            Soluciones digitales que transforman tu empresa.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Authority;
