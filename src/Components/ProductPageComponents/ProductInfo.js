import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";
import { connect } from "react-redux";
import { addToCart } from "../../Redux/actions/cart.actions.js";

import ProductDialog from "../MainComponents/ProductDialog.js";

const useStyles = makeStyles((theme) => ({
  container: {
    // height: "100vh",
    display: "flex",
    justifyContent: "space-around",
    padding: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      padding: theme.spacing(4),
      justifyContent: "flex-start",
    },
  },
  image: {
    width: "100%",
  },
  imageContainer: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: theme.spacing(8),
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      paddingTop: theme.spacing(3),
    },
  },
  company: {
    display: "flex",
    alignItems: "center",
  },
  name: {
    fontSize: "2rem",
  },
  from: {
    paddingRight: theme.spacing(0.3),
  },
  button: {
    marginTop: theme.spacing(3),
  },
}));
const ProductInfo = ({ productID, products, addToCart }) => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState();

  const handleAddToCart = () => {
    addToCart(product, 1);
    setOpen(true);
  };

  useEffect(() => {
    setProduct(products.find((prod) => +prod.id === +productID));
  }, [products]);
  const classes = useStyles();
  return product ? (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={product.image} alt="" className={classes.image} />
      </div>
      <div className={classes.info}>
        <div>
          <div className={classes.name}>{product.product_name}</div>
          <div className={classes.company}>
            <div className={classes.from}>from:</div>
            <h4>{product.company}</h4>
          </div>
          <h2>{product.price}</h2>
        </div>
        <div>{product.description}</div>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
        <ProductDialog open={open} setOpen={setOpen} product={product} />
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispachToProps = (dispach) => ({
  addToCart: (product, amount) => dispach(addToCart(product, amount)),
});

export default connect(mapStateToProps, mapDispachToProps)(ProductInfo);
