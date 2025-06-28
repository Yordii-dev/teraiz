import "./Authority.css";

function Authority() {
  return (
    <div className="authority text-black d-flex align-items-start justify-content-between">
      <div className="authority__title">
        <h1 className="size-1 weight-semibold">
          Somos <span className="text-secondary">expertos</span> en <br />
          tecnología inmobiliaria
        </h1>
      </div>

      <div className="authority__socialproofs d-flex flex-column">
        <div className="authority__socialproofs__proof  d-flex align-items-center">
          <p className="size-2 my-0 weight-semibold text-start">+8 años</p>
          <p className="size-2 my-0">
            Desarrollando sistemas inmobiliarios que ordenan, <br /> automatizan
            y hacen crecer.
          </p>
        </div>
        <div className="authority__socialproofs__proof d-flex align-items-center">
          <p className="size-2 my-0 weight-semibold text-start">LATAM</p>
          <p className="size-2 my-0">
            Hemos transformado inmobiliarias en Perú, Colombia, <br /> México,
            Chile y más.
          </p>
        </div>
        <div className="authority__socialproofs__proof d-flex align-items-center">
          <p className="size-2 my-0 weight-semibold text-start">
            Norte <br />
            America
          </p>
          <p className="size-2 my-0">
            Conocemos los retos del mercado en EE.UU. y adaptamos <br />{" "}
            soluciones a su escala.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Authority;
