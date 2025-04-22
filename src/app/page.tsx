"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from 'next/head'

interface BlogPost {
  ID: number;
  title: string;
  content: string;
  slug: string;
  featured_image: string;
  date: string;
  excerpt: string;
}

export default function LandingPage() {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    "/gorilla_glue.jpg",
    '/shroom.jpeg', 
    "/gummy.jpg",
    "/vape2.jpeg",
    "/catridge.jpeg",
 
    "/choco.webp",
    "/molly.jpg",
     
   
  ];

  // Fetch blog posts
  useEffect(() => {
    async function fetchLatestPosts() {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data: BlogPost[] = await res.json();
        setLatestPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestPosts();
  }, []);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // const slideIn = {
  //   hidden: { opacity: 0, x: -100 },
  //   visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  // };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
    <Head>
        {/* Basic SEO */}
        <title>Premium Cannabis Delivery | Buds Delivery - Weed, Edibles, Concentrates</title>
        <meta name="description" content="Order premium cannabis, edibles, concentrates, and vape cartridges online. Discreet worldwide weed delivery. Trusted quality and fast shipping!" />
        <meta name="keywords" content="weed delivery, buy cannabis online, discreet weed shipping, marijuana delivery, THC edibles, cannabis concentrates, vapes" />
        <meta name="author" content="Buds Delivery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Premium Cannabis & Weed Delivery | Buds Delivery" />
        <meta property="og:description" content="Fast, discreet delivery of cannabis flowers, edibles, vapes, and concentrates to your door. Shop now!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://budsdelivery.org/" />
        <meta property="og:image" content="https://budsdelivery.org/your-social-image.jpg" />
        <meta property="og:site_name" content="Buds Delivery" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Cannabis & Weed Delivery | Buds Delivery" />
        <meta name="twitter:description" content="Get top-quality cannabis and narcotics delivered discreetly to your door. Fast, secure, reliable!" />
        <meta name="twitter:image" content="https://budsdelivery.org/logo.png" />
        <meta name="twitter:site" content="@charlie_dplug" />

        {/* Canonical */}
        <link rel="canonical" href="https://budsdelivery.org/" />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" type="image/png"/>

        {/* FAQ Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does weed delivery take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our cannabis delivery typically takes 2-5 business days, depending on your location."
                }
              },
              {
                "@type": "Question",
                "name": "Is shipping discreet?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we guarantee completely discreet shipping with no branding on the package."
                }
              },
              {
                "@type": "Question",
                "name": "Where do you ship cannabis products?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We ship cannabis and narcotics worldwide where permitted by local laws."
                }
              }
            ]
          }
        `}} />

        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://budsdelivery.org/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Shop",
                "item": "https://budsdelivery.org/products"
              }
            ]
          }
        `}} />

      </Head>
       <motion.main
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={staggerContainer}
    >
      {/* Hero Section with Slideshow */}
      <motion.section
        className="relative h-screen flex items-center justify-center text-white"
        variants={fadeIn}
      >
        {/* Slideshow container */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="z-10 text-center px-4 max-w-4xl">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            variants={fadeIn}
          >
            Buds Delivery
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Premium quality products delivered discreetly to your doorstep
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Link href="/products">
              <button className="px-8 py-3 bg-[#85A965] text-white rounded-md text-lg font-semibold hover:bg-[#6d8c52] transition-colors">
                Shop Now
              </button>
            </Link>
            <Link href="/blog">
              <button className="px-8 py-3 bg-white text-[#333] rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors">
                Read Our Blog
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
      <section className="px-6 py-16 md:px-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-6xl font-extrabold text-black leading-tight mb-6">
      Premium Cannabis & Narcotics Delivery — Fast, Safe, Discreet
    </h2>
    <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
      Welcome to <span className="text-[#85A965] font-semibold">Buds Delivery</span> — your trusted global source for premium cannabis and narcotics products. 
      Shop flower strains, edibles, vapes, opioids, and concentrates with lightning-fast, fully discreet shipping. Whether you're searching for 
      <span className="font-semibold"> "weed delivery near me"</span> or <span className="font-semibold">"discreet narcotics delivery"</span>, 
      we ensure top-quality service and products, every time.
    </p>

    <div className="grid gap-10 md:grid-cols-2 text-left">
      {/* Why Choose Section */}
      <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
        <h2 className="text-2xl font-bold text-[#85A965] mb-4">🚚 Why Choose Buds Delivery?</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-3">
          <li>Fast, secure, and discreet worldwide shipping</li>
          <li>Wide selection of premium THC edibles, vape cartridges & concentrates</li>
          <li>High-quality cannabis flower strains</li>
          <li>Reliable service for both medical marijuana patients and recreational users</li>
        </ul>
      </div>

      {/* Top Products Section */}
      <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
        <h2 className="text-2xl font-bold text-[#85A965] mb-4">🔥 Top Products Available:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-3">
          <li>Gourmet cannabis-infused edibles</li>
          <li>High-potency concentrates and extracts</li>
          <li>Fresh, hand-selected cannabis flowers</li>
          <li>Top-shelf vape cartridges for clean highs</li>
          <li>Opioids and pills </li>
        
        </ul>
      </div>
    </div>
  </div>
</section>

<motion.section
        className="py-16 px-4 bg-black"
        variants={staggerContainer}
      >

  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-10 text-white">What Our Customers Say</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 mb-4">"Super fast delivery! Great quality product, and super discreet. 10/10!"</p>
        <h3 className="font-semibold text-lg">- Jordan M.</h3>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 mb-4">"Best edibles I’ve had in a long time. Highly recommend BudsDelivery!"</p>
        <h3 className="font-semibold text-lg">- Sierra B.</h3>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 mb-4">"Amazing service, discreet and professional.  Will order again for sure."</p>
        <h3 className="font-semibold text-lg">- Chris L.</h3>
      </div>
    </div>
  </div>
</motion.section>
      {/* Featured Products Section */}
      <motion.section
        className="py-16 px-4 bg-white"
        variants={staggerContainer}
      >
        <motion.div
          className="container mx-auto"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Products
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {/* Product 1 */}
            <motion.div
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              variants={fadeIn}
            >
              <div className="h-64 relative">
                <Image
                  src="/black-widow.webp"
                  alt="Cannabis product"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Premium Flower</h3>
                <p className="text-gray-600 mb-4">
                  Carefully cultivated strains with exceptional quality and
                  potency.
                </p>
                <Link href="/products">
                  <button className="w-full py-2 bg-[#85A965] text-white rounded-md hover:bg-[#6d8c52] transition-colors">
                    View Products
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              variants={fadeIn}
            >
              <div className="h-64 relative">
                <Image
                  src="/gummy.jpg"
                  alt="Edibles product"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Gourmet Edibles</h3>
                <p className="text-gray-600 mb-4">Delicious treats infused with precise dosing for a consistent experience.</p>
                <Link href="/products">
                  <button className="w-full py-2 bg-[#85A965] text-white rounded-md hover:bg-[#6d8c52] transition-colors">
                    View Products
                  </button>
                </Link>
              </div>
              </motion.div>

            {/* Product 3 */}
            <motion.div
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              variants={fadeIn}
            >
              <div className="h-64 relative">
                <Image
                  src="/PUREBALNCE_1K_BLUERASPBERRY.png"
                  alt="Concentrate product"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Premium Concentrates</h3>
                <p className="text-gray-600 mb-4">High-potency extracts for connoisseurs seeking powerful effects.</p>
                <Link href="/products">
                  <button className="w-full py-2 bg-[#85A965] text-white rounded-md hover:bg-[#6d8c52] transition-colors">
                    View Products
                  </button>
                </Link>
              </div>
              </motion.div>

          
          </motion.div>
        </motion.div>
      </motion.section>
      <section className="py-16 bg-[#85A965] text-white">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold mb-2">How discreet is your delivery service?</h3>
        <p className="text-white">We specialize in 100% discreet deliveries. Packages are unmarked with no references to cannabis or budsdelivery.org.</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-2">What areas do you deliver to?</h3>
        <p className="text-gray-white">We deliver to all major cities and surrounding areas.</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-2">What products do you offer?</h3>
        <p className="text-white">We offer premium flowers, edibles, vapes, concentrates,piods, drugs  and more — all top shelf, lab tested, and carefully curated.</p>
      </div>
    </div>
  </div>
</section>

      {/* Latest Blog Posts Section */}
      <motion.section
        className="py-16 px-4 bg-gray-100"
        variants={staggerContainer}
      >
        <motion.div
          className="container mx-auto"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Latest Blog Posts
          </h2>

          {loading ? (
            <div className="text-center">Loading latest posts...</div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {latestPosts.slice(0, 3).map((post) => (
                <motion.div
                  key={post.ID}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full"
                  variants={fadeIn}
                >
                  <div className="h-48 relative">
                    <Image
                      src={post.featured_image || "/blog-placeholder.jpg"}
                      alt={post.title || "Blog post"}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-500 mb-2">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                    <div
                      className="text-gray-600 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt || "",
                      }}
                    />
                    <Link href="/products/post.ID">
                    <div className="mt-4 text-[#85A965] font-semibold">
                      Read more →
                    </div>
                    </Link>
                   
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="py-20 px-4 bg-black text-white"
        variants={fadeIn}
      >
        <motion.div
          className="container mx-auto text-center"
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Place Your Order?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience premium quality products and discreet delivery - your
            satisfaction is guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/products">
              <button className="px-8 py-3 bg-white text-[#85A965] rounded-md text-lg font-semibold hover:bg-black transition-colors">
                Browse Products
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md text-lg font-semibold hover:bg-white hover:text-[#85A965] transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </motion.main>
    </>
 
  );
}