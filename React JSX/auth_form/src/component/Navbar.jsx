import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentLocation = location.pathname === "/setting";
  const currentLoca = location.pathname === `/user/:userId`;
  console.log(currentLoca);
  

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#080b12]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        {/* Dashboard */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-lg font-bold text-white shadow-lg shadow-purple-500/20">
            {currentLocation ? "S" : "D"}
          </div>

          <h1 className="text-lg font-semibold tracking-wide text-white">
            {currentLocation ? "Setting" : "Dashboard"}
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <Link to={"/login"}>
            {/* {" "} */}
            <button className="rounded-xl px-4 py-2.5 text-sm font-medium text-gray-400 transition-all duration-300 hover:bg-white/5 hover:text-white cursor-pointer">
              Login Out
            </button>
          </Link>

          <Link to={"/register"}>
            {" "}
            <button className="rounded-xl bg-white/5 px-5 py-2.5 text-sm font-semibold text-gray-300 transition-all duration-300 cursor-pointer">
              Register
            </button>
          </Link>

          <Link to={currentLocation ? "/" : "/setting"}>
            {" "}
            <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white cursor-pointer">
              {currentLocation ? "Dashboard" : "⚙ Settings"}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
