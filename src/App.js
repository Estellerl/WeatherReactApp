import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <br />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
