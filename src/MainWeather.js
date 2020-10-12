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
      <hr />

      <div className="wrh">
        <div className="row">
          <div className="col">
            <img
              src="https://img.icons8.com/ios/50/000000/wind.png"
              alt="wind"
            />
            <br />
            {Math.round(props.data.wind)}km/hr
          </div>

          <div className="col">
            <img
              src="https://img.icons8.com/android/24/000000/humidity.png"
              alt="humidity"
            />
            <br />
            {props.data.humidity}%
          </div>
        </div>
      </div>
    </div>
  );
}
