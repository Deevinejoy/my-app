"use client";

import Blog from "../components/Blog";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogPage() {
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
      {/* Hero Image */}
      <motion.div
        className="w-full h-auto"
        variants={fadeIn}
      >
        <Image
          className="w-full h-auto rounded-md"
          src="/weed.jpg"
          alt="weed"
          width={600}
          height={600}
        />
      </motion.div>

      {/* Blog Section */}
      <motion.div
        className="p-20"
        variants={fadeIn}
      >
        <motion.h1
          className="text-center text-5xl font-extrabold mb-10"
          variants={fadeIn}
        >
          Travel Guide List
        </motion.h1>
        <motion.div variants={fadeIn}>
          <Blog />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}