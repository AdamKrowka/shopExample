import React from "react";
import image from "../../Images/banner.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    zIndex: 0,
  },
  text: {
    position: "absolute",
    top: "50px",
    left: "50px",
    color: "white",
  },
  image: {
    width: "100%",
  },
  title: {
    fontSize: "30px",
    letterSpacing: "2px",
    marginBottom: "20px",

    [theme.breakpoints.up("sm")]: {
      fontSize: "60px",
    },
  },
  subtitle: {
    fontSize: "30px",
    display: "none",
    letterSpacing: "2px",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  button: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    fontSize: "17px",
    cursor: "pointer",
    color: "black",
    backgroundColor: "white",
    border: "none",
    letterSpacing: "1px",
    fontFamily: "Montserrat,sans-serif",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
    },
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img className={classes.image} src={image} alt="" />
      <div className={classes.text}>
        <div className={classes.title}>New arrivals</div>
        <div className={classes.subtitle}>COLLECTION 2020</div>
        <button className={classes.button}>SHOP NOW</button>
      </div>
    </div>
  );
};

export default Banner;
