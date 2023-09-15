import React from "react";

export default class Form extends React.Component {
  state = {
    title: "JavaScript",
    text: "Js is Awesome",
    library: "react",
    isAwesome: true,
  };

  submitHandler = (e) => {
    const { title, text, library, isAwesome } = this.state;
    e.preventDefault();
    console.log(title, text, library, isAwesome);
  };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      console.log("clear");
    }
  };

  render() {
    const { title, text, library, isAwesome } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Enter Your Title"
            value={title}
            onChange={this.handleChange}
          />
          <p>{title}</p>
          <textarea
            name="text"
            value={text}
            onChange={this.handleChange}
          ></textarea>
          <br />
          <br />
          <select value={library} onChange={this.handleChange}>
            <option selected value="React">
              React
            </option>
            <option selected value="Angular">
              Angular
            </option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            name=""
            id=""
            checked={isAwesome}
            onChange={this.handleChange}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

// export default Form;
