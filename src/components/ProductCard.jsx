import { ShoppingCart, Star } from "lucide-react";
import React from "react";
import { useCart } from "../components/Cart";

const ProductCard = (product) => {
  const { addToCart } = useCart();
  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white hover:shadow-lg transition duration-300">
      
      {/* Product Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-48 h-48 object-cover rounded-md m-auto"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4 flex flex-col space-between items-between justify-between content-between">
        <h2 className="text-xl text-center text-emerald-700 font-semibold">
          {product.title}
        </h2>

        {/* Price */}
        <div className="flex items-center gap-5 justify-center mt-2">
          <span className="text-xl font-bold text-red-500">
            ${product.price}
          </span>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            <ShoppingCart size={18} className="mr-1" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
