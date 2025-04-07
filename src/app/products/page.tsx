import Image from "next/image";
import Product from "../components/Product";
import products from "@/app/db/products";
 




export default function Shop() {
   
  
 return(
    
      <div >
      
            <Image
            className="w-full h-auto rounded-md"
            src='/next.svg'
            alt='weed'
            width={600}
            height={600}
        />
    
         
          
          <div className="p-20">
           <h1 className="text-center text-5xl font-extrabold">Shop</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
           {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}

           </div>
        
          
           </div>
         </div>

 )
}
