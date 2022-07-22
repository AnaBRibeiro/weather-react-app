import React from "react";
import axios from "axios";

import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = `308ea84ec474419c941637f2549a7e1b`;
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let unit = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(handleResponse);

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
