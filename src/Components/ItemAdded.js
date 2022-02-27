
import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/posts";
import { Container, Row, Col, Modal, Form,Button } from "react-bootstrap";
class ItemAdded extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      phone: "",
      name: "",
      details: "",
      price: "",
      actualprice: "",
      productdetails: "",
      material: "",
      ratings: "",
    };
  }
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleDetails = (e) => {
    this.setState({
      details: e.target.value,
    });
  };
  handlephone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  handlePrice = (e) => {
    this.setState({
      price: e.target.value,
    });
  };
  handleActualPrice = (e) => {
    this.setState({
      actualprice: e.target.value,
    });
  };
  handleProductDetails = (e) => {
    this.setState({
      productdetails: e.target.value,
    });
  };
  handleMaterial = (e) => {
    this.setState({
      material: e.target.value,
    });
  };
  handleRatings = (e) => {
    this.setState({
      ratings: e.target.value,
    });
  };
    handleSave = (e) => {
      console.log("abcdef")
   console.log(
     this.state.name,
     this.state.material,
     this.state.details,
     this.state.price
   );
  };
  render() {
    const { modalIsOpen } = this.state;

    return (
      <div className="login-form22">
        <span className="login-signup-header">Add Items In a Cart</span>

        <Form
          encType="multipart/form-data"
          method="post"
          name="fileinfo"
          autocomplete="off"
        >
          <br></br>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalInputType"
          >
            <Form.Label column="sm" lg={5}>
              Name
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="name"
                size="sm"
                onChange={this.handleName}
                value={this.state.name}
              ></Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCrop">
            <Form.Label column="sm" lg={5}>
              Details
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                autocomplete="nope"
                size="sm"
                type="text"
                name="email"
                onChange={this.handleDetails}
                value={this.state.details}
              />
            </Col>
          </Form.Group>

        
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalBrand">
            <Form.Label column="sm" lg={5}>
              Price
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                size="sm"
                type="text"
                name="city"
                onChange={this.handlePrice}
                value={this.state.price}
              ></Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalBrand">
            <Form.Label column="sm" lg={5}>
              Actual Price
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                size="sm"
                type="text"
                name="street"
                onChange={this.handleActualPrice}
                value={this.state.actualprice}
              ></Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalBrand">
            <Form.Label
              column="sm"
              lg={5}
              className="dvaraBrownText formWeight"
            >
              Product Details
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                size="sm"
                type="text"
                name="zip"
                onChange={this.handleProductDetails}
                value={this.state.productdetails}
              ></Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalBrand">
            <Form.Label
              column="sm"
              lg={5}
              className="dvaraBrownText formWeight"
            >
              Material
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                size="sm"
                type="text"
                name="company"
                onChange={this.handleMaterial}
                value={this.state.material}
              ></Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalBrand">
            <Form.Label
              column="sm"
              lg={5}
              className="dvaraBrownText formWeight"
            >
              Ratings and Reviews
            </Form.Label>
            <Col sm={2}>
              <Form.Control
                size="sm"
                type="text"
                onChange={this.handleRatings}
                value={this.state.ratings}
              ></Form.Control>
            </Col>
            <Col sm={2}>
              <Form.Control size="sm" type="text"></Form.Control>
            </Col>
          </Form.Group>
          <Button style={{ float: "right" }} onClick={this.handleSave}>
            Save Changes
          </Button>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(ItemAdded);
