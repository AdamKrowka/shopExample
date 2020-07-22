import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, Divider, IconButton, Avatar, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import RecomendedProduct from "./RecomendedProduct.js";

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(2),
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginRight: theme.spacing(3),
  },
  info: {
    padding: theme.spacing(3),
    display: "flex",
  },
  textInfo: {},
  price: { marginBottom: theme.spacing(1) },
  buttons: {
    marginTop: theme.spacing(3),
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(3),
  },
  recomended: {
    display: "flex",
  },
}));

const getRandom = (arr, n) => {
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

const ProductDialog = ({ open, setOpen, product, products }) => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const [fullWidth] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const goToRecomendedProduct = (id) => {
    history.push(`/productPage/${id}`);
    history.go();
  };

  const handleGoToCart = () => {
    history.push("/cartPage");
  };

  const recomendedPRoducts = getRandom(products, 3).map((prod, index) => (
    <RecomendedProduct
      key={index}
      product={prod}
      goToRecomendedProduct={goToRecomendedProduct}
    />
  ));

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullScreen={fullScreen}
        fullWidth={fullWidth}
      >
        <div className={classes.dialog}>
          <div className={classes.title}>
            <h2>You have added product to cart</h2>
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.info}>
            <Avatar
              variant="rounded"
              className={classes.avatar}
              src={product.image}
            />
            <div className={classes.textInfo}>
              <h3 className={classes.price}>{product.price}</h3>
              <div>{product.product_name}</div>
            </div>
          </div>
          <Divider />
          <div className={classes.buttons}>
            <Button onClick={handleClose}>Back to shopping</Button>
            <Button variant="outlined" onClick={handleGoToCart}>
              Go to cart
            </Button>
          </div>
          <Divider />
          <h3>Recomended products</h3>
          <div className={classes.recomended}>{recomendedPRoducts}</div>
        </div>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({ products: state.products });

export default connect(mapStateToProps)(ProductDialog);
