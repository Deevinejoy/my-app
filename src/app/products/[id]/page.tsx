"use client";
import Image from "next/image";
import { use } from "react";
import { useCart } from "@/app/context/cartContext";
import products from "@/app/db/products";



export default function Product({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { cart, dispatch } = useCart();

  const product =
    cart.find((item: { id: number; }) => item.id === Number(id)) || products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="text-center text-xl mt-10">Product not found</div>;
  }

  const inCart = cart.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

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
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 bg-white p-6 rounded-xl shadow-lg">
        <div className="w-full md:w-1/2">
          <Image
            src={product.img}
            alt={product.name}
            width={600}
            height={600}
            className="rounded-xl object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            {Object.keys(product.details).map((key) => (
          <li className="text-lg text-gray-700 mb-4" key={key}>{product.details[key]}</li>
        ))}
            
            <p className="text-2xl font-semibold text-green-600">${product.price}</p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-4">
              <button
                onClick={handleReduceQuantity}
                className="text-xl px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                −
              </button>
              <span className="text-2xl font-medium">{product.quantity}</span>
              <button
                onClick={handleAddQuantity}
                className="text-xl px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">
                Total: ${(Number(product.price) * Number(product.quantity)).toFixed(2)}
              </p>
              <button
                onClick={handleAddToCart}
                className="flex items-center gap-2 px-5 py-3 bg-[#85A965] hover:bg-black transition-colors text-white font-semibold rounded-md"
              >
                <Image src="/cart2.svg" alt="Add to cart" width={24} height={24} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Product Details</h2>
        <p className="text-gray-700 text-lg leading-relaxed px-4 md:px-20">{product.des}
        </p>
      </div>
    </div>
  );
}
