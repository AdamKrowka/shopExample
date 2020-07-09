import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  changeAmount,
  removeProduct,
} from "../../Redux/actions/cart.actions.js";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    borderRadius: theme.spacing(3),
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginRight: theme.spacing(2),
  },
  product: {
    display: "flex",
    alignItems: "center",
    width: "50%",
  },
  cost: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  input: {
    maxWidth: "5em",
    height: "2em",
    border: "1px solid black",
    borderRadius: "5px",
    textAlign: "center",
  },
  remove: {
    marginLeft: theme.spacing(2),
  },
}));

const ProductElement = ({
  product,
  amount,
  changeAmount,
  index,
  removeProduct,
}) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState(+amount);
  const [cost, setCost] = useState(
    Math.round(+product.price.substring(1) * inputValue * 100) / 100
  );
  useEffect(() => {
    changeAmount(index, inputValue);
    setCost(Math.round(+product.price.substring(1) * inputValue * 100) / 100);
  }, [inputValue]);

  const handleChange = (e) => {
    if (Number.isInteger(+e.target.value) && +e.target.value > 0)
      setInputValue(+e.target.value);
  };

  const handleRemove = () => {
    removeProduct(index);
  };
  return (
    <Paper variant="outlined" className={classes.paper}>
      <div className={classes.product}>
        <Avatar
          alt={product.product_name}
          src={product.image}
          className={classes.avatar}
        />
        <div> {product.product_name}</div>
      </div>
      <div className={classes.cost}>
        <div>
          <IconButton
            onClick={() => {
              if (inputValue > 1) setInputValue(inputValue - 1);
            }}
          >
            <RemoveIcon />
          </IconButton>
          <input
            className={classes.input}
            value={inputValue}
            onChange={handleChange}
          />
          <IconButton onClick={() => setInputValue(inputValue + 1)}>
            <AddIcon />
          </IconButton>
        </div>

        <div>${cost.toLocaleString("en", { useGrouping: true })}</div>
        <div className={classes.remove}>
          <IconButton aria-label="delete" onClick={handleRemove}>
            <DeleteIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </Paper>
  );
};

const mapDispachToProps = (dispach) => ({
  changeAmount: (index, amount) => dispach(changeAmount(index, amount)),
  removeProduct: (index) => dispach(removeProduct(index)),
});

export default connect(null, mapDispachToProps)(ProductElement);
