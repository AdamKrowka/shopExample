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
}));

const method = ["", "Credit Card", "Blik", "Cash on Delivery"];

const PaymentForm = ({ setMethod }) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);
  const [openCreditDialog, setOpenCreditDialog] = React.useState(false);
  const handleClick = (index) => {
    setSelected(index);
    setMethod(method[index]);
    if (index === 1) setOpenCreditDialog(true);
  };

  const setSelectedMethod = (index) => {
    setSelected(index);
    setMethod(method[index]);
  };
  return (
    <div>
      <h3>Chose payment method</h3>
      <div>Choose a payment method for this order</div>
      <div className={classes.root}>
        <Button
          onClick={() => handleClick(1)}
          className={selected === 1 ? classes.selected : classes.button}
          variant="outlined"
        >
          Credit Card
        </Button>
        <Button
          onClick={() => handleClick(2)}
          className={selected === 2 ? classes.selected : classes.button}
          variant="outlined"
        >
          BLIK
        </Button>
        <Button
          onClick={() => handleClick(3)}
          className={selected === 3 ? classes.selected : classes.button}
          variant="outlined"
        >
          Cash on delivery
        </Button>
      </div>
      <CreditCardDialog
        open={openCreditDialog}
        setOpen={setOpenCreditDialog}
        setSelected={setSelectedMethod}
      />
    </div>
  );
};

const mapDispatchToProps = (dispach) => ({
  setMethod: (data) => dispach(changePaymentsMethod(data)),
});

export default connect(null, mapDispatchToProps)(PaymentForm);
