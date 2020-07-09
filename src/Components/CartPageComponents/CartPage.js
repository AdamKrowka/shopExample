import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import { connect } from "react-redux";
import NavBar from "../ProductPageComponents/Navbar.js";
import ProductList from "./ProductList.js";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  nav: {
    flexGrow: 0,
  },
  content: {
    flexGrow: 1,
  },
}));
const CartPage = ({ cart }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <NavBar className={classes.nav} />
      <Container maxWidth="md">
        <h1>Your Cart:</h1>
        <ProductList />
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({ cart: state.cart });
export default connect(mapStateToProps)(CartPage);
