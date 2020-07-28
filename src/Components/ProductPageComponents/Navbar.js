import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import { Button, IconButton, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Logo } from "../NavBar.js";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
const useStyles = makeStyles((theme) => ({
  navBar: {
    zIndex: 100,
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    backgroundColor: "black",
  },
  arrowBack: {
    color: "white",
  },
  arrowWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
  goBackButton: {
    color: "white",
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "#222",
    },
  },
}));

const Navbar = ({ productsInCart, cartButton }) => {
  let history = useHistory();
  const classes = useStyles();

  const handleGoBack = () => {
    history.push("/");
  };
  const handleGoToCart = () => {
    history.push("/cartPage");
  };
  return (
    <div className={classes.navBar}>
      <Logo color={"white"}></Logo>
      <div className={classes.arrowWrapper}>
        {cartButton ? (
          <IconButton className={classes.goBackButton} onClick={handleGoToCart}>
            <Badge badgeContent={productsInCart} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        ) : (
          <></>
        )}
        <Button
          variant="contained"
          color="default"
          className={classes.goBackButton}
          startIcon={<ArrowBackIosIcon />}
          onClick={handleGoBack}
        >
          Return
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ productsInCart: state.cart.length });

export default connect(mapStateToProps)(Navbar);
