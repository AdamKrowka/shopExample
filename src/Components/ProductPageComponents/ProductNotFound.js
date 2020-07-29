import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import RecommendedProduct from "../MainComponents/RecommendedProduct.js";
import { getRandom } from "../MainComponents/ProductDialog.js";
import { setProductsStore } from "../../Redux/actions/products.actions.js";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  title: {},
  recommended: {
    display: "flex",
    overflowY: "scroll",
  },
}));

const ProductNotFound = ({ products, setProducts }) => {
  const classes = useStyles();
  const [recommendedProducts, setRecommendedProducts] = useState([]);
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
  }, []);
  const history = useHistory();

  useEffect(() => {
    setRecommendedProducts(
      getRandom(products, 100).map((prod, index) => (
        <RecommendedProduct
          key={index}
          product={prod}
          goToRecommendedProduct={goToRecommendedProduct}
        />
      ))
    );
  }, [products]);
  const goToRecommendedProduct = (id) => {
    history.push(`/productPage/${id}`);
    // history.go();
  };

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Product not found</h2>
      <h3>Maybe you would be interested to see these products</h3>
      <div className={classes.recommended}>{recommendedProducts}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({ products: state.products });
const mapDispatchToProps = (dispatch) => ({
  setProducts: (products) => dispatch(setProductsStore(products)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductNotFound);
