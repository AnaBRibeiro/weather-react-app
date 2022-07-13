import React from "react";

import "./Signature.css";

export default function Signature() {
  return (
    <div className="Signature">
      <small className="signature">
        This project was coded by Ana Ribeiro and it is{" "}
        <a
          className="signature-link"
          href="https://github.com/AnaBRibeiro/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </small>
    </div>
  );
}
