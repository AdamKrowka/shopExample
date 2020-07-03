import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SerachBar from "./MainComponents/SearchBar.js";
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
}));

const Main = ({ selectedCategory }) => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () =>
      await fetch("http://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    getData();
  });
  return (
    <div className={classes.container}>
      <div className={classes.searchBar}>
        <SerachBar selectedCategory={selectedCategory} />
      </div>
      <div className={classes.banner}>
        <Banner />
      </div>
      <div className={classes.productList}>
        <div className={classes.itemsCount}>{products.length} items</div>
        <ProductList productList={products} />
      </div>
      <div className={classes.subscribe}>
        <Subscribe />
      </div>
      <div className={classes.contact}>
        <Contact />
      </div>
      <div className={classes.footer}>footer</div>
    </div>
  );
};

export default Main;
