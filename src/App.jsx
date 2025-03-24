import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import CartPage from "./Pages/CartPage";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import CategoryPage from "./Pages/CategoryPage";
import ProductDetail from "./Pages/ProductDetail";

// Placeholder pages
const Services = () => (
  <div className="p-6">
    <h1>Services Page</h1>
  </div>
);
const Pricing = () => (
  <div className="p-6">
    <h1>Pricing Page</h1>
  </div>
);
const Results = () => (
  <div className="p-6">
    <h1>Results Page</h1>
  </div>
);
const Book = () => (
  <div className="p-6">
    <h1>Book Now Page</h1>
  </div>
);

const App = () => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col font-[Poppins]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/results" element={<Results />} />
            <Route path="/book" element={<Book />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
