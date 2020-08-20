import React, { Component } from "react";

export default class Subtitle extends Component {
  render() {
    return (
      <h6 className="subtitle lang" data-lang-name={this.props.langName}></h6>
    );
  }
}
