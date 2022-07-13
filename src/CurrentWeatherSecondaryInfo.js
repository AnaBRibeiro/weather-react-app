import React from "react";

import "./CurrentWeatherSecondaryInfo.css";

export default function CurrentWeatherSecondaryInfo() {
  return (
    <div className="col-8 CurrentWeatherSecondaryInfo">
      <div className="container-current-weather-secondary-info">
        <h2 className="city-name">New York</h2>
        <div className="weather-secondary-info">
          <p>Thursday, 09:06</p>
          <ul className="list-weather-secondary-info">
            <li>Clear sky</li>
            <li>
              Humidity:
              <span className="value-weather-secondary-info"> 79</span>
              <span className="value-weather-secondary-info"> %</span>, Wind
              speed:
              <span className="value-weather-secondary-info"> 3</span>
              <span className="value-weather-secondary-info"> m/s</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
