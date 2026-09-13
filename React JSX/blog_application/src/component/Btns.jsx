import React from "react";
import { Button, Stack } from "@mui/material";

const Btns = ({ btnTitle, icon, handler}) => {
  return (
    <>
      <Button
        fullWidth
        variant="contained"
        size="large"
        startIcon={icon}
        onClick={handler}
        sx={{
          py: 1.4,
          borderRadius: 2,
          fontWeight: "bold",
          marginTop: "10px",
        }}
      >
        {btnTitle}
      </Button>
    </>
  );
};

export default Btns;
