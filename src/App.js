import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Components/NavBar.js";

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
    [theme.breakpoints.up("md")]: {
      width: "250px",
    },
  },
  main: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <div className={classes.navbar}>
        <Navbar></Navbar>
      </div>
      <div className={classes.main}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          corrupti explicabo, earum, mollitia natus consequatur impedit
          molestiae hic nesciunt ea officia omnis sint? Voluptatum voluptatem
          aut alias quibusdam, quo similique excepturi odio architecto, veniam
          dolorum suscipit deleniti velit magni praesentium exercitationem
          doloremque expedita accusamus modi sed voluptas aspernatur. Incidunt,
          assumenda.
        </div>
      </div>
    </Container>
  );
}

export default App;
