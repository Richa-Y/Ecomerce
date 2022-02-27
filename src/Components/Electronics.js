import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/posts";

class Electronics extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="login-form">
        <span className="login-signup-header">Log In</span>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(Electronics);
