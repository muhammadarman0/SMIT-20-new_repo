import { useContext } from "react";
import themeContext from "../Context/ThemeContext";
import profileContext from "../Context/ProfileContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, toggleTheme] = useContext(themeContext);
  const [profile] = useContext(profileContext);
  console.log(profile);

  return (
    <nav
      className={`${theme === "Dark" ? "bg-[#0b0f19]  text-white" : "bg-slate-300 text-black"} border-b border-white/10  px-6 py-4`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 text-lg font-bold shadow-lg shadow-purple-500/20">
            {profile.firstName?.slice(0, 1)}
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-wide">
              {profile.firstName}
              <span className="text-purple-500">.</span>
            </h1>
            <p className="text-xs text-gray-500">Developer Dashboard</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className={`${theme === "Dark" ? "text-gray-300 transition hover:text-white" : "text-black"}  text-sm font-medium`}
          >
            Home
          </a>

          <a
            href="#"
            className={`${theme === "Dark" ? "text-gray-300 transition hover:text-white" : "text-black"}  text-sm font-medium`}
          >
            <Link to={"/profile"}>Profile</Link>
          </a>

          <a
            href="#"
            className={`${theme === "Dark" ? "text-gray-300 transition hover:text-white" : "text-black"}  text-sm font-medium`}
          >
            <Link to={"/setting"}> Settings</Link>
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* theme Button */}
          <button
            onClick={toggleTheme}
            className={`${theme === "Dark" ? "border-white/10 bg-white/5 text-gray-300 hover:text-white" : "border-black/10 bg-black/5 text-black hover:text-black-300"} flex cursor-pointer items-center gap-2 rounded-xl border  px-4 py-2 text-sm font-medium  transition hover:border-purple-500/40 hover:bg-purple-500/10 `}
          >
            <span className="text-lg">{theme === "Light" ? "☀️" : "🌙"}</span>
            <span>{theme === "Light" ? "Light" : "Dark"}</span>
          </button>

          {/* Profile */}
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/30 bg-gradient-to-br from-purple-600 to-blue-500 font-bold shadow-lg shadow-purple-500/20">
            {profile.firstName?.slice(0, 1)}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
