import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Star,
} from "lucide-react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addToCard } from "../store/slices/cartSlice";
import { toggleWishlist } from "../store/slices/wishListSlice";

const ProductDetails = () => {
  const { productID } = useParams();
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Dynamic Product API
  const getProduct = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://dummyjson.com/products/${productID}`,
      );

      if (!response.ok) {
        throw new Error("Product not found");
      }

      const data = await response.json();

      setProduct(data);
      setSelectedImage(0);
    } catch (error) {
      console.log("Product Details Error:", error);
      setError("Product not found");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProduct();
  }, [productID]);

  // Loading
  if (loading) {
    return (
      <main className="min-h-screen bg-white px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1425px] gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="aspect-[4/5] animate-pulse bg-gray-200" />

          <div className="flex flex-col justify-center">
            <div className="h-3 w-24 animate-pulse bg-gray-200" />
            <div className="mt-4 h-10 w-3/4 animate-pulse bg-gray-200" />
            <div className="mt-6 h-5 w-32 animate-pulse bg-gray-200" />
            <div className="mt-8 h-20 w-full animate-pulse bg-gray-200" />
            <div className="mt-8 h-14 w-full animate-pulse bg-gray-200" />
          </div>
        </div>
      </main>
    );
  }

  // Error
  if (error || !product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-5">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-[#17191b]">
            Product Not Found
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            The product you're looking for doesn't exist.
          </p>

          <Link
            to="/shop"
            className="mt-6 inline-flex items-center gap-2 bg-[#17191b] px-6 py-3 text-sm text-white"
          >
            <ArrowLeft size={16} />
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const images = product.images?.length ? product.images : [product.thumbnail];

  const nextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="border-b border-[#eeeeee] px-5 py-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1425px]">
          <div className="flex items-center gap-2 text-[11px] text-gray-400">
            <Link to="/" className="hover:text-black">
              Home
            </Link>

            <span>/</span>

            <Link to="/shop" className="hover:text-black">
              Shop
            </Link>

            <span>/</span>

            <span className="text-gray-600">{product.title}</span>
          </div>
        </div>
      </section>

      {/* Product */}
      <section className="px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1425px] gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ================= IMAGE SECTION ================= */}

          <div>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#f4f4f4]">
              <img
                src={images[selectedImage]}
                alt={product.title}
                className="h-full w-full object-cover"
              />

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-sm transition hover:bg-white"
                  >
                    <ChevronLeft size={19} />
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-sm transition hover:bg-white"
                  >
                    <ChevronRight size={19} />
                  </button>
                </>
              )}

              {product.discountPercentage > 0 && (
                <span className="absolute left-4 top-4 bg-[#17191b] px-3 py-1.5 text-[10px] font-medium tracking-wide text-white">
                  SALE
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto">
                {images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`h-20 w-16 shrink-0 cursor-pointer overflow-hidden border-2 sm:h-24 sm:w-20 ${
                      selectedImage === index
                        ? "border-[#17191b]"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ================= PRODUCT INFO ================= */}

          <div className="flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[3px] text-gray-400">
              {product.category}
            </p>

            <h1 className="mt-3 font-serif text-3xl leading-tight text-[#17191b] sm:text-4xl lg:text-[46px]">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star
                  size={15}
                  fill="currentColor"
                  className="text-[#17191b]"
                />

                <span className="text-sm font-medium">{product.rating}</span>
              </div>

              <span className="text-sm text-gray-400">Rating</span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-2xl font-medium text-[#17191b]">
                ${product.price}
              </span>

              {product.discountPercentage > 0 && (
                <span className="text-sm text-gray-400 line-through">
                  $
                  {(
                    product.price /
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-7 max-w-[600px] text-sm leading-7 text-gray-500">
              {product.description}
            </p>

            {/* Stock */}
            <div className="mt-6 flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${
                  product.stock > 0 ? "bg-green-500" : "bg-red-500"
                }`}
              />

              <span className="text-xs text-gray-500">
                {product.stock > 0
                  ? `${product.stock} items available`
                  : "Out of stock"}
              </span>
            </div>

            <div className="my-8 h-px bg-[#eeeeee]" />

            {/* Quantity */}
            <div>
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[2px] text-gray-500">
                Quantity
              </p>

              <div className="flex h-12 w-[140px] items-center justify-between border border-[#dfe2e5]">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  disabled={quantity === 1}
                  className="flex h-full w-10 cursor-pointer items-center justify-center text-gray-500 transition hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Minus size={16} />
                </button>

                <span className="text-sm">{quantity}</span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  disabled={quantity >= product.stock}
                  className="flex h-full w-10 cursor-pointer items-center justify-center text-gray-500 transition hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => dispatch(addToCard(product))}
                type="button"
                disabled={product.stock === 0}
                className="flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 bg-[#17191b] text-sm font-medium text-white transition hover:bg-[#303538] disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                <ShoppingBag size={18} />
                Add to Cart
              </button>

              <button
                onClick={() => dispatch(toggleWishlist(product))}
                type="button"
                className="flex h-14 w-full cursor-pointer items-center justify-center border border-[#dfe2e5] transition hover:border-[#17191b] sm:w-14"
              >
                <Heart size={19} strokeWidth={1.6} />
              </button>
            </div>

            {/* Extra Info */}
            <div className="mt-8 space-y-4 border-t border-[#eeeeee] pt-6">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Brand</span>
                <span className="text-[#17191b]">
                  {product.brand || "LUXEWEAR"}
                </span>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-gray-400">SKU</span>
                <span className="text-[#17191b]">
                  {product.sku || `LW-${product.id}`}
                </span>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Category</span>
                <span className="capitalize text-[#17191b]">
                  {product.category.replaceAll("-", " ")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
