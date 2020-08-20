import React, { Component } from "react";

export default class BlockTitle extends Component {
  render() {
    return (
      <div
        className="block-title lang"
        data-lang-name={this.props.langName}
      ></div>
    );
  }
}
