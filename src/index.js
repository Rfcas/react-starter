import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import App from './app';
import './styles.scss';
//import { App } from './app'; //Casos em que o export nao é default (export const App)
import store from '@state';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
