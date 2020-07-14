import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const CardNumberInput = ({ cardData, setCardData, setValid }) => {
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    let text = e.target.value.replace(/\s/g, "");
    if (Number.isInteger(+text) && text.length < 17) {
      const arrayText = text.match(/.{1,4}/g);
      if (arrayText) text = arrayText.join(" ");
      setCardData({ ...cardData, cardNumber: text });
    }
    if (text.replace(/\s/g, "").length >= 16) setValid("cardNumber", true);
    else setValid("cardNumber", false);
  };

  const checkValidity = (e) => {
    const text = e.target.value.replace(/\s/g, "");
    if (text.length !== 16 && text.length !== 0) setError(true);
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
