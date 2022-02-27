import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import { addCart } from "../actions/data";
import { reviewProduct, addtoWishlist } from "../actions/data";
import OwlCarousel from "react-owl-carousel";
import Review from "./Review";
import "owl.carousel/dist/assets/owl.carousel.css";

import "owl.carousel/dist/assets/owl.theme.default.min.css";
class Fulldata extends React.Component {
  constructor(props) {
    super();
    this.state = {
      Quantity: 0,
      review: "",
      responsive: {
        0: {
          items: 1,
        },
        450: {
          items: 2,
        },
        600: {
          items: 3,
        },
        800: {
          items: 4,
        },
        1000: {
          items: 5,
        },
        1115: {
          items: 6,
        },
      },
    };
  }
  addToCart = (aboutProps) => {
    this.props.dispatch(addCart(aboutProps));
    // console.log("adding in cart", aboutProps);
  };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      review: e.target.value,
    });
  };
  handleClick = () => {
    console.log("this.state.review,", this.state.review);
    this.props.dispatch(reviewProduct(this.state.review));
  };
  AddToWishlist = (item) => {
    console.log("wish");
    this.props.dispatch(addtoWishlist(item));
  };
  render() {
    const { aboutProps, key } = this.props.location;
    const { review, WishList } = this.props.data;
    console.log("review", review);
    console.log("full Wishlist", WishList);
    console.log("key", key);
    // const { dataa } = this.props.location.aboutProps;
    // console.log("items in cart", this.props.data.ShowCart);
    // console.log("price", this.props.data.totalPrice);
    // console.log("aboutProps", aboutProps);
    // console.log("key", key);
    // console.log("quantity", aboutProps.Quantity);
    // const { key, imgg, name, extra } = this.props.location.aboutProps;
    // console.log("my full", this.props.location.aboutProps);
    // console.log("overall", this.props.data);
    // console.log("name", this.props.location.aboutProps);

    return (
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4 fashion-big-image">
            <div class="fashion-big">
              {/* <img src={aboutProps.img} width="100%" /> */}

              <OwlCarousel
                className="owl-theme"
                items={1}
                margin={30}
                autoplay={true}
              >
                <div>
                  <img src={aboutProps.img} width="100%" />
                </div>
                <div>
                  <img src={aboutProps.img1} width="100%" />
                </div>
                <div>
                  <img src={aboutProps.img2} width="100%" />
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div class="col-md-6 ">
            <h1 className="price-detail2">{aboutProps.name}</h1>
            <h2 className="price-detail">{aboutProps.extra}</h2>
            <h2>
              {" "}
              Rs {aboutProps.Price}{" "}
              <span className="actual-price">Rs. {aboutProps.ActualPrice}</span>
              <span>{aboutProps.OFF}</span>
            </h2>
            {/* <div>
              {aboutProps.ratings} <span>{aboutProps.reviews}</span>
            </div> */}
            <div class="rating mt-3">
              <div class="rating-value">
                4.1{" "}
                <img src="https://image.flaticon.com/icons/png/512/1828/1828884.png" />
              </div>
              <div class="rating-review mx-3">
                2,595 ratings and 386 reviews
              </div>
            </div>
            <h5 class=" mt-5"> Product Details : </h5>
            <p>{aboutProps.details}</p>
            <p> Material : {aboutProps.Material}</p>
            <div className="cart-button">
              <button
                type="button"
                class="btn-lg mx-3 add-cart-button"
                onClick={() => {
                  this.addToCart(aboutProps);
                }}
              >
                <img src="https://image.flaticon.com/icons/png/128/891/891581.png" />
                <span> ADD TO CART </span>
              </button>

              <button
                type="button"
                class="btn-lg wishlist-button"
                onClick={() => {
                  this.AddToWishlist(aboutProps);
                }}
              >
                <img src="https://cdn-icons-png.flaticon.com/128/833/833472.png" />{" "}
                WISHLIST
              </button>
            </div>
          </div>
          <div class=" row mt-5">
            <div class="ratingg mt-3">
              <div class="ratings-heading">Ratings & Reviews</div>
              <div>
                <span class="rating-value">
                  {aboutProps.ratings}
                  <img src="https://image.flaticon.com/icons/png/512/1828/1828884.png" />
                </span>
                <span class="rating-review mx-1">{aboutProps.reviews}</span>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Review"
                  value={this.state.review}
                  onChange={this.handleChange}
                />
                <button
                  type="btn"
                  class="rating-button"
                  onClick={this.handleClick}
                >
                  Rate Product
                </button>
              </div>
            </div>

            <ul class="mt-3">
              <li>
                <span class="rating-star">
                  {aboutProps.ratings}
                  <span>
                    {" "}
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828884.png" />
                  </span>
                </span>
                <span class="mx-3">{aboutProps.comment1}</span>
              </li>
              <li class="mt-4">
                <span class="rating-star">
                  {aboutProps.ratings}
                  <span class="mx-1">
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828884.png" />
                  </span>
                </span>
                <span class="mx-3">{aboutProps.comment2}</span>
              </li>
            </ul>
            {review.length != 0 ? (
              // <li class="mt-4">
              //   <span class="rating-star">
              //     {/* {aboutProps.ratings} */}
              //     <span class="mx-1">
              //       <img src="https://image.flaticon.com/icons/png/512/1828/1828884.png" />
              //     </span>
              //   </span>
              //   <span class="mx-3">{review}</span>
              // </li>
              <Review />
            ) : null}
            {/* </ul> */}
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

export default connect(mapStateToProps)(Fulldata);
