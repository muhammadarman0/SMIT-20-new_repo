import { lruMemoize } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Hero = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const limit = useSelector((state) => state.gallery.getGallery);



  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const showNext = () => {
    setSelectedIndex((current) => (current + 1) % limit.length);
  };
  const showPrevious = () => {
    setSelectedIndex(
      (current) => (current - 1 + limit.length) % limit.length,
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeImage();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex,limit]);

  return (
    <section className="min-h-screen bg-[#0b1120] px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-10 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        {/* Gallery Heading */}
        <div className="mb-8 text-center sm:mb-10 lg:mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Gal<span className="text-blue-500">lery</span>
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm text-slate-400 sm:text-base">
            Explore beautiful moments captured in time.
          </p>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {limit.map((image, index) => (
            <div
              key={image.src}
              onClick={() => openImage(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openImage(index);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Open ${image.alt}`}
              className="group relative h-60 cursor-pointer overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:h-64 md:h-64 lg:h-60 xl:h-64 2xl:h-72"
            >
              <img
                src={limit.download_url
}
                alt={limit.author}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Open Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 scale-75 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                  </svg>
                </span>
              </div>

              {/* Image Title */}
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <h2 className="text-base font-semibold sm:text-lg">
                  {limit.author}
                </h2>
                <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                  Click to view full image
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Image Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6 lg:p-10"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeImage}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-900/80 text-2xl text-white transition hover:bg-blue-600 sm:right-6 sm:top-6"
          >
            &times;
          </button>

          {/* Previous Image */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
            className="absolute left-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-900/80 text-2xl text-white transition hover:bg-blue-600 sm:left-6 sm:h-12 sm:w-12 lg:left-10"
          >
            &#8249;
          </button>

          {/* Selected Image */}
          <div
            className="flex max-h-[85vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-white/10 bg-[#101827] shadow-2xl sm:max-h-[88vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden p-2 sm:p-4">
              <img
                src={limit[selectedIndex].src}
                alt={limit[selectedIndex].alt}
                className="max-h-[65vh] w-full rounded-lg object-contain sm:max-h-[72vh]"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 px-4 py-3 sm:px-6 sm:py-4">
              <div className="min-w-0">
                <h2 className="truncate text-sm font-semibold sm:text-base">
                  {limit[selectedIndex].alt}
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Image {selectedIndex + 1} of {limit.length}
                </p>
              </div>

              <a
                href={limit[selectedIndex].src}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 rounded-lg bg-blue-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-blue-500 sm:px-4 sm:text-sm"
              >
                Open Original ↗
              </a>
            </div>
          </div>

          {/* Next Image */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-900/80 text-2xl text-white transition hover:bg-blue-600 sm:right-6 sm:h-12 sm:w-12 lg:right-10"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;
