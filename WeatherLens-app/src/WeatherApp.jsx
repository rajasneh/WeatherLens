import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 14.13,
    humidity: 58,
    weather: "haze",
    temp: 15.05,
    tempMax: 15.05,
    tempMin: 15.05,
  });
  let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
  }
  return (
    <div className="WeatherApp">
      {/* Video Background */}
      <video autoPlay loop muted className="background-video">
        <source src="/bg_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <h2>Weather App by Asneh</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}
