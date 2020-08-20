import React, { Component } from "react";
const flagEn = require("../../assets/flag-en.svg");
const flagEs = require("../../assets/flag-es.svg");

let settings = [
  {
    lang: "es",
    image: flagEs,
  },
  {
    lang: "en",
    image: flagEn,
  },
];

export default class LanguageSwitch extends Component {
  // state = {
  //   lang: this.props.lang,
  // };

  render() {
    return (
      <div className="language-switch">
        <p>Idioma: </p>
        {settings.map((e, i) => (
          <img
            style={this.props.lang == e.lang ? { filter: "none" } : {}}
            key={i}
            src={e.image}
            onClick={() => {
              if (this.props.langSwitch) this.props.langSwitch(e.lang);
            }}
          ></img>
        ))}
      </div>
    );
  }
}
