import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const [categoryImages, setCategoryImages] = useState({}); // Store category images
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch categories and a representative image for each category
  useEffect(() => {
    const fetchCategoriesAndImages = async () => {
      try {
        // Fetch all categories
        const categoriesResponse = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        const fetchedCategories = categoriesResponse.data;

        // Fetch one product from each category to get an image
        const imagePromises = fetchedCategories.map(async (category) => {
          const productResponse = await axios.get(
            `https://fakestoreapi.com/products/category/${category}?limit=1`
          );
          const product = productResponse.data[0];
          return { category, image: product ? product.image : null };
        });

        const images = await Promise.all(imagePromises);
        const imageMap = images.reduce((acc, { category, image }) => {
          acc[category] = image || "https://via.placeholder.com/150"; // Fallback image
          return acc;
        }, {});

        setCategories(fetchedCategories);
        setCategoryImages(imageMap);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCategoriesAndImages();
  }, []);

  if (loading) {
    return <div className="text-center p-6">Loading categories...</div>;
  }

  if (error) {
    return <div className="text-center p-6 text-[#EF4444]">Error: {error}</div>;
  }

  return (
    <div className="p-6 ">
      <h2 className="text-5xl font-bold  mb-6 text-center tracking-wider">
        Shop by Category
      </h2>
      <div className="border-t border-[#b79141] max-w-3xs m-auto flex items-center py-5"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category}`}
            className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <img
              src={categoryImages[category]}
              alt={category}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-[#2D3748] capitalize">
              {category}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;