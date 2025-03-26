import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import PageBanner from "../components/PageBanner";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter States
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortByName, setSortByName] = useState(""); // "asc" or "desc"
  const [minRating, setMinRating] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch products
  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setFilteredProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const categories = [...new Set(products.map((product) => product.category))];

  // Apply filters
  useEffect(() => {
    let filtered = [...products];

    // Filter by price
    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by rating
    filtered = filtered.filter((product) => product.rating.rate >= minRating);

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort by name
    if (sortByName) {
      filtered.sort((a, b) =>
        sortByName === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title)
      );
    }

    setFilteredProducts(filtered);
  }, [products, priceRange, sortByName, minRating, selectedCategory]);

  return (
    <>
      <PageBanner title="SHOP NOW" breadcrumb="Home / Shop" />
      <div className="flex py-20 px-5 gap-6">
        {/* Filter Section */}
        <div className="w-1/4 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-[#2D3748] mb-4">Filters</h2>

          {/* Price Filter */}
          <div className="mb-4">
            <label className="block text-[#4A5568] mb-2">Price Range</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                className="w-1/2 p-2 border rounded text-[#2D3748]"
                placeholder="Min"
              />
              <span>-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-1/2 p-2 border rounded text-[#2D3748]"
                placeholder="Max"
              />
            </div>
          </div>

          {/* Sort by Name */}
          <div className="mb-4">
            <label className="block text-[#4A5568] mb-2">Sort by Name</label>
            <select
              value={sortByName}
              onChange={(e) => setSortByName(e.target.value)}
              className="w-full p-2 border rounded text-[#2D3748]"
            >
              <option value="">None</option>
              <option value="asc">A to Z</option>
              <option value="desc">Z to A</option>
            </select>
          </div>

          {/* Rating Filter */}
          <div className="mb-4">
            <label className="block text-[#4A5568] mb-2">Minimum Rating</label>
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="w-full p-2 border rounded text-[#2D3748]"
            >
              <option value={0}>All</option>
              <option value={1}>1 Star & Up</option>
              <option value={2}>2 Stars & Up</option>
              <option value={3}>3 Stars & Up</option>
              <option value={4}>4 Stars & Up</option>
            </select>
          </div>

          {/* Category Filter */}
          <div className="mb-4">
            <label className="block text-[#4A5568] mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border rounded text-[#2D3748]"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Section */}
        <div className="w-3/4">
          <h2 className="text-5xl font-bold mb-3">
            Our Featured Products
          </h2>
          <p className="mb-6">Browse our curated collection of minimalist designs that combine form and function.</p>
          {loading ? (
            <p className="text-center p-6">Loading products...</p>
          ) : error ? (
            <p className="text-center p-6 text-[#EF4444]">Error: {error}</p>
          ) : filteredProducts.length === 0 ? (
            <p className="text-center p-6 text-[#4A5568]">
              No products available.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
