"use client";

import Blog from "../components/Blog";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function BlogPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    "/gorilla_glue.jpg",
    "/TESLA_HASH.webp",
    "/gummy.jpg",
    "/vape2.jpeg",
    "/catridge.jpeg",
    "/morphine.jpeg",
    "/molly.jpg",
  ];

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

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
    <motion.div
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Hero Image Slideshow */}
      <div className="relative w-full h-[400px] overflow-hidden">
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
        {/* Optional: Add navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* Blog Section */}
      <motion.div
        className="p-10 md:p-12 lg:p-20 bg-white rounded-lg shadow-lg mt-10"
        variants={fadeIn}
      >
        <motion.h1
          className="text-center text-5xl font-extrabold mb-10"
          variants={fadeIn}
        >
          Where to find the best deals on cannabis?
        </motion.h1>
        <motion.div variants={fadeIn}>
          <Blog />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}