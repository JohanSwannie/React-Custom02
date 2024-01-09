import React from "react";
import HeaderElement from "./HeaderElement";
import ParagraphElement from "./ParagraphElement";
import RestElements from "./RestElements";

const App = () => {
  return (
    <div>
      <HeaderElement />
      <ParagraphElement />
      <div className="container">
        <RestElements />
      </div>
    </div>
  );
};

export default App;
