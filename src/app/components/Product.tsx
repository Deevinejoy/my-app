"use client"
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/cartContext";


export default function Product({ product }: { product: Product }) {
    const { dispatch } = useCart();


    const handleAddToCart = () => {
        dispatch({ type: "ADD_TO_CART", payload: product });
      }; 
    
    return (

     
        <div className="">
         
                <div key={product.id} className="bg-white p-4  transition ">
                   <Link href={`/products/${product.id}`}>
                        <Image
                            className="w-full h-auto rounded-md"
                            src={product.img}
                            alt='product'
                            width={600}
            height={600}
                        />
                        <h2 className="text-[32px] mb-2 text-center">{product.name}</h2>
                     </Link>
                        <div className="flex flex-row gap-x-5 justify-center">
                            <p className="text-xl font-bold text-black mt-2">${product.price}</p>
                            <div className="flex  bg-[#85A965]  p-3 gap-x-3 rounded-md hover:bg-black cursor-pointer" onClick={handleAddToCart}>  
                                <Image
                                className=""
                                src='/cart2.svg'
                                alt='shopping cart'
                                width={24}
                                height={24}
                                />
                                <p className="text-white cursor-pointer">Add to cart</p>
                            </div>
                        </div>
                       
                       
                
                </div>
        
        </div>
    );
}