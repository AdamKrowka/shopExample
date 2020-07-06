import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { addToCart } from "../../Redux/actions/cart.actions.js";
const useStyles = makeStyles((theme) => ({
  dialogContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
  },
}));
const ProductDialog = ({ open, setOpen, product, addToCart }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState(1);
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    if (e.target.value >= 0) setInputValue(e.target.value);
  };

  const handleAddToCart = () => {
    addToCart(product, inputValue);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          How many {product.product_name} you wont add to cart?
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <TextField
            autoFocus
            margin="dense"
            id="productNumber"
            type="number"
            value={inputValue}
            onChange={handleChange}
          />
          Cost:$
          {Math.round(+product.price.substring(1) * inputValue * 100) / 100}
        </DialogContent>
        <DialogActions className={classes.buttons}>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddToCart} color="primary">
            Add To Cart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapDispachToProps = (dispach) => ({
  addToCart: (product, amount) => dispach(addToCart(product, amount)),
});

export default connect(null, mapDispachToProps)(ProductDialog);
