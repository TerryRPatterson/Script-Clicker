import React from "react";
import PropTypes from "prop-types";
import {withRouter, Redirect} from "react-router-dom";

let loginRedirect = ({location:{pathname:path} }) => {
  if (localStorage.getItem("authorization") === null) {
    return <Redirect to={{pathname:"/login",
      state:{prevPath:path}}}/>
    }
  else {return null;}

}
loginRedirect.propTypes = {
  location:PropTypes.object.isRequired
};

export default withRouter(loginRedirect);
