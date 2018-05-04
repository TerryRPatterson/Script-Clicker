import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import "./index.css";
import reducer from "./reducers/index";
import NavFooter from "./components/NavigationFooter";
import registerServiceWorker from "./registerServiceWorker";
import EncounterDisplay from "./components/encounterDisplay";
import Login from "./components/Login";
import Register from "./components/Register";
import LoginRedirect from "./components/LoginRedirect";
import thunk from "redux-thunk";
import verify  from "./actions/verification-action.js";

const composeEnhancers = compose;
const store = createStore(reducer,composeEnhancers(
  applyMiddleware(thunk)
));

let reactAppReduxStore =
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route>
          <main className="main">
            <LoginRedirect/>
            <NavFooter/>
            <Route exact path="/main" component={EncounterDisplay}/>
          </main>
        </Route>
      </Switch>
    </Router>
  </Provider>;

ReactDOM.render( reactAppReduxStore, document.getElementById("root"));

window.addEventListener("DOMContentLoaded", async () => {
  let token = localStorage.getItem("authorization");
  if (token !== null) {
    store.dispatch(verify("start",token));
  }
});

registerServiceWorker();
