import React from "react";
import Navbar from "./Component/Navbar";
import NavContext, { NavProvider } from "./context/NavbarContext";

const App = () => {
  return (
    <NavProvider>
      <Navbar />
    </NavProvider>
  );
};

export default App;
