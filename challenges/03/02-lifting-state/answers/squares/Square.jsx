import React from "react";

const Square = ({ selected, handleClick, colour }) => (
  <div
    style={{
      width: "200px",
      height: "200px",
      background: selected ? colour : "#000",
    }}
    onClick={ handleClick }
  />
);

export default Square;
