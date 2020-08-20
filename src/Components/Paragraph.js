import React, { Component } from "react";

export default class Paragraph extends Component {
  render() {
    return (
      <p className="paragraph lang" data-lang-name={this.props.langName}></p>
    );
  }
}
