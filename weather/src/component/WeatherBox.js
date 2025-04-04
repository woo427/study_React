import React from "react";
import cloudy from "../cloudy.png";

const WeatherBox = ({ weather }) => {
  let temp_f = weather?.main.temp * 1.8 + 32;
  return (
    <div className="weather-box">
      <div className="title">
        <img src={cloudy} className="cloudy" />
        <h5>{weather?.name}의 날씨 정보입니다.</h5>
      </div>

      <h3>섭씨온도 : {weather?.main.temp.toFixed(2)}°C</h3>
      <h3>화씨온도 : {temp_f.toFixed(2)}°F</h3>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
