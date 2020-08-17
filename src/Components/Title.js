import React, { Component } from "react";
import { rainbowText } from "../jsUtils";

export default class Title extends Component {
  state = {
    rainbowMode: true,
  };

  toggleRainbow = () => this.setState({ rainbowMode: !this.state.rainbowMode });

  render() {
    if (this.state.rainbowMode)
      return (
        <h1 className="title" onClick={this.toggleRainbow}>
          {rainbowText(this.props.text)}
        </h1>
      );
    else {
      return (
        <h1 className="title" onClick={this.toggleRainbow}>
          {this.props.text}
        </h1>
      );
    }
  }
}
