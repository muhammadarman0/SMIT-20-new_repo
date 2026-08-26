import React, { useEffect, useState } from "react";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const api = async () => {
      setLoading(true);
      try {
        const result = await axios.get(
          `https://picsum.photos/v2/list?page=${page}&limit=${limit}`,
        );
        setData(result.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    api();
  }, [page, limit]);
  return (
    <div className="min-h-screen bg-[#070B17] text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-[#070B17]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold tracking-wide">
            <span className="text-purple-400">G</span>allery
          </h1>

          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a href="#" className="transition hover:text-white">
              Home
            </a>

            <a href="#" className="text-purple-400">
              Gallery
            </a>

            <a href="#" className="transition hover:text-white">
              About
            </a>
          </div>

          <button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-purple-500/20 transition hover:scale-105">
            Explore
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-purple-400">
            Visual Stories
          </p>

          <h2 className="text-5xl font-black leading-tight md:text-7xl">
            Explore
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Beautiful Moments
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Discover stunning photography and creative moments captured by
            talented photographers.
          </p>
        </div>

        {loading ? (
          // <!-- From Uiverse.io by devAaus -->
          <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
              <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-5">
            {data.map((item) => (
              <Hero key={item.id} data={item} />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <Footer setLimit={setLimit} page={page} setPage={setPage} />
    </div>
  );
};

export default App;
