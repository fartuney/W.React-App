import React from "react";
import Weather from "./Weather";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine!</h1>
      <Weather />
      <p>
        <a
          href="https://github.com/fartuney/W.React-App"
          target="_blank"
          rel="noreferrer"
          title="project on GitHub"
        >
          Open-source code
        </a>{" "}
        by Fartuney
      </p>
    </div>
  );
}
