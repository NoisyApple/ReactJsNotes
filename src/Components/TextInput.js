import React, { Component } from "react";

export default class TextInput extends Component {
  state = {
    value: "",
  };

  valueChange = (e) => {
    this.setState({ value: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
  };

  render() {
    return (
      <input
        className="text-input"
        type="text"
        value={this.state.value}
        onChange={this.valueChange}
      />
    );
  }
}
