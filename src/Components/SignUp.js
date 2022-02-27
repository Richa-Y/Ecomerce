import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions/posts";
class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      emai: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleEmail = (e) => {
    this.setState({
      name: e.target.Value,
    });
  };
  handlePassword = (e) => {
    this.setState({
      password: e.target.Value,
    });
  };
  handleName = (e) => {
    this.setState({
      name: e.target.Value,
    });
  };
  handleConfirm = (e) => {
    this.setState({
      confirmPassword: e.target.Value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, password, email, confirmPassword } = this.state;
    this.props.dispatch(signup(name, email, password, confirmPassword));
  };
  render() {
    return (
      <div>
        <div className="main">
          <div className="main-field"> SIGN UP </div>
          <div className="main-input">
            <input
              type="text"
              placeholder="Name"
              onChange={this.handleName}
            ></input>
          </div>
          <div className="main-input">
            <input
              type="email"
              placeholder="Email"
              onChange={this.handleEmail}
            ></input>
          </div>
          <div className="main-input">
            <input
              type="password"
              placeholder="Password"
              onChange={this.handlePassword}
            ></input>
          </div>
          <div className="main-input">
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={this.handleConfirm}
            ></input>
          </div>
          {/* <div className="signup-btn"> */}
          <button type="btn" className="signup-btn" onClick={this.handleSubmit}>
            Sign Up
          </button>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(SignUp);
