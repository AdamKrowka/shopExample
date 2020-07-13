import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import AddressForm from "./AddressForm.js";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    justifyContent: "center",
    fontWeight: "bold",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "2rem",
  },
}));

const PaymentPage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <div className={classes.title}>Choose a payment method</div>
      <h3>Your address:</h3>
      <div>Your package will be sent to this address. </div>
      <AddressForm />
    </Container>
  );
};

const mapStateToProps = (state) => ({ cart: state.cart });
export default connect(mapStateToProps)(PaymentPage);
