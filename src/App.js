import React from "react";

import Title from "./Title";
import SearchEngine from "./SearchEngine";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
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
            <CurrentWeatherInfo defaultCity="New York" />
          </div>
        </div>
        <Signature />
      </div>
    </div>
  );
}

export default App;
