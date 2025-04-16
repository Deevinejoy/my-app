'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/app/context/cartContext";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: Use lucide icons for menu toggling

export default function Header() {
  const pathname = usePathname();
  const { cart } = useCart();
  const totalItems = cart.length;
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/products", label: "Shop" },
    { href: "/about", label: "About Us" },
    { href: "/privacy", label: "Privacy Policy" },
  ];

  return (
    <header className="bg-[#85A965] p-3 relative">
      <div className="flex justify-between items-center">
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="buds delivery logo"
          width={90}
          height={35}
          priority
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-x-6">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}>
              <p
                className={`${
                  pathname === href ? "text-white" : "text-black"
                } text-base lg:text-xl hover:text-white font-medium`}
              >
                {label}
              </p>
            </Link>
          ))}
        </nav>

        {/* Cart */}
        <div className="flex flex-">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

        </div>
      

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="flex flex-col md:hidden mt-3 gap-y-3">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
              <p
                className={`${
                  pathname === href ? "text-white" : "text-black"
                } text-base hover:text-white`}
              >
                {label}
              </p>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
