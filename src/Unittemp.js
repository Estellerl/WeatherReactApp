import React, { useState } from "react";
import "./MainWeather.css";

export default function Unittemp(props) {
  const [unit, setUnit] = useState("celcius");

  function converttoFaren(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function converttoCel(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="Unittemp">
        <span className="temp">{Math.round(props.celcius)}</span>{" "}
        <span className="units">
          <span className="unitC"> C° </span>|{" "}
          <a href="/" onClick={converttoFaren}>
            F°{" "}
          </a>
        </span>
      </div>
    );
  } else {
    let farenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="Unittemp">
        <span className="units">
          <span className="temp">{Math.round(farenheit)}</span>{" "}
          <a href="/" onClick={converttoCel}>
            C°{" "}
          </a>
          |<span className="unitC"> F° </span>{" "}
        </span>
      </div>
    );
  }
}
