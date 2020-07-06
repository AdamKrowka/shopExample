import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Components/NavBar.js";
import Main from "./Components/Main.js";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Redux/reducers/index.js";

import { Container } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    paddingLeft: "0px",
    paddingRight: "0px",
    fontFamily: "Roboto,sans-serif",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  navbar: {
    zIndex: 2,
    position: "sticky",
    top: 0,
    left: 0,
    [theme.breakpoints.up("md")]: {
      width: "250px",
    },
  },
  main: {
    flexGrow: 1,
  },
}));

const store = createStore(rootReducer);
function App() {
  const classes = useStyles();

  const [selected, setSelected] = useState({ first: 7, second: 1 });

  const categoryList = [
    "Shirts",
    "Dresses",
    ["Jeans", "Skinny", "Relaxed", "Bootcut", "Stright"],
    "Jackets",
    "Gymwear",
    "Blazers",
    "Shoes",
    ["DummyProducts", "1-10", "11-20", "21-30"],
  ];

  return (
    <Provider store={store}>
      <Container maxWidth="lg" className={classes.root}>
        <div className={classes.navbar}>
          <Navbar
            categoryList={categoryList}
            selected={selected}
            setSelected={setSelected}
          ></Navbar>
        </div>
        <div className={classes.main}>
          <Main
            selectedCategory={
              Array.isArray(categoryList[selected.first])
                ? categoryList[selected.first][0]
                : categoryList[selected.first]
            }
            selected={selected}
          ></Main>
        </div>
      </Container>
    </Provider>
  );
}

export default App;
