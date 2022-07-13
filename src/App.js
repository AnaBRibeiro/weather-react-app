import React from "react";

import Title from "./Title";
import SearchEngine from "./SearchEngine";
import CurrentWeatherSecondaryInfo from "./CurrentWeatherSecondaryInfo";
import CurrentWeatherPrimaryInfo from "./CurrentWeatherPrimaryInfo";
import Signature from "./Signature";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container all-content">
        <div className="app-content">
          <Title />
          <SearchEngine />
          <div className="weather-current">
            <div className="row">
              <CurrentWeatherSecondaryInfo />
              <CurrentWeatherPrimaryInfo />
            </div>
          </div>
        </div>
        <Signature />
      </div>
    </div>
  );
}

export default App;
