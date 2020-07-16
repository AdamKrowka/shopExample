import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Button } from "@material-ui/core";
import AddressForm from "./AddressForm.js";
import InvoiceForm from "./InvoiceForm.js";
import MessageToSeller from "./MessageToSeller.js";
import PaymentForm from "./PaymentForm.js";
import TotalCost from "../CartPageComponents/TotalCost.js";
const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    justifyContent: "center",
    fontWeight: "bold",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "2rem",
  },
  finalButton: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(4),
    paddingRight: theme.spacing(2),
  },
  button: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
}));

const PaymentPage = ({ setActiveStep }) => {
  const classes = useStyles();

  const handlebackToCart = () => {
    setActiveStep(0);
  };

  const handleGoToFinish = () => {
    setActiveStep(2);
  };
  return (
    <Container maxWidth="sm">
      <div className={classes.title}>Choose a payment method</div>
      <TotalCost buttonAction={handlebackToCart} buttonText="Back to Cart" />
      <AddressForm />
      <InvoiceForm />
      <MessageToSeller />
      <PaymentForm />
      <div className={classes.finalButton}>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={handleGoToFinish}
        >
          Finish Transaction
        </Button>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({ cart: state.cart });
export default connect(mapStateToProps)(PaymentPage);
