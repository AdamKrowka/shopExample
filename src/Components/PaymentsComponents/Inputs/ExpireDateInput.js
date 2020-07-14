import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const ExpireDateInput = ({ cardData, setCardData, setValid }) => {
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    let text = e.target.value;
    text = text.replace("/", "");
    if (Number.isInteger(+text) && text.length < 5) {
      const arrayText = text.match(/.{1,2}/g);
      if (arrayText) text = arrayText.join("/");
      setCardData({ ...cardData, expirationDate: text });
    }

    if (text.replace("/", "").length >= 4) setValid("expirationDate", true);
    else setValid("expirationDate", false);
  };

  const checkValidity = (e) => {
    const text = e.target.value.replace("/", "");
    if (text.length !== 4 && text.length !== 0) setError(true);
  };
  const clearError = () => {
    setError(false);
  };

  return (
    <TextField
      error={error}
      label={error ? "Enter correct expiration date" : ""}
      value={cardData.expirationDate}
      onChange={handleChange}
      onBlur={checkValidity}
      onFocus={clearError}
      id="Expire"
      variant="outlined"
    />
  );
};

export default ExpireDateInput;
