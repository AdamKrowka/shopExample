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

const masks = {
  name: /^[a-zA-Z]+$/,
  lastName: /^[a-zA-Z]+$/,
  address: /^.+$/,
  city: /^.+$/,
  country: /^.+$/,
  postalCode: /^[0-9]{2}[-][0-9]{3}$/,
  phoneNumber: /^([+][0-9]{2}\s*)?([0-9]\s*){9}$/,
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
  const allValid = () => {
    const addressErrors = { ...errors };
    console.log(addressErrors);
    Object.keys(masks).forEach((mask) => {
      addressErrors[mask] = masks[mask].test(address[mask]);
    });
    for (const o in addressErrors) if (!addressErrors[o]) return false;

    return true;
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

  const checkAddressValidation = () => {
    const addressErrors = { ...errors };
    console.log(addressErrors);
    Object.keys(masks).forEach((mask) => {
      addressErrors[mask] = !masks[mask].test(address[mask]);
    });
    setErrors(addressErrors);
  };

  const handleGoToFinish = () => {
    checkAddressValidation();
    if (allValid(address) && paymentValid) setActiveStep(2);
    else {
      if (!paymentValid) setPaymentError(true);
      setValid(false);
      checkAddressValidation();
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
