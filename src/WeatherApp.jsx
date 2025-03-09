import Search from "./Search"; // Fixed case sensitivity issue
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [WeatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Sachin</h2>
      <Search updateInfo={updateInfo} />
      <InfoBox {...WeatherInfo} />
    </div>
  );
}
