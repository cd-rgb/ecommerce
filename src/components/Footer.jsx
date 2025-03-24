import React from "react";
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
            <li className="text-lg">Fashion Sneakers</li>
            <li className="text-lg">Jackets</li>
            <li className="text-lg">Outdoor Shop</li>
            <li className="text-lg">Pants</li>
            <li className="text-lg">Shirts & Tops</li>
            <li className="text-lg">Swim Shop</li>
            <li className="text-lg">Swimwear</li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h2 className="font-bold text-2xl text-gray-900 dark:text-white mb-2">
            MY ACCOUNT
          </h2>
          <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
            <li className="text-lg">Orders</li>
            <li className="text-lg">Compare</li>
            <li className="text-lg">Wishlist</li>
            <li className="text-lg">Log In</li>
            <li className="text-lg">Register</li>
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
