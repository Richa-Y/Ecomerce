import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import { SignInWithGoogle, signOut } from "../firebase";
class Choice extends React.Component {
  render() {
    return (
      <div>
        <div className="signin-form">
          <h1 className="choice-m">Sign In/ Sign Up</h1>
          <button
            className="btnn basic-btnnnn choice-m"
            onClick={SignInWithGoogle}
          >
            <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png" />
            Sign in with Google
          </button>
          <div className="choice-m">OR</div>
          <Link to="/SignIn">
            <button className="btnn basic-btnnnn choice-m">Sign In</button>
          </Link>
          <div className="choice-m">OR</div>
          <div>
            <Link to="/SignUp">
              <button className="btnn basic-btnnnn choice-m">Register</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Choice;
