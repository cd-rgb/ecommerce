import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, title, image, price, rating } = product;

  return (
    <div className="flex flex-col justify-between border border-[#b79141] shadow-sm p-4 bg-white hover:shadow-lg transition duration-300 w-full">
      {/* Product Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-48 h-48 object-cover rounded-md mx-auto"
        />
        <div>
          <h2 className="text-lg font-semibold text-[#2D3748] text-center line-clamp-2">
            {title}
          </h2>

          {/* Rating */}
          {rating && (
            <div className="flex items-center justify-center mt-2">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className={
                    index < Math.round(rating.rate)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
              <span className="ml-2 text-sm text-[#4A5568]">
                ({rating.count})
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-2 flex flex-col items-center space-between">
        <div className="flex items-center justify-evenly w-full mt-3">
          <span className="text-xl text-[#111]">${price.toFixed(2)}</span>
          <Link
            to={`/product/${id}`}
            className="bg-[#b79141] text-white px-4 py-2 hover:bg-[#d0bb74] transition-colors"
          >
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
