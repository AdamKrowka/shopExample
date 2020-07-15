import React, { useState } from "react";
import { connect } from "react-redux";
import { changeData } from "../../Redux/actions/addressData.actions.js";
import { makeStyles } from "@material-ui/core/styles";
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
  personName: {
    display: "flex",
  },
}));

const AddressForm = ({ data, setData }) => {
  const classes = useStyles();
  // const [data, setData] = useState({
  //   name: "",
  //   lastName: "",
  //   address: "",
  //   postalCode: "",
  //   city: "",
  //   country: "",
  //   phoneNumber: "",
  // });

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
        <div className={classes.personName}>
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
          ></AddressInput>
        </div>
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

const mapStateToProps = (store) => ({ data: store.addressData });
const mapDispatchToProps = (dispach) => ({
  setData: (data) => dispach(changeData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm);
