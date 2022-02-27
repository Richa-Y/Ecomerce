// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Link, Route, Switch } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";

// class FashionData extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     const { fashionimg } = this.props;
//     console.log("second", fashionimg);
//     return (
//       <div class="col">
//         <div class="card h-100 fashion-next">
//           <Link
//             to={{
//               pathname: "/FullData",
//               aboutProps: {
//                 name: "information was clicked from other page",
//                 second: `${fashionimg.Price}`,
//                 sec: `${fashionimg.img}`,
//                 se: `${fashionimg.extra}`,
//                 third: `${fashionimg}`,
//               },
//             }}
//           >
//             <img src={fashionimg.img} class="card-img-top h-100" alt="..." />
//           </Link>
//           <div class="card-body">
//             <h5 class="card-title text-center price-detail2 ">
//               {fashionimg.name}
//             </h5>
//             <h5 class="card-title text-center price-detail">
//               {fashionimg.extra}
//             </h5>
//             <h6 class="card-title text-center">
//               {" "}
//               Rs {fashionimg.Price}{" "}
//               <span className="price-off"> (50% OFF)</span>
//             </h6>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// // function mapStateToProps(state) {
// //   return {
// //     data: state.data,
// //   };
// // }

// // export default connect(mapStateToProps)(Fashion);
// export default FashionData;
