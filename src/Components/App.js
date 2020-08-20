import React, { Component } from "react";
import Title from "./Title";
import Subitle from "./Subtitle";
import HideableContent from "./HideableContent";
import Paragraph from "./Paragraph";
import CodeBlock from "./CodeBlock";
import BlockTitle from "./BlockTitle";
import TextInput from "./TextInput";
import { code, lang } from "../Data";
import LanguageSwitch from "./LanguageSwitch";
import { updateLang } from "../jsUtils";

export default class App extends Component {
  state = {
    lang: "en",
  };

  languageSwitch = (selectedLang) => {
    this.setState({ lang: selectedLang });
  };

  componentDidMount() {
    updateLang(this.state.lang, lang);
  }

  componentDidUpdate() {
    updateLang(this.state.lang, lang);
  }

  render() {
    return (
      <div className="container">
        <LanguageSwitch
          lang={this.state.lang}
          langSwitch={this.languageSwitch}
        />
        <Title text="React.js Notes" />
        <div className="state-container">
          <Subitle langName="subtitle-state" />
          <Paragraph langName="paragraph-state" />

          <BlockTitle langName="block-title-example" />
          <div className="block">
            <HideableContent text="CONTENIDO A" />
            <HideableContent text="CONTENIDO B" />
            <HideableContent text="CONTENIDO C" />
          </div>

          <BlockTitle langName="block-title-code" />
          <div className="block">
            <CodeBlock code={code[0]} />
          </div>

          <Subitle langName="subtitle-text-inputs" />
          <Paragraph langName="paragraph-text-inputs" />

          <BlockTitle langName="block-title-example" />
          <div className="block">
            <label className="label">Cuadro de texto: </label>
            <TextInput />
          </div>

          <BlockTitle langName="block-title-code" />
          <div className="block">
            <CodeBlock code={code[1]} />
          </div>
        </div>
      </div>
    );
  }
}
