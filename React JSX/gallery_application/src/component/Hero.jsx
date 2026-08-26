import React from "react";

const Hero = ({ data , key }) => {
  return (
    <>
      {/* Gallery Grid */}
        {/* Card 1 */}
          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-purple-500/40">
            <div className="relative h-80 overflow-hidden">
              <img
                src={data.download_url}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="p-5">
              {/* <h3 className="text-xl font-bold">
                Mountain Escape
              </h3> */}

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 font-bold">
                  A
                </div>

                <div>
                  <p className="text-xs text-gray-500">Captured by</p>

                  <p className="text-sm text-gray-300">{data.author}</p>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default Hero;
