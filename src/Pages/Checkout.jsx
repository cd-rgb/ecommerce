import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../components/Cart";
import PageBanner from "../components/PageBanner";

const Checkout = () => {
  const { cartItems, setCartItems } = useCart();

  // Form state for shipping and payment details
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "creditCard",
  });

  // Calculate the total price
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
   
  };

  return (
    <>
      <PageBanner title="CHECKOUT" breadcrumb="Home / Cart / Checkout" />

      <div className="max-w-7xl mx-auto p-6 text-[#fff]">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-500 mb-4">Your cart is empty.</p>
            <Link
              to="/shop"
              className="bg-[#b79141] text-white px-6 py-3 rounded-md hover:bg-[#d0bb74] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Shipping and Payment Form */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">
                Shipping & Payment Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Shipping Details */}
                <div>
                  <label className="block font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b79141]"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b79141]"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-medium mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b79141]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b79141]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium  mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b79141]"
                      required
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block  font-medium  mb-1">
                    Payment Method
                  </label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b79141]"
                  >
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bankTransfer">Bank Transfer</option>
                  </select>
                </div>

                {/* Place Order Button */}
                <button
                  type="submit"
                  className="w-full bg-[#b79141] text-white px-6 py-3 rounded-md hover:bg-[#d0bb74] transition-colors"
                >
                  Place Order
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="bg-white shadow-md rounded-lg p-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-cover rounded-md"
                      />
                      <div>
                        <h3 className="text-sm font-semibold text-[#2D3748]">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#4A5568]">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-[#4A5568]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
                <div className="border-t border-gray-300 pt-4 mt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#2D3748]">Total:</span>
                    <span className="font-semibold text-[#2D3748]">
                      ${totalPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
