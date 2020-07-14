import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const SecurityCodeInput = ({ cardData, setCardData, setValid }) => {
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    let text = e.target.value;
    if (Number.isInteger(+text) && text.length < 4)
      setCardData({ ...cardData, securityCode: text });

    if (text.replace(/\s/g, "").length >= 3) setValid("securityCode", true);
    else setValid("securityCode", false);
  };

  const checkValidity = (e) => {
    const text = e.target.value.replace(/\s/g, "");
    if (text.length !== 3 && text.length !== 0) setError(true);
  };
  const clearError = () => {
    setError(false);
  };

  return (
    <TextField
      error={error}
      label={error ? "Invalid security code" : ""}
      value={cardData.securityCode}
      onChange={handleChange}
      id="Security"
      variant="outlined"
      onBlur={checkValidity}
      onFocus={clearError}
    />
  );
};

export default SecurityCodeInput;
