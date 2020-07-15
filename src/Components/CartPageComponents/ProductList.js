import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ProductElement from "./ProductElement.js";
import TotalCost from "./TotalCost.js";
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

const ProductList = ({ cart, setActiveStep }) => {
  const classes = useStyles();
  const history = useHistory();
  const handleGoBack = () => {
    history.push("/");
  };

  const handleCheckout = () => {
    setActiveStep(1);
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

  return (
    <Container maxWidth="md">
      {ProductList.length ? (
        <>
          {ProductList}
          <TotalCost
            buttonAction={handleCheckout}
            buttonText="Go to checkout"
          />
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
