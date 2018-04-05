import React from "react";
import ReactDOM from "react-dom";

import App from './app';
//import { App } from './app'; //Casos em que o export nao é default (export const App)

ReactDOM.render(<App />, document.getElementById("root"));
