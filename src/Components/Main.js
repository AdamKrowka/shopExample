import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { setProductsStore } from "../Redux/actions/products.actions.js";
import { Link } from "@material-ui/core";
import SearchBar from "./MainComponents/SearchBar.js";
import Banner from "./MainComponents/Banner.js";
import ProductList from "./MainComponents/ProductList.js";
import Subscribe from "./MainComponents/Subscribe.js";
import Contact from "./MainComponents/Contact.js";

const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: "Montserrat,sans-serif",
    display: "flex",
    flexDirection: "column",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  itemsCount: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  footer: {
    marginTop: theme.spacing(8),
    backgroundColor: "black",
    color: "white",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    textAlign: "center",
    letterSpacing: "1px",
  },
  link: {
    paddingLeft: theme.spacing(1),
    letterSpacing: "1px",
  },
}));

const Main = ({ selectedCategory, selected, cart, products, setProducts }) => {
  const classes = useStyles();
  // const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    let tempProducts = [];
    if (products.length) {
      products.forEach((product) => {
        if (
          product.category.first === selected.first &&
          product.category.second + 1 === selected.second
        )
          tempProducts.push(product);
      });
      setNewProducts(tempProducts);
    }
  }, [products, selected]);
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
  return (
    <div className={classes.container}>
      <div className={classes.searchBar}>
        <SearchBar selectedCategory={selectedCategory} />
      </div>
      <div className={classes.banner}>
        <Banner />
      </div>
      <div className={classes.productList}>
        <div className={classes.itemsCount}>{newProducts.length} items</div>
        <ProductList productList={newProducts} />
      </div>
      <div className={classes.subscribe}>
        <Subscribe />
      </div>
      <div className={classes.contact}>
        <Contact />
      </div>
      <div className={classes.footer}>
        Created by Adam Krówka inspired on:
        <Link
          className={classes.link}
          href="https://www.w3schools.com/w3css/tryw3css_templates_clothing_store.htm#"
          color="inherit"
          underline="always"
        >
          w3schools
        </Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setProducts: (products) => dispatch(setProductsStore(products)),
});

const mapStateToProps = (state) => ({ products: state.products });

export default connect(mapStateToProps, mapDispatchToProps)(Main);
