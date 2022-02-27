import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";

import "owl.carousel/dist/assets/owl.theme.default.min.css";
// import FashionData from "./FashionData.js";
class Fashion extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   Qty: "1",
    // };
  }

  //  "img1":"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/5/24/6e83aef4-1869-41fc-81db-3056c915baae1621875449176-3.jpg",
  //        "img2":"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/5/24/39f9a801-b120-4c14-a4ba-f797e15ae4741621875449198-4.jpg",

  render() {
    // const { data } = this.props;
    const { list } = this.props.data;
    console.log("list ", list);
    return (
      <div>
        <div class="container mt-5">
          <div class="row row-cols-1 row-cols-md-4 g-4">
            {list.map((dataa, key) => (
              // <FashionData fashionimg={dataa} />
              <div class="col">
                <div class="card h-100 fashion-next">
                
                  <Link
                    to={{
                      pathname: "/FullData",
                      aboutProps: dataa,
                      key: dataa.id,
                    }}
                  >
                    <img src={dataa.img} class="card-img-top h-100" alt="..." />

                 
                  </Link>
                  <div class="card-body">
                    <h5 class="card-title text-center price-detail2 ">
                      {dataa.name}
                    </h5>
                    <h5 class="card-title text-center price-detail">
                      {dataa.extra}
                    </h5>
                    <h6 class="card-title text-center">
                      {" "}
                      Rs {dataa.Price}{" "}
                      <span className="actual-price">
                        {" "}
                        (Rs{dataa.ActualPrice})
                      </span>
                      <span className="price-off"> {dataa.OFF}</span>
                    </h6>
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

export default connect(mapStateToProps)(Fashion);
