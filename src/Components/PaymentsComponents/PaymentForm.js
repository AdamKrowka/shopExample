import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import CreditCardDialog from "./CreditCardDialog.js";
import { changePaymentsMethod } from "../../Redux/actions/payments.actions.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    marginTop: theme.spacing(1),
  },
  selected: {
    border: "1px solid #0ba300",
    marginTop: theme.spacing(1),
  },
  error: {
    border: "1px solid red",
    marginTop: theme.spacing(1),
  },
}));

const methods = ["", "Credit Card", "Blik", "Cash on Delivery"];

const PaymentForm = ({
  setMethod,
  setPaymentValid,
  paymentValid,
  paymentError,
  setPaymentError,
}) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);
  const [openCreditDialog, setOpenCreditDialog] = React.useState(false);
  const handleClick = (index) => {
    setPaymentValid(true);
    setPaymentError(false);
    setSelected(index);
    setMethod(methods[index]);
    if (index === 1) setOpenCreditDialog(true);
  };

  const setSelectedMethod = (index) => {
    setPaymentValid(true);
    setPaymentError(false);
    setSelected(index);
    setMethod(methods[index]);
  };

  const Buttons = methods.map((method, index) =>
    index ? (
      <Button
        key={index}
        onClick={() => handleClick(index)}
        className={
          !paymentError
            ? selected === index
              ? classes.selected
              : classes.button
            : classes.error
        }
        variant="outlined"
      >
        {method}
      </Button>
    ) : null
  );
  return (
    <div>
      <h3>Chose payment method</h3>
      <div>Choose a payment method for this order</div>
      <div className={classes.root}>{Buttons}</div>
      <CreditCardDialog
        open={openCreditDialog}
        setOpen={setOpenCreditDialog}
        setSelected={setSelectedMethod}
        setPaymentValid={setPaymentValid}
      />
    </div>
  );
};

const mapDispatchToProps = (dispach) => ({
  setMethod: (data) => dispach(changePaymentsMethod(data)),
});

export default connect(null, mapDispatchToProps)(PaymentForm);
