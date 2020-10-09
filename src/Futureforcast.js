import React from "react";

export default function FutureForcast(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function showTemp() {
    let Temp = Math.round(props.data.main.temp);

    return `${Temp}°C`;
  }

  function showHum() {
    let Hum = props.data.main.humidity;

    return `${Hum}%`;
  }

  function showWind() {
    let wind = Math.round(props.data.wind.speed);

    return `${wind}km/hr`;
  }

  return (
    <div className="FutureForcast">
      <div className="row">
        <div className="col">{hours()}</div>
        <div className="col"> {showHum()}</div>
        <div className="col"> {showWind()}</div>
        <div className="col"> {showTemp()}</div>
      </div>
    </div>
  );
}
