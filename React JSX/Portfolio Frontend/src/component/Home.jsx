import React from "react";
import { Link, useLocation } from "react-router-dom";
import main from "../assets/main.png";
// import {index} from "../../public/"
const Home = () => {
  const location = useLocation();
  return (
    <main className="min-h-[calc(100vh-80px)] overflow-hidden bg-[#0B1120] text-white">
      <section className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-[1600px] items-center px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-20 xl:px-12 2xl:px-16">
        <div className="grid w-full grid-cols-1 items-center gap-12 sm:gap-14 md:gap-16 lg:grid-cols-2 lg:gap-10 xl:gap-16 2xl:gap-24">
          {/* Left Content */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:mb-4 sm:text-sm sm:tracking-[0.3em] md:text-base">
              Hello, I'm
            </p>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              Muhammad Arman
            </h1>

            <h2 className="mt-3 text-xl font-semibold text-slate-300 sm:mt-4 sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
              Frontend <span className="text-cyan-400">Developer</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8 md:text-lg lg:mx-0">
              I build modern, responsive and user-friendly web applications
              using React.js and modern frontend technologies. I focus on
              creating clean interfaces and practical digital experiences.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
              <Link
                to="/projects"
                className="w-full rounded-lg bg-cyan-400 px-6 py-3 text-center text-sm font-bold text-slate-950 transition duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 sm:w-auto sm:px-7"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="w-full rounded-lg border border-cyan-400 px-6 py-3 text-center text-sm font-bold text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-slate-950 sm:w-auto sm:px-7"
              >
                Contact Me
              </Link>
              <a
                href="../../public/Arman-CV.pdf.pdf"
                download="Muhammad-Arman-CV.pdf"
                className="w-full rounded-lg border border-slate-600 px-6 py-3 text-center text-sm font-bold text-slate-300 transition duration-300 hover:border-cyan-400 hover:text-cyan-400 sm:w-auto sm:px-7"
              >
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center justify-center gap-5 sm:mt-10 lg:justify-start">
              <a
                href="https://github.com/muhammadarman0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-400 transition duration-300 hover:text-cyan-400"
              >
                GitHub
              </a>

              <span className="h-1 w-1 rounded-full bg-slate-600"></span>

              <a
                href="https://www.linkedin.com/in/arman-coder/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-400 transition duration-300 hover:text-cyan-400"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex w-full justify-center lg:justify-end"
          >
            <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-80 lg:w-80 xl:h-96 xl:w-96 2xl:h-[430px] 2xl:w-[430px]">
              {/* Glow */}
              <div className="absolute inset-6 rounded-full bg-cyan-400/10 blur-3xl sm:inset-8"></div>

              {/* Main Circle */}
              <div className="relative h-52 w-52 overflow-hidden rounded-full border border-cyan-400/30 bg-[#111827] shadow-2xl shadow-cyan-400/10 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-64 lg:w-64 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96">
                <img
                  src={main}
                  alt="Muhammad Arman"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Decorative Ring */}
              <div className="absolute h-56 w-56 rounded-full border border-cyan-400/10 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-72 lg:w-72 xl:h-88 xl:w-88 2xl:h-[410px] 2xl:w-[410px]"></div>

              {/* Top Right Dot */}
              <div className="absolute right-0 top-8 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 sm:right-1 sm:top-10 sm:h-3 sm:w-3"></div>

              {/* Bottom Left Dot */}
              <div className="absolute bottom-8 left-0 h-2 w-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/50 sm:bottom-12 sm:h-2.5 sm:w-2.5"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
