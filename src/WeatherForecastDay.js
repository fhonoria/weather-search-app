import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);

    return temperature;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);

    return temperature;
  }

  function formattedForecastDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{formattedForecastDay()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size="30" />
      <div className="forecast-temperature">
        <span className="forecast-temp-max">{maxTemp()}°C</span>
        <span className="forecast-temp-min">{minTemp()}°C</span>
      </div>
    </div>
  );
}
