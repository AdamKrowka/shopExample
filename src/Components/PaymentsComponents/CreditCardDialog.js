import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Visa from "../../Images/visa.svg";
import Mastercard from "../../Images/mastercard.svg";
import CardNumberInput from "./Inputs/CardNumberInput.js";
import ExpireDateInput from "./Inputs/ExpireDateInput.js";
import SecurityCodeInput from "./Inputs/SecurityCodeInput.js";
const useStyles = makeStyles((theme) => ({
  image: {
    height: "30px",
    margin: theme.spacing(1),
  },
  row: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    width: "100%",
  },
  text: {
    width: "50%",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: theme.spacing(1),
  },
  images: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

const CreditCardDialog = ({ open, setOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
        <DialogContent>
          <h3>Chose payment method</h3>
          <div>Choose a payment method for this order</div>
          <div className={classes.images}>
            <img className={classes.image} src={Visa} alt="" />
            <img className={classes.image} src={Mastercard} alt="" />
          </div>
          <form noValidate autoComplete="off">
            <div className={classes.row}>
              <div className={classes.text}>Card Number:</div>
              <CardNumberInput />
            </div>
            <div className={classes.row}>
              <div className={classes.text}>Expired date:</div>
              <ExpireDateInput />
            </div>
            <div className={classes.row}>
              <div className={classes.text}>CVV2/CVC2:</div>
              <SecurityCodeInput />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreditCardDialog;
