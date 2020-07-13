import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "300px",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: theme.spacing(1),
  },
}));

const AddressForm = () => {
  const classes = useStyles();
  const [data, setData] = useState({
    name: "",
    lastName: "",
    address: "",
    postalCode: "",
    city: "",
    country: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    let text = e.target.value;
    if (e.target.id === "postalCode") {
      if (text.length === 2) text += "-";
      if (text.length >= 6) text = text.slice(0, 6);
    }
    setData({ ...data, [e.target.id]: text });
  };

  return (
    <>
      <h3>Your address:</h3>
      <div>Your package will be sent to this address. </div>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          value={data.name}
          id="name"
          label="Name"
          variant="outlined"
          size="small"
          className={classes.input}
          onChange={handleChange}
        />
        <TextField
          value={data.lastName}
          id="lastName"
          label="Last Name"
          variant="outlined"
          size="small"
          className={classes.input}
          onChange={handleChange}
        />
        <TextField
          value={data.address}
          id="address"
          label="Address"
          variant="outlined"
          size="small"
          className={classes.input}
          onChange={handleChange}
        />
        <TextField
          value={data.postalCode}
          id="postalCode"
          label="Postal Code"
          variant="outlined"
          size="small"
          className={classes.input}
          onChange={handleChange}
        />
        <TextField
          value={data.city}
          id="city"
          label="City"
          variant="outlined"
          size="small"
          className={classes.input}
          onChange={handleChange}
        />
        <TextField
          value={data.country}
          id="country"
          label="Country"
          variant="outlined"
          size="small"
          className={classes.input}
          onChange={handleChange}
        />
        <TextField
          value={data.phoneNumber}
          id="phoneNumber"
          label="Phone Number"
          variant="outlined"
          size="small"
          className={classes.input}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default AddressForm;
