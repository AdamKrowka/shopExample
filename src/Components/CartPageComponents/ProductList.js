import React from "react";
import { Container } from "@material-ui/core";
import ProductElement from "./ProductElement.js";
import { connect } from "react-redux";
const ProductList = ({ cart }) => {
  const ProductList = cart.map((cartElement, index) => (
    <ProductElement
      key={index}
      index={index}
      product={cartElement.product}
      amount={cartElement.amount}
    ></ProductElement>
  ));
  return (
    <Container maxWidth="md">
      {ProductList.length ? ProductList : <div>Cart is empty</div>}
    </Container>
  );
};

const mapStateToProps = (state) => ({ cart: state.cart });

export default connect(mapStateToProps)(ProductList);
