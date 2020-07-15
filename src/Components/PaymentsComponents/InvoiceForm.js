import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  checkbox: {
    margin: theme.spacing(1),
  },
}));

const InvoiceForm = () => {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <h3>Do you need an invoice?</h3>
      <div>
        If you want to receive an invoice for your order, select the option
        below.{" "}
      </div>
      <FormControlLabel
        className={classes.checkbox}
        control={
          <Checkbox
            color="default"
            checked={checked}
            onChange={handleCheckboxChange}
            name="invoice"
          />
        }
        label="I want to receive an invoice"
      />
    </>
  );
};

export default InvoiceForm;
