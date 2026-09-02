
import React, { createContext, useState } from "react";

const themeContext = createContext();

const ProvideContext = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "Dark";
  });

  const toggleTheme = () => {
    const newTheme = theme === "Dark" ? "Light" : "Dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <themeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </themeContext.Provider>
  );
};

export { ProvideContext };
export default themeContext;
