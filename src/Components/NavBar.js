import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import CategoryList from "./CategoryList.js";

const useStyles = makeStyles((theme) => ({
  nav: {
    width: "250px",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  mobile: {
    display: "flex",
    alignItems: "strech",
    justifyContent: "space-between",
    backgroundColor: "black",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  hamburger: {
    fontSize: "30px",
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  hamburgerWrapper: {
    display: "flex",
    alignItems: "center",
    color: "white",
    "&:hover": {
      backgroundColor: "#aaa",
      color: "black",
    },
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  drawerMenu: {
    width: "250px",
  },
}));

const useLogoStyles = makeStyles((theme) => ({
  logo: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontSize: "30px",
    fontFamily: "Montserrat,sans-serif",
    color: (props) => props.color,
  },
}));

const Logo = (props) => {
  const classes = useLogoStyles(props);
  return <div className={classes.logo}>LOGO</div>;
};

const NavBar = () => {
  const [state, setState] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({ first: 2, second: 2 });
  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };
  const mobileNavigation = (
    <div className={classes.mobile}>
      <Logo color="white" />
      <div className={classes.hamburgerWrapper} onClick={toggleDrawer(true)}>
        <MenuIcon className={classes.hamburger} />
      </div>
      <Drawer
        transitionDuration={0}
        className={classes.drawer}
        anchor="left"
        open={state}
        onClose={toggleDrawer(false)}
      >
        <div className={classes.drawerMenu}>
          <Logo color="black" />
        </div>
        <CategoryList
          open={open}
          setOpen={setOpen}
          selected={selected}
          setSelected={setSelected}
        />
      </Drawer>
    </div>
  );

  const navigaion = (
    <div className={classes.nav}>
      <Logo color="black" />
      <CategoryList
        open={open}
        setOpen={setOpen}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );

  return (
    <div>
      {mobileNavigation}
      {navigaion}
    </div>
  );
};

export default NavBar;
