"use client"
import Image from "next/image";
import { useCart } from "@/app/context/cartContext";

import { use } from 'react';
const products = [
    {
        id: 1,
        name: "How to create a blog",
        img: "/cart.svg",
        price: "45",
        quantity: 1,
    },
    {
        id: 2,
        name: "How to create a blog",
        img: "/cart.svg",
        price: "45",
        quantity: 1,
    },
    {
        id: 3,
       name: "How to create a blog",
        img: "/cart.svg",
        price: "45",
        quantity: 1,
    },
    {
        id: 4,
        name: "How to create a blog",
        img: "/cart.svg",
        price: "45",
        quantity: 1,
    },
    {
        id: 5,
        title: "How to create a blog",
        img: "/cart.svg",
        price: "45",
        quantity: 1,
    },
    {
        id: 6,
        name: "How to create a blog",
        img: "/cart.svg",
        price: "45",
        quantity: 1,
    },
    {
        id: 7,
        name: "How to create a blog",
        img: "/cart.svg",
        price: "45",
        quantity: 1,
    },
    {
        id: 8,
        name: "How to create a blog",
        img: "/cart.svg",
        price: "45",
        quantity: 1,
    },
    {
        id: 9,
        name: "How to create a blog",
        img: "/cart.svg",
        price: "45",
        quantity: 1,
    },
    {
        id: 10,
        name: "How to create a blog",
        img: "/cart.svg",
        price: "45", 
        quantity: 1,
    },
    {
        id: 11,
        name: "How to create a blog",
        img: "/cart.svg",
        price: "45",
        quantity: 1,
    },
    {
        id: 12,
        name: "How to create a blog",
        img: "/cart.svg",
        price: "45",
        quantity: 1,
    },
   
 ];
 


 export default function Product({ params }: { params: Promise<{ id: string }> }) {
     
   const { id } = use(params);
   const {cart,  dispatch } = useCart();
 
   const product = cart.find(item => item.id === Number(id)) || products.find(p => p.id === Number(id));
   
   
    if (!product) {
        return <div>Product not found</div>;
    }
    const handleAddToCart = () => {
        dispatch({ type: "ADD_TO_CART", payload: product });
      };
      const inCart = cart.find(item => item.id === product.id);

const handleAddQuantity = () => {
  if (!inCart) {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
  } else {
    dispatch({ type: "ADD_QUANTITY", payload: product.id });
  }
};

const handleReduceQuantity = () => {
  dispatch({ type: "REDUCE_QUANTITY", payload: product.id });
};

    
    return (
        <div className="p-10">
                <div key={product.id} className="bg-white p-4 flex justify-between gap-x-10 ">
                  
                    <Image
                             className="w-full h-auto rounded-md"
                             src={product.img}
                             alt={product.name}
                             width={100}
                             height={100}
                        />

                   
                    <div className="">
                        <h2 className="text-[32px] mb-2">{product.name}</h2>
                        <p className="text-xl font-bold text-black mt-2">${product.price}</p>

                        <p className="text-xl text-gray-600 mt-2">CannibisBuy LSD blotter online
                        LSD blotter, because the allucinogen is more common and has a more potent chemical base that alters the light. È composto da acido lisergico, che si trova nella segale cornuta, ungo che cresce sur la segale et altri cereal.
                        LSD currently has no approved medical use. A meta-analysis concludes that a single dose will be effective in reducing alcohol consumption in alcoholism. LSD is also a study of depression, anxiety and dependency, with positive preliminary results
                        </p>
                        <div className="flex gap-x-3 mt-4">
                          
                       
                <button onClick={handleAddQuantity}>
                ➕
               </button>
               <p className="text-2xl mt-2 ">{product.quantity}</p>
               <button onClick={handleReduceQuantity}>
                ➖
               </button>

           
                         
                            <p className="text-xl font-bold text-black mt-2"> ${(Number(product.price) * Number(product.quantity)).toFixed(2)}</p>
                            <div className="flex  bg-[#85A965]  p-3 gap-x-3 rounded-md  hover:bg-black cursor-pointer "  onClick={handleAddToCart}>   
                                <Image
                                className=""
                                src='/cart2.svg'
                                alt='shopping cart'
                                width={24}
                                height={24}
                                />
                                <p className="text-white">Add to cart</p>
                            </div>
                        </div>
                    </div>

                  
                </div>
                <div>
                    <p className="text-3xl text-center p-3">Product Details</p>
                    <p className="text-xl text-gray-600 mt-2 pl-10 pr-10">CannibSatisfy your cravings with Bliss Edibles Party Mix Gummies, your one-stop destination for premium cannabis infused treats. Elevate your experience with our precisely dosed gummies bursting with natural flavors.
                    Key Features:
                    Perfect Dosage: Each gummy contains 25mg of THC, ensuring a consistent and enjoyable experience every time.
                    Variety Pack: Indulge in a mix of mouthwatering flavors including Peach, Green Apple, and Grape, for a delightful treat that suits any palate.
                    Convenient Packaging: With 15 pieces per package and a total of 375mg THC, our gummies offer convenience and value in every bite.
                    Experience the Bliss Difference:
                    Discover the ultimate edible experience with Bliss Edibles Party Mix Gummies. Whether you’re a seasoned enthusiast or new to edibles, our gummies provide a convenient and delicious way to enjoy cannabis.
                    Safety First:
                    Always start with a low dosage (25mg THC or less) and wait at least 2 hours before consuming more to gauge your tolerance. Remember, the effects of edibles can vary, so it’s essential to consume responsibly.
                    Premium Ingredients:
                    Crafted with care, our gummies feature organic cane sugar, natural fruit juice, and a proprietary blend of cannabis extract for unparalleled quality and taste.is</p>
                </div>
          
      </div>
    )
}