'use client'

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";



export default function Blog() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      async function fetchBlogs() {
        try {
          const res = await fetch('/api/blogs'); // This calls the API route you created
          if (!res.ok) {
            throw new Error('Failed to fetch blogs');
          }
          const data = await res.json();
          setBlogs(data); // Set the fetched posts
        } catch (err: any) {
          setError(err.message); // Set error state
        } finally {
          setLoading(false); // Stop loading
        }
      }
  
      fetchBlogs();
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


  // Function to get an excerpt from the content
  const getExcerpt = (content: string, wordCount: number = 25) => {
    if (!content || typeof content !== 'string') return ''; // Check if content is a valid string
    const textContent = content.replace(/<[^>]+>/g, ' ').trim(); // Remove HTML tags
    const words = textContent.split(/\s+/); // Split the content into words
    return words.slice(0, wordCount).join(' ') + '...'; // Join the first 30 words
  };
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {blogs.map(blog => (
        <div key={blog.ID} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <Link href={`/blog/${blog.ID}`}>
            {/* Check if thumbnail exists */}
            <Image
              className="w-full h-auto rounded-md"
              src={blog.featured_image} // Provide fallback thumbnail if not available
              alt={blog.title}
              width={600}
              height={600}
            />
            <h2 className="text-[32px] font-bold mb-2 text-center" dangerouslySetInnerHTML={{ __html: blog.title }} />
            {/* Display the excerpt */}
            <p className="text-[18px]" dangerouslySetInnerHTML={{ __html: getExcerpt(blog.content) }} />
            <span className="text-amber-300">Read more</span>
        
          </Link>
     
        </div>
      ))}
    </div>
  );
}
