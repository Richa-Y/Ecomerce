import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import { addtoWishlist } from "../actions/data";
import { addCart, removeWish } from "../actions/data";
class WishListed extends React.Component {
  constructor(props) {
    super();
  }

  checkStatusOfProduct = (product) => {
    const { WishList } = this.props.data;
    console.log("productttttttt to add in a list", product);
    for (let i of WishList) {
      if (i.id == product.id) return false;
    }

    return true;
  };
  handleClick = (item) => {
    // this.props.dispatch(addCart(item));
    this.props.dispatch(removeWish(item));
  };
  render() {
    const { WishList } = this.props.data;
    console.log("wishlistttt", WishList);

    return (
      <div>
        <div class="container mt-5">
          <h3> My WishList({WishList.length})</h3>
          <div class="row row-cols-1 row-cols-md-3  mt-5">
            {WishList.map((item, key) => (
              <div class="col">
                <div class="card h-100 fashion-next">
                  <img src={item.img} class="card-img-top h-100" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title text-center price-detail2 ">
                      {item.name}
                    </h5>
                    <h5 class="card-title text-center price-detail">
                      {item.extra}
                    </h5>
                    <h6 class="card-title text-center">
                      {" "}
                      Rs {item.Price}{" "}
                      <span className="actual-price">
                        {" "}
                        (Rs{item.ActualPrice})
                      </span>
                      <span className="price-off"> {item.OFF}</span>
                    </h6>
                    <div class="mt-5">
                      <button
                        type="btn"
                        class="add-cart-button text-center"
                        onClick={() => this.handleClick(item)}
                      >
                        MOVE TO BAG
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps)(WishListed);
