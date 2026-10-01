import React from "react";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCard,
  decrementQuantity,
  deleteToCart,
  increamentQuantity,
} from "../store/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart?.cartProduct || []);
  console.log(cartProducts);

  const subtotal = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  const shipping = subtotal >= 100 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <section className="border-b border-[#e8e8e8] bg-white">
        <div className="mx-auto max-w-[1425px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[3px] text-gray-400">
            LUXEWEAR
          </p>

          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl text-[#17191b] sm:text-4xl lg:text-5xl">
                Shopping Cart
              </h1>

              <p className="mt-3 text-sm text-gray-500">
                Review your selected pieces before checkout.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-sm text-gray-500 sm:flex">
              <ShoppingBag size={17} strokeWidth={1.6} />
              <span>{cartProducts.length} Items</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1425px] gap-8 lg:grid-cols-[1fr_390px] xl:gap-12">
          {/* Products */}
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-[1.5px] text-[#17191b]">
                Your Items
              </h2>

              <button
                onClick={() => dispatch(clearCard())}
                type="button"
                className="cursor-pointer text-xs text-gray-400 transition hover:text-red-500"
              >
                Clear Cart
              </button>
            </div>

            <div className="divide-y divide-[#e8e8e8] border-y border-[#e8e8e8] bg-white">
              {cartProducts.map((product) => (
                <div
                  key={product.id}
                  className="relative flex gap-4 p-4 sm:gap-5 sm:p-5 md:p-6"
                >
                  {/* Image */}
                  <Link
                    to={`/product/${product.id}`}
                    className="h-28 w-24 shrink-0 overflow-hidden bg-[#f3f3f3] sm:h-36 sm:w-28 md:h-40 md:w-32"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </Link>

                  {/* Product Info */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex justify-between gap-3">
                      <div className="min-w-0">
                        <p className="mb-1 text-[9px] uppercase tracking-[2px] text-gray-400">
                          {product.category}
                        </p>

                        <Link to={`/product/${product.id}`}>
                          <h3 className="line-clamp-2 pr-5 text-sm font-medium text-[#17191b] transition hover:text-gray-500 sm:text-base">
                            {product.title}
                          </h3>
                        </Link>
                      </div>

                      {/* Delete */}
                      <button
                        onClick={() => dispatch(deleteToCart(product.id))}
                        type="button"
                        className="shrink-0 cursor-pointer text-gray-400 transition hover:text-red-500"
                        title="Remove"
                      >
                        <Trash2 size={17} strokeWidth={1.6} />
                      </button>
                    </div>

                    <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                      {/* Quantity */}
                      <div>
                        <p className="mb-1.5 text-[9px] uppercase tracking-[1.5px] text-gray-400">
                          Quantity
                        </p>

                        <div className="flex h-9 items-center border border-[#dddddd]">
                          <button
                            onClick={() =>
                              dispatch(decrementQuantity(product.id))
                            }
                            type="button"
                            className="flex h-full w-9 cursor-pointer items-center justify-center text-gray-500 transition hover:bg-[#f5f5f5]"
                          >
                            <Minus size={13} />
                          </button>

                          <span className="flex h-full w-8 items-center justify-center border-x border-[#dddddd] text-xs">
                            {product.quantity}
                          </span>

                          <button
                            onClick={() =>
                              dispatch(increamentQuantity(product.id))
                            }
                            type="button"
                            className="flex h-full w-9 cursor-pointer items-center justify-center text-gray-500 transition hover:bg-[#f5f5f5]"
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-sm font-medium text-[#17191b] sm:text-base">
                          ${(product.price * product.quantity).toFixed(2)}
                        </p>

                        {product.quantity > 1 && (
                          <p className="mt-1 text-[10px] text-gray-400">
                            ${product.price.toFixed(2)} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-[#17191b] transition hover:text-gray-500 sm:text-sm"
            >
              <ArrowLeft size={15} />
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white p-5 sm:p-6 lg:sticky lg:top-28">
              <h2 className="text-sm font-semibold uppercase tracking-[1.5px] text-[#17191b]">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4 border-b border-[#e8e8e8] pb-6">
                <div className="flex justify-between gap-4 text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span className="text-[#17191b]">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between gap-4 text-sm text-gray-500">
                  <span>Shipping</span>
                  <span className="text-[#17191b]">
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between py-6">
                <span className="text-sm font-medium text-[#17191b]">
                  Total
                </span>

                <span className="text-xl font-semibold text-[#17191b]">
                  ${total.toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                className="flex h-13 w-full cursor-pointer items-center justify-center gap-2 bg-[#17191b] text-sm font-medium text-white transition hover:bg-[#303538]"
              >
                Proceed to Checkout
              </button>

              <div className="mt-5 text-center">
                <p className="text-[10px] leading-5 text-gray-400">
                  Free shipping on orders over $100
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
