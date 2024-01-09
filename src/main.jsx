import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const reactElement1 = React.createElement(
  "h1",
  { className: "header" },
  "Custom React"
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement1);
