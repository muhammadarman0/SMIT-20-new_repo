import React from "react";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteToWishList } from "../store/slices/wishListSlice";
// import { addToCard } from "../store/slices/cartSlice";

const Wishlist = () => {

  const dispatch = useDispatch();
  const wishlistProducts = useSelector(
    (state) => state.wishList.wishListProduct,
  );
  const cardProducts = useSelector((state) => state.cart.cartProduct);
  const deleteWishList = useSelector((state) => state.wishList.wishListProduct);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b border-[#eeeeee]">
        <div className="mx-auto max-w-[1425px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[3px] text-gray-400">
            LUXEWEAR
          </p>

          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl text-[#17191b] sm:text-4xl lg:text-5xl">
                My Wishlist
              </h1>

              <p className="mt-3 text-sm text-gray-500">
                Your saved pieces, all in one place.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-sm text-gray-500 sm:flex">
              <Heart size={17} />
              <span>{wishlistProducts.length} Items</span>
            </div>
          </div>
        </div>
      </section>

      {/* Wishlist */}
      <section className="px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1425px]">
          {wishlistProducts.length > 0 ? (
            <>
              {/* Mobile count */}
              <div className="mb-6 flex items-center gap-2 text-xs text-gray-500 sm:hidden">
                <Heart size={15} />
                <span>{wishlistProducts.length} Items</span>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                {wishlistProducts.map((product) => (
                  <div key={product.id} className="group">
                    {/* Image */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-[#f4f4f4]">
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      </Link>

                      {/* Remove */}
                      <button
                        onClick={() => dispatch(deleteToWishList(product.id))}
                        type="button"
                        className="absolute right-3 top-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/95 text-gray-600 shadow-sm transition hover:bg-black hover:text-white"
                      >
                        <Trash2 size={15} strokeWidth={1.7} />
                      </button>

                      {/* Add to Cart */}
                      <button
                        onClick={() => dispatch(addToCard(product))}
                        type="button"
                        className="absolute bottom-3 left-3 right-3 flex h-11 cursor-pointer items-center justify-center gap-2 bg-[#17191b] text-xs font-medium text-white opacity-0 transition duration-300 group-hover:opacity-100"
                      >
                        <ShoppingBag size={15} />
                        Add to Cart
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="pt-4">
                      <p className="mb-1 text-[9px] uppercase tracking-[2px] text-gray-400 sm:text-[10px]">
                        {product.category}
                      </p>

                      <Link to={`/product/${product.id}`}>
                        <h3 className="line-clamp-1 text-[13px] font-medium text-[#17191b] sm:text-[14px]">
                          {product.title}
                        </h3>
                      </Link>

                      <p className="mt-2 text-[13px] font-medium text-[#17191b] sm:text-[14px]">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Empty Wishlist */
            <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f5f5f5]">
                <Heart size={30} strokeWidth={1.4} className="text-gray-400" />
              </div>

              <h2 className="mt-6 font-serif text-2xl text-[#17191b] sm:text-3xl">
                Your Wishlist is Empty
              </h2>

              <p className="mt-3 max-w-[400px] text-sm leading-6 text-gray-500">
                Save your favorite pieces here and come back whenever you're
                ready to shop.
              </p>

              <Link
                to="/shop"
                className="mt-7 inline-flex h-12 items-center justify-center bg-[#17191b] px-8 text-sm font-medium text-white transition hover:bg-[#303538]"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Wishlist;
