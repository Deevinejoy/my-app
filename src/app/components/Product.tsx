import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/cartContext";
import { useRouter } from "next/navigation"; // Import useRouter

interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  img: string;
  price: number;
  quantity: number;
  details: {
    [key: number]: string | undefined;
  };
  des: string;
}

export default function Product({ product }: { product: Product }) {
  const { cart, dispatch } = useCart(); // Access cart and dispatch
 

  // Check if the product is already in the cart
  const isInCart = cart.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product.id });
  };

  return (
    <div className="h-full">
      <div
        key={product.id}
        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition h-full flex flex-col"
      >
        <Link href={`/products/${product.id}`}>
          <div className="aspect-square relative overflow-hidden rounded-md mb-3">
            <Image
              className="object-cover"
              src={product.img}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h2 className="text-[32px] mb-2 text-center">{product.name}</h2>
        </Link>
        <div className="flex flex-row gap-x-5 justify-center">
          <p className="text-xl font-bold text-black mt-2">${product.price}</p>
          {isInCart ? (
            <div
              className="flex bg-[#85A965] p-3 gap-x-3 rounded-md hover:bg-red-700 cursor-pointer"
              onClick={handleRemoveFromCart}
            >
              <Image
                src="/delete.svg"
                alt="Remove from cart"
                width={24}
                height={24}
              />
              <p className="text-black cursor-pointer">Remove from cart</p>
            </div>
          ) : (
            <div
              className="flex bg-[#85A965] p-3 gap-x-3 rounded-md hover:bg-black cursor-pointer"
              onClick={handleAddToCart}
            >
              <Image
                src="/cart2.svg"
                alt="Add to cart"
                width={24}
                height={24}
              />
              <p className="text-white cursor-pointer">Add to cart</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}