import React from "react";

import FormattedDate from "./FormattedDate";

import Unittemp from "./Unittemp";
import WeatherIcon from "./WeatherIcon";
import "./MainWeather.css";

export default function MainWeather(props) {
  return (
    <div className="MainWeather">
      <h1>{props.data.city}</h1>
      <div className="date">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="row">
        <div className="col">
          <Unittemp celcius={props.data.temperature} />
        </div>
        <div className="col-1">|</div>

        <div className="col">
          <div className="icon">
            <WeatherIcon code={props.data.icon} />
          </div>
          <span className="text-capitalize"> {props.data.description}</span>
        </div>
      </div>

      <div className="wrh">
        <div className="row">
          <div className="col">
            <span>Wind </span>
            <br />
            {Math.round(props.data.wind)}km/hr
          </div>

          <div className="col">
            Humidity
            <br />
            {props.data.humidity}%
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
