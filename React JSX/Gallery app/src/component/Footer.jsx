import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { galleryThunck } from "../store/slice/gallerySlice";

const Footer = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const dispatch = useDispatch();

  const handleLimitPages = (e) => {
    const newLimit = Number(e.target.value);
    setLimit(newLimit);
    setPage(1);
    dispatch(
      galleryThunck({
        limit: newLimit,
        page: 1,
      }),
    );
  };
  const handelPageLimit = (newpage) => {
    setPage(newpage);
    dispatch(
      galleryThunck({
        page: newpage,
        limit,
      }),
    );
  };

  return (
    <footer className="w-full border-t border-slate-800 bg-[#0b1120] px-3 py-5 sm:px-5 sm:py-7 lg:px-8">
      {" "}
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 sm:gap-6">
        {/* Limit Dropdown */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
          <label
            htmlFor="limit"
            className="text-sm font-medium text-slate-300 sm:text-base"
          >
            Items per page:
          </label>

          <select
            onChange={handleLimitPages}
            id="limit"
            defaultValue="10"
            className="min-h-10 w-24 cursor-pointer rounded-lg border border-slate-700 bg-[#111a2e] px-3 py-2 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:w-28 sm:text-base"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>

        {/* Pagination */}
        <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            onClick={() => handelPageLimit(page - 1)}
            disabled={page === 1}
            className="min-h-10 rounded-lg border border-slate-700 px-4 py-2 text-slate-300 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ← Previous
          </button>
          {[1, 2, 3].map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handelPageLimit(pageNumber)}
              className={`min-h-10 min-w-10 rounded-lg px-3 py-2 transition ${
                page === pageNumber
                  ? "bg-blue-600 font-semibold text-white"
                  : "border border-slate-700 text-slate-300 hover:bg-slate-800"
              }`}
            >
              {pageNumber}
            </button>
          ))}
          <button
            onClick={() => handelPageLimit(page + 1)}
            disabled={page===3}
            className="min-h-10 rounded-lg border border-slate-700 px-4 py-2 text-slate-300 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next →
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
