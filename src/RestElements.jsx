import React from "react";

const ReactElement3 = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank", className: "link" },
  "GOOGLE"
);

const ReactElement4 = React.createElement(
  "a",
  { href: "https://facebook.com", target: "_blank", className: "link" },
  "FACEBOOK"
);

const ReactElement5 = React.createElement(
  "a",
  { href: "https://linkedin.com", target: "_blank", className: "link" },
  "LINKEDIN"
);

const ReactElement6 = React.createElement(
  "a",
  { href: "https://github.com", target: "_blank", className: "link" },
  "GITHUB"
);

const ReactElement7 = React.createElement(
  "a",
  { href: "https://twitter.com", target: "_blank", className: "link" },
  "TWITTER"
);

const ReactElement8 = React.createElement(
  "a",
  { href: "https://whatsapp.com", target: "_blank", className: "link" },
  "WHATSAPP"
);

const ReactElement9 = React.createElement(
  "a",
  { href: "https://instagram.com", target: "_blank", className: "link" },
  "INSTAGRAM"
);

const RestElements = () => {
  return [
    ReactElement3,
    ReactElement4,
    ReactElement5,
    ReactElement6,
    ReactElement7,
    ReactElement8,
    ReactElement9,
  ];
};

export default RestElements;
