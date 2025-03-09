import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Search.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "bd7614e3cd61219418222f9ed2d754e0"; 

 

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        throw new Error(jsonResponse.message);
      }

      let result = {
        city: jsonResponse.name,
        feelslike: jsonResponse.main.feels_like,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        pressure: jsonResponse.main.pressure,
        weather: jsonResponse.weather[0].description,
      };

      console.log(result);
      return result;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return { city: "City not found", temp: "-", feelslike: "-", tempMin: "-", tempMax: "-", humidity: "-", weather: "-" };
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!city.trim()) return;

    setCity(""); // Clear input after search
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          onChange={handleChange}
          value={city}
          variant="outlined"
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
