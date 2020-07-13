import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(2),
    width: "300px",
  },
}));

const MessageToSeller = () => {
  const classes = useStyles();

  return (
    <>
      <h3>Message to Seller</h3>
      <div>
        If you want to send a message to the seller please enter it below
      </div>
      <TextField
        className={classes.textField}
        id="outlined-multiline-static"
        label="Message"
        multiline
        variant="outlined"
      />
    </>
  );
};

export default MessageToSeller;
