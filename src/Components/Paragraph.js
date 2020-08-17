import React, { Component } from "react";

export default class Paragraph extends Component {
  render() {
    return <p className="paragraph">{this.props.text}</p>;
  }
}
