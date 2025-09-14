"use client";

import { useCart } from "@/app/context/cartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, dispatch } = useCart();
  
  const generateWhatsAppMessage = () => {
    let message = "Hello, I would like to order the following products:\n\n";
    cart.forEach((item) => {
      message += `- ${item.name} (x${item.quantity})\n`;
    });
    
    message += `\nTotal Items: ${cart.reduce((total, item) => total + item.quantity, 0)}`;
    return message;
  };
  const whatsappNumber = "+12792573346"; // Replace with your WhatsApp number
  const whatsappMessage = encodeURIComponent(generateWhatsAppMessage());
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="container mx-auto px-3 sm:px-6 md:px-10 lg:px-20 py-4 sm:py-6 md:py-8 lg:py-10">
      <div className="flex  justify-between items-start sm:items-center gap-4 sm:gap-0 mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-gray-800">Shopping Cart</h1>
        <Link href="/products" className="flex items-center bg-black py-1.5 sm:py-2 px-3 sm:px-4 rounded-md hover:bg-[#4b6b31] text-white transition-colors duration-200">
          <p className="text-sm sm:text-base md:text-lg">Continue Shopping</p>
        </Link>
      </div>

      {cart.length === 0 ? (
        <div className="h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center">
          <p className="text-lg sm:text-xl text-gray-600">Your cart is empty.</p>
        </div>
      ) : (
        <div className="space-y-3 sm:space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 bg-[#F4F4F4] lg:justify-between rounded-lg shadow-md p-3 sm:p-4">
              <div className="w-full sm:w-auto flex items-center gap-3 sm:gap-4">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  width={80} 
                  height={80} 
                  className="rounded-md object-cover w-20 h-20 sm:w-24 sm:h-24" 
                />
                
                <div className="flex-1">
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">{item.name}</h2>
                </div>
              </div>
              
              <div className="flex flex-row items-center justify-between w-full sm:w-auto mt-3 sm:mt-0">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => dispatch({ type: "REDUCE_QUANTITY", payload: item.slug })}
                    className="px-2 py-0.5 bg-gray-200 rounded-md hover:bg-[#85A965] hover:text-white transition-colors text-xs sm:text-sm"
                    aria-label="Reduce quantity"
                  >
                    −
                  </button>
                  <span className="text-sm sm:text-base font-medium text-gray-800 mx-1">{item.quantity}</span>
                  <button
                    onClick={() => dispatch({ type: "ADD_QUANTITY", payload: item.slug })}
                    className="px-2 py-0.5 bg-gray-200 rounded-md hover:bg-[#85A965] hover:text-white transition-colors text-xs sm:text-sm"
                    aria-label="Add quantity"
                  >
                    +
                  </button>
                </div>
                
                
                <button
                  onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.slug })}
                  className="ml-4 sm:ml-6 focus:outline-none"
                  aria-label="Remove item"
                >
                  <Image 
                    src="/delete.svg" 
                    alt="Remove" 
                    width={20} 
                    height={20} 
                    className="hover:opacity-70 transition-opacity" 
                  />
                </button>
              </div>
            </div>
          ))}

          <div className="bg-[#F4F4F4] rounded-lg shadow-md p-4 mt-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Order Summary</h3>
            
            <div className="flex justify-between mb-2">
              <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700">Number of items:</p>
              <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700">{cart.reduce((total, item) => total + item.quantity, 0)}</p>
            </div>
            
            
            <a  
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-center py-2 px-4 bg-[#85A965] text-white rounded-md hover:bg-black transition-colors duration-200 text-sm sm:text-base"
            >
              Proceed to Checkout
            </a>
          </div>
        </div>
      )}
    </div>
  );
}