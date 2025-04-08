"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BlogPost {
  ID: number;
  title: string;
  content: string;
  slug: string;
  featured_image: string;

}

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data: BlogPost[] = await res.json();
        setBlogs(data);
      } catch (err) {
        setError((err as Error).message); // Narrow `err` to `Error`
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) return
   <div className="h-[80vh] flex items-center justify-center text-xl">
  Loading post...
</div>;
  if (error) return <div>Error: {error}</div>;

  const getExcerpt = (content: string, wordCount: number = 25) => {
    if (!content || typeof content !== "string") return "";
    const textContent = content.replace(/<[^>]+>/g, " ").trim();
    const words = textContent.split(/\s+/);
    return words.slice(0, wordCount).join(" ") + "...";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {blogs.map((blog) => (
        <div
          key={blog.ID}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <Link href={`/blog/${blog.ID}`}>
            <Image
              className="w-full h-auto rounded-md"
              src={blog.featured_image}
              alt={blog.title}
              width={600}
              height={600}
            />
            <h2
              className="text-[32px] font-bold mb-2 text-center"
              dangerouslySetInnerHTML={{ __html: blog.title }}
            />
            <p
              className="text-[18px]"
              dangerouslySetInnerHTML={{
                __html: getExcerpt(blog.content),
              }}
            />
            <span className="text-amber-300">Read more</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
