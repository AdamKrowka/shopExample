import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(2),
  },
}));
const AddressForm = () => {
  const classes = useStyles();
  return (
    <form noValidate autoComplete="off" className={classes.form}>
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        size="small"
      />
      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        size="small"
      />
      <TextField
        id="outlined-basic"
        label="Address"
        variant="outlined"
        size="small"
      />
      <TextField
        id="outlined-basic"
        label="Postal Code"
        variant="outlined"
        size="small"
      />
    </form>
  );
};

export default AddressForm;
