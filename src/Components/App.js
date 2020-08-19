import React, { Component } from "react";
import Title from "./Title";
import Subitle from "./Subtitle";
import HideableContent from "./HideableContent";
import Paragraph from "./Paragraph";
import CodeBlock from "./CodeBlock";
import BlockTitle from "./BlockTitle";
import TextInput from "./TextInput";
import { Code } from "./CodeText";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Title text="React.js Notes" />
        <div className="state-container">
          <Subitle text="State" />
          <Paragraph text="Los componentes de react cuentan con un objeto JSON llamado 'state' en el cual quedan almacenados los diferentes estados que puede tener el componente, para modificar algun atributo del objeto state se utiliza el metodo setState" />

          <BlockTitle text="Ejemplo:" />
          <div className="block">
            <HideableContent text="CONTENIDO A" />
            <HideableContent text="CONTENIDO B" />
            <HideableContent text="CONTENIDO C" />
          </div>

          <BlockTitle text="Codigo:" />
          <div className="block">
            <CodeBlock code={Code[0]} />
          </div>

          <Subitle text="Text inputs" />
          <Paragraph text="Al usar elementos que sirven como entradas de texto debemos tratar su valor como parte del estado del componente." />

          <BlockTitle text="Ejemplo:" />
          <div className="block">
            <label className="label">Cuadro de texto: </label>
            <TextInput />
          </div>

          <BlockTitle text="Codigo:" />
          <div className="block">
            <CodeBlock code={Code[1]} />
          </div>
        </div>
      </div>
    );
  }
}
