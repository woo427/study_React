import React from "react";

import { Button } from "react-bootstrap";

const WeatherButton = ({
  cities,
  setCity,
  getCurrentLocation,
  selectedCity,
  setSelectedCity,
}) => {
  return (
    <div>
      <Button
        style={{
          margin: 2,
          backgroundColor: selectedCity === "current" ? "skyblue" : "lightgray",
          color: "black",
          border: "none",
        }}
        // variant="dark"
        onClick={() => {
          getCurrentLocation();
          setSelectedCity("current");
        }}
      >
        현재 위치
      </Button>
      {cities.map((city) => (
        <Button
          key={city}
          style={{
            margin: 2,
            backgroundColor: selectedCity === city ? "skyblue" : "lightgray",
            border: "none",
            color: "black",
          }}
          onClick={() => {
            setCity(city);
            setSelectedCity(city);
          }}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
