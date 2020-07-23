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

    if (/^(([0][1-9])|([1][0-2]))[/][2-3][0-9]$/.test(text))
      setValid("expirationDate", true);
    else setValid("expirationDate", false);
  };

  const checkValidity = (e) => {
    const text = e.target.value;
    if (!/^(([0][1-9])|([1][0-2]))[/][2-3][0-9]$/.test(text) && text.length) {
      setError(true);
      setValid("expirationDate", false);
    }
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
