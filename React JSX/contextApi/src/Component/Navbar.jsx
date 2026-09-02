import React, { useContext } from "react";
import NavContext, { NavProvider } from "../context/NavbarContext";

const Navbar = () => {
  const [theme,toggleTheme] = useContext(NavContext);
  console.log(theme);
  
  return (
    <div className={ `${theme === "light" ? `bg-gray-500 text-white`: `bg-black text-white`}`}>
      <div>Navbar</div>
      <button onClick={toggleTheme} className="bg-blue-500 p-2 m-2 rounded-xl cursor-pointer active:opacity-60">Theme :{theme} </button>
    </div>
  );
};

export default Navbar;
