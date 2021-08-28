import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mb-4">{props.data.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="mb-4 text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mb-3">
        <div className="col-6">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} />
            <span className="temperature ms-2">{props.data.temperature}</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
