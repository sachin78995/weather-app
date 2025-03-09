import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ city, temp, tempMin, tempMax, humidity, weather, feelslike }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const HOT_URL =
    "https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?q=80&w=2091&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // Determine background image with INIT_URL fallback
  const backgroundImage =
    humidity === undefined || temp === undefined
      ? INIT_URL
      : humidity > 80
      ? RAIN_URL
      : temp > 15
      ? HOT_URL
      : COLD_URL;

  return (
    <div className="infoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={backgroundImage} title={city} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {city}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Temperature: {temp}°C <br />
              Feels Like: {feelslike}°C <br />
              Humidity: {humidity}% <br />
              Min Temp: {tempMin}°C <br />
              Max Temp: {tempMax}°C <br />
              Condition: {weather}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
