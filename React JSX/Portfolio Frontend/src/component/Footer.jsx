import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0B1120] text-white">
      <div className="mx-auto w-full max-w-[1600px] px-4 py-10 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="inline-block text-2xl font-bold tracking-tight"
            >
              Muhammad <span className="text-cyan-400">Arman</span>
            </Link>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-400 md:mx-0">
              Frontend Developer focused on building modern, responsive and
              user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3">
              <Link
                to="/"
                className="text-sm text-slate-400 transition duration-300 hover:text-cyan-400"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-sm text-slate-400 transition duration-300 hover:text-cyan-400"
              >
                About
              </Link>

              <Link
                to="/skills"
                className="text-sm text-slate-400 transition duration-300 hover:text-cyan-400"
              >
                Skills
              </Link>

              <Link
                to="/projects"
                className="text-sm text-slate-400 transition duration-300 hover:text-cyan-400"
              >
                Projects
              </Link>

              <Link
                to="/contact"
                className="text-sm text-slate-400 transition duration-300 hover:text-cyan-400"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Connect With Me
            </h3>

            <div className="mt-4 flex justify-center gap-3 md:justify-end">
              <a
                href="https://github.com/muhammadarman0"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-[#111827] px-4 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:border-cyan-400/50 hover:text-cyan-400"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/arman-coder/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-[#111827] px-4 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:border-cyan-400/50 hover:text-cyan-400"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500 sm:text-sm">
            © 2026 Muhammad Arman. All rights reserved.
          </p>

          <p className="text-xs text-slate-500 sm:text-sm">
            Built with <span className="text-cyan-400">React.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
