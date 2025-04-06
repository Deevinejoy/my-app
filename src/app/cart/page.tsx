"use client";

import { useCart } from "@/app/context/cartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, dispatch } = useCart();
  const totalPrice = cart.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );
  

  return (
    <div className="lg:pl-30 lg:pr-30 md:pl-30 md:pr-30 sm:pl-10 sm:pr-10 pt-10 pb-20 ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <Link href='/products'className="flex  bg-[#85A965]  p-3 gap-x-3 rounded-md hover:bg-black" >
          <p  className="text-white ">Continue Shopping</p>
        </Link>

      </div>
     
     
      {cart.length === 0 ? <p>Your cart is empty.</p>: null}
      <div className="flex flex-col ">
        <div>
          {cart.map((item) => (
                  <div key={item.id} className="border bg-[#D9D9D9] p-2 my-2 flex justify-around">
                  
                    <Image
                            className=""
                            src={item.img}
                            alt={item.name}
                            width={120}
                            height={120}
                        />
                      <h2 className="text-center text-xl self-center">{item.name}</h2>
                      <p className="text-xl self-center "> ${item.price} </p>
                     
                      <div className="flex">
                   
                          <button onClick={() => dispatch({ type: "ADD_QUANTITY", payload: item.id })}>
                          ➕
                        </button>
                        <p className="text-xl  self-center">{item.quantity }</p>
                        <button onClick={() => dispatch({ type: "REDUCE_QUANTITY", payload: item.id })}>
                          ➖
                        </button>

                      </div>
                  
                  
                      <p className="text-xl self-center">Subtotal: ${(Number(item.price) * Number(item.quantity)).toFixed(2)}</p>
                    
                    
                  
                    <div  onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                      className="flex p-2">
                    <Image
                            className="self-center"
                            src='/delete.svg'
                            alt='weed'
                            width={24}
                            height={24}
                        />
                    </div>
                
                    
                    
                  </div>
                ))}

              

        </div>
   
        {cart.length> 0 && (  
        <div className="border bg-[#D9D9D9] p-2 my-2 flex flex-col gap-x-4">
          <h3 className="text-xl font-bold">Order Sumary</h3>
          <div className="flex flex-row gap-x-5">
            <p className="text-xl ">Number of items:</p><p className="text-xl "> {cart.length.toFixed(0)}</p>
          
          </div>
       <div  className="flex flex-row gap-x-5" >
      
        <p className="text-xl ">Total:</p><p className="text-xl "> ${totalPrice.toFixed(2)}</p>
       </div>
    
         
      
        </div>
        )}
      </div>
      {cart.length > 0 && (
       
      <button  className="bg-[#85A965] text-white px-4 py-2 rounded-lg hover:bg-black">
        Proceed to Checkout
      </button>
       )}
     
  
    </div>
  );
}
