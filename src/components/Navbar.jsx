import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#000] w-full shadow-md z-50">
      {/* Top Bar */}
      <div className="text-white text-sm py-3">
        <div className="flex justify-between items-center px-10 py-2 border-b border-[#b79141]">
          <div className="flex items-center space-x-4 text-xl">
            <span>+00 123 456 789</span>
            <span>Email: info@gmail.com</span>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-10 py-5 shadow text-[#fff] flex justify-between items-center">
        {/* Logo */}
        <div className="container">
          <Link className="text-2xl font-semibold uppercase space-x-6 text-[#f0ebd1]/70" to="/">
            Coding With Yash
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex container justify-end space-x-6 text-lg items-center">
          <Link to="/" className="hover:text-[#b79141] transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#b79141] transition-colors">
            About Us
          </Link>
          <Link to="/shop" className="hover:text-[#b79141] transition-colors">
            Shop
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#b79141] transition-colors"
          >
            Contact
          </Link>
          <Link to="/cart" className="hover:text-[#b79141] transition-colors">
            Cart
          </Link>
          <button className="bg-[#b79141] text-white px-4 py-2 rounded-md hover:bg-[#a17d36] transition-colors">
            Call Now
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-2 space-y-2 text-[#2D3748]">
          <Link to="/" className="hover:text-[#b79141] py-2">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#b79141] py-2">
            About Us
          </Link>
          <Link to="/shop" className="hover:text-[#b79141] py-2">
            Shop
          </Link>
          <Link to="/contact" className="hover:text-[#b79141] py-2">
            Contact
          </Link>
          <Link to="/cart" className="hover:text-[#b79141] py-2">
            Cart
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
