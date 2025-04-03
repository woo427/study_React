import React from "react";

import { Button } from "react-bootstrap";

const WeatherButton = ({ cities }) => {
  return (
    <div>
      <Button variant="dark">현재 위치</Button>
      {cities.map((city) => (
        <Button variant="dark">{city}</Button>
      ))}
    </div>
  );
};

export default WeatherButton;
