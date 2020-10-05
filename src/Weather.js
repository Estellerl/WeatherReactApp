import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Rome</h1>

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
            </div>
          </div>
          <div class="col">
            {" "}
            <span className="line">|</span>
          </div>

          <div className="col">
            <div className="Temperature">24°C|F</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="headingthree">
        <div class="row">
          <div class="col">
            <strong> Thursday </strong>{" "}
          </div>
          <div class="col"> 14:35 </div>
        </div>

        <div className="wrh">
          <div class="row">
            <div class="col">
              <ReactAnimatedWeather
                icon="WIND"
                color="#000"
                size={48}
                animate={true}
              />
              <br />
              2km/hr
            </div>

            <div class="col">
              {" "}
              <ReactAnimatedWeather
                icon="RAIN"
                color="#000"
                size={48}
                animate={true}
              />
              <br />
              30%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
