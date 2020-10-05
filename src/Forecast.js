import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="Day">
        <div class="row">
          <div class="col">Monday</div>
          <div class="col"> 3km/hr</div>
          <div class="col"> 40%</div>
          <div class="col"> 20 C°</div>
        </div>
      </div>
      <div className="Day">
        <div class="row">
          <div class="col">Tuesday</div>
          <div class="col"> 3km/hr</div>
          <div class="col"> 40%</div>
          <div class="col"> 20 C°</div>
        </div>
      </div>

      <div className="Day">
        <div class="row">
          <div class="col">Wednesday </div>
          <div class="col"> 3km/hr</div>
          <div class="col"> 40%</div>
          <div class="col"> 20 C°</div>
        </div>
      </div>

      <div className="Day">
        <div class="row">
          <div class="col">Thursday</div>
          <div class="col"> 3km/hr</div>
          <div class="col"> 40%</div>
          <div class="col"> 20 C°</div>
        </div>
      </div>

      <div className="Day">
        <div class="row">
          <div class="col">Friday</div>
          <div class="col"> 3km/hr</div>
          <div class="col"> 40%</div>
          <div class="col"> 20 C°</div>
        </div>
      </div>
    </div>
  );
}
