import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { setProductsStore } from "../../Redux/actions/products.actions.js";

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
const ProductPage = ({ match, setProducts }) => {
  const { productID } = match.params;
  useEffect(() => {
    const getData = async () =>
      await fetch("https://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6")
        .then((res) => res.json())
        .then((data) => {
          const formattedData = data.map((product, index) => {
            if (index <= 9) product.category = { first: 7, second: 0 };
            else if (index <= 19) product.category = { first: 7, second: 1 };
            else if (index <= 29) product.category = { first: 7, second: 2 };
            return product;
          });
          setProducts(formattedData);
          return formattedData;
        });

    getData();
  }, [setProducts]);

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <NavBar cartButton className={classes.nav} />
      <ProductInfo className={classes.content} productID={productID} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setProducts: (products) => dispatch(setProductsStore(products)),
});
export default connect(null, mapDispatchToProps)(ProductPage);
