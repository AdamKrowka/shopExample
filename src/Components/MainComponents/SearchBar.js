import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

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
const SerachBar = ({ selectedCategory }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.category}>{selectedCategory}</div>
      <div className={classes.icons}>
        <IconButton color={"inherit"}>
          <SearchIcon className={classes.icon} />
        </IconButton>
        <IconButton color={"inherit"}>
          <ShoppingCartIcon className={classes.icon} />
        </IconButton>
      </div>
    </div>
  );
};

export default SerachBar;
