import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const CardNumberInput = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    const text = e.target.value.replace(/\s/g, "");
    if (Number.isInteger(+text) && text.length < 17) {
      const arrayText = text.match(/.{1,4}/g);
      if (arrayText) {
        const formatedText = arrayText.join(" ");
        setValue(formatedText);
      } else setValue(text);
    }
  };

  return (
    <TextField
      value={value}
      onChange={handleChange}
      id="CardNumber"
      variant="outlined"
    />
  );
};

export default CardNumberInput;
