import React from "react";

function TextWithBreaks({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  const lines = text.split(/\n+/);

  return (
    <p className={className}>
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  );
}

export default TextWithBreaks;
