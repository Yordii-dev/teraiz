import "./Section.css";

function Section({ children, backgroundColor }: any) {
  return (
    <div className="section" style={{ backgroundColor }}>
      <div className="section__content mx-auto">{children}</div>
    </div>
  );
}

export default Section;
