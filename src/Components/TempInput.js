import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Farenhite",
};

export default function TempInput({ scale, temperature, onTemperatureChange }) {
  return (
    <>
      <fieldset>
        <legend>Enter Temp In {scaleNames[scale]} </legend>
        <input
          type="text"
          name=""
          value={temperature}
          id=""
          onChange={(e) => onTemperatureChange(e, scale)}
        />
      </fieldset>
    </>
  );
}
