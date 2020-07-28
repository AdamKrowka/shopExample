import React, { useState } from "react";
import { connect } from "react-redux";
import { changeData } from "../../../Redux/actions/addressData.actions.js";
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

const AddressInput = ({ children, id, label, error, data, setData }) => {
  const classes = useStyles();
  const onChange = (e) => {
    let text = e.target.value;
    if (id === "postalCode") {
      if (text.length === 2) text += "-";
      if (text.length >= 6) text = text.slice(0, 6);
    }
    setData({ ...data, [id]: text });
  };
  return (
    <div className={classes.container}>
      {children}
      <TextField
        error={error[id]}
        value={data[id]}
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

const mapStateToProps = (store) => ({ data: store.addressData });
const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(changeData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressInput);
