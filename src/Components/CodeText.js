module.exports = {
  Code: [
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
};
