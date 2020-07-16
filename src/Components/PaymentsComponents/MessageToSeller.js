import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { message } from "../../Redux/actions/messageToSeller.action";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(2),
    width: "300px",
  },
}));

const MessageToSeller = ({ message, setMessage }) => {
  const classes = useStyles();

  const handleChange = (e) => setMessage(e.target.value);
  return (
    <div>
      <h3>Message to Seller</h3>
      <div>
        If you want to send a message to the seller please enter it below
      </div>
      <TextField
        value={message}
        onChange={handleChange}
        className={classes.textField}
        id="outlined-multiline-static"
        label="Message"
        multiline
        variant="outlined"
      />
    </div>
  );
};

const mapDispatchToProps = (dispach) => ({
  setMessage: (data) => dispach(message(data)),
});
const mapStateToProps = (state) => ({ message: state.message });

export default connect(mapStateToProps, mapDispatchToProps)(MessageToSeller);
