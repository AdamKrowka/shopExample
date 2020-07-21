import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CategoryList from "./CategoryList.js";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
  },
  nav: {
    width: "250px",
    overflowX: "hidden",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "column",
      position: "sticky",
      top: 0,
      left: 0,
    },
  },
  mobile: {
    zIndex: 100,
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
    overflowX: "hidden",
  },
  contactNav: {
    fontSize: "25px",
  },
  menu: {
    paddingBottom: theme.spacing(20),
  },
  listItem: {
    "&:hover": {
      backgroundColor: "#ccc",
    },
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
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export const Logo = (props) => {
  const classes = useLogoStyles(props);
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className={classes.logo} onClick={handleClick}>
      LOGO
    </div>
  );
};

const NavBar = ({ categoryList, selected, setSelected }) => {
  const [state, setState] = useState(false);
  const [open, setOpen] = useState(false);
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

  const navFooter = (
    <List component="nav">
      <ListItem className={classes.listItem} button>
        <ListItemText primary="Contact" />
      </ListItem>
      <ListItem className={classes.listItem} button>
        <ListItemText primary="Newsletter" />
      </ListItem>
      <ListItem className={classes.listItem} button>
        <ListItemText primary="Subscribe" />
      </ListItem>
    </List>
  );

  const menu = (
    <div className={classes.menu}>
      <div className={classes.drawerMenu}>
        <Logo color="black" />
      </div>
      <CategoryList
        open={open}
        setOpen={setOpen}
        selected={selected}
        setSelected={setSelected}
        categoryList={categoryList}
      />
    </div>
  );

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
        {menu}
        {navFooter}
      </Drawer>
    </div>
  );

  const navigaion = (
    <div className={classes.nav}>
      {menu}
      {navFooter}
    </div>
  );

  return (
    <div className={classes.container}>
      {mobileNavigation}
      {navigaion}
    </div>
  );
};

export default NavBar;
