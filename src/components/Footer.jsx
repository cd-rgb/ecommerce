import React from "react";
const Footer = () => {
  return (
    <footer className="p-10 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
            ABOUT US
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
            CATEGORIES
          </h2>
          <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
            <li>Fashion Sneakers</li>
            <li>Jackets</li>
            <li>Outdoor Shop</li>
            <li>Pants</li>
            <li>Shirts & Tops</li>
            <li>Swim Shop</li>
            <li>Swimwear</li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
            MY ACCOUNT
          </h2>
          <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
            <li>Orders</li>
            <li>Compare</li>
            <li>Wishlist</li>
            <li>Log In</li>
            <li>Register</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
            CONTACT INFO
          </h2>
          <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
            <li>c/o Giunti International, Milan</li>
            <li>+025 2155 3255</li>
            <li>info@gmail.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
