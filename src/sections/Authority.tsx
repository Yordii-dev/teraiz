import "./Authority.css";

function Authority() {
  return (
    <div className="authority text-black d-flex align-items-start justify-content-between">
      <div className="authority__title w-50">
        <h1 className="size-1">
          Somos<span className="text-secondary"> expertos </span> en
          <br />
          lo que hacemos
        </h1>
      </div>

      <div className="authority__socialproofs d-flex flex-column w-50">
        <div className="authority__socialproofs__proof  d-flex align-items-center">
          <p className="size-2 weight-semibold text-center">+8 años</p>
          <p className="size-2">
            Soluciones digitales que transforman tu empresa.
          </p>
        </div>
        <div className="authority__socialproofs__proof d-flex align-items-center">
          <p className="size-2 weight-semibold text-center">LATAM</p>
          <p className="size-2">
            Soluciones digitales que transforman tu empresa. Soluciones
            digitales que transforman tu empresa.
          </p>
        </div>
        <div className="authority__socialproofs__proof d-flex align-items-center">
          <p className="size-2 weight-semibold text-center">
            Norte <br />
            America
          </p>
          <p className="size-2">
            Soluciones digitales que transforman tu empresa.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Authority;
