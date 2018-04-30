import React from "react";
import Login from "./components/Login";
import {
  HashRouter as Router, 
  Route
} from "react-router-dom";

let Routes = () => 
  <Router>
    <div>
      <Route exact path="/login" component={Login} />          
    </div>
  </Router>

export default Routes;