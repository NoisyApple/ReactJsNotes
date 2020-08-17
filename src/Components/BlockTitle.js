import React, { Component } from "react";

export default class BlockTitle extends Component {
  state = {
    text: this.props.text,
  };

  render() {
    return <div className="block-title">{this.state.text}</div>;
  }
}
