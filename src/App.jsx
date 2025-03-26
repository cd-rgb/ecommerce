import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
import Checkout from "./Pages/Checkout";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
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
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
