import { useState } from "react";
import React from "react";

import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" w-full bg-white shadow-md z-50">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white text-sm py-3">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4 text-xl">
            <span>📞 +00 123 456 789</span>
            <span>📧 info@gmail.com</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:underline text-xl">
              Login
            </a>
            <a href="#" className="hover:underline text-xl">
              Wishlist
            </a>
            <a href="#" className="hover:underline text-xl">
              My Account
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-white px-10 py-5 shadow flex justify-between">
        <div className="container">
          <h1 className="text-4xl text-[#111] space-x-6  font-semibold">
            Coding With Yash
          </h1>
        </div>
        <div className="container flex  justify-end space-x-6 text-lg font-semibold md:flex">
          <Link className="text-black text-2xl" to="/">
            Home
          </Link>
          <Link className="text-black text-2xl" to="/about">
            About Us
          </Link>
          <Link className="text-black text-2xl" to="/shop">
            Shop
          </Link>
          <Link className="text-black text-2xl" to="/contact">
            Contact
          </Link>
          <Link className="text-black text-2xl" to="/cart">
            Cart
          </Link>
          <button className="bg-blue-600 text-2xl text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Call Now</button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center bg-white py-2 space-y-2">
            <a href="#" className="hover:text-red-500">
              Home
            </a>
            <a href="#" className="text-red-500">
              About us
            </a>
            <a href="#" className="hover:text-red-500">
              Pages
            </a>
            <a href="#" className="hover:text-red-500">
              Shop
            </a>
            <a href="#" className="hover:text-red-500">
              Blog
            </a>
            <a href="#" className="hover:text-red-500">
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
