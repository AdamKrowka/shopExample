import React from "react";
import ProductTable from "./ProductTable.js";
import UserInfo from "./UserInfo.js";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(6),
  },
}));

const FinalizationPage = ({ setActiveStep }) => {
  const classes = useStyles();
  return (
    <>
      <ProductTable />
      <div className={classes.buttonWrapper}>
        <Button variant="outlined" onClick={() => setActiveStep(0)}>
          Back to Cart
        </Button>
      </div>
      <UserInfo setActiveStep={setActiveStep} />
    </>
  );
};

export default FinalizationPage;
