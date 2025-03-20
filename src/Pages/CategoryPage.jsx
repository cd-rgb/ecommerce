import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const CategoryPage = ({ onAddToCart }) => {
  const { category } = useParams(); // Get the category from the URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products for the selected category
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch products for category: ${category}`);
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]); // Re-fetch when the category changes

  if (loading) {
    return <div className="text-center p-6">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center p-6 text-[#EF4444]">Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold  mb-6 text-center capitalize">
        {category} Products
      </h2>
      {products.length === 0 ? (
        <p className="text-center text-[#4A5568]">
          No products found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              onAddToCart={onAddToCart}
              image={product.image}
              price={product.price}
              title={product.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
