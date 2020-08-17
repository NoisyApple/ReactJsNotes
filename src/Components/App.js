import React, { Component } from "react";
import Title from "./Title";
import Subitle from "./Subtitle";
import HideableContent from "./HideableContent";
import Paragraph from "./Paragraph";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Title text="React.js Notes" />
        <div className="state-container">
          <Subitle text="State" />
          <Paragraph text="Los componentes de react cuentan con un objeto JSON llamado 'state' en el cual quedan almacenados los diferentes estados que puede tener el componente, para modificar algun atributo del objeto state se utiliza el metodo setState" />

          <div className="block">
            <HideableContent text="CONTENIDO A" />
            <HideableContent text="CONTENIDO B" />
            <HideableContent text="CONTENIDO C" />
          </div>
        </div>
      </div>
    );
  }
}