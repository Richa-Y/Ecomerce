import react, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import Navbar from "./Navbar";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
// import Choice from "./Choice";
import Official from "./Official";
import Fashion from "./Fashion";
import Electronics from "./Electronics";
import Fulldata from "./Fulldata";
import CartComponent from "./CartComponent";
import WishListed from "./WishListed";
import ItemAdded from "./ItemAdded";
import "bootstrap/dist/css/bootstrap.min.css";

import { fetchPosts } from "../actions/data.js";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends react.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     Quantity: 0,
  //   };
  // }
  // handleIncrease = () => {
  //   const { Quantity } = this.state;
  //   console.log("aa");
  //   this.setState({
  //     Quantity: Quantity + 1,
  //   });
  // };
  // handleDecrease = () => {
  //   const { Quantity } = this.state;
  //   console.log("aa");
  //   if (Quantity <= 0) {
  //     return;
  //   }
  //   this.setState({
  //     Quantity: Quantity - 1,
  //   });
  // };
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    const { posts, data } = this.props;
    // console.log("postsjjjj", posts);
    // console.log("clothjjjj", data);
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/Fulldata" component={Fulldata} />
            {/* <Route path="/Choice" component={Choice} /> */}
            {/* <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} /> */}
            <Route path="/Fashion" component={Fashion} />
            <Route path="/CartComponent" component={CartComponent} />
            <Route path="/WishListed" component={WishListed} />
            <Route path="/ItemAdded" component={ItemAdded} />
            <Route path="/" component={Official} />
          </Switch>
        </div>
      </Router>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
    data: state.data,
  };
}

export default connect(mapStateToProps)(App);
