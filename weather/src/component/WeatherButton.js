import React from "react";

import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity }) => {
  return (
    <div>
      <Button variant="dark">현재 위치</Button>
      {cities.map((city) => (
        <Button onClick={() => setCity(city)} variant="dark">
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
