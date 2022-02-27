import react, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";

import "owl.carousel/dist/assets/owl.theme.default.min.css";

import { fetchPosts } from "../actions/data.js";
class Official extends react.Component {
  constructor(props) {
    super();
    //   // this.state = {
    //   //   Quantity: 0,
    //   // };
    this.state = {
      Quantity: 0,
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
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { data } = this.props;
    console.log("propsssss data", data);
    return (
      <div>
        <div class="container-fluid choice-top">
          <div class="choice-top-option">
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" />
            <Link to="/Fashion">
              <div class="text-center"> Mobiles </div>
            </Link>
          </div>
          <div class="choice-top-option">
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" />
            <Link to="/Fashion">
              <div class="text-center"> Fashion </div>
            </Link>
          </div>
          <div class="choice-top-option">
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" />
            <Link to="/Fashion">
              <div class="text-center"> Grocery</div>
            </Link>
          </div>
          <div class="choice-top-option">
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" />
            <Link to="/Fashion">
              <div class="text-center"> Electronics </div>
            </Link>
          </div>
          <div class="choice-top-option">
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" />
            <Link to="/Fashion">
              <div class="text-center"> Home</div>
            </Link>
          </div>
          <div class="choice-top-option">
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" />
            <Link to="/Fashion">
              <div class="text-center"> Beauty,Toys</div>
            </Link>
          </div>
          <div class="choice-top-option">
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" />
            <Link to="/Fashion">
              <div class="text-center"> Appliances</div>
            </Link>
          </div>
        </div>

        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/25/0eee9542-8eb8-4470-b09c-7a313962afb71621944592448-Nautica.jpg"
                class="d-block w-100"
                alt="..."
                height="300px"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/8/8e4588c1-6f55-4b46-bfcb-1f7b104cc0d71625755520545-Weekend-sale_DK-2.jpg"
                class="d-block w-100"
                alt="..."
                height="300px"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/25/bdc7677a-5570-42b5-9fbd-dfd4f7921aaa1621944361743-Sangria_Desk_Banner.jpg"
                class="d-block w-100"
                alt="..."
                height="300px"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/25/971e9cfd-7eea-4a4a-8204-fef5cb45cc3c1621944517212-H-M_Desk_Banner.jpg"
                class="d-block w-100"
                alt="..."
                height="300px"
              />
            </div>

            <div class="carousel-item">
              <img
                src="https://img.global.news.samsung.com/in/wp-content/uploads/2018/07/Refrigerator-Feature-e1531905795849.jpg"
                class="d-block w-100"
                alt="..."
                height="300px"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="container-fluid girls-section">
          <div>
            {" "}
            <h1>Best Price on Fashion </h1>
          </div>
          <OwlCarousel
            className="owl-theme"
            items={6}
            margin={30}
            autoplay={true}
            responsive={this.state.responsive}
          >
            <div className="girls-owl-section">
              <img
                className="img"
                src={
                  "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJlc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                }
                height="200px"
              />
              <div class="text-center"> Dresses </div>
            </div>

            <div className="girls-owl-section">
              <img
                className="img"
                src={
                  "https://cdn.shopify.com/s/files/1/1816/6561/products/Resize3_5701a1bf-8322-4c99-b1dd-1e1704e66474_large.jpg?v=1596720286"
                }
                height="200px"
              />
              <div class="text-center"> Tops </div>
            </div>

            <div className="girls-owl-section">
              <img
                className="img"
                src={
                  "https://i.pinimg.com/564x/9e/2b/93/9e2b935371cb1c547e6a941d1df0c51f.jpg"
                }
                height="200px"
              />
              <div class="text-center"> Wedding Gown </div>
            </div>

            <div className="girls-owl-section">
              <img
                className="img"
                src={
                  "data:image/jpeg;base64,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"
                }
                height="200px"
              />
              <div class="text-center"> Party Dresses </div>
            </div>

            <div className="girls-owl-section">
              <img
                className="img"
                src={
                  "https://5.imimg.com/data5/ANDROID/Default/2020/8/JR/QP/LN/25928728/product-jpeg-500x500.jpg"
                }
                height="200px"
              />
              <div class="text-center"> Silk Sarees</div>
            </div>

            <div className="girls-owl-section">
              <img
                className="img"
                src={
                  "https://cdn1.ninecolours.com/image/cache/products-2018/March/Youdesign-French-Crepe-Gown-In-Maroon-Colour-YD2670964-A-1200x1799.jpg"
                }
                height="200px"
              />
              <div class="text-center"> Long Dresses </div>
            </div>
            <div className="girls-owl-section">
              <img
                className="img"
                src={
                  "https://assets.vogue.com/photos/5f64e2366564e9d62d3b1a5b/master/w_1600%2Cc_limit/0517-VO-WELL79-01.jpg"
                }
                height="200px"
              />
              <div class="text-center"> Maxi Dresses </div>
            </div>
          </OwlCarousel>
        </div>

        <div class="container-fluid girls-section">
          <div>
            {" "}
            <h1>Deals of the Day </h1>
          </div>
          <OwlCarousel
            className="owl-theme"
            items={6}
            margin={30}
            autoplay={true}
            responsive={this.state.responsive}
          >
            <div className="girls-owl-section">
              <img
                className="img"
                src={
                  "https://rukminim1.flixcart.com/image/150/150/ke7ff680/hammock-swing/j/f/u/q3-jkaf-y3l0-furniture-kart-original-imafux96kpy7grch.jpeg?q=70"
                }
                height="200px"
              />
              <div class="text-center"> Hammock and Swings </div>
            </div>

            <div className="girls-owl-section">
              <img
                className="img"
                src={
                  "https://rukminim1.flixcart.com/image/150/150/k4bms280/shoe-rack/3/x/7/4-5-layer-utility-cloth-cabinet-shoe-rack-organiser-parasnath-original-imafn8ng4gtzhcmf.jpeg?q=70"
                }
                height="200px"
              />
              <div class="text-center"> Shoe Rack </div>
            </div>
            <div className="girls-owl-section">
              <img
                className="img"
                src={
                  "https://img.zcdn.com.au/lf/50/hash/37534/19039443/4/Dark+Blue+High+Back+Fabric+Armchair.jpg"
                }
                height="200px"
              />
              <div class="text-center"> Chair </div>
            </div>

            <div className="girls-owl-section">
              <img
                className="img"
                src={
                  "https://rukminim1.flixcart.com/image/150/150/j7f2qvk0/tv-entertainment-unit/4/x/e/particle-board-etvfwwen0063p-perfect-homes-by-flipkart-wenge-original-imaexjepxxxakrgt.jpeg?q=70"
                }
                height="200px"
              />
              <div class="text-center"> Top 20 Tv Units </div>
            </div>

            <div className="girls-owl-section">
              <img
                className="img"
                src={
                  "https://rukminim1.flixcart.com/flap/150/150/image/d922807ba00a5cff.jpg?q=70"
                }
                height="200px"
              />
              <div class="text-center"> Jewellery Set </div>
            </div>

            <div className="girls-owl-section">
              <img
                className="img"
                src={
                  "https://rukminim1.flixcart.com/image/150/150/klicfww0/slipper-flip-flop/l/p/i/6-cn9675-002nike-nike-black-white-black-original-imagymeqtprn7qvv.jpeg?q=70"
                }
                height="200px"
              />
              <div class="text-center">Nike</div>
            </div>
            <div className="girls-owl-section">
              <img
                className="img"
                src={
                  "https://rukminim1.flixcart.com/image/150/150/kekadu80/hammock-swing/d/t/k/fc-sj-01-furniture-kart-original-imafv7bh7v349hhh.jpeg?q=70"
                }
                height="200px"
              />
              <div class="text-center">Hammock & Swings</div>
            </div>
          </OwlCarousel>
        </div>

        <div class="container-fluid offers">
          <div className="offers-1">
            <h4 class="text-center">
              Up to 45% off | Top offers from Amazon Brand...{" "}
            </h4>
            <div>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugw/xcm_banners_solimo_379x304_379x304_in-en._SY304_CB663888948_.jpg" />
            </div>
            {/* <div class="text-center shop"> Shop Now</div> */}
          </div>
          <div className="offers-1">
            <h4 class="text-center">Up to 50% off | Chimneys. </h4>
            <div>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/Chimney_GW_CC_379x304._SY304_CB427965740_.jpg" />
            </div>
            {/* <div class="text-center shop"> Shop Now</div> */}
          </div>
          <div className="offers-1">
            <h4 class="text-center">Celebrate World Chocolate Day </h4>
            <div>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Chocolate-Day/GW/PC_CC_1x._SY304_CB665842742_.jpg" />
            </div>{" "}
            {/* <div class="text-center shop"> Shop Now</div> */}
          </div>
          <div className="offers-2">
            <h4 class="text-center">At home Grooming & Wellness devices</h4>

            <div class="row">
              <div class="col-md-6">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/2_1x._SY116_CB664832134_.jpg"
                  width="100%"
                />
                <div class="text-center"> Men's groom</div>
              </div>
              <div class="col-md-6">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/3_1x._SY116_CB664832134_.jpg"
                  width="100%"
                />
                <div class="text-center"> Women's groom</div>
              </div>
              <div class="col-md-6">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/4_1x._SY116_CB664832134_.jpg"
                  width="100%"
                />
                <div class="text-center"> Healthcare Device</div>
              </div>
              <div class="col-md-6 nutri">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/1_1x._SY116_CB664832134_.jpg"
                  width="100%"
                />
                <div class="text-center"> Massagers</div>
              </div>
              {/* <div class="text-center shop"> Shop Now</div> */}
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <h2 class="trending"> TRENDING IN FOOTWEAR</h2>
          <div class="row footo">
            <div class="col-md-3 mt-3">
              <img
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                width="100%"
              />
            </div>
            <div class="col-md-3 mt-3">
              <div class="footwear">
                <div>
                  <img
                    src="https://sc04.alicdn.com/kf/HTB1wcJJbdjvK1RjSspiq6AEqXXaL.jpg"
                    width="100%"
                  />
                  <img
                    src="https://i.pinimg.com/originals/d4/40/fc/d440fc6095cb55f3fd203f94751e71e0.jpg"
                    width="100%"
                  />
                </div>
                <div>
                  <img
                    src="https://i.pinimg.com/originals/d4/40/fc/d440fc6095cb55f3fd203f94751e71e0.jpg"
                    width="100%"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0132/9928/6116/products/product-image-907485998_6019dec9-b16e-48fc-b0cf-42ac8c93dd88_300x300.jpg?v=1575480348"
                    width="100%"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-3 mt-3">
              <div class="footwear">
                <div>
                  <img
                    src="https://ae01.alicdn.com/kf/H26dd7aa0ea194131b246363f47566fcaH/2019-Women-Flat-Slippers-Summer-Casual-Flip-Flops-Crystal-Woman-Shoes-Girls-Comfortable-Female-Footwear-Outside.jpg_Q90.jpg_.webp"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div>
                  <img
                    src="https://ae01.alicdn.com/kf/HTB1o5owaN2rK1RkSnhJq6ykdpXa0/Summer-new-girls-sandals-candy-color-children-shoes-girls-shoes-princess-shoes-fashion-girls-sandals-kids.jpg"
                    width="100%"
                  />
                  <img
                    src="https://i.pinimg.com/originals/02/53/8a/02538ab6a8c2830ae10127b7e30b30a0.jpg"
                    width="100%"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-3 mt-3">
              <img
                src="https://ae01.alicdn.com/kf/HTB1bdMKM5LaK1RjSZFxq6ymPFXax/Flowers-Girls-Sandals-2019-Beach-Children-S-Shoes-Princess-Kids-Sandals-Summer-Shoes-Girl-High-Heels.jpg"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Mobile.propTypes = {
//   posts: PropTypes.array.isRequired,
// };
function mapStateToProps(state) {
  return {
    posts: state.posts,
    data: state.data,
  };
}

export default connect(mapStateToProps)(Official);
