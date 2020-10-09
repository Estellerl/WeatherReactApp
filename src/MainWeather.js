import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import FormattedDate from "./FormattedDate";
//import WeatherIcon from "./WeatherIcon";
import Unittemp from "./Unittemp";

export default function MainWeather(props) {
  return (
    <div className="MainWeather">
      <h1>{props.data.city}</h1>

      <div className="headingtwo">
        <div className="row">
          <div className="col">
            <div className="description">
              <img src={props.data.iconUrl} alt={props.data.description} />

              <span className="text-capitalize"> {props.data.description}</span>
            </div>
          </div>
          <div className="col">
            {" "}
            <span className="line">|</span>
          </div>

          <div className="col">
            <span className="temperature">
              <Unittemp celcius={props.data.temperature} />
            </span>
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
