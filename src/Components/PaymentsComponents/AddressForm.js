import React from "react";
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

const AddressForm = ({ setErrors, errors }) => {
  const classes = useStyles();

  return (
    <div>
      <h3>Your address:</h3>
      <div>Your package will be sent to this address. </div>
      <form noValidate autoComplete="off" className={classes.form}>
        <div className={classes.personName}>
          <AddressInput error={errors} id="name" label="Name">
            <PersonIcon />
          </AddressInput>
          <AddressInput
            error={errors}
            id="lastName"
            label="Last Name"
          ></AddressInput>
        </div>
        <AddressInput error={errors} id="address" label="Address">
          <HomeIcon />
        </AddressInput>
        <AddressInput error={errors} id="postalCode" label="Postal Code">
          <MarkunreadMailboxIcon />
        </AddressInput>
        <AddressInput error={errors} id="city" label="City">
          <LocationCityIcon />
        </AddressInput>
        <AddressInput error={errors} id="country" label="Country">
          <PublicIcon />
        </AddressInput>
        <AddressInput error={errors} id="phoneNumber" label="Phone Number">
          <PhoneIcon />
        </AddressInput>
      </form>
    </div>
  );
};

const mapStateToProps = (store) => ({ data: store.addressData });
const mapDispatchToProps = (dispach) => ({
  setData: (data) => dispach(changeData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm);
