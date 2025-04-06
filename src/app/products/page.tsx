import Image from "next/image";
import Product from "../components/Product";
 

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


export default function Shop() {
   
  
 return(
    
      <div >
      
            <Image
            className="w-full h-auto rounded-md"
            src='/next.svg'
            alt='weed'
            width={10}
            height={50}
        />
    
         
          
          <div className="p-20">
           <h1 className="text-center text-5xl font-extrabold">Travel Guide List</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
           {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}

           </div>
        
          
           </div>
         </div>

 )
}
