import React from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="group">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f3f3f3]">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Discount */}
        {product.discountPercentage > 0 && (
          <span className="absolute left-3 top-3 bg-[#17191b] px-2.5 py-1 text-[10px] font-medium text-white">
            SALE
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          className="absolute right-3 top-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/90 transition hover:bg-white"
        >
          <Heart size={17} strokeWidth={1.6} />
        </button>

        {/* Add to Cart */}
        <button
          type="button"
          className="
            absolute
            bottom-3
            left-3
            right-3
            flex
            h-11
            translate-y-2
            items-center
            justify-center
            gap-2
            bg-white
            text-[12px]
            font-medium
            opacity-0
            transition
            duration-300
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <ShoppingBag size={16} strokeWidth={1.6} />
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="pt-4">
        <p className="mb-1 text-[10px] uppercase tracking-[2px] text-gray-400">
          {product.category}
        </p>

        <Link to={`/product/${product.id}`}>
          <h3 className="line-clamp-1 text-[14px] font-medium text-[#17191b]">
            {product.title}
          </h3>
        </Link>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-[14px] font-medium text-[#17191b]">
            ${product.price}
          </p>

          <div className="flex items-center gap-1 text-gray-500">
            <Star size={13} fill="currentColor" />
            <span className="text-[11px]">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
