import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Menu, X } from "lucide-react";
import {signUp,login} from '../auth.js'; // Import your auth functions here

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between Sign Up and Login
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleAuth = (e) => {
    e.preventDefault();
  
    if (isSignUp) {
      // Call your signUp function here
      signUp(email, password);
    } else {
      // Call login function
      login(email, password);
    }
  };
  


  return (
    <header className="bg-[#000] w-full shadow-md z-50">
      {/* Top Bar */}
      <div className="text-white text-sm py-3 bg-[#1a1a1a]">
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
      <nav className="px-10 py-5 shadow text-[#fff] flex justify-between items-center bg-[#333]">
        {/* Logo */}
        <div className="container">
          <Link
            className="text-2xl font-semibold uppercase space-x-6 text-[#f0ebd1]/70"
            to="/"
          >
            Coding With Sanket
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
          <button
            className="bg-[#b79141] text-white px-4 py-2 rounded-md hover:bg-[#a17d36] transition-colors"
            onClick={() => setShowModal(true)}
          >
            Sign up
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

      {/* Modal for Sign Up / Login */}
      {showModal && (
        <div className="fixed inset-0  bg-opacity-500 backdrop-blur flex justify-center items-center z-50">

          <div className="relative p-6  rounded-md shadow-md w-96">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 rounded-full hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              <X size={20} />
            </button>

            {/* Heading */}
            <h2 className="text-2xl font-bold mb-4 text-center">
              {isSignUp ? "Sign Up" : "Login"}
            </h2>

            {/* Auth Form */}
            <form className="space-y-4 border-amber-900
">
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                onClick={handleAuth}
                className="bg-[#b79141] text-white px-4 py-2 rounded-md w-full hover:bg-[#a17d36] transition-colors"
              >
                {isSignUp ? "Sign Up" : "Login"}
              </button>
            </form>

            {/* Toggle Auth Mode */}
            <p className="text-sm text-center mt-4">
              {isSignUp ? (
                <>
                  Already have an account?{" "}
                  <button
                    className="text-[#b79141] ml-3 text-yellow-50 rounded-sm  underline"
                    onClick={() => setIsSignUp(false)}
                  >
                    Login
                  </button>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <button
                    className="text-[#b79141] ml-3 text-yellow-50 rounded-md underline"
                    onClick={() => setIsSignUp(true)}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;