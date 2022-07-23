import React from "react";

import WeatherIcon from "./WeatherIcon";

import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function getDayOfTheWeek() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  function getMaxTemperature() {
    let maxTemperature = Math.round(props.data.temp.max);
    return maxTemperature;
  }

  function getMinTemperature() {
    let minTemperature = Math.round(props.data.temp.min);
    return minTemperature;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="day">{getDayOfTheWeek()}</div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={42} />
      </div>
      <div className="value-temperature-forecast">
        <span className="value-temperature-forecast-max">
          {getMaxTemperature()}º
        </span>
        <span className="value-temperature-forecast-min">
          {getMinTemperature()}º
        </span>
      </div>
    </div>
  );
}
