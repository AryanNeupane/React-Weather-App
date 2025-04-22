import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import "./InfoBox.css";

function InfoBox({ info }) {
  const hot_url =
    "https://images.unsplash.com/photo-1743738049563-520b88442d04?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const cold_url =
    "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const rain_url =
    "https://images.unsplash.com/photo-1704883038327-e9cd4c164455?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D";

  // Default fallback
  let imageUrl = hot_url;

  // Decide based on weather condition or temperature
  const weatherDesc = info.weather.toLowerCase();

  if (
    weatherDesc.includes("rain") ||
    weatherDesc.includes("drizzle") ||
    weatherDesc.includes("thunderstorm")
  ) {
    imageUrl = rain_url;
  } else if (info.temp < 15) {
    imageUrl = cold_url;
  } else {
    imageUrl = hot_url;
  }

  let WeatherIcon = WhatshotIcon; // default to hot

  if (
    weatherDesc.includes("rain") ||
    weatherDesc.includes("drizzle") ||
    weatherDesc.includes("thunderstorm")
  ) {
    imageUrl = rain_url;
    WeatherIcon = UmbrellaIcon;
  } else if (info.temp < 15) {
    imageUrl = cold_url;
    WeatherIcon = AcUnitIcon;
  }

  return (
    <div className="InfoBox">
      <div className="Card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={imageUrl} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              display="flex"
              alignItems="center"
            >
              {info.city}{" "}
              <WeatherIcon style={{ marginLeft: 8, color: "#1976d2" }} />
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <div className="temp-info">
                <p>
                  <strong>Temperature:</strong> {info.temp} °C
                </p>
                <p>
                  <strong>Weather:</strong> {info.weather}
                </p>
                <p>
                  <strong>Feels Like:</strong> {info.feelsLike} °C
                </p>
                <p>
                  <strong>Min:</strong> {info.tempMin} °C
                </p>
                <p>
                  <strong>Max:</strong> {info.tempMax} °C
                </p>
                <p>
                  <strong>Humidity:</strong> {info.humidity} °C
                </p>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox;
