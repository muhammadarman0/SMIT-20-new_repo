import React from "react";

const About = () => {
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
            About Me
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
            Turning Ideas Into{" "}
            <span className="text-cyan-400">Digital Experiences</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
            I'm a passionate Frontend Developer focused on creating modern,
            responsive and user-friendly web applications with clean and
            maintainable code.
          </p>
        </div>

        {/* About Content */}
        <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-6 sm:mt-14 sm:gap-7 md:mt-16 md:gap-8 lg:grid-cols-2">
          {/* Who I Am */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full rounded-2xl border border-white/10 bg-[#111827] p-5 sm:p-7 md:p-8 lg:p-9 xl:p-10"
          >
            <h2 className="text-xl font-bold sm:text-2xl">
              Who <span className="text-cyan-400">I Am</span>
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-400 sm:mt-6 sm:space-y-5 sm:text-base sm:leading-8">
              <p>
                I'm a Frontend Developer who enjoys transforming ideas and
                designs into interactive web experiences. I focus on building
                interfaces that are clean, responsive and easy to use.
              </p>

              <p>
                My development journey is centered around React.js and modern
                frontend technologies. I have experience working with Redux,
                Redux Toolkit, Firebase and React Router to build practical web
                applications.
              </p>

              <p>
                I enjoy solving problems, learning through real projects and
                writing reusable components that make applications easier to
                maintain and scale.
              </p>
            </div>
          </div>

          {/* About My Work */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-full rounded-2xl border border-white/10 bg-[#111827] p-5 sm:p-7 md:p-8 lg:p-9 xl:p-10"
          >
            <h2 className="text-xl font-bold sm:text-2xl">
              About My <span className="text-cyan-400">Work</span>
            </h2>

            <div className="mt-6 space-y-4 sm:mt-7 sm:space-y-5">
              <div className="rounded-xl border border-white/10 bg-[#0B1120] p-4 transition duration-300 hover:border-cyan-400/40 sm:p-5">
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  Clean & Responsive UI
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
                  I build responsive interfaces that provide a consistent
                  experience across mobile, tablet and desktop devices.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0B1120] p-4 transition duration-300 hover:border-cyan-400/40 sm:p-5">
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  Practical Applications
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
                  I enjoy building real-world applications that solve problems
                  and provide useful experiences for users.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0B1120] p-4 transition duration-300 hover:border-cyan-400/40 sm:p-5">
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  Continuous Improvement
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
                  I continuously improve my development skills by building
                  projects, solving problems and exploring better approaches.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mx-auto mt-6 grid w-full max-w-6xl grid-cols-1 gap-4 sm:mt-7 sm:grid-cols-2 sm:gap-5 md:mt-8 md:grid-cols-3"
        >
          <div className="rounded-2xl border border-white/10 bg-[#111827] p-5 text-center sm:p-6">
            <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
              React
            </h3>

            <p className="mt-2 text-xs text-slate-400 sm:text-sm">
              Frontend Development
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111827] p-5 text-center sm:p-6">
            <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
              Redux
            </h3>

            <p className="mt-2 text-xs text-slate-400 sm:text-sm">
              State Management
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111827] p-5 text-center sm:p-6">
            <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
              Firebase
            </h3>

            <p className="mt-2 text-xs text-slate-400 sm:text-sm">
              Backend Services
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
