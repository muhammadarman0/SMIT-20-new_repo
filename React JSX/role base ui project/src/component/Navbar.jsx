
import { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate, NavLink } from "react-router-dom";
// import { Menu, X, LogOut, LayoutDashboard, Users } from "lucide-react";
import auth from "../auth/auth";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-indigo-50 text-indigo-600"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/admin" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
            A
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-900">
              Admin Panel
            </h1>
            <p className="text-xs text-gray-500">Management Dashboard</p>
          </div>
        </NavLink>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <NavLink to="/admin" end className={linkClass}>
            {/* <LayoutDashboard size={18} /> */}
            Dashboard
          </NavLink>

          <NavLink to="/admin/users" className={linkClass}>
            {/* <Users size={18} /> */}
            Users
          </NavLink>

          <button
            onClick={logoutHandler}
            disabled={loading}
            className="ml-3 flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {/* <LogOut size={18} /> */}
            {loading ? "Logging out..." : "Logout"}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
        >
          {menuOpen ?  "o": "p"}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            <NavLink
              to="/admin"
              end
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              {/* <LayoutDashboard size={18} /> */}
              Dashboard
            </NavLink>

            <NavLink
              to="/admin/users"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              {/* <Users size={18} /> */}
              Users
            </NavLink>

            <button
              onClick={logoutHandler}
              disabled={loading}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 px-4 py-3 font-semibold text-white hover:bg-red-600 disabled:opacity-60"
            >
              {/* <LogOut size={18} /> */}
              {loading ? "Logging out..." : "Logout"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
