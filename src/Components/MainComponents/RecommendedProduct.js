import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Button, ButtonBase } from "@material-ui/core";
import { addToCart } from "../../Redux/actions/cart.actions.js";

const useStyles = makeStyles((theme) => ({
  recommended: {
    display: "flex",
  },
  avatarRecommended: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
  recommendedInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "33.33%",
    margin: theme.spacing(1),
  },
  buttonBase: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.grey[300],
      borderRadius: theme.spacing(1),
      cursor: "pointer",
    },
  },
  recommendedButton: {
    width: "100%",
    color: theme.palette.success.dark,
  },
}));

const RecommendedProduct = ({ product, goToRecommendedProduct, addToCart }) => {
  const classes = useStyles();
  const [text, setText] = useState("Add to Cart");
  const [disabled, setDisabled] = useState(false);

  const handleAddToCart = () => {
    setText("Added to Cart");
    addToCart(product, 1);
    setDisabled(true);
  };
  return (
    <div className={classes.recommendedInfo}>
      <ButtonBase
        onClick={() => goToRecommendedProduct(product.id)}
        className={classes.buttonBase}
      >
        <Avatar
          variant="square"
          className={classes.avatarRecommended}
          src={product.image}
        />
        <h4>{product.price}</h4>
        <div>{product.product_name}</div>
      </ButtonBase>
      <Button
        className={classes.recommendedButton}
        onClick={handleAddToCart}
        disabled={disabled}
      >
        {text}
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product, amount) => dispatch(addToCart(product, amount)),
});

export default connect(null, mapDispatchToProps)(RecommendedProduct);
