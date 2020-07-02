import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SerachBar from "./MainComponents/SearchBar.js";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "300vh",
  },
}));

const Main = ({ selectedCategory }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.searchBar}>
        <SerachBar />
      </div>
      <div className={classes.banner}>baner</div>
      <div className={classes.productList}>productList</div>
      <div className={classes.subscribe}>subscribe</div>
      <div className={classes.contact}>contact</div>
      <div className={classes.footer}>footer</div>
    </div>
  );
};

export default Main;
