import React from "react";
import { convert, toCelsius, toFarenhite } from "../lib/converter";
import BoilingVerdict from "./BoilingVerdict";
import TempInput from "./TempInput";

export default class Calculator extends React.Component {
  state = { temperature: "", scale: "c" };
  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const farenhite =
      scale === "c" ? convert(temperature, toFarenhite) : temperature;

    return (
      <>
        <TempInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleChange}
        />
        <TempInput
          scale="f"
          temperature={farenhite}
          onTemperatureChange={this.handleChange}
        />
        <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
      </>
    );
  }
}
