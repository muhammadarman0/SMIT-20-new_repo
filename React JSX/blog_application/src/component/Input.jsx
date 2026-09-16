import { TextField } from "@mui/material";
import React from "react";

const Input = ({ id, label, type, handler }) => {
  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      onChange={(e) =>
        handler(id, id === "file" ? e.target.files[0] : e.target.value)
      }
      type={type}
      sx={{ mb: 2, color: "white" }}
    />
  );
};

export default Input;
