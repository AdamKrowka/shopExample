import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
  },
}));
const ProductDialog = ({ open, setOpen, product }) => {
  const classes = useStyles();
  const handleClose = () => {
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
          />
        </DialogContent>
        <DialogActions className={classes.buttons}>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add To Cart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductDialog;
