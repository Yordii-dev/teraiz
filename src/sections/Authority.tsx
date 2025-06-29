import "./Authority.css";

function Authority() {
  return (
    <div className="authority text-black d-flex align-items-start justify-content-between">
      <div className="authority__title">
        <h1 className="size-0 weight-semibold">
          <span className="text-secondary">Expertos en</span> <br />
          tecnología <br />
          inmobiliaria
        </h1>
      </div>

      <div className="authority__socialproofs d-flex flex-column">
        <div className="authority__socialproofs__proof">
          <p className="size-2 my-0 weight-semibold text-start">+8 años</p>
          <p className="size-2 my-0">
            Desarrollando sistemas inmobiliarios que ordenan, automatizan y
            hacen crecer.
          </p>
        </div>
        <div className="authority__socialproofs__proof">
          <p className="size-2 my-0 weight-semibold text-start">LATAM</p>
          <p className="size-2 my-0">
            Hemos transformado inmobiliarias en Perú, Colombia, México, Chile y
            más.
          </p>
        </div>
        <div className="authority__socialproofs__proof">
          <p className="size-2 my-0 weight-semibold text-start">
            Norte <br />
            America
          </p>
          <p className="size-2 my-0">
            Conocemos los retos del mercado en EE.UU. y adaptamos soluciones a
            su escala.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Authority;
