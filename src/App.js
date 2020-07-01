import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Components/NavBar.js";

import { Container } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  navbar: {
    [theme.breakpoints.up("md")]: {
      width: "250px",
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <div className={classes.navbar}>
        <Navbar></Navbar>
      </div>
      <div className={classes.main}>main</div>
    </Container>
  );
}

export default App;
