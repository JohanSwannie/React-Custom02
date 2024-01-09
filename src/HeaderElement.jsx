import React from "react";

const ReactElement1 = React.createElement(
  "h1",
  { className: "header" },
  "Custom React"
);

const HeaderElement = () => {
  return ReactElement1;
};

export default HeaderElement;
