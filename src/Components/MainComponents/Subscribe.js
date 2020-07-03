import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    color: "white",
    backgroundColor: "black",
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    letterSpacing: "1px",
  },
  title: {
    fontWeight: "400",
  },
  inputWrapper: {
    paddingTop: theme.spacing(3),
  },
  input: {
    boxSizing: "border-box",
    width: "100%",
    padding: theme.spacing(1.5),
    marginBottom: theme.spacing(3),
    fontSize: "1.2rem",
  },
  button: {
    padding: theme.spacing(1.5),
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    fontSize: "1.2rem",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
      cursor: "pointer",
    },
  },
}));

const Subscribe = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Subscribe</h1>
      <div>To get special offers and VIP treatment:</div>
      <div className={classes.inputWrapper}>
        <input className={classes.input} type="text" />
      </div>
      <button className={classes.button}>Subscribe</button>
    </div>
  );
};

export default Subscribe;
