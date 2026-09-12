import { TextField } from "@mui/material";
import React from "react";

const Input = ({ label, type, handler }) => {
  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      onChange={(e) => handler(e.target.value, type)}
      type={type}
      sx={{ mb: 2, color: "white" }}
    />
  );
};

export default Input;
