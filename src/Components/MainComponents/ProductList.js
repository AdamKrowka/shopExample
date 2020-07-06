import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import ProductDialog from "./ProductDialog.js";

const useStyles = makeStyles((theme) => ({
  productCard: {},
  productImageWrapper: {
    position: "relative",
  },
  productImage: {
    width: "100%",
  },
  buyNow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
    fontSize: "14px",
    cursor: "pointer",
    color: "black",
    backgroundColor: "white",
    border: "none",
    letterSpacing: "1px",
    fontFamily: "Montserrat,sans-serif",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
    },
  },
  buyNowHide: {
    display: "none",
  },
  icon: {
    fontSize: "14px",
  },
  productName: {
    fontSize: "1.1rem",
    letterSpacing: "1px",
  },
  productPrice: {
    fontWeight: "600",
    letterSpacing: "1px",
  },
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const [hovered, setHovered] = useState(false);
  const [dialogOpend, setDialogOpend] = useState(false);
  return (
    <Grid
      item
      xs={6}
      md={3}
      className={classes.productCard}
      onClick={() => console.log("clickef")}
    >
      <div
        className={classes.productImageWrapper}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={product.image} alt="" className={classes.productImage} />
        <button
          className={hovered ? classes.buyNow : classes.buyNowHide}
          onClick={() => setDialogOpend(true)}
        >
          Buy Now <ShoppingCartIcon className={classes.icon} />
        </button>
      </div>
      <div>
        <div className={classes.productName}>{product.product_name}</div>
        <div className={classes.productPrice}>{product.price}</div>
      </div>
      <ProductDialog
        open={dialogOpend}
        setOpen={setDialogOpend}
        product={product}
      />
    </Grid>
  );
};

const ProductList = ({ productList }) => {
  return (
    <Grid container spacing={2}>
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default ProductList;
