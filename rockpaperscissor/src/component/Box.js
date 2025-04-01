import React from "react";

const Box = (props) => {
  return (
    <div
      className={
        props.result === "Tie" || props.result == ""
          ? "box"
          : props.result === "Win"
          ? "box-win"
          : "box-lose"
      }
    >
      <h1>{props.name}</h1>
      <img className="item-img" src={props.item?.img} />
      <h2>{props.result}</h2>
    </div>
  );
};

export default Box;
