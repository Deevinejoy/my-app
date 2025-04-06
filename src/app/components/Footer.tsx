"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

    const pathname = usePathname();


    return (
        <div className="bg-[#85A965] flex flex-row justify-between p-3">
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
            <div className="flex flex-col justify-between gap-x-[20px]">
                <Link href='/'>
                    <p className={`${pathname === '/' ? 'text-white' : 'text-black'} lg:text-lg hover:text-white`}>Home</p>
                </Link>
                <Link href='/products'>
                    <p className={`${pathname === '/products' ? 'text-white' : 'text-black'} lg:text-lg hover:text-white`}>Shop</p>
                </Link>
                <Link href='/blog'>
                    <p className={`${pathname === '/blog' ? 'text-white' : 'text-black'} lg:text-lg hover:text-white`}>Blog</p>
                </Link>
                <Link href='/privacy'>
                    <p className={`${pathname === '/privacy' ? 'text-white' : 'text-black'} lg:text-lg hover:text-white`}>Shipping Policy</p>
                </Link>
            </div>
            <div>
                <h2 className="text-xl">Contact Us</h2>
                <li>Phone Number:  +1 (352) 212 4176</li>
                <li>Email: findmegreens@gmail.com</li>
                <li>Telegram: +1 (352) 212 4176</li>
                <li>Signal: findmegrren.01</li>

            </div>
        </div>
    );
}
