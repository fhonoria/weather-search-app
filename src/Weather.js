import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-9">
          <input type="text" placeholder="Enter a city"></input>
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary"
          ></input>
        </div>
      </div>
      <h1>New York</h1>
      <ul>
        <li>Sunday 13:24</li>
        <li>Clear Sky</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny icon"
          ></img>
          <span>6°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 63%</li>
            <li>Wind: 3.6 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
