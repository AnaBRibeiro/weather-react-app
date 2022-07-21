import React from "react";

import DateInfo from "./DateInfo";
import WeatherIcon from "./WeatherIcon";
import TemperatureUnits from "./TemperatureUnits";

import "./CurrentWeatherInfo.css";

export default function CurrentWeatherInfo(props) {
  return (
    <div className="CurrentWeatherInfo">
      <div className="row">
        <div className="col-7">
          <div className="container-current-weather-secondary-info">
            <h2 className="city-name">{props.data.city}</h2>
            <div className="weather-secondary-info">
              <DateInfo date={props.data.date} />
              <ul className="list-weather-secondary-info">
                <li>{props.data.description}</li>
                <li>
                  Humidity:
                  <span className="value-weather-secondary-info">
                    {" "}
                    {props.data.humidity}
                  </span>
                  <span className="value-weather-secondary-info"> %</span>, Wind
                  speed:
                  <span className="value-weather-secondary-info">
                    {" "}
                    {props.data.windSpeed}
                  </span>
                  <span className="value-weather-secondary-info"> m/s</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-5">
          <WeatherIcon code={props.data.icon} size={60} />
          <TemperatureUnits celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
