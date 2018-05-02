import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import "./index.css";
import reducer from "./reducers/index";
import NavFooter from "./components/NavigationFooter";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;

let reactAppReduxStore =
  <Provider store={store}>
    <Router>
      <Switch> 
        <Route exact path="/register" componet="test"/>
        <Route exact path="/login" componet="Test"/>
        <Route>
          <main className="main">
            <Route exact path="/explore" component={NavFooter}/>
            <NavFooter/>
          </main>
        </Route>
      </Switch>
    </Router>
  </Provider>;

ReactDOM.render( reactAppReduxStore, document.getElementById("root"));
