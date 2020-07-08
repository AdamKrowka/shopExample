import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import NavBar from "./Navbar.js";
import ProductInfo from "./ProductInfo.js";

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
const ProductPage = ({ product }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <NavBar className={classes.nav} />
      <ProductInfo className={classes.content} />
    </div>
  );
};

export default ProductPage;
