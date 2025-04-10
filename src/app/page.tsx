// app/page.tsx
"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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
    "/Love-Potion.jpeg",
    "/ogkush.jpg",  // Replace with your actual image paths
    "/Orangehaze.jpg",
    "/gorilla_glue.jpg"
  ];

  // Fetch blog posts
  useEffect(() => {
    async function fetchLatestPosts() {
      try {
        const res = await fetch('/api/blogs');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data: BlogPost[] = await res.json();
        setLatestPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
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
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Manual slide navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section with Slideshow */}
      <section className="relative h-screen flex items-center justify-center text-white">
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
        
        {/* Slideshow navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 z-10 flex justify-center w-full gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-8 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Buds Delivery</h1>
          <p className="text-xl md:text-2xl mb-8">Premium quality products delivered discreetly to your doorstep</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Product 1 concentrates, flowers, edibles*/}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
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
                <p className="text-gray-600 mb-4">Carefully cultivated strains with exceptional quality and potency.</p>
                <Link href="/products">
                  <button className="w-full py-2 bg-[#85A965] text-white rounded-md hover:bg-[#6d8c52] transition-colors">
                    View Products
                  </button>
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-64 relative">
                <Image
                  src="/mushrooms-blue-meanie.jpg"
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
            </div>

            {/* Product 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
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
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
          
          {loading ? (
            <div className="text-center">Loading latest posts...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestPosts.slice(0, 3).map((post) => (
                <Link href={`/blog/${post.ID}`} key={post.ID}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full">
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
                      <p className="text-gray-500 mb-2">{new Date(post.date).toLocaleDateString()}</p>
                      <div 
                        className="text-gray-600 line-clamp-3" 
                        dangerouslySetInnerHTML={{ __html: post.excerpt || "" }}
                      />
                      <div className="mt-4 text-[#85A965] font-semibold">Read more →</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link href="/blog">
              <button className="px-8 py-3 bg-[#85A965] text-white rounded-md text-lg font-semibold hover:bg-black transition-colors">
                View All Posts
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-[#85A965] p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discreet Packaging</h3>
              <p className="text-gray-600">Your privacy is our priority with secure, unmarked packaging for all orders.</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-[#85A965] p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">We source only the highest quality products that meet our strict standards.</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-[#85A965] p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick processing and shipping to get your products to you when you need them.</p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-[#85A965] p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Our knowledgeable team is ready to assist with any questions or concerns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Place Your Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Experience premium quality products and discreet delivery - your satisfaction is guaranteed.</p>
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
        </div>
      </section>
    </main>
  );
}