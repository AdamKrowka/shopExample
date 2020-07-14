import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import CreditCardDialog from "./CreditCardDialog.js";

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

const PaymentForm = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);
  const [openCreditDialog, setOpenCreditDialog] = React.useState(false);
  const handleClick = (index) => {
    setSelected(index);
    if (index === 1) setOpenCreditDialog(true);
  };

  return (
    <>
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
      <CreditCardDialog open={openCreditDialog} setOpen={setOpenCreditDialog} />
    </>
  );
};

export default PaymentForm;
