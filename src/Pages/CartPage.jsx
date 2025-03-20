import React from "react";
import { useCart } from "../components/Cart";
import PageBanner from "../components/PageBanner";


const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  return (
    <>
     <PageBanner
        title="CART"
        breadcrumb="Home / Cart"
        
      />
       <div className="max-w-4xl mx-auto p-6">
     
     <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>

     {cartItems.length === 0 ? (
       <p className="text-gray-500">Your cart is empty.</p>
     ) : (
       <div className="bg-white p-4 shadow-md rounded-lg">
         {cartItems.map((item) => (
           <div
             key={item.id}
             className="flex justify-between items-center border-b py-4"
           >
             <div>
               <h2 className="text-lg font-semibold">{item.name}</h2>
               <p className="text-gray-600">${item.price.toFixed(2)}</p>
             </div>
             <div className="flex items-center space-x-4">
               <button
                 className="px-3 py-1 bg-gray-300 rounded"
                 onClick={() =>
                   updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                 }
               >
                 -
               </button>
               <span>{item.quantity}</span>
               <button
                 className="px-3 py-1 bg-gray-300 rounded"
                 onClick={() => updateQuantity(item.id, item.quantity + 1)}
               >
                 +
               </button>
               <button
                 className="px-3 py-1 bg-red-500 text-white rounded"
                 onClick={() => removeFromCart(item.id)}
               >
                 Remove
               </button>
             </div>
           </div>
         ))}
       </div>
     )}

     {cartItems.length > 0 && (
       <div className="mt-6">
         <h2 className="text-xl font-bold">
           Total: $
           {cartItems
             .reduce((total, item) => total + item.price * item.quantity, 0)
             .toFixed(2)}
         </h2>
         <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded">
           Proceed to Checkout
         </button>
       </div>
     )}
   </div>
    </>
   
  );
};

export default CartPage;
