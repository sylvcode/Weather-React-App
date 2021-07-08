import React, { useState } from "react";
import axios from "axios";

export default function SearchWeather(props) {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");
  
  let [loading, setLoading] = useState(false);

  function displayWeather(response) {
    setLoading(true);
    setWeather({
      temperature: response.data.current.temp,
      wind: response.data.current.wind_speed,
      humidity: response.data.current.humidity,
      description: response.data.current.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.current.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.neurocode.ai/v1/weather?city=${city}`;
    axios
      .get(apiUrl)
      .then(displayWeather)
      .catch((err) => console.error(err));
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city.." onChange={changeCity} />
      <button type="Submit">Search</button>
    </form>
  );

  if (loading) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>Humidity:{weather.humidity}%</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
