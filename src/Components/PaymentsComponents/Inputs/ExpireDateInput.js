import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const ExpireDateInput = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    let text = e.target.value;
    text = text.replace("/", "");
    if (Number.isInteger(+text) && text.length < 5) {
      const arrayText = text.match(/.{1,2}/g);
      if (arrayText) {
        const formatedText = arrayText.join("/");
        setValue(formatedText);
      } else {
        setValue(text);
      }
    }
  };

  return (
    <TextField
      value={value}
      onChange={handleChange}
      id="Expire"
      variant="outlined"
    />
  );
};

export default ExpireDateInput;
