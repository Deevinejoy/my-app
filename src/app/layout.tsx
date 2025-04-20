import type { Metadata } from "next";
import { Geist, Geist_Mono, Readex_Pro } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from './components/Footer';
import { CartProvider } from '@/app/context/cartContext';
import SEO from '../../next-seo.config';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const readex_pro = Readex_Pro({
  variable: "--font-readex-pro",
  subsets: ["latin"],
  weight: '400',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SEO.title,
    template: `%s | ${SEO.title}`,
  },
  description: SEO.description,
  openGraph: {
    ...SEO.openGraph,
  },
  icons: {
    icon: "/logo.jpg", // <-- favicon / logo
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${readex_pro.variable} antialiased`}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
