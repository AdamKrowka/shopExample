import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import { connect } from "react-redux";
import NavBar from "../ProductPageComponents/Navbar.js";
import ProductList from "./ProductList.js";
import Stepper from "../PaymentsComponents/Stepper.js";
import PaymentPage from "../PaymentsComponents/PaymentPage.js";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  nav: {
    flexGrow: 0,
  },
  content: {
    flexGrow: 1,
  },
}));
const CartPage = ({ cart }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(1);
  return (
    <div className={classes.container}>
      <NavBar className={classes.nav} />
      <Container maxWidth="md">
        {activeStep ? (
          activeStep === 1 ? (
            <>
              <PaymentPage />
            </>
          ) : (
            <>
              <h1>Finnish</h1>
            </>
          )
        ) : (
          <>
            <h1>Your Cart:</h1>
            <ProductList setActiveStep={setActiveStep} />
          </>
        )}
        <Stepper activeStep={activeStep} />
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({ cart: state.cart });
export default connect(mapStateToProps)(CartPage);
