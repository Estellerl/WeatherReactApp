import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import MainWeather from "./MainWeather";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultcity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      sunriseTime: response.data.sys.sunrise * 1000,
    });
  }

  function Search() {
    const apiKey = "b9dcade6ea8b84ffbd9565650e525892";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function CurrentLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "b9dcade6ea8b84ffbd9565650e525892";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCurrentloc(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(CurrentLocation);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search(city);
  }

  function handleChangeCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <MainWeather data={weatherData} />
        <Forecast city={weatherData.city} />

        <div className="Search">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-4">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="searchbar"
                  autoFocus="on"
                  onChange={handleChangeCity}
                />
              </div>
              <div className="col">
                <input type="submit" value="Search" className="searchbutton" />
              </div>
            </div>
          </form>
        </div>
        <div className="float-right">
          <img
            onClick={handleCurrentloc}
            src="https://img.icons8.com/material-outlined/24/000000/worldwide-location.png"
            alt="currentlocation"
            className="currentLoc"
          />
        </div>
      </div>
    );
  } else {
    Search();

    return " Loading...";
  }
}
