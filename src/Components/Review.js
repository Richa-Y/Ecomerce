import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";

class Review extends React.Component {
  constructor(props) {
    super();
    this.state = {
      review: "",
    };
  }

  render() {
    const { review } = this.props.data;
    console.log("review", review);

    return (
      <div>
        <ul>
          {review.map((rev, index) => (
            <li class="mt-4">
              <span class="rating-star">
                {/* {aboutProps.ratings} */}
                <span class="mx-1">
                  <img src="https://image.flaticon.com/icons/png/512/1828/1828884.png" />
                </span>
              </span>
              <span class="mx-3">{rev}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps)(Review);
