import React from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";

let loginButton = ({history, location:{pathname:path} }) => {
  return (<button type="button" onClick={
    () => {
      history.replace("/login",{state:{prevPath:path}});
    }
  }>Login</button>)
};

loginButton.propTypes = {
  history:PropTypes.object.isRequired,
  location:PropTypes.object.isRequired
};

export default withRouter(loginButton);
