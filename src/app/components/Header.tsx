"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/app/context/cartContext"; 

export default function Header() {
  const pathname = usePathname();
  const { cart } = useCart(); 
  // Calculate total item count
  const totalItems = cart.length

  return (
    <div className="bg-[#85A965] flex justify-between p-3 relative">
      <div>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </div>

      <div className="flex justify-between gap-x-[20px]">
        <Link href="/">
          <p className={`${pathname === '/' ? 'text-white' : 'text-black'} lg:text-xl hover:text-white`}>Home</p>
        </Link>
        <Link href="/products">
          <p className={`${pathname === '/products' ? 'text-white' : 'text-black'} lg:text-xl hover:text-white`}>Shop</p>
        </Link>
        <Link href="/blog">
          <p className={`${pathname === '/blog' ? 'text-white' : 'text-black'} lg:text-xl hover:text-white`}>Blog</p>
        </Link>
        <Link href="/contact">
          <p className={`${pathname === '/contact' ? 'text-white' : 'text-black'} lg:text-xl hover:text-white`}>Contact Us</p>
        </Link>
        <Link href="/privacy">
          <p className={`${pathname === '/privacy' ? 'text-white' : 'text-black'} lg:text-xl hover:text-white`}>Privacy Policy</p>
        </Link>
      </div>

      <div className="relative">
        <Link href="/cart">
          <Image
            className="dark:invert"
            src="/cart.svg"
            alt="Cart"
            width={40}
            height={50}
            priority
          />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}
