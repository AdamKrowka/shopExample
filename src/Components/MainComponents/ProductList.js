import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect } from "react-redux";
import { changeProduct } from "../../Redux/actions/product.actions.js";
import { addToCart } from "../../Redux/actions/cart.actions.js";
import { useHistory } from "react-router-dom";

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

const ProductCard = ({ product, changeProduct, addToCart }) => {
  const history = useHistory();
  const classes = useStyles();
  const [hovered, setHovered] = useState(false);
  const [dialogOpened, setDialogOpened] = useState(false);

  const openProductPage = () => {
    changeProduct(product);
    history.push(`/productPage/${product.id}`);
  };

  const handleAddToCart = () => {
    setDialogOpened(true);
    addToCart(product, 1);
  };
  return (
    <Grid item xs={6} md={3} className={classes.productCard}>
      <div
        className={classes.productImageWrapper}
        onMouseEnter={() => setHovered(true)}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={product.image} alt="" className={classes.productImage} />
        <button
          className={hovered ? classes.buyNow : classes.buyNowHide}
          onClick={handleAddToCart}
        >
          Buy Now <ShoppingCartIcon className={classes.icon} />
        </button>
      </div>
      <div>
        <Button className={classes.productName} onClick={openProductPage}>
          {product.product_name}
        </Button>
        <div className={classes.productPrice}>{product.price}</div>
      </div>
      <ProductDialog
        open={dialogOpened}
        setOpen={setDialogOpened}
        product={product}
      />
    </Grid>
  );
};

const ProductList = ({ productList, changeProduct, addToCart }) => {
  return (
    <Grid container spacing={2}>
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          changeProduct={changeProduct}
          addToCart={addToCart}
        />
      ))}
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeProduct: (product) => dispatch(changeProduct(product)),
  addToCart: (product, amount) => dispatch(addToCart(product, amount)),
});

export default connect(null, mapDispatchToProps)(ProductList);
