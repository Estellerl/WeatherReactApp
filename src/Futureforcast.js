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

  return (
    <div className="FutureForcast">
      <div className="row">
        <div className="col">{hours()}</div>
        <div className="col"> 3km/hr</div>
        <div className="col"> 40%</div>
        <div className="col"> {showTemp}</div>
      </div>
    </div>
  );
}
