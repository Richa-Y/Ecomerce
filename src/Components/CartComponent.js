import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import {
  addCart,
  increaseQty,
  decreaseQty,
  removeProduct,
  addtoWishlist,
} from "../actions/data";
import WishListed from "./WishListed.js";
class CartComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isWish: true,
    };
  }

  increaseQuantity = (item) => {
    item.Quantity = item.Quantity + 1;
    // newPriceInc = item.Quantity * item.Price;
    // console.log(newPriceInc, " newPriceInc");
    // console.log("item.Quantity", item);
    this.props.dispatch(increaseQty(item));
  };
  gettingPrice = (item) => {
    let newPriceInc = 0;
    newPriceInc = item.Quantity * item.Price;
    console.log(newPriceInc, " newPriceInc");
    return newPriceInc;
  };
  decreaseQuantity = (item) => {
    if (item.Quantity <= 1) {
      return;
    }
    console.log("abc");
    item.Quantity = item.Quantity - 1;
    // console.log("item.Quantity", item.Quantity);
    // item.Price = item.Quantity * item.Price;
    // console.log("item.Price", item.Price);
    this.props.dispatch(decreaseQty(item));
  };
  totalAmount = () => {
    const { ShowCart } = this.props.data;
    let total = 0;
    ShowCart.map((product) => {
      total += product.Quantity * product.Price;
    });
    console.log("total", total);
    return total;
  };
  payableAmount = () => {
    let calc = this.totalAmount();
    let calc2 = (20 / 100) * calc;
    calc = calc - calc2;
    let pay = parseInt(40 + 30 + calc);
    return pay;
  };
  pay2 = () => {
    let calc = this.totalAmount();
    let calc2 = (20 / 100) * calc;
    return calc2;
  };

  removeProduct = (item) => {
    console.log("product to be removed");
    this.props.dispatch(removeProduct(item));
  };
  AddToWishlist = (item) => {
    console.log("wish");

    this.props.dispatch(addtoWishlist(item));
  };
  // Wishlisted = (item) => {
  //   console.log("wish");

  //   <Link to="/WishListed"></Link>;
  // };
  checkStatusOfProduct = (product) => {
    const { WishList } = this.props.data;
    console.log("productttttttt to add in a list", product);
    for (let i of WishList) {
      if (i.id == product.id) return false;
    }

    return true;
  };

  render() {
    const { ShowCart, WishList, totalPrice } = this.props.data;
    const { isWish } = this.state;
    console.log("wishlist", WishList);
    // const { OriginalPrice } = this.state;
    // console.log("ShowCart", ShowCart);
    return (
      <div class="overall-box mt-5">
        <div class="first-box mx-3">
          <div>
            <span class="applying-bold">My Cart ({totalPrice}) </span>
            <div class="deliver">
              {" "}
              <img src="https://image.flaticon.com/icons/png/128/2928/2928892.png" />
              Deliver To
              <span class="deliver2">
                {" "}
                <input type="text" placeholder="Enter pincode here"></input>
              </span>
            </div>
          </div>
          {ShowCart.map((item, index) => (
            <div class="row mt-5 new-border">
              <div class="col-3">
                <img src={item.img} alt="..." width="100%" />
              </div>

              <div class="col-9 ">
                <h4>{item.name}</h4>
                <div class="applying-bold2">
                  {item.extra}
                  <div class="applying-bold">₹ {this.gettingPrice(item)} </div>
                </div>
                {/* <div class="applying-bold2"> Quantity :{item.Quantity} </div> */}

                <div class="incdecbox mt-3">
                  <img
                    src="https://image.flaticon.com/icons/png/128/992/992651.png"
                    onClick={() => {
                      this.increaseQuantity(item);
                    }}
                  />
                  <span class="quality-box">{item.Quantity}</span>
                  <img
                    src="https://image.flaticon.com/icons/png/128/992/992683.png"
                    onClick={() => {
                      this.decreaseQuantity(item);
                    }}
                  />
                </div>
                <div class="mt-5">
                  <button
                    type="button"
                    class=" mx-3 add-cart-button"
                    onClick={() => {
                      this.removeProduct(item);
                    }}
                  >
                    REMOVE
                  </button>
                  {this.checkStatusOfProduct(item) ? (
                    <button
                      type="button"
                      class="btn-lg wishlist-button"
                      onClick={() => {
                        this.AddToWishlist(item);
                      }}
                    >
                      <img src="https://image.flaticon.com/icons/png/128/2107/2107845.png" />
                      WISHLIST
                    </button>
                  ) : (
                    <Link to="/WishListed">
                      <button type="button" class="btn-lg wishlist-button">
                        <img src="https://image.flaticon.com/icons/png/128/2107/2107845.png" />
                        WISHLISTED
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="second-box  mx-3">
          <div class="price-details"> PRICE DETAILS</div>
          <div class="mt-3">
            {" "}
            Price ({totalPrice} item ){" "}
            <span class="exit-rs">₹ {this.totalAmount()}</span>
          </div>
          <div>
            {" "}
            Delivery Charges <span class="exit-rs"> ₹ 40</span>{" "}
          </div>
          <div>
            {" "}
            TAX <span class="exit-rs"> ₹ 30 </span>
          </div>
          <div>
            Discount <span class="exit-rs2">- ₹ {this.pay2()}</span>{" "}
          </div>
          <div class="discount mt-3"></div>
          <div class="mt-3 applying-bold">
            TOTAL AMOUNT
            <span class="exit-rs"> ₹ {this.payableAmount()}</span>
          </div>
          <div class="text-center pay2 mt-3">
            {" "}
            You will save ₹ {this.pay2()} on this order
          </div>
          <div class="text-center mt-3">
            <button type="btn" class=" btn-lg pay-button">
              PLACE ORDER
            </button>
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

export default connect(mapStateToProps)(CartComponent);
