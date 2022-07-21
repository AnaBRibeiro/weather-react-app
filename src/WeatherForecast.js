import React from "react";

import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="day">Thursday</div>
          <div>
            <WeatherIcon code="01d" size={42} />
          </div>
          <div className="value-temperature-forecast">
            <span className="value-temperature-forecast-max">10º</span>
            <span className="value-temperature-forecast-min">5º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
