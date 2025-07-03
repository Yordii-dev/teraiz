import "./Image.css";

function Image({ className, img, children, badgeType, alignItems }: any) {
  return (
    <div className={`image border-radius ${className}`}>
      <img src={img} className="image__img border-radius" alt="Imagen" />
      <div className={`image__badge ${alignItems} ${badgeType}`}>
        {children}
      </div>
    </div>
  );
}

export default Image;
