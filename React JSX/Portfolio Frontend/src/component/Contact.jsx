import React from "react";
import { Link, useLocation } from "react-router-dom";

const Contact = () => {
  const Location = useLocation();
  return (
    <section className="min-h-screen overflow-hidden bg-[#0B1120] px-4 py-24 text-[#F8FAFC] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Get In Touch
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Let's Work Together
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base">
            Have a project, idea, or opportunity in mind? Feel free to reach
            out. I'm always interested in discussing new projects and
            opportunities.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Side */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="space-y-6"
          >
            {/* Contact Card */}
            <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6 shadow-xl sm:p-8">
              <h2 className="text-2xl font-bold">Contact Information</h2>

              <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
                I'm available for freelance projects, internships, and frontend
                development opportunities.
              </p>

              <div className="mt-8 space-y-5">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-400">
                    ✉
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                      Email
                    </p>

                    <p className="mt-1 break-all text-sm font-medium text-[#F8FAFC]">
                      armandevs74@gmail.com
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-400/10 text-xl text-indigo-400">
                    ⌖
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-medium text-[#F8FAFC]">
                      Pakistan | Karachi
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-xl text-emerald-400">
                    ✓
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                      Availability
                    </p>

                    <p className="mt-1 text-sm font-medium text-[#F8FAFC]">
                      Open to opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Card */}
            <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6 sm:p-8">
              <h2 className="text-xl font-bold">Let's Connect</h2>

              <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
                You can also find me on these platforms.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://github.com/muhammadarman0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-medium transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/arman-coder-77500a38a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-medium transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="rounded-2xl border border-slate-800 bg-[#111827] p-6 shadow-xl sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Send Me a Message
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
                Fill out the form below and let's discuss your project or
                opportunity.
              </p>
            </div>

            <form className="space-y-6">
              {/* Name + Email */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-700 bg-[#0B1120] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-slate-700 bg-[#0B1120] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-xl border border-slate-700 bg-[#0B1120] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-slate-700 bg-[#0B1120] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="button"
                className="w-full rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-[#0B1120] transition duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        {location.pathname === "/contact" && (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-16 text-center"
          >
            <p className="text-sm text-[#94A3B8]">
              Have an interesting project in mind?
            </p>

            <Link
              to="/projects"
              className="mt-2 inline-block text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              Explore My Projects →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
