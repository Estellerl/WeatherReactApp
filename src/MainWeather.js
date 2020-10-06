import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import FormattedDate from "./FormattedDate";

export default function MainWeather(props) {
  return (
    <div className="MainWeather">
      <h1>{props.data.city}</h1>

      <div className="headingtwo">
        <div className="row">
          <div className="col">
            <div className="description">
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="#000"
                size={48}
                animate={true}
              />
              <span className="text-capitalize"> {props.data.description}</span>
              <img src={props.data.icon} alt={props.data.description} />
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
