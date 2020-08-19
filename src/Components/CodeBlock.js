import Prism from "prismjs";

import React, { Component } from "react";

export default class CodeBlock extends Component {
  state = {
    show: false,
    code: this.props.code,
  };

  componentDidUpdate() {
    this.applyHighlight();
  }

  componentDidMount() {
    this.applyHighlight();
  }

  applyHighlight() {
    Prism.highlightAll();
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    if (this.state.show)
      return (
        <div>
          <button className="btn" onClick={this.toggleShow}>
            Ocultar Codigo
          </button>
          <pre>
            <code className="line-numbers language-jsx">{this.state.code}</code>
          </pre>
        </div>
      );
    else
      return (
        <div>
          <button className="btn" onClick={this.toggleShow}>
            Mostrar Codigo
          </button>
        </div>
      );
  }
}
