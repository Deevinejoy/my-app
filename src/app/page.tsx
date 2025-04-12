"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    "/Orangehaze.jpg",
    "/ogkush.jpg",
    '/coc.jpg',
    "/molly.jpg",
    '/penisEnvy.png',  
    "/gorilla_glue.jpg",
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
  );
}