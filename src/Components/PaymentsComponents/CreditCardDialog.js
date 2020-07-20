import React, { useState } from "react";
import { connect } from "react-redux";
import { changeCardData } from "../../Redux/actions/card.actions.js";
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

const CreditCardDialog = ({
  open,
  setOpen,
  setSelected,
  setCardData,
  cardData,
  setPaymentValid,
}) => {
  const [valid, setValidData] = useState({});
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const handleDiscard = () => {
    setOpen(false);
    setCardData({
      cardNumber: "",
      expirationDate: "",
      securityCode: "",
    });
    setSelected(0);
    setPaymentValid(false);
  };

  const handleSave = () => {
    setOpen(false);
  };

  const setValid = (type, validState) => {
    setValidData({ ...valid, [type]: validState });
  };

  return (
    <div>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleDiscard}>
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
              <CardNumberInput
                cardData={cardData}
                setCardData={setCardData}
                setValid={setValid}
              />
            </div>
            <div className={classes.row}>
              <div className={classes.text}>Expired date:</div>
              <ExpireDateInput
                cardData={cardData}
                setCardData={setCardData}
                setValid={setValid}
              />
            </div>
            <div className={classes.row}>
              <div className={classes.text}>CVV2/CVC2:</div>
              <SecurityCodeInput
                cardData={cardData}
                setCardData={setCardData}
                setValid={setValid}
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleDiscard}
            color="secondary"
            variant="outlined"
          >
            Discard
          </Button>
          <Button
            disabled={
              !(valid.cardNumber && valid.expirationDate && valid.securityCode)
            }
            onClick={handleSave}
            color="default"
            autoFocus
            variant="outlined"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
const mapStateToProps = (state) => ({ cardData: state.cardData });

const mapDispatchToProps = (dispach) => ({
  setCardData: (data) => dispach(changeCardData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardDialog);
