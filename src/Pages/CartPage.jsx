import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { useCart } from "../components/Cart";
import PageBanner from "../components/PageBanner";
import { X } from "lucide-react"; // Import X icon for remove button

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  // Calculate the total price
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <>
      <PageBanner title="CART" breadcrumb="Home / Cart" />

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <>
            {/* Cart Table */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="p-4">Item</th>
                    <th className="p-4">Product Name</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Quantity</th>
                    <th className="p-4">Subtotal</th>
                    <th className="p-4"></th> {/* For remove button */}
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      {/* Item Image */}
                      <td className="p-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                      </td>
                      {/* Product Name */}
                      <td className="p-4">
                        <h2 className="text-lg font-semibold text-[#2D3748]">
                          {item.title}
                        </h2>
                      </td>
                      {/* Price */}
                      <td className="p-4 text-[#4A5568]">
                        ${item.price.toFixed(2)}
                      </td>
                      {/* Quantity */}
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <button
                            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                Math.max(item.quantity - 1, 1)
                              )
                            }
                          >
                            -
                          </button>
                          <span className="text-[#2D3748]">
                            {item.quantity}
                          </span>
                          <button
                            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      {/* Subtotal */}
                      <td className="p-4 text-[#4A5568]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      {/* Remove Button */}
                      <td className="p-4">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#fff] rounded-full hover:text-[#DC2626] transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Total and Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
              <Link
                to="/"
                className="mb-4 sm:mb-0 flex items-center space-x-2 px-6 py-3 bg-[#b79141] text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                <span>&larr;</span>
                <span>Continue Shopping</span>
              </Link>
              <div className="flex flex-col items-center sm:items-end">
                <h2 className="text-xl font-bold mb-4">
                  Total: ${totalPrice}
                </h2>
                <button className="px-6 py-3 bg-[#b79141] text-white rounded-full hover:bg-[#DC2626] transition-colors">
                  Update Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
