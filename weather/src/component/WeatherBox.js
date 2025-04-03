import React from "react";

const WeatherBox = ({ weather }) => {
  console.log("weater", weather);
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>{weather?.main.temp} / 화씨</h2>
      {/* 화씨 = 섭씨 * 1.8 + 32 */}
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
