import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  state = { date: new Date(), locale: "bn-BD" };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleClick = (locale) => {
    this.setState({ locale });
  };

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    const { date, locale } = this.state;
    return (
      <div>
        <h1>
          <span>Hello {date.toLocaleTimeString(locale)}</span>
        </h1>
        {locale === "bn-BD" ? (
          <Button change={this.handleClick} locale="en-US" show={false} />
        ) : (
          <Button change={this.handleClick} locale="bn-BD" show={true} />
        )}
      </div>
    );
  }
}

export default Clock;
