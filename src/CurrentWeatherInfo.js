import React from "react";

import DateInfo from "./DateInfo";
import WeatherIcon from "./WeatherIcon";

import "./CurrentWeatherInfo.css";

export default function CurrentWeatherInfo(props) {
  return (
    <div className="CurrentWeatherInfo">
      <div className="row">
        <div className="col-8">
          <div>
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
        <div className="col-4">
          <WeatherIcon code={props.data.icon} size={60} />
          <span className="value-temperature">{props.data.temperature}</span>
          <span className="temperature-unit"> ºC </span>
        </div>
      </div>
    </div>
  );
}
