'use client';

import Image from 'next/image';
import Product from '../components/Product';
import products from '@/app/db/products';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const categories = ['All', 'Drugs', 'Vapes', 'opioids', 'Weed', 'Edibles', 'Shrooms'  ];

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [category, setCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  const filteredProducts = products.filter((product) => {
    const queryMatch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase())  ||
      product.des.toLowerCase().includes(searchQuery.toLowerCase())  ||
      product.category?.toLowerCase().includes(searchQuery.toLowerCase()) 

    const categoryMatch =
      category === 'All' ||
      product.category?.toLowerCase().includes(category.toLowerCase()) 

    return queryMatch && categoryMatch;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, category]);

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const pageNumbers = [];
  const maxPageNumbersShown = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersShown / 2));
  const endPage = Math.min(totalPages, startPage + maxPageNumbersShown - 1);

  if (endPage - startPage + 1 < maxPageNumbersShown) {
    startPage = Math.max(1, endPage - maxPageNumbersShown + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

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

  return (
    <motion.div className="min-h-screen" initial="hidden" animate="visible" variants={staggerContainer}>
      <motion.div className="relative w-full h-64 md:h-80" variants={fadeIn}>
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
       
      </motion.div>

      <motion.div className="p-6 md:p-12 lg:p-20" variants={fadeIn}>
      <motion.h1
          className="text-center text-5xl font-extrabold mb-10 mt-10"
          variants={fadeIn}
        >
         Shop
        </motion.h1>
        <div className="max-w-3xl mx-auto mb-8 space-y-4">
          <motion.input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#85A965] focus:border-transparent"
            variants={fadeIn}
          />

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                  category === cat
                    ? 'bg-[#85A965] text-white border-transparent'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <motion.div className="text-center py-12" variants={fadeIn}>
            <p className="text-xl text-gray-600">
              No products found matching "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-4 py-2 bg-[#85A965] text-white rounded-md hover:bg-black transition-colors"
            >
              Clear Search
            </button>
          </motion.div>
        ) : (
          <>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer}>
              {currentProducts.map((product) => (
                <motion.div key={product.id} variants={fadeIn}>
                  <Product product={product} />
                </motion.div>
              ))}
            </motion.div>

            {filteredProducts.length > productsPerPage && (
              <motion.div className="flex justify-center mt-12" variants={fadeIn}>
                <nav className="flex items-center space-x-1">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 rounded-md ${
                      currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {pageNumbers.map((number) => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`px-4 py-2 rounded-md ${
                        currentPage === number ? 'bg-[#85A965] text-white' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {number}
                    </button>
                  ))}

                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 rounded-md ${
                      currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </nav>
              </motion.div>
            )}

            <motion.div className="text-center text-gray-500 mt-6" variants={fadeIn}>
              Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
            </motion.div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
