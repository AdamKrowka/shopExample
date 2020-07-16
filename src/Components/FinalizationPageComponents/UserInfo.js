import React from "react";
import { connect } from "react-redux";
import { Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  infoElement: {
    margin: theme.spacing(1),
  },
  cardInfoElement: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(1),
  },
  cardInfo: {
    width: "50%",
  },
}));

const Title = ({ children, setActiveStep }) => {
  const classes = useStyles();
  const handleClick = () => {
    setActiveStep(1);
  };
  return (
    <h3>
      {children}
      <IconButton className={classes.button} onClick={handleClick}>
        <EditIcon />
      </IconButton>
    </h3>
  );
};

const UserInfo = ({
  address,
  cardData,
  paymentsType,
  invoice,
  message,
  setActiveStep,
}) => {
  const classes = useStyles();

  const cardInfo =
    paymentsType === "Credit Card" ? (
      <div>
        <div className={classes.cardInfoElement}>
          <div> Card Number:</div>
          <div className={classes.cardInfo}>{cardData.cardNumber}</div>
        </div>
        <div className={classes.cardInfoElement}>
          <div>Expiration Date:</div>
          <div className={classes.cardInfo}>{cardData.expirationDate}</div>
        </div>
        <div className={classes.cardInfoElement}>
          <div>Security Code:</div>
          <div className={classes.cardInfo}>{cardData.securityCode}</div>
        </div>
      </div>
    ) : (
      <div>{paymentsType}</div>
    );

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Title setActiveStep={setActiveStep}>Shipment</Title>
        <div className={classes.infoElement}>
          {address.name} {address.lastName}
        </div>
        <div className={classes.infoElement}>{address.address}</div>
        <div className={classes.infoElement}>
          {address.postalCode} {address.city} {address.country}
        </div>
        <div className={classes.infoElement}>{address.phoneNumber}</div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Title setActiveStep={setActiveStep}>Payment</Title>
        {cardInfo}
      </Grid>
      <Grid item xs={12}>
        <Title setActiveStep={setActiveStep}>Invoice</Title>
        {invoice ? "Add an invoice to this order" : "I don't need an invoice"}
      </Grid>
      <Grid>
        <Title setActiveStep={setActiveStep}>Message to Seller</Title>
        {message}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  address: state.addressData,
  cardData: state.cardData,
  paymentsType: state.payments,
  invoice: state.invoice,
  message: state.message,
});

export default connect(mapStateToProps)(UserInfo);
