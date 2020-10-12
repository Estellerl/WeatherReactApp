import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img
          src="https://img.icons8.com/metro/26/000000/sunrise.png"
          alt="sunrise"
          className="sunrise"
        />
        <Weather defaultcity="Bordeaux" />
        <br />

        <img
          src="https://img.icons8.com/metro/26/000000/sunset.png"
          className="sunset"
          alt="sunset"
        />
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
            className="gitHub"
            href="https://github.com/Estellerl/WeatherApp-Vanilla"
            target="blank"
          >
            Open-sourced <code></code>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
