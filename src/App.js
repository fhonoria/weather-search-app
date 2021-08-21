import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by{" "}
        <a
          href="https://optimistic-hopper-ee95fa.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Honoria Fraszt
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/fhonoria/weather-search-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Git-hub
        </a>
      </footer>
    </div>
  );
}
