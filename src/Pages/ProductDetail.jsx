import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PageBanner from "../components/PageBanner";
import { Star } from "lucide-react";
import { useCart } from "../components/Cart";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // Check if the product is already in the cart
  useEffect(() => {
    if (product) {
      const isInCart = cartItems.some((item) => item.id === product.id);
      setIsAddedToCart(isInCart);
    }
  }, [cartItems, product]);

  // Handle Add to Cart
  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
      });
      setIsAddedToCart(true);
    }
  };

  // Handle View Cart
  const handleViewCart = () => {
    navigate("/cart");
  };

  if (loading) {
    return <p className="text-center p-6">Loading product...</p>;
  }

  if (error) {
    return <p className="text-center p-6 text-[#EF4444]">Error: {error}</p>;
  }

  if (!product) {
    return <p className="text-center p-6 text-[#4A5568]">Product not found.</p>;
  }

  return (
    <>
      <PageBanner
        title={product.title}
        breadcrumb={`Home / Shop / ${product.title}`}
      />
      <div className=" bg-[#fff] mx-auto pt-20 pb-20 pr-10 pl-5">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-contain rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-[#2D3748] mb-4">
              {product.title}
            </h1>
            <p className="text-lg text-[#4A5568] mb-4">{product.description}</p>
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-[#2D3748] mr-4">
                ${product.price.toFixed(2)}
              </span>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    className={
                      index < Math.round(product.rating.rate)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
                <span className="ml-2 text-sm text-[#4A5568]">
                  ({product.rating.count} reviews)
                </span>
              </div>
            </div>
            <p className="text-[#4A5568] mb-4">
              <strong>Category:</strong> {product.category}
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              {!isAddedToCart ? (
                <button
                  onClick={handleAddToCart}
                  className="bg-[#b79141] text-white px-4 py-2 hover:bg-[#d0bb74] transition-colors"
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  onClick={handleViewCart}
                  className="bg-[#b79141] text-white px-4 py-2 hover:bg-[#d0bb74] transition-colors"
                >
                  View Cart
                </button>
              )}
              <Link
                to="/shop"
                className="bg-[#b79141] text-white px-4 py-2 hover:bg-[#d0bb74] transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
