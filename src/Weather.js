import React, { useState } from "react";
import axios from "axios";

import CurrentWeatherInfo from "./CurrentWeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
      icon: `https://openweathermap.org/img/wn/04d@2x.png`,
      temperature: Math.round(response.data.main.temp),
    });
  }

  function searchCity() {
    let apiKey = `308ea84ec474419c941637f2549a7e1b`;
    let unit = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="search-engine">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9 input-city">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Enter a city..."
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <button
                  className="btn btn-primary mb-3"
                  type="submit"
                  value="Search"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <CurrentWeatherInfo data={weatherData} />
      </div>
    );
  } else {
    searchCity();

    return <p className="loading-message">Loading...</p>;
  }
}
