import React, { Component } from "react";

export default class Subtitle extends Component {
  render() {
    return <h6 className="subtitle">{this.props.text}</h6>;
  }
}
