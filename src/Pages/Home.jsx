import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import HomeSlider from "../components/HomeSlider";
import CategorySection from "../components/CategorySection";
import ContactForm from "../components/ContactForm";
import ProductCard from "../components/ProductCard"; // Import ProductCard to display products

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the API
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=8"
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
      <HomeSlider />

      {/* About Section */}
      <section className="my-10 mx-4 md:mx-15">
        <div className="aboutcontainer flex flex-col md:flex-row justify-start items-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1661964205360-b0621b5a9366?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvcmV8ZW58MHwwfDB8fHww"
            alt="About Us"
            className="rounded-lg shadow-md mt-6 w-full md:w-1/2 h-64 md:h-110 object-cover"
          />
          <section className="max-w-3xl my-10 mx-4 md:mx-15">
            <h2 className="text-3xl font-semibold text-[#2bfff2] my-5">
              Who We Are
            </h2>
            <p className="text-white-600 mt-2 text-lg">
              Welcome to Coding With Yash, where innovation meets excellence! 🚀
              We are a team of passionate professionals dedicated to delivering
              cutting-edge solutions that empower businesses and individuals.
              Our journey began with a simple vision: to bridge the gap between
              technology and people by offering high-quality digital solutions.
              Over the years, we have worked with numerous clients, helping them
              turn their ideas into reality. Whether it's web development,
              e-commerce solutions, or custom software, we strive to deliver
              exceptional results with creativity and precision. At Coding With
              Yash,
            </p>
            <p className="text-white-600 mt-10 text-lg">
              we believe that technology should be accessible, user-friendly,
              and impactful. Our commitment to excellence, innovation, and
              customer satisfaction sets us apart. With a strong focus on
              quality and long-term success, we ensure that every project we
              undertake exceeds expectations. Join us on this exciting journey
              and let’s create something extraordinary together!
            </p>
          </section>
        </div>
      </section>

      {/* Category Section */}
      <CategorySection />

      {/* Product Listing Section */}
      <section className="my-10 mx-4 md:mx-15">
        <h2 className="text-5xl font-bold mb-6 text-center">
          Our Featured Products
        </h2>
        {loading ? (
          <div className="text-center p-6">Loading products...</div>
        ) : error ? (
          <div className="text-center p-6 text-[#EF4444]">Error: {error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
              />
            ))}
          </div>
        )}
      </section>

      {/* Contact Form */}
      <ContactForm />
    </>
  );
};

export default Home;
