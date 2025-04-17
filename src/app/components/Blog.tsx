"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";


interface BlogPost {
  ID: number;
  title: string;
  content: string;
  date: string;
  slug: string;
  featured_image: string;
}

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [postsPerPage] = useState<number>(6);
  
  // Ref for the blog component
  const blogComponentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        setLoading(true);
        const res = await fetch(`/api/blogs?page=${currentPage}&per_page=${postsPerPage}`);
        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }
        
        // Get total posts count from header or response
        const totalPosts = parseInt(res.headers.get('X-WP-Total') || '0', 10) || 0;
        const calculatedTotalPages = Math.ceil(totalPosts / postsPerPage) || 1;
        
        const data: BlogPost[] = await res.json();
        setBlogs(data);
        setTotalPages(calculatedTotalPages);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
    
    // Scroll to top of blog component when page changes
    if (blogComponentRef.current && !loading) {
      blogComponentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage, postsPerPage]);

  const getExcerpt = (content: string, wordCount: number = 25) => {
    if (!content || typeof content !== "string") return "";
    const textContent = content.replace(/<[^>]+>/g, " ").trim();
    const words = textContent.split(/\s+/);
    return words.slice(0, wordCount).join(" ") + "...";
  };

  // Filter blogs based on the search query
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination controls
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // Scroll handled in useEffect
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // Max number of page buttons to show
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust start page if end page is at maximum
    if (endPage === totalPages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    return pageNumbers;
  };

  if (loading)
    return (
      <div className="h-[80vh] flex items-center justify-center text-xl">
        Loading posts...
      </div>
    );

  if (error) return <div>Error: {error}</div>;
 

  return (
    <div className="p-4" ref={blogComponentRef}>
      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>


       
      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

        
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div
              key={blog.ID}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full"
            >
              <Link href={`/blog/${blog.slug}`}>
                {blog.featured_image ? (
                  <Image
                    className="w-full h-48 object-cover rounded-md"
                    src={blog.featured_image}
                    alt={blog.title}
                    width={600}
                    height={400}
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center">
                    <span className="text-gray-500">No image available</span>
                  </div>
                )}
                <h2
                  className="text-xl font-bold my-3 text-center"
                  dangerouslySetInnerHTML={{ __html: blog.title }}
                />
                 <p className="text-gray-500 mb-2 pr-3 pl-3">{new Date(blog.date).toLocaleDateString()}</p>
                <p
                  className="text-gray-700 mb-3 pr-3 pl-3"
                  dangerouslySetInnerHTML={{
                    __html: getExcerpt(blog.content),
                  }}
                />
                
                <div className="mt-4 text-[#85A965] font-semibold pr-3 pl-3">Read more →</div>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-10">
            <p>No posts found matching your search.</p>
          </div>
        )}
      </div>

      {/* Pagination - Only show if not searching and we have multiple pages */}
      {!searchQuery && totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 my-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-[#85A965] text-white hover:bg-amber-600 hover:text-black"
            }`}
          >
            Previous
          </button>
          
          {getPageNumbers().map(pageNum => (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`px-3 py-1 rounded-md ${
                currentPage === pageNum
                  ? "bg-[#85A965] text-white"
                  : "bg-gray-200 hover:bg-gray-300 "
              }`}
            >
              {pageNum}
            </button>
          ))}
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-[#85A965] text-white hover:bg-amber-600 hover:text-black"
            }`}
          >
            Next
          </button>
        </div>
      )}

      {/* Page info */}
      {!searchQuery && (
        <div className="text-center text-gray-500">
          Page {currentPage} of {totalPages}
        </div>
      )}
    </div>
  );
}