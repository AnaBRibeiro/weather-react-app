import React from "react";

import "./CurrentWeatherPrimaryInfo.css";

export default function CurrentWeatherPrimaryInfo() {
  return (
    <div className="col-4 CurrentWeatherPrimaryInfo">
      <div className="container-weather-primary-info">
        <img
          className="weather-icon"
          src="https://openweathermap.org/img/wn/04d@2x.png"
          alt="broken clouds"
        />
        <span className="value-temperature">7</span>
        <span className="temperature-unit"> ºC </span>
        <span className="temperature-unit-division"> | </span>
        <span className="temperature-unit">ºF</span>
      </div>
    </div>
  );
}
