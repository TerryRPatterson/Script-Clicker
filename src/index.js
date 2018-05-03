import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import "./index.css";
import reducer from "./reducers/index";
import NavFooter from "./components/NavigationFooter";
import registerServiceWorker from "./registerServiceWorker";
import Login from "./components/Login";
import Register from "./components/Register";
import LoginRedirect from "./components/LoginRedirect";
import thunk from "redux-thunk";
import {verify}  from "./actions"

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  && applyMiddleware(thunk));

let reactAppReduxStore =
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route>
          <main className="main">
            <LoginRedirect/>
            <Route exact path="/main" component={NavFooter}/>
            <NavFooter/>
          </main>
        </Route>
      </Switch>
    </Router>
  </Provider>;

ReactDOM.render( reactAppReduxStore, document.getElementById("root"));

window.addEventListener("load", () => {
  let token = localStorage.getItem("authorization");
  if (token !== null) {
    store.dispatch(verify("start",token));
  }
});

registerServiceWorker();
