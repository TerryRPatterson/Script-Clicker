import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchToken } from "../lib/api-calls";
import { addUserToStore } from "../actions/index";
import PropTypes from "prop-types";

let LoginWrapper = ({ addUserToStore,history, location:{state:prevPath} }) => {

  let userCredentials = {};

  let handleSubmit = event => {
    event.preventDefault();
    if(userCredentials.email && userCredentials.password) {
      fetchToken(userCredentials)
        .then(res => res.json())
        .then(userDetails => {
          if(userDetails.token) {
            localStorage.setItem("authorization", userDetails.token);
            addUserToStore(userDetails);
            if (prevPath !== undefined ) {
              history.replace(prevPath);
            } else {
              history.replace("/home");
            }
          } else {
            alert("Can't log you in");
          }
        });
    } else {
      alert("Enter valid Email or Password");
    }
  };

  let readEmail = event => {
    userCredentials.email = event.target.value;
  };

  let readPassword = event => {
    userCredentials.password = event.target.value;
  };


  return (
    <div className="login">
      <div className="login-title">
        <h1>Request Quest RPG</h1>
      </div>
      <div className="login-form">
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" name="email" onChange={readEmail} placeholder="email" />
          <input type="password" name="password" onChange={readPassword} placeholder="password" />
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
      <div className="login-register">
        <p>New User? Please&nbsp;
          <Link to={"/register"} replace>Register</Link>&nbsp;here
        </p>
      </div>
    </div>
  );
};

LoginWrapper.propTypes = {
  addUserToStore:PropTypes.func.isRequired,
  location:PropTypes.object.isRequired,
  history:PropTypes.object.isRequired
};

let mapDispatchToProps = dispatch =>  ({ addUserToStore: (userDetails) => dispatch(addUserToStore(userDetails)) });

let Login = connect(null, mapDispatchToProps)(LoginWrapper);

export default Login;
