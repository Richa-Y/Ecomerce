import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/posts";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleEmail = (e) => {
    console.log(e.target.value);
    this.setState({
      email: e.target.value,
    });
  };
  handlePassword = (e) => {
    console.log(e.target.value);
    this.setState({
      password: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log("abc");
    this.props.dispatch(login(email, password));
  };
  render() {
    const { isLoggedin } = this.props.posts;

    if (isLoggedin) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-form">
        <span className="login-signup-header">Log In</span>

        <div className="field">
          <input
            type="email"
            placeholder="Email"
            onChange={this.handleEmail}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="password"
            required
            onChange={this.handlePassword}
            value={this.state.password}
          />
        </div>
        <div className="field">
          <button onClick={this.handleSubmit}>Log In</button>
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

export default connect(mapStateToProps)(SignIn);
