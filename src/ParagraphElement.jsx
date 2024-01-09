import React from "react";

const ReactElement2 = React.createElement(
  "p",
  { className: "paragraph" },
  "Always use Custom React with caution!"
);

const ParagraphElement = () => {
  return ReactElement2;
};

export default ParagraphElement;
