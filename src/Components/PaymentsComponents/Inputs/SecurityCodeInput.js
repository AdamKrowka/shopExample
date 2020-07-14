import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const SecurityCodeInput = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    let text = e.target.value;
    if (Number.isInteger(+text) && text.length < 4) setValue(text);
  };

  return (
    <TextField
      value={value}
      onChange={handleChange}
      id="Security"
      variant="outlined"
    />
  );
};

export default SecurityCodeInput;
