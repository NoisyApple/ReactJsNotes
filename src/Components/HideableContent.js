import React, { Component } from "react";

export default class HideableContent extends Component {
  state = {
    show: true,
    text: this.props.text,
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    if (this.state.show)
      return (
        <div className="hideable-content">
          <button className="btn" onClick={this.toggleShow}>
            Ocultar Contenido
          </button>
          <p>{this.state.text}</p>
        </div>
      );
    else
      return (
        <div className="hideable-content">
          <button className="btn" onClick={this.toggleShow}>
            Mostrar Contenido
          </button>
        </div>
      );
  }
}
