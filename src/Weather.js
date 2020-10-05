import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>{props.defaultcity}</h1>

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
                <span className="text-capitalize">
                  {" "}
                  {weatherData.description}
                </span>
              </div>
            </div>
            <div className="col">
              {" "}
              <span className="line">|</span>
            </div>

            <div className="col">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>

              <span className="unit">°C|F</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="headingthree">
          <FormattedDate date={weatherData.date} />
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
              {weatherData.wind}
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
              {weatherData.humidity}%
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b9dcade6ea8b84ffbd9565650e525892";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return " Loading...";
  }
}
