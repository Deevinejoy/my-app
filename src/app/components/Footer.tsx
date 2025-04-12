"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/products" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="bg-[#85A965] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/logo.svg"
            alt="buds delivery logo"
            width={180}
            height={38}
            className="dark:invert"
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          {navItems.map(({ label, href }) => (
            <Link key={href} href={href}>
              <p
                className={`hover:underline ${
                  pathname === href ? "text-white font-bold" : "text-white/80"
                }`}
              >
                {label}
              </p>
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <ul className="space-y-1 text-white/90 text-lg">
            <li>📞 +1 (352) 212 4176</li>
            <li>📧 findmegreens@gmail.com</li>
            <li>💬 Telegram: +1 (352) 212 4176</li>
            <li>🔐 Signal: findmegrren.01</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 text-center text-sm text-white/70">
        © {new Date().getFullYear()} FindMeGreens. All rights reserved.
      </div>
    </footer>
  );
}
