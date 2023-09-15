import React from "react";
import Clock from "./Clock";
const ClockList = ({ quantity = [] }) => {
  return (
    <div>
      {quantity.map(() => (
        <Clock key={Math.random()} />
      ))}
    </div>
  );
};

export default ClockList;
