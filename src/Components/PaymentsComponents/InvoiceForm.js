import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { invoice } from "../../Redux/actions/invoice.actions.js";

const useStyles = makeStyles((theme) => ({
  checkbox: {
    margin: theme.spacing(1),
  },
}));

const InvoiceForm = ({ checked, setChecked }) => {
  const classes = useStyles();
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <div>
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
    </div>
  );
};

const mapDispatchToProps = (dispach) => ({
  setChecked: (data) => dispach(invoice(data)),
});
const mapStateToProps = (state) => ({ checked: state.invoice });

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceForm);
