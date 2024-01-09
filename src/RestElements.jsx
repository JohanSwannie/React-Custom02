import React from "react";

const ReactElement4 = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank", className: "link" },
  "GOOGLE"
);

const ReactElement5 = React.createElement(
  "a",
  { href: "https://facebook.com", target: "_blank", className: "link" },
  "FACEBOOK"
);

const ReactElement6 = React.createElement(
  "a",
  { href: "https://linkedin.com", target: "_blank", className: "link" },
  "LINKEDIN"
);

const ReactElement7 = React.createElement(
  "a",
  { href: "https://github.com", target: "_blank", className: "link" },
  "GITHUB"
);

const RestElements = () => {
  return [ReactElement4, ReactElement5, ReactElement6, ReactElement7];
};

export default RestElements;
