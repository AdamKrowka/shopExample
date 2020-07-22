import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { Container, Button, Snackbar, Paper } from "@material-ui/core";
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
  alert: {
    color: "white",
    backgroundColor: "red",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const allValid = (obj) => {
  for (const o in obj) if (!obj[o]) return false;

  return true;
};

const PaymentPage = ({ setActiveStep, address }) => {
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const [paymentValid, setPaymentValid] = useState(false);
  const [paymentError, setPaymentError] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handlebackToCart = () => {
    setActiveStep(0);
  };

  const handleGoToFinish = () => {
    if (allValid(address) && paymentValid) setActiveStep(2);
    else {
      if (!paymentValid) setPaymentError(true);
      setValid(false);
      setErrors(address);
      handleClick();
    }
  };
  return (
    <Container maxWidth="sm">
      <div className={classes.title}>Choose a payment method</div>
      <TotalCost buttonAction={handlebackToCart} buttonText="Back to Cart" />
      <AddressForm setErrors={setErrors} errors={errors} valid={valid} />
      <InvoiceForm />
      <MessageToSeller />
      <PaymentForm
        paymentValid={paymentValid}
        setPaymentValid={setPaymentValid}
        paymentError={paymentError}
        setPaymentError={setPaymentError}
      />
      <div className={classes.finalButton}>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={handleGoToFinish}
        >
          Finish Transaction
        </Button>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Paper className={classes.alert}>
          Provide all required information!{" "}
        </Paper>
      </Snackbar>
    </Container>
  );
};

const mapStateToProps = (state) => ({ address: state.addressData });
export default connect(mapStateToProps)(PaymentPage);
