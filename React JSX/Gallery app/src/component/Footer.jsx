import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { galleryThunck } from "../store/slice/gallerySlice";

const Footer = () => {
  const limit = useSelector((state) => state.gallery.getGallery);
  const dispatch = useDispatch(galleryThunck({ page: 1, limit: 8 }));
  console.log(limit);
  
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
          <button className="flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 transition hover:border-blue-500 hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:text-base">
            ←
          </button>

          <button className="flex min-h-10 min-w-10 items-center justify-center rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 sm:text-base">
            1
          </button>

          <button className="flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 transition hover:border-blue-500 hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:text-base">
            2
          </button>

          <button className="flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 transition hover:border-blue-500 hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:text-base">
            3
          </button>

          <button className="flex min-h-10 items-center justify-center rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 transition hover:border-blue-500 hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:px-4 sm:text-base">
            Next →
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
