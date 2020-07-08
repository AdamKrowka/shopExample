import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Badge } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  category: {
    fontFamily: "Montserrat,sans-serif",
    fontSize: "30px",
  },
  icons: {
    display: "flex",
  },
  icon: {
    fontSize: "30px",
  },
}));
const SerachBar = ({ selectedCategory, productsInCart }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.category}>{selectedCategory}</div>
      <div className={classes.icons}>
        <IconButton color={"inherit"}>
          <SearchIcon className={classes.icon} />
        </IconButton>
        <IconButton color={"inherit"}>
          <Badge badgeContent={productsInCart} color="primary">
            <ShoppingCartIcon className={classes.icon} />
          </Badge>
        </IconButton>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  productsInCart: state.cart.length,
});

export default connect(mapStateToProps)(SerachBar);
