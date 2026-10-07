import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "React.js",
      category: "Frontend",
      description: "Building modern and reusable user interfaces.",
      level: "Advanced",
    },
    {
      name: "JavaScript",
      category: "Frontend",
      description: "Creating interactive and dynamic web applications.",
      level: "Advanced",
    },
    {
      name: "HTML",
      category: "Frontend",
      description: "Creating structured and semantic web pages.",
      level: "Advanced",
    },
    {
      name: "CSS",
      category: "Frontend",
      description: "Designing responsive and modern interfaces.",
      level: "Advanced",
    },
    {
      name: "Redux",
      category: "State Management",
      description: "Managing application state in React applications.",
      level: "Intermediate",
    },
    {
      name: "Redux Toolkit",
      category: "State Management",
      description: "Building scalable Redux state management solutions.",
      level: "Intermediate",
    },
    {
      name: "Firebase",
      category: "Backend Services",
      description: "Authentication, Firestore database and backend services.",
      level: "Intermediate",
    },
    {
      name: "React Router DOM",
      category: "Frontend",
      description: "Creating navigation and routing in React applications.",
      level: "Intermediate",
    },
    {
      name: "MUI",
      category: "UI Library",
      description: "Building interfaces using Material UI components.",
      level: "Intermediate",
    },
    {
      name: "Bootstrap",
      category: "UI Framework",
      description: "Creating responsive layouts and UI components.",
      level: "Intermediate",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1120] text-white">
      <section className="mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-12 2xl:px-16">
        {/* Heading */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mx-auto w-full max-w-4xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm sm:tracking-[0.3em]">
            My Skills
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
            Technologies I <span className="text-cyan-400">Work With</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
            A collection of technologies and tools I use to build modern,
            responsive and practical web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mx-auto mt-12 grid w-full max-w-7xl grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 80}
              className="group rounded-2xl border border-white/10 bg-[#111827] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-400/5 sm:p-6"
            >
              {/* Icon Box */}
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-lg font-bold text-cyan-400 transition duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
                  {skill.name.charAt(0)}
                </div>

                <span className="rounded-full border border-white/10 bg-[#0B1120] px-3 py-1 text-[10px] font-medium text-slate-400 sm:text-xs">
                  {skill.level}
                </span>
              </div>

              {/* Content */}
              <h2 className="mt-5 text-lg font-bold text-white sm:text-xl">
                {skill.name}
              </h2>

              <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
                {skill.description}
              </p>

              {/* Category */}
              <div className="mt-5 border-t border-white/10 pt-4">
                <span className="text-xs font-medium text-cyan-400">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mx-auto mt-10 w-full max-w-7xl rounded-2xl border border-cyan-400/10 bg-[#111827] p-6 text-center sm:mt-12 sm:p-8 md:p-10"
        >
          <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">
            Building With{" "}
            <span className="text-cyan-400">Modern Technologies</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            I combine these technologies to create responsive interfaces, manage
            application state and build practical web applications.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Skills;
