import React from "react";
import "./App.css";
import Hierarchical from "./layouts/Hierarchical";
import data from "./data.json";

function App() {
  return (
    <div className="container">
      <div className="canvas">
        <Hierarchical data={data} />
      </div>
    </div>
  );
}

export default App;
