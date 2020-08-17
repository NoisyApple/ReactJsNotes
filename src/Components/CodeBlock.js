import Prism from "prismjs";

import React, { Component } from "react";

export default class CodeBlock extends Component {
  state = {
    show: true,
    text: `export default class HideableContent extends Component {
  state = {
    show: true,
    text: this.props.text,
  };
    
  toggleShow = () => this.setState({ show: !this.state.show });
    
  render() {
    if (this.state.show)
      return (
        <div className="hideable-content">
          <button onClick={this.toggleShow}>Ocultar Contenido</button>
          <p>{this.state.text}</p>
        </div>
      );
    else
      return (
        <div className="hideable-content">
          <button onClick={this.toggleShow}>Mostrar Contenido</button>
        </div>
      );
  }
}`,
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
            <code className="language-jsx">{this.state.text}</code>
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
