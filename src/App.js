import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <br />
        <Forecast />
        <br />
        <Search />

        <footer>
          This page was coded by
          <a
            class="name"
            href="https://www.linkedin.com/in/estelle-reeves-long-2816ab1a1/"
            target="blank"
          >
            Estelle Reeves Long
          </a>
          <br />
          <a
            class="gitHub"
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
