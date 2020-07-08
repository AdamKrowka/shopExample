import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
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
  dialogButtons: {
    color: "black",
    borderColor: "black",
  },
}));
const ProductDialog = ({ open, setOpen, product, addToCart }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState(1);
  const [disabled, setDisabled] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    if (e.target.value >= 0) setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputValue === 0) setDisabled(true);
    else setDisabled(false);
  }, [inputValue]);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleAddToCart = () => {
    addToCart(product, inputValue);

    setOpenSnackbar(true);
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
          <Button
            onClick={handleClose}
            color="primary"
            className={classes.dialogButtons}
          >
            Cancel
          </Button>
          <Button
            onClick={handleAddToCart}
            color="primary"
            className={classes.dialogButtons}
            disabled={disabled}
          >
            Add To Cart
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Product Successfully added to cart!"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

const mapDispachToProps = (dispach) => ({
  addToCart: (product, amount) => dispach(addToCart(product, amount)),
});

export default connect(null, mapDispachToProps)(ProductDialog);
