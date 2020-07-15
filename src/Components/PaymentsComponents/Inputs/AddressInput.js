import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: theme.spacing(1),
    width: "100%",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
}));

const AddressInput = ({ children, value, id, label, onChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {children}
      <TextField
        value={value}
        id={id}
        label={label}
        variant="outlined"
        size="small"
        onChange={onChange}
        className={classes.input}
      />
    </div>
  );
};

export default AddressInput;
