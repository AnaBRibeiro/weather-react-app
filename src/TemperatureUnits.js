import React, { useState } from "react";

import "./TemperatureUnits.css";

export default function TemperatureUnits(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahreinheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function displayFahrenheit() {
    return Math.round(props.celsius * (9 / 5) + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="TemperatureUnits">
        <span className="value-temperature">{props.celsius}</span>
        <span className="temperature-unit"> ºC </span>
        <span className="temperature-unit-division"> | </span>
        <span className="temperature-unit">
          <a href="/" onClick={showFahrenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="TemperatureUnits">
        <span className="value-temperature">{displayFahrenheit()}</span>
        <span className="temperature-unit">
          <a href="/" onClick={showCelsius}>
            {" "}
            ºC{" "}
          </a>
        </span>
        <span className="temperature-unit-division"> | </span>
        <span className="temperature-unit">ºF</span>
      </div>
    );
  }
}
