import React from "react";

import Title from "./Title";
import Weather from "./Weather";
import Signature from "./Signature";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container all-content">
        <div className="app-content">
          <Title />
          <div className="weather-current">
            <Weather defaultCity="New York" />
          </div>
        </div>
        <Signature />
      </div>
    </div>
  );
}

export default App;
