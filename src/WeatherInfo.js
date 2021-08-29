import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
            <WeatherIcon code={props.data.icon} size={40} />
            <WeatherTemperature celsius={props.data.temperature} />
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
