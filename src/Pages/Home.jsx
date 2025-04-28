import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import ContactForm from "../components/ContactForm";
import ProductCard from "../components/ProductCard"; // Import ProductCard to display products
import CtaSection from "../components/CtaSection";
import AboutSection from "../components/AboutSection"

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the API
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <HeroSection />

      <AboutSection />
      <CategorySection />
      <section className="my-10  mx-4 md:mx-15">
        <h2 className="text-5xl font-bold mb-6 text-center tracking-wider">
          Our Featured Products
        </h2>
        <div className="border-t border-[#b79141] max-w-3xs m-auto flex items-center py-5"></div>
        {loading ? (
          <div className="text-center p-6">Loading products...</div>
        ) : error ? (
          <div className="text-center p-6 text-[#EF4444]">Error: {error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
                product={product}
              />
            ))}
          </div>
        )}
      </section>
      <CtaSection />
      <ContactForm />
    </>
  );
};

export default Home;
