import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Enter a city"
                className="form-control"
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              ></input>
            </div>
          </div>
        </form>
        <h1 className="mb-4">New York</h1>
        <ul>
          <li>Sunday 13:24</li>
          <li className="mb-4">Clear Sky</li>
        </ul>
        <div className="row mb-3">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny icon"
            ></img>
            <span className="temperature">6</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: 63%</li>
              <li>Wind: 3.6 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
