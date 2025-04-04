import React from "react";

import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity }) => {
  return (
    <div>
      <Button style={{ margin: 2 }} variant="dark">
        현재 위치
      </Button>
      {cities.map((city) => (
        <Button
          style={{ margin: 2 }}
          onClick={() => setCity(city)}
          variant="dark"
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
