import React from "react";

const Box = (props) => {
  console.log("props", props);
  return (
    <div className="box">
      <h1>{props.name}</h1>
      <img className="item-img" src={props.item?.img} />
      <h2>{props.result}</h2>
    </div>
  );
};

export default Box;
