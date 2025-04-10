'use client'

import Image from "next/image";
import Product from "../components/Product";
import products from "@/app/db/products";
import { useState, useEffect } from "react";

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6); // Number of products per page
  
  // Filter products based on search query
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.des.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Page change handler
  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // Scroll to top of products section
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  // Generate page numbers
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

  return (
   
    <div>
      <div className="relative w-full h-64 md:h-80">
        <Image
          className="object-cover"
          src='/weed3.jpg'
          alt='Shop banner'
          fill
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-center text-5xl font-extrabold text-white">Shop</h1>
        </div>
      </div>
      
      <div className="p-6 md:p-12 lg:p-20">
        <div className="max-w-3xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#85A965] focus:border-transparent"
          />
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found matching" {searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-4 px-4 py-2 bg-[#85A965] text-white rounded-md hover:bg-black transition-colors"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
            
            {/* Pagination Controls */}
            {filteredProducts.length > productsPerPage && (
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-1">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 rounded-md ${
                      currentPage === 1 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {pageNumbers.map(number => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`px-4 py-2 rounded-md ${
                        currentPage === number
                          ? 'bg-[#85A965] text-white' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {number}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 rounded-md ${
                      currentPage === totalPages 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </nav>
              </div>
            )}
            
            <div className="text-center text-gray-500 mt-6">
              Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
            </div>
          </>
        )}
      </div>
    </div>
  );
}