import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../component/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=4");

      const data = await response.json();

      setProducts(data.products);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="bg-white">
      {/* =================================================
          HERO SECTION
      ================================================= */}

      <section className="relative min-h-[650px] overflow-hidden sm:min-h-[700px] lg:min-h-[calc(100vh-82px)]">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
          alt="LUXEWEAR Collection"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative mx-auto flex min-h-[650px] w-full max-w-[1425px] items-center px-5 sm:min-h-[700px] sm:px-8 lg:min-h-[calc(100vh-82px)] lg:px-10">
          <div className="max-w-[680px] text-white">
            <p className="mb-5 text-[10px] font-medium tracking-[4px] sm:text-xs sm:tracking-[5px]">
              NEW COLLECTION — 2026
            </p>

            <h1 className="font-serif text-[52px] font-normal leading-[0.98] sm:text-[68px] md:text-[80px] lg:text-[96px]">
              Wear your
              <br />
              confidence.
            </h1>

            <p className="mt-6 max-w-[510px] text-[14px] leading-[1.8] text-white/85 sm:text-[16px]">
              Discover refined essentials and contemporary pieces designed to
              elevate your everyday style.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-flex h-[54px] items-center gap-4 bg-white px-7 text-[12px] font-medium text-[#17191b] transition hover:bg-[#eeeeee] sm:h-[58px] sm:px-8 sm:text-[13px]"
            >
              SHOP COLLECTION
              <ArrowRight size={17} strokeWidth={1.7} />
            </Link>
          </div>
        </div>
      </section>

      {/* =================================================
          FEATURES
      ================================================= */}

      <section className="border-b border-[#eeeeee]">
        <div className="mx-auto grid max-w-[1425px] grid-cols-1 sm:grid-cols-3">
          <div className="flex items-center gap-4 border-b border-[#eeeeee] px-5 py-7 sm:border-b-0 sm:border-r sm:px-8 lg:px-10">
            <Truck size={25} strokeWidth={1.4} />

            <div>
              <h3 className="text-[13px] font-medium">Free Shipping</h3>

              <p className="mt-1 text-[11px] text-gray-500">
                On orders over $100
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-[#eeeeee] px-5 py-7 sm:border-b-0 sm:border-r sm:px-8 lg:px-10">
            <ShieldCheck size={25} strokeWidth={1.4} />

            <div>
              <h3 className="text-[13px] font-medium">Secure Payment</h3>

              <p className="mt-1 text-[11px] text-gray-500">
                100% secure checkout
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-5 py-7 sm:px-8 lg:px-10">
            <RotateCcw size={25} strokeWidth={1.4} />

            <div>
              <h3 className="text-[13px] font-medium">Easy Returns</h3>

              <p className="mt-1 text-[11px] text-gray-500">
                30 day return policy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          SHOP BY CATEGORY
      ================================================= */}

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1425px]">
          <div className="mb-10 flex items-end justify-between sm:mb-12">
            <div>
              <p className="mb-2 text-[10px] tracking-[3px] text-gray-400">
                EXPLORE
              </p>

              <h2 className="font-serif text-[34px] text-[#17191b] sm:text-[42px]">
                Shop by Category
              </h2>
            </div>

            <Link
              to="/shop"
              className="hidden items-center gap-2 text-[12px] underline sm:flex"
            >
              View All
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {/* Men */}
            <Link
              to="/men"
              className="group relative h-[280px] overflow-hidden sm:h-[380px] lg:h-[450px]"
            >
              <img
                src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc"
                alt="Men"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute bottom-6 left-5 text-white">
                <h3 className="font-serif text-2xl">Men</h3>
                <p className="mt-1 text-[11px]">Explore Collection</p>
              </div>

              <ArrowUpRight
                size={20}
                className="absolute right-5 top-5 text-white"
              />
            </Link>

            {/* Women */}
            <Link
              to="/women"
              className="group relative h-[280px] overflow-hidden sm:h-[380px] lg:h-[450px]"
            >
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
                alt="Women"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute bottom-6 left-5 text-white">
                <h3 className="font-serif text-2xl">Women</h3>
                <p className="mt-1 text-[11px]">Explore Collection</p>
              </div>

              <ArrowUpRight
                size={20}
                className="absolute right-5 top-5 text-white"
              />
            </Link>

            {/* Shoes */}
            <Link
              to="/men"
              className="group relative h-[280px] overflow-hidden sm:h-[380px] lg:h-[450px]"
            >
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt="Shoes"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute bottom-6 left-5 text-white">
                <h3 className="font-serif text-2xl">Shoes</h3>
                <p className="mt-1 text-[11px]">Explore Collection</p>
              </div>

              <ArrowUpRight
                size={20}
                className="absolute right-5 top-5 text-white"
              />
            </Link>

            {/* Accessories */}
            <Link
              to="/women"
              className="group relative h-[280px] overflow-hidden sm:h-[380px] lg:h-[450px]"
            >
              <img
                src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49"
                alt="Accessories"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute bottom-6 left-5 text-white">
                <h3 className="font-serif text-2xl">Accessories</h3>
                <p className="mt-1 text-[11px]">Explore Collection</p>
              </div>

              <ArrowUpRight
                size={20}
                className="absolute right-5 top-5 text-white"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =================================================
          FEATURED PRODUCTS
      ================================================= */}

      <section className="bg-[#f7f7f6] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1425px]">
          <div className="mb-10 flex items-end justify-between sm:mb-12">
            <div>
              <p className="mb-2 text-[10px] tracking-[3px] text-gray-400">
                OUR SELECTION
              </p>

              <h2 className="font-serif text-[34px] text-[#17191b] sm:text-[42px]">
                Featured Products
              </h2>
            </div>

            <Link
              to="/shop"
              className="hidden items-center gap-2 text-[12px] underline sm:flex"
            >
              Shop All
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Loading */}
          {loading ? (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item}>
                  <div className="aspect-[3/4] animate-pulse bg-gray-200" />

                  <div className="mt-4 h-3 w-20 animate-pulse bg-gray-200" />

                  <div className="mt-2 h-4 w-32 animate-pulse bg-gray-200" />

                  <div className="mt-2 h-4 w-16 animate-pulse bg-gray-200" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =================================================
          BRAND BANNER
      ================================================= */}

      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
          alt="LUXEWEAR Collection"
          className="h-[500px] w-full object-cover sm:h-[600px]"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
          <div className="max-w-[650px] text-white">
            <p className="mb-4 text-[10px] tracking-[4px]">LUXEWEAR</p>

            <h2 className="font-serif text-[42px] leading-[1.1] sm:text-[60px]">
              Elegance never
              <br />
              goes out of style.
            </h2>

            <p className="mx-auto mt-5 max-w-[480px] text-[13px] leading-[1.8] text-white/85 sm:text-[15px]">
              Thoughtfully designed pieces made to become a timeless part of
              your wardrobe.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-flex h-[54px] items-center gap-3 bg-white px-7 text-[12px] font-medium text-[#17191b] hover:bg-gray-100"
            >
              DISCOVER LUXEWEAR
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
