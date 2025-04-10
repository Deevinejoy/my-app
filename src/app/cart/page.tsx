"use client";

import { useCart } from "@/app/context/cartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, dispatch } = useCart();
  const totalPrice = cart.reduce(
    (acc: number, item: { price: number; quantity: number; }) => acc + Number(item.price) * Number(item.quantity),
    0
  );
  const generateWhatsAppMessage = () => {
    let message = "Hello, I would like to order the following products:\n\n";
  cart.forEach((item) => {
      message += `- ${item.name} (x${item.quantity}): $${item.price * item.quantity}\n`;
    });
    
    message += `\nTotal Price: $${totalPrice.toFixed(2)}`;
    return message;
  };

  const whatsappNumber = "+13522124176"; // Replace with your WhatsApp number
  const whatsappMessage = encodeURIComponent(generateWhatsAppMessage());
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="container mx-auto px-4 sm:px-10 md:px-20 lg:px-30 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Shopping Cart</h1>
        <Link href="/products" className="flex items-center bg-black py-2 px-4 rounded-md hover:bg-[#4b6b31] text-white">
          <p>Continue Shopping</p>
        </Link>
      </div>

      {cart.length === 0 ? (
         <div className="h-[80vh] flex items-center justify-center text-xl">
       Your cart is empty.
       </div>

      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-[#F4F4F4] rounded-lg shadow-md p-4 space-x-4">
              <Image src={item.img} alt={item.name} width={120} height={120} className="rounded-md" />
              <div className="flex-1">
              <h2 className="text-base sm:text-sm lg:text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-between gap-y-4  gap-x-10 sm:gap-y-2 ">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch({ type: "REDUCE_QUANTITY", payload: item.id })}
                  className="px-4 py-1 bg-gray-200 rounded-md hover:bg-[#85A965] transition-colors"
                >
                  − 
                </button>
                <span className="text-xl font-medium">{item.quantity}</span>
                <button onClick={() => dispatch({ type: "ADD_QUANTITY", payload: item.id })}
                 
                  className="px-4 py-1 bg-gray-200 rounded-md hover:bg-[#85A965] transition-colors"
                >
                  +
                </button>
              </div>
              <div className="text-base sm:text-sm lg:text-lg font-semibold text-gray-800">
                Subtotal: ${(Number(item.price) * Number(item.quantity)).toFixed(2)}
              </div>

              </div>
           
              <div
                onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                className="cursor-pointer"
              >
                <Image src="/delete.svg" alt="Remove" width={24} height={24} />
              </div>
            </div>
          ))}

          <div className="bg-[#F4F4F4] rounded-lg shadow-md p-4 mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <p className="text-lg font-medium text-gray-700">Number of items:</p>
              <p className="text-lg font-medium text-gray-700">{cart.length}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-lg font-medium text-gray-700">Total:</p>
              <p className="text-lg font-medium text-gray-700">${totalPrice.toFixed(2)}</p>
            </div>
            <a  
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-4 bg-[#85A965] text-white rounded-md hover:bg-black mt-4">
              Proceed to Checkout
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
