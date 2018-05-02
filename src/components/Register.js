import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../lib/api-calls";
import { addUserToStore } from "../actions/index";
import PropTypes from "prop-types";

import "./userControlPages.css";
import "./Login.css"

let RegisterUserWrapper =
  ({ addUserToStore, location:{state:prevPath}, history}) => {

    let userCredentials = {};

    let handleSubmit = event => {
      event.preventDefault();
      if(userCredentials.email && userCredentials.password) {
        registerUser(userCredentials)
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

    let readUserName = event => {
      userCredentials.username = event.target.value;
    };

    let readEmail = event => {
      userCredentials.email = event.target.value;
    };

    let readPassword = event => {
      userCredentials.password = event.target.value;
    };

    return (
      <div className="register">
        <div>
          <h1>Register New User</h1>
        </div>
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={readUserName} placeholder="username"/>
            <input type="text" name="email" onChange={readEmail} placeholder="email"/>
            <input type="password" name="password" onChange={readPassword} placeholder="password"/>
            <input className="submit" type="submit" value="Submit" />
          </form>
        </div>
        <div>
          <p>Already have an Account? Please&nbsp;
            <Link to={"/login"} replace>Login</Link>&nbsp;here
          </p>
        </div>
      </div>
    );
  };

RegisterUserWrapper.propTypes = {
  addUserToStore:PropTypes.func.isRequired,
  location:PropTypes.object.isRequired,
  history:PropTypes.object.isRequired
};

let mapStateToProps = (state, props) => ({ state, props });

let mapDispatchToProps = dispatch =>  ({ addUserToStore: (userDetails) => dispatch(addUserToStore(userDetails)) });

let Register = connect(mapStateToProps, mapDispatchToProps)(RegisterUserWrapper);

export default Register;
