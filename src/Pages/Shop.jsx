import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import PageBanner from "../components/PageBanner";

const Home = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <PageBanner
        title="SHOP NOW"
        breadcrumb="Home / Shop"
        backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.category}
              image={product.image}
              price={product.price}
            />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </>
  );
};
export default Home;
