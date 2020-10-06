import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function MainWeather(props) {
  return (
    <div className="MainWeather">
      <h1>{props.data.city}</h1>

      <div className="headingtwo">
        <div className="row">
          <div className="col">
            <div className="description">
              <WeatherIcon code={props.data.icon} />
              <span className="text-capitalize"> {props.data.description}</span>
            </div>
          </div>
          <div className="col">
            {" "}
            <span className="line">|</span>
          </div>

          <div className="col">
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>

            <span className="unit">°C|F</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="headingthree">
        <FormattedDate date={props.data.date} />
      </div>

      <div className="wrh">
        <div className="row">
          <div className="col">
            <ReactAnimatedWeather
              icon="WIND"
              color="#000"
              size={48}
              animate={true}
            />
            <br />
            {Math.round(props.data.wind)}
          </div>

          <div className="col">
            {" "}
            <ReactAnimatedWeather
              icon="RAIN"
              color="#000"
              size={48}
              animate={true}
            />
            <br />
            {props.data.humidity}%
          </div>
        </div>
      </div>
    </div>
  );
}
