import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span className="temperature ms-2">{props.celsius}</span>
      <span className="unit">°C</span>
    </span>
  );
}
