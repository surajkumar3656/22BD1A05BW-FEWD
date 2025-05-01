import React from "react";
import Weather from "./components/Weather";

function App() {
  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial" }}>
      <h1>🌦️ Live Weather App</h1>
      <Weather />
    </div>
  );
}

export default App;
