import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultcity="Bordeaux" />
        <br />
        <footer>
          This page was coded by
          <br />
          <a
            className="name"
            href="https://www.linkedin.com/in/estelle-reeves-long-2816ab1a1/"
            target="blank"
          >
            Estelle Reeves Long
          </a>
          <br />
          <a
            className="name"
            href="https://github.com/Estellerl/WeatherApp-Vanilla"
            target="blank"
          >
            Open-sourced <code></code>
          </a>
          <br />
          <a className="iconreference" href="https://icons8.com/icons/">
            {" "}
            Icon Reference
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
