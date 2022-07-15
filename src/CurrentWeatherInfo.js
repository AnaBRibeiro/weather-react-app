import React, { useState } from "react";
import axios from "axios";

import "./CurrentWeatherInfo.css";

export default function CurrentWeatherInfo(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: `Thursday, 09:06`,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
      icon: `https://openweathermap.org/img/wn/04d@2x.png`,
      temperature: Math.round(response.data.main.temp),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="CurrentWeatherInfo">
        <div className="row">
          <div className="col-7">
            <div className="container-current-weather-secondary-info">
              <h2 className="city-name">{weatherData.city}</h2>
              <div className="weather-secondary-info">
                <p>{weatherData.date}</p>
                <ul className="list-weather-secondary-info">
                  <li>{weatherData.description}</li>
                  <li>
                    Humidity:
                    <span className="value-weather-secondary-info">
                      {" "}
                      {weatherData.humidity}
                    </span>
                    <span className="value-weather-secondary-info"> %</span>,
                    Wind speed:
                    <span className="value-weather-secondary-info">
                      {" "}
                      {weatherData.windSpeed}
                    </span>
                    <span className="value-weather-secondary-info"> m/s</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="container-weather-primary-info">
              <img
                className="weather-icon"
                src={weatherData.icon}
                alt={weatherData.description}
              />
              <span className="value-temperature">
                {weatherData.temperature}
              </span>
              <span className="temperature-unit"> ºC </span>
              <span className="temperature-unit-division"> | </span>
              <span className="temperature-unit">ºF</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `308ea84ec474419c941637f2549a7e1b`;
    let unit = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div>
        <p className="loading-message">Loading...</p>
      </div>
    );
  }
}
