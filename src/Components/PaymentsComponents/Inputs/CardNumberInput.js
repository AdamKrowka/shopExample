import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";

const regEx = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

const CardNumberInput = ({ cardData, setCardData, setValid, validate }) => {
  const [error, setError] = useState(false);
  useEffect(() => {
    setValid("cardNumber", regEx.test(cardData.cardNumber));
  }, [validate]);
  const handleChange = (e) => {
    let text = e.target.value;
    let withoutWitheSpaces = text.replace(/\s/g, "");
    setCardData({ ...cardData, cardNumber: text });
    setValid("cardNumber", regEx.test(withoutWitheSpaces));
  };

  const checkValidity = (e) => {
    let text = e.target.value.replace(/\s/g, ``);
    if (!regEx.test(text)) setError(true);
  };
  const clearError = () => {
    setError(false);
  };

  return (
    <TextField
      error={error}
      label={error ? "Invalid card number" : ""}
      value={cardData.cardNumber}
      onChange={handleChange}
      onBlur={checkValidity}
      onFocus={clearError}
      id="CardNumber"
      variant="outlined"
    />
  );
};

export default CardNumberInput;
