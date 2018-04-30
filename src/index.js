import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import Routes from "./Routes";
import reducer from "./reducers/index"

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;

let reactAppReduxStore = 
  <Provider store={store}>
    <Routes />
  </Provider>

ReactDOM.render( reactAppReduxStore, document.getElementById('root'));
