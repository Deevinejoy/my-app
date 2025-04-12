"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DisqusComments from "@/app/components/CommentForm";
import Head from "next/head";


interface BlogPost {
  ID: string;
  title: string;
  content: string;
  date: string;
  slug: string;
  featured_image: string;
 
}

export default function BlogPost() {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const ID = params?.id;

  useEffect(() => {
    if (!ID) return;

    async function fetchPost() {
      try {
        const res = await fetch(`/api/blogs/${ID}`);
        if (!res.ok) {
          throw new Error("Failed to fetch post");
        }
        const data: BlogPost = await res.json();
        setPost(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [ID]);

  if (loading)
    return (
      <div className="h-[80vh] flex items-center justify-center text-xl">
        Loading post...
      </div>
    );
  if (!post)
    return <div className="text-center text-xl">No post found.</div>;
  if (error)
    return (
      <div className="text-center text-xl text-red-500">Error: {error}</div>
    );
    const getExcerpt = (content: string, wordCount: number = 25) => {
      if (!content || typeof content !== "string") return "";
      const textContent = content.replace(/<[^>]+>/g, " ").trim();
      const words = textContent.split(/\s+/);
      return words.slice(0, wordCount).join(" ") + "...";
    };

  return (
    <>
         <Head>
        <title>{post.title} | My Blog</title>
        <script
              type="application/ld+json"
                dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.title,
                description: getExcerpt(post.content, 25),
                image: post.featured_image,
                datePublished: post.date,
                author: {
                  "@type": "Person",
                  name: "Divine",
                },
              }),
            }}
          />
        <meta name="description" content={getExcerpt(post.content, 25)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={getExcerpt(post.content, 25)} />
        <meta property="og:image" content={post.featured_image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        
      </Head>

       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-6">
        <Image
          className="w-full h-auto rounded-md"
          src={post.featured_image}
          alt={post?.title || "Post Image"}
          width={1200}
          height={600}
          priority
        />
      </div>

      <div className="bg-white mb-6 p-6 rounded-lg shadow-lg">
        <h2
          className="text-3xl font-bold text-center text-gray-900 mb-4"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        <div
          className="mt-4 text-lg text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="text-center mt-6">
          <Link href="/products">
            <p className="inline-block px-6 py-3 bg-[#85A965] text-white rounded-md hover:bg-[#4b6b31] transition-all">
              Shop with us now
            </p>
          </Link>
        </div>
      </div>

      {post?.ID && post?.slug && post?.title && (
        <DisqusComments
          postId={Number(post.ID)}
          postSlug={post.slug}
          postTitle={post.title}
        />
      )}
       </div>
    </>
    
  );
}
