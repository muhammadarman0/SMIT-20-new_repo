import React from "react";

const Footer = ({ setPage, setLimit, page }) => {
  return (
    <footer className="border-t border-white/10 bg-[#050814]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-bold">
            <span className="text-purple-400">G</span>allery
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Capture • Create • Inspire
          </p>
        </div>

        {/* Limit */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">Photos per Limit</span>

          <select
            onChange={(e) => setLimit(Number(e.target.value))}
            className="cursor-pointer rounded-xl border border-white/10 bg-gray-500 px-4 py-2.5 text-sm text-gray-300 outline-none transition focus:border-purple-500 rounded-3xl"
          >
            <option className="bg-gray-800 text-white">8</option>
            <option className="bg-gray-800 text-white">25</option>
            <option className="bg-gray-800 text-white">50</option>
            <option className="bg-gray-800 text-white">100</option>
          </select>
        </div>

        {/* Pages */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((btn) => (
            <button
              onClick={(e) => setPage(btn)}
              className={`${page === btn ? "bg-purple-600" : "bg-white text-black"} cursor-pointer h-10 w-10 rounded-xl font-semibold `}
            >
              {btn}
            </button>
          ))}

          <button
            disabled={page === 5}
            onClick={() => {
              if (page < 5) {
                setPage(page + 1);
              }
            }}
            className="cursor-pointer
    group flex items-center gap-2
    rounded-xl px-5 py-2.5
    text-sm font-semibold
    border border-white/10
    bg-white/5 text-gray-300
    shadow-lg shadow-black/20
    transition-all duration-300

    hover:-translate-y-0.5
    hover:border-purple-500/40
    hover:bg-gradient-to-r
    hover:from-purple-600
    hover:to-pink-500
    hover:text-white
    hover:shadow-purple-500/20

    disabled:cursor-not-allowed
    disabled:border-white/5
    disabled:bg-white/[0.02]
    disabled:text-gray-600
    disabled:opacity-60
    disabled:shadow-none
    disabled:hover:translate-y-0
    disabled:hover:bg-white/[0.02]
    disabled:hover:border-white/5
  "
          >
            Next →
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
