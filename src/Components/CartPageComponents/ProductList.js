import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Button, Divider } from "@material-ui/core";
import ProductElement from "./ProductElement.js";
import { connect } from "react-redux";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles((theme) => ({
  arrowBack: {
    color: "white",
  },
  arrowWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
  goBackButton: {
    marginTop: theme.spacing(3),
    color: "white",
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "#222",
    },
  },
  finalPaymentContainer: {
    marginTop: theme.spacing(4),
    width: "100%",
  },
  totalCost: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
}));

const ProductList = ({ cart }) => {
  const [total, setTotal] = useState(0);
  const classes = useStyles();
  const history = useHistory();
  const handleGoBack = () => {
    history.push("/");
  };

  const ProductList = cart.map((cartElement, index) => {
    return (
      <ProductElement
        key={index}
        index={index}
        product={cartElement.product}
        amount={cartElement.amount}
      ></ProductElement>
    );
  });

  const totalCost = cart
    .reduce(
      (acc, item) =>
        Math.round(+item.product.price.substring(1) * item.amount * 100) / 100 +
        acc,
      0
    )
    .toLocaleString("en", { useGrouping: true });
  return (
    <Container maxWidth="md">
      {ProductList.length ? (
        <>
          {ProductList}
          <Container maxWidth="sm" className={classes.finalPaymentContainer}>
            <div className={classes.totalCost}>
              <div>Item ({cart.length}) </div>
              <div>${totalCost}</div>
            </div>
            ,
            <div className={classes.totalCost}>
              <div>Shipping</div>
              <div>Free</div>
            </div>
            <Divider />
            <div className={classes.totalCost}>
              <h4>Total</h4>
              <h4>{totalCost}</h4>
            </div>
            <Button variant="outlined"> Go to checkout</Button>
          </Container>
        </>
      ) : (
        <div>
          <h2>Your cart is empty</h2>{" "}
          <div>Go to our store and find some products.</div>
          <Button
            variant="contained"
            color="default"
            className={classes.goBackButton}
            startIcon={<ArrowBackIosIcon />}
            onClick={handleGoBack}
          >
            Return
          </Button>
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({ cart: state.cart });

export default connect(mapStateToProps)(ProductList);
