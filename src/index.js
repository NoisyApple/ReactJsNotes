import ReactDOM from "react-dom";
import React from "react";
import App from "./Components/App";
import "./style.scss";

window.onload = () => {
  ReactDOM.render(<App />, document.querySelector("#root"));
};
