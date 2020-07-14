import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import AddressInput from "./Inputs/AddressInput.js";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import PhoneIcon from "@material-ui/icons/Phone";

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
        <AddressInput
          value={data.name}
          id="name"
          label="Name"
          onChange={handleChange}
        >
          <PersonIcon />
        </AddressInput>
        <AddressInput
          value={data.lastName}
          id="lastName"
          label="Last Name"
          onChange={handleChange}
        >
          <PersonIcon />
        </AddressInput>
        <AddressInput
          value={data.address}
          id="address"
          label="Address"
          onChange={handleChange}
        >
          <HomeIcon />
        </AddressInput>
        <AddressInput
          value={data.postalCode}
          id="postalCode"
          label="Postal Code"
          onChange={handleChange}
        >
          <MarkunreadMailboxIcon />
        </AddressInput>
        <AddressInput
          value={data.city}
          id="city"
          label="City"
          onChange={handleChange}
        >
          <LocationCityIcon />
        </AddressInput>
        <AddressInput
          value={data.country}
          id="country"
          label="Country"
          onChange={handleChange}
        >
          <PublicIcon />
        </AddressInput>
        <AddressInput
          value={data.phoneNumber}
          id="phoneNumber"
          label="Phone Number"
          onChange={handleChange}
        >
          <PhoneIcon />
        </AddressInput>
      </form>
    </>
  );
};

export default AddressForm;
