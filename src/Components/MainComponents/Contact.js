import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Link, IconButton } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    boxSizing: "border-box",
    width: "100%",
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
    border: "1px solid #ccc!important",
  },
  button: {
    width: "100%",
    backgroundColor: "black",
    color: "white",
    padding: theme.spacing(1),
    border: "none",
    "&:hover": {
      backgroundColor: "#ccc",
      color: "black",
      cursor: "pointer",
    },
  },
  link: {
    marginTop: theme.spacing(1),
    fontSize: "0.8rem",
  },
  h4: {
    fontWeight: "400",
  },
  iconText: {
    fontSize: "0.8rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(1),
  },
  icon: {
    fontSize: "0.8rem",
  },
}));
const AboutLink = ({ text }) => {
  const classes = useStyles();
  return (
    <Link href="#" color="inherit" underline="always" className={classes.link}>
      {text}
    </Link>
  );
};

const Contact = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container} spacing={3}>
      <Grid item xs={12} sm={4} className={classes.column}>
        <h4 className={classes.h4}>Contact</h4>
        <p className={classes.h4}>Questions? Go ahead.</p>
        <input className={classes.input} placeholder="Name" type="text" />
        <input className={classes.input} placeholder="Email" type="text" />
        <input className={classes.input} placeholder="Subject" type="text" />
        <input className={classes.input} placeholder="Message" type="text" />
        <button className={classes.button}>Send</button>
      </Grid>
      <Grid item xs={12} sm={4} className={classes.column}>
        <h4 className={classes.h4}>About</h4>
        <AboutLink text={"About us"} />
        <AboutLink text={"We're hiring"} />
        <AboutLink text={"Support"} />
        <AboutLink text={"Find store"} />
        <AboutLink text={"Shipment"} />
        <AboutLink text={"Payment"} />
        <AboutLink text={"Gift card"} />
        <AboutLink text={"Return"} />
        <AboutLink text={"Help"} />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.column}>
        <h4 className={classes.h4}>Store</h4>
        <div className={classes.iconText}>
          <RoomIcon className={classes.icon} />
          Company Name
        </div>
        <div className={classes.iconText}>
          <PhoneIcon className={classes.icon} />
          0044123123
        </div>
        <div className={classes.iconText}>
          <EmailIcon className={classes.icon} />
          example@mail.com
        </div>
        <h4 className={classes.h4}>We accept</h4>
        <div className={classes.iconText}>
          <CreditCardIcon className={classes.icon} />
          Credit Card
        </div>
        <div className={classes.iconText}>
          <AttachMoneyIcon className={classes.icon} />
          Cash
        </div>
        <h4>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <PinterestIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
        </h4>
      </Grid>
    </Grid>
  );
};

export default Contact;
