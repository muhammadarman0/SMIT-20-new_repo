import { TextField } from "@mui/material";
import React from "react";

const Input = ({ id,label, type, handler }) => {
  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      onChange={(e) => handler(id,e.target.value)}
      type={type}
      sx={{ mb: 2, color: "white" }}
    />
  );
};

export default Input;
