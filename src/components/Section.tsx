import "./Section.css";

function Section({
  children,
  backgroundColor,
  disableMY,
  disableMX,
  disableTop,
}: any) {
  let paddingYClass = "";

  if (!disableMY && !disableTop) {
    paddingYClass = "enableMY";
  } else if (!disableMY && disableTop) {
    paddingYClass = "enableMY--noTop";
  }

  const paddingClasses = [paddingYClass, !disableMX && "enableMX"]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`section ${paddingClasses}`} style={{ backgroundColor }}>
      <div className="section__content mx-auto">{children}</div>
    </div>
  );
}

export default Section;
