
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B1120]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-2xl font-bold tracking-wide text-white"
          >
            Arman<span className="text-cyan-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-400"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-400"
            >
              About
            </Link>

            <Link
              to="/skills"
              className="text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-400"
            >
              Skills
            </Link>

            <Link
              to="/projects"
              className="text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-400"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition duration-300 hover:border-cyan-400 hover:text-cyan-400 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <span className="text-2xl">×</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
            <Link
              to="/"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:bg-white/5 hover:text-cyan-400"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:bg-white/5 hover:text-cyan-400"
            >
              About
            </Link>

            <Link
              to="/skills"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:bg-white/5 hover:text-cyan-400"
            >
              Skills
            </Link>

            <Link
              to="/projects"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:bg-white/5 hover:text-cyan-400"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 rounded-lg bg-cyan-400 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

