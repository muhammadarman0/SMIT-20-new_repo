import React from "react";
import { Link, useLocation } from "react-router-dom";

import blogImg from "../assets/blog.png";
import ecommerceImg from "../assets/ecommerce.png";
import todoImg from "../assets/todo.png";

const Projects = () => {
  const location = useLocation();
  const projects = [
    {
      title: "Blog Application",
      description:
        "A modern blog application with user authentication, Firestore database integration and image upload functionality.",
      technologies: ["React.js", "Firebase", "Cloudinary", "Tailwind"],
      type: "Web Application",
      image: blogImg,
      link: "https://blogapplication-lac.vercel.app/",
    },
    {
      title: "E-Commerce Application",
      description:
        "A responsive e-commerce application designed for browsing products and creating a smooth online shopping experience.",
      technologies: ["React.js", "JavaScript", "Tailwind"],
      type: "Web Application",
      image: ecommerceImg,
      link: "https://e-commerceapp-eta.vercel.app/",
    },
    {
      title: "Todo Application",
      description:
        "A productivity-focused todo application with state management and persistent data handling for managing daily tasks.",
      technologies: ["React.js", "Redux Toolkit", "Redux Persist", "Tailwind"],
      type: "Productivity App",
      image: todoImg,
      link: "https://redux-todo-application-two.vercel.app/",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1120] text-white">
      <section className="mx-auto w-full max-w-[1600px] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-12 2xl:px-16">
        {/* Heading */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mx-auto w-full max-w-4xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm sm:tracking-[0.3em]">
            My Projects
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
            Projects I've <span className="text-cyan-400">Built</span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
            A selection of applications I've built while developing my skills in
            modern frontend development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:gap-7 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={index * 150}
              className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111827] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/5"
            >
              {/* Project Image */}
              <div className="relative h-48 shrink-0 overflow-hidden bg-[#0F172A] sm:h-52 md:h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-transparent to-transparent" />

                {/* Project Type */}
                <span className="absolute right-3 top-3 max-w-[calc(100%-24px)] truncate rounded-full border border-white/10 bg-[#111827]/90 px-2.5 py-1 text-[9px] font-medium text-slate-300 backdrop-blur sm:right-4 sm:top-4 sm:px-3 sm:text-xs">
                  {project.type}
                </span>
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
                <h2 className="text-lg font-bold leading-snug text-white transition duration-300 group-hover:text-cyan-400 sm:text-xl md:text-2xl">
                  {project.title}
                </h2>

                <p className="mt-3 flex-1 text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="max-w-full break-words rounded-md border border-white/10 bg-[#0B1120] px-2 py-1.5 text-[9px] font-medium text-slate-300 sm:px-2.5 sm:text-xs"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-5 flex flex-col gap-2.5 border-t border-white/10 pt-5 min-[400px]:flex-row sm:mt-6 sm:gap-3">
                  <Link
                    to="/contact"
                    className="w-full rounded-lg bg-cyan-400 px-4 py-2.5 text-center text-xs font-bold text-slate-950 transition duration-300 hover:bg-cyan-300 sm:flex-1 sm:text-sm"
                  >
                    Contact Me
                  </Link>

                  <button
                    type="button"
                    className="w-full rounded-lg border border-white/10 px-4 py-2.5 text-center text-xs font-bold text-slate-300 transition duration-300 hover:border-cyan-400/40 hover:text-cyan-400 sm:flex-1 sm:text-sm"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      View Project
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        {location.pathname === "/projects" && (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mx-auto mt-8 w-full max-w-7xl rounded-2xl border border-white/10 bg-[#111827] p-5 text-center sm:mt-10 sm:p-7 md:p-8 lg:p-10"
          >
            <h2 className="text-xl font-bold leading-tight sm:text-2xl md:text-3xl">
              More Projects <span className="text-cyan-400">Coming Soon</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7 md:text-base md:leading-8">
              I'm continuously working on new projects to improve my skills and
              build better real-world web applications.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Projects;
