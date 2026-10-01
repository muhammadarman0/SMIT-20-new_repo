import React, { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useSelector } from "react-redux";
import ProductCard from "../component/ProductCard";

const Men = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  // Redux se men's products
  const products = useSelector((state) => state.menProduct.menProductApi);
  const loading = useSelector((state) => state.menProduct.loading);

  console.log(products);
  console.log(loading);

  const categories = ["all", "mens-shirts", "mens-shoes"];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (category !== "all") {
      result = result.filter((product) => product.category === category);
    }

    // Search
    if (search.trim()) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Sort
    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [products, category, search, sort]);

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setSort("default");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b border-[#eeeeee] px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-[1425px]">
          <p className="mb-3 text-[10px] tracking-[3px] text-gray-400">
            LUXEWEAR COLLECTION
          </p>

          <h1 className="font-serif text-[42px] text-[#17191b] sm:text-[56px]">
            Men
          </h1>

          <p className="mt-4 max-w-[550px] text-[13px] leading-[1.8] text-gray-500 sm:text-[15px]">
            Discover our collection of contemporary menswear, timeless
            essentials and everyday styles.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1425px]">
          {/* Controls */}
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-[420px]">
              <Search
                size={18}
                strokeWidth={1.7}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search men's products..."
                className="h-[50px] w-full border border-[#dfe2e5] bg-white pl-11 pr-10 text-[13px] outline-none transition focus:border-[#17191b]"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-black"
                >
                  <X size={17} />
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <SlidersHorizontal
                size={17}
                strokeWidth={1.6}
                className="text-gray-500"
              />

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-[50px] w-full cursor-pointer border border-[#dfe2e5] bg-white px-4 text-[13px] outline-none sm:w-[210px]"
              >
                <option value="default">Sort By</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex min-w-max gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`cursor-pointer whitespace-nowrap border px-4 py-2.5 text-[11px] capitalize transition ${
                    category === item
                      ? "border-[#17191b] bg-[#17191b] text-white"
                      : "border-[#dfe2e5] bg-white text-[#555] hover:border-[#17191b]"
                  }`}
                >
                  {item === "all" ? "All" : item.replaceAll("-", " ")}
                </button>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className="mb-7 flex items-center justify-between">
            <p className="text-[12px] text-gray-500">
              {filteredProducts.length} products
            </p>

            {(search || category !== "all" || sort !== "default") && (
              <button
                type="button"
                onClick={clearFilters}
                className="cursor-pointer text-[12px] font-medium underline"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Loading */}
          {loading ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item}>
                  <div className="aspect-[3/4] animate-pulse bg-gray-200" />
                  <div className="mt-4 h-3 w-20 animate-pulse bg-gray-200" />
                  <div className="mt-2 h-4 w-32 animate-pulse bg-gray-200" />
                  <div className="mt-2 h-4 w-16 animate-pulse bg-gray-200" />
                </div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            /* Products */
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            /* Empty */
            <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
              <h2 className="font-serif text-2xl text-[#17191b]">
                No Products Found
              </h2>

              <p className="mt-2 text-[13px] text-gray-500">
                Try changing your search or filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 bg-[#17191b] px-6 py-3 text-[12px] text-white"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Men;
