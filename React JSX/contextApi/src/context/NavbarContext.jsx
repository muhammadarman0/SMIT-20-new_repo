import React, { createContext, useState } from "react";

const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toogleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <NavContext.Provider value={[theme, toogleTheme]}>
      {children}
    </NavContext.Provider>
  );
};

export { NavProvider };
export default NavContext;
