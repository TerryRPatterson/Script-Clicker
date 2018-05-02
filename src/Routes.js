import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import {
  BrowserRouter as Router, 
  Route
} from "react-router-dom";

let Routes = () =>
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </div>
  </Router>;

export default Routes;
