import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const currentPrice = product.discountPrice || product.price;

  return (
    <div className="group relative bg-white border border-gray-200/90 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-full hover:shadow-md hover:border-gray-300 transition-all duration-300 text-left">
      {/* Product Image Area */}
      <Link
        to={`/product/${product.id}`}
        className="relative aspect-square w-full flex items-center justify-center p-2 mb-3 overflow-hidden rounded-lg bg-gray-50/50"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
            <span className="bg-gray-900 text-white px-3 py-1 rounded text-[10px] font-semibold uppercase tracking-wider">
              Out of Stock
            </span>
          </div>
        )}
      </Link>

      {/* Product Info Block */}
      <div className="space-y-1">
        {/* Brand */}
        <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-gray-900 line-clamp-1">
          <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
            {product.brand}
          </Link>
        </h4>

        {/* Model / Name */}
        <p className="text-sm sm:text-base text-gray-800 font-normal line-clamp-1">
          <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </p>

        {/* Price Row */}
        <div className="flex items-baseline gap-1.5 sm:gap-2 flex-wrap pt-2">
          <span className="text-base sm:text-lg font-bold text-gray-900">
            ₹{currentPrice.toLocaleString("en-IN")}
          </span>
          {product.discountPrice && (
            <span className="text-xs sm:text-sm line-through text-gray-400 font-normal">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
