import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setLoaded(true);
    setForecastData(response.data.daily);
    console.log(response);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="forecast-day">{forecastData[0].dt}</div>
            <WeatherIcon code="01d" size="30" />
            <div className="forecast-temperature">
              <span className="forecast-temp-max">
                {forecastData[0].temp.max}°C
              </span>
              <span className="forecast-temp-min">
                {forecastData[0].temp.min}°C
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "9840a840dcb1e2ca4cd13597387da153";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
