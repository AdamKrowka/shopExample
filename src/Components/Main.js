import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SerachBar from "./MainComponents/SearchBar.js";
import Banner from "./MainComponents/Banner.js";

const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: "Montserrat,sans-serif",
    display: "flex",
    flexDirection: "column",
    height: "300vh",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

const Main = ({ selectedCategory }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.searchBar}>
        <SerachBar selectedCategory={selectedCategory} />
      </div>
      <div className={classes.banner}>
        <Banner />
      </div>
      <div className={classes.productList}>productList</div>
      <div className={classes.subscribe}>subscribe</div>
      <div className={classes.contact}>contact</div>
      <div className={classes.footer}>footer</div>
    </div>
  );
};

export default Main;
