import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="p-10 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h2 className="font-bold text-2xl text-gray-900 dark:text-white mb-2">
            ABOUT US
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h2 className="font-bold text-2xl text-gray-900 dark:text-white mb-2">
            CATEGORIES
          </h2>
          <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
            <li className="text-lg"><Link to="category/electronics">Electronics</Link></li>
            <li className="text-lg"><Link to="category/jewellery">Jewellery</Link></li>
            <li className="text-lg"><Link to="category/men's%20clothing">Men's Clothing</Link></li>
            <li className="text-lg"><Link to="category/women's%20clothing">Women's clothing</Link></li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h2 className="font-bold text-2xl text-gray-900 dark:text-white mb-2">
            MY ACCOUNT
          </h2>
          <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
            <li className="text-lg">
              <Link to="/" className="hover:text-[#b79141] transition-colors">
                Home
              </Link>
            </li>
            <li className="text-lg">
              <Link
                to="/about"
                className="hover:text-[#b79141] transition-colors"
              >
                About
              </Link>
            </li>
            <li className="text-lg">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="text-lg">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="text-lg">
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-bold text-2xl text-gray-900 dark:text-white mb-2">
            CONTACT INFO
          </h2>
          <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2 ">
            <li className="text-lg">c/o Giunti International, Milan</li>
            <li className="text-lg">+025 2155 3255</li>
            <li className="text-lg">info@gmail.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
