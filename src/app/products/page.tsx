'use client'

import Image from "next/image";
import Product from "../components/Product";
import products from "@/app/db/products";
import { useState } from "react";

 

export default function Shop() {
    
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query
    const filteredProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.des.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
  
 return(
      <div >
      
            <Image
            className="w-full h-auto rounded-md"
            src='/weed3.jpg'
            alt='weed'
            width={600}
            height={600}
        />
           <div className="p-20">
           <h1 className="text-center text-5xl font-extrabold">Shop</h1>
           <div className="mt-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          
           {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}

           </div>
          
           </div>
         </div>

 )
}
