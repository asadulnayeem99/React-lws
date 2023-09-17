import React from "react";
const withCounter = (OriginalComponent) => {
  class NewComponent extends React.Component {
    state = {
      count: 0,
    };

    incrementCount = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };
    render() {
      const { count } = this.state;
      return (
        <OriginalComponent incrementCount={this.incrementCount} count={count} />
      );
    }
  }
  return NewComponent;
};
export default withCounter;
