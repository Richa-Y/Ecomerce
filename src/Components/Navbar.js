import react, { Component } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
class Navbar extends react.Component {
  render() {
   
    // const { isLoggedin } = this.props.posts;
    const { totalPrice } = this.props.data;
   
    return (
      <div>
        <div className="nav">
          <Link to="/Official">
            <div className="nav-left">eCommerse</div>
          </Link>
          <div className="nav-middle">
            <img
              src="https://image.flaticon.com/icons/png/512/149/149852.png"
              alt="search"
            />
            <input></input>
          </div>
          <div className="nav-right">
            <img
              className="flag"
              src="https://image.flaticon.com/icons/png/512/555/555417.png"
            />
            {/* <button className="btnnnn" onClick={this.handleShow}>
            
              ADD Item
            </button> */}
            {/* {isLoggedin ? (
              <img
                className="flag"
                src="https://image.flaticon.com/icons/png/512/2920/2920072.png"
              />
            ) : null}
            {isLoggedin ? (
              <button className="btnnnn"> SignOut </button>
            ) : (
              <Link to="/Choice">
                <button className="btnnnn"> SignIn </button>
              </Link>
            )} */}
            <Link to="/WishListed">
              <div class="ww">
                <img src="https://cdn-icons-png.flaticon.com/128/833/833472.png" />
              </div>
            </Link>
            <Link to="/CartComponent">
              <div className="cartttt">
                <div className="cart-noooo">{totalPrice} </div>
                <img src="https://cdn-icons.flaticon.com/png/128/2838/premium/2838838.png?token=exp=1645958948~hmac=775eee0c41e20bbc4afeca9b0af96eb5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
    data: state.data,
  };
}

export default connect(mapStateToProps)(Navbar);
