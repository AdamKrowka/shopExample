import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Divider, Container } from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
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
const TotalCost = ({ cart, buttonAction, buttonText }) => {
  const classes = useStyles();

  const totalCost = cart
    .reduce(
      (acc, item) =>
        Math.round(+item.product.price.substring(1) * item.amount * 100) / 100 +
        acc,
      0
    )
    .toLocaleString("en", { useGrouping: true });

  return (
    <Container maxWidth="sm" className={classes.finalPaymentContainer}>
      <div className={classes.totalCost}>
        <div>Item ({cart.length}) </div>
        <div>${totalCost}</div>
      </div>
      ,
      <div className={classes.totalCost}>
        <div>Shipping</div>
        <div>Free</div>
      </div>
      <Divider />
      <div className={classes.totalCost}>
        <h4>Total</h4>
        <h4>${totalCost}</h4>
      </div>
      <Button variant="outlined" onClick={buttonAction}>
        {buttonText}
      </Button>
    </Container>
  );
};

const mapStateToProps = (state) => ({ cart: state.cart });

export default connect(mapStateToProps)(TotalCost);
