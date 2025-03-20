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
import CategoryPage from "./Pages/CategoryPage"; // Import CategoryPage

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
            <Route path="/category/:category" element={<CategoryPage />} /> {/* Add CategoryPage route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;