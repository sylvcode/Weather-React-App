import React from "react";
import Weather from "./Weather";
import './index.css';

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <h3>
          <a href="https://github.com/sylviaantons/vanilla.js">Open-source</a>
          coded with 💜 by Sylvia
        </h3>
        <h3>
          Hosted on
          <a href="https://www.netlify.com/">Netlify</a>
        </h3>
    </div>
  );
}
