import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="Day">
        <div className="row">
          <div className="col">Monday</div>
          <div className="col"> 3km/hr</div>
          <div className="col"> 40%</div>
          <div className="col"> 20 C°</div>
        </div>
      </div>
      <div className="Day">
        <div className="row">
          <div className="col">Tuesday</div>
          <div className="col"> 3km/hr</div>
          <div className="col"> 40%</div>
          <div className="col"> 20 C°</div>
        </div>
      </div>

      <div className="Day">
        <div className="row">
          <div className="col">Wednesday </div>
          <div className="col"> 3km/hr</div>
          <div className="col"> 40%</div>
          <div className="col"> 20 C°</div>
        </div>
      </div>

      <div className="Day">
        <div className="row">
          <div className="col">Thursday</div>
          <div className="col"> 3km/hr</div>
          <div className="col"> 40%</div>
          <div className="col"> 20 C°</div>
        </div>
      </div>

      <div className="Day">
        <div className="row">
          <div className="col">Friday</div>
          <div className="col"> 3km/hr</div>
          <div className="col"> 40%</div>
          <div className="col"> 20 C°</div>
        </div>
      </div>
    </div>
  );
}
