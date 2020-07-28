import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const CardNumberInput = ({ cardData, setCardData, setValid }) => {
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    let text = e.target.value.replace(/\s*/, "");

    setCardData({ ...cardData, cardNumber: text });
    if (
      /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(
        text
      )
    )
      setValid("cardNumber", true);
    else setValid("cardNumber", false);
  };

  const checkValidity = (e) => {
    let text = e.target.value.replace(/\s*/, "");
    if (
      !/^(?:(4([0-9]\s*){12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(
        text
      )
    )
      setError(true);
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
