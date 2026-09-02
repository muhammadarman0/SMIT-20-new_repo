import { useContext } from "react";
import themeContext from "../Context/ThemeContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [theme, toggleTheme] = useContext(themeContext);


  return (
    <aside
      className={` ${theme === "Dark" ? "border-white/10 bg-[#0b0f19] p-5 text-white" : "border-black/10 bg-slate-50 text-black"} min-h-[calc(100vh-73px)] w-64 border-r `}
    >
      {/* Sidebar Header */}
      <div className="mb-8">
        <p className="px-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
          Menu
        </p>
      </div>

      {/* Menu */}
      <div className="space-y-2">
        {/* <a
          href="#"
          className={`${theme === "Dark" ? "bg-gradient-to-r from-purple-600/20 to-blue-600/10" : "bg-gradient-to-r from-slate-600/20 to-slat-600/10"} flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium `}
        >
          <span className="text-lg">⌂</span>
          Dashboard
        </a> */}{" "}
        <Link to={"/profile"}>
          <button
            href="#"
            className={`${theme === "Dark" ? "text-gray-400 transition hover:bg-white/5 hover:text-white" : "text-black-400 transition hover:bg-black/5 hover:text-black"} flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium `}
          >
            <span className="text-lg"></span>
            Profile
          </button>
        </Link>
        {/* <a
          href="#"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-400 transition hover:bg-white/5 hover:text-white"
        >
          <span className="text-lg">📊</span>
          Analytics
        </a> */}
        <Link to={"/setting"}>
          {" "}
          <button
            href="#"
            className={`${theme === "Dark" ? "text-gray-400 transition hover:bg-white/5 hover:text-white" : "text-black-400 transition hover:bg-black/5 hover:text-black"} flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium `}
          >
            <span className="text-lg">⚙️</span>
            Settings
          </button>
        </Link>
      </div>

      {/* Bottom Card */}
      <div className="mt-10 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-600/10 to-blue-600/10 p-4">
        <p
          className={`${theme === "Dark" ? "text-white" : "text-black"} text-sm font-semibold `}
        >
          Developer Space
        </p>

        <p
          className={`${theme === "Dark" ? "text-gray-500" : "tex-black"} mt-1 text-xs leading-5 `}
        >
          Manage your projects and account settings.
        </p>
        <Link to={"/setting"}>
          {" "}
          <button className="cursor-pointer mt-4 w-full rounded-xl bg-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-500">
            Explore
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
