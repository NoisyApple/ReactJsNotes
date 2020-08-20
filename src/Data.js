module.exports = {
  code: [
    `export default class HideableContent extends Component {
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
    `export default class TextInput extends Component {
  state = {
    value: "",
  };

  valueChange = (e) => {
    this.setState({ value: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
  };

  render() {
    return (
      <input type="text" value={this.state.value} onChange={this.valueChange} />
    );
  }
}`,
  ],
  lang: {
    "subtitle-state": {
      es: "Estado",
      en: "State",
    },
    "subtitle-text-inputs": {
      es: "Entradas de texto",
      en: "Text inputs",
    },
    "paragraph-state": {
      es:
        "Los componentes de react cuentan con un objeto JSON llamado 'state' en el cual quedan almacenados los diferentes atributos que puede tener el componente, para modificar algun atributo del objeto state se utiliza el metodo setState.",
      en:
        "React components have a JSON object called 'state' in which all the posible attributes of the component are stored, to modify some attribute of the state object setState method is used.",
    },
    "paragraph-text-inputs": {
      es:
        "Al usar elementos que sirven como entradas de texto debemos tratar su valor como un atributo del estado del componente.",
      en:
        "When using elements which are used as text inputs we must treat their value as an attribute of the state of the component.",
    },
    "block-title-code": {
      es: "Codigo:",
      en: "Code:",
    },
    "block-title-example": {
      es: "Ejemplo:",
      en: "Example:",
    },
  },
};
