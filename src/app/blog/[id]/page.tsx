"use client" 
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';

import { useParams, usePathname, useRouter } from 'next/navigation';
import {  useSearchParams } from 'next/navigation';
import Comment from '@/app/components/Comment'
import CommentForm from '@/app/components/CommentForm'
import DisqusComments from '@/app/components/CommentForm';

export default function BlogPost() {
    const [post, setPost] = useState<any>(null); // State to store the post
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    
    const params = useParams();
    const ID = params?.id;
    console.log('id:', ID)
  
    useEffect(() => {
        if (!ID) return;
        console.log("Query ID:", ID)
        console.log('please')
      
        async function fetchPost() {
          try {
            const res = await fetch(`/api/blogs?id=5`); 
            // This now points to your corrected API route
            console.log('Response:', res);
            if (!res.ok) {
              throw new Error('Failed to fetch post');
            }
            const data = await res.json();
            console.log('Fetched post:', data);
            setPost(data); // Save the fetched post to state
          } catch (err: any) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        }
      
        fetchPost();
      }, [ID]);
    if (loading) return <div>Loading post...</div>;
if (!post) return <div>No post found.</div>;

    if (error) return <div>Error: {error}</div>;
    



    // const [comments, setComments] = useState(blog.comments || []);

    // const [name, setName] = useState("");
    // const [content, setContent] = useState("");
    // const [email, setEmail] = useState("");
    // const addComment = (e: React.FormEvent) => {
    //     e.preventDefault(); // Prevent page reload

    //     if (name.trim() && content.trim()) {
    //         const newComment = { name, content,  timee: new Date().toLocaleString()}; // New comment object
    //         setComments([...comments, newComment]);
    //         blog.comments.push(newComment);
    //         setName(""); // Clear input
    //         setContent(""); // Clear input
    //     }
    // };
    

    return (
      <div>
            <div >
                <Image
                className="w-full h-auto rounded-md"
                src='/next.svg'
                alt='weed'
                width={100}
                height={50}
                />

            </div>
            <div className="p-50">
                <div className="bg-white mb-5">
                    <Image
                        className="w-full h-auto rounded-md"
                        src='/cart.svg'
                        alt={post?.title || 'Cart icon'}
                        width={100}
                        height={38}
                    />
                    <h2 className="text-[32px] font-bold p-3 text-center">{post.title}</h2>
                    <h2 className="text-[32px] font-bold mb-2 text-center" dangerouslySetInnerHTML={{ __html: post.title }} />
                   <p className="text-[18px]">{post.content}</p>  *
                    <div className="mt-4 text-[18px]" dangerouslySetInnerHTML={{ __html: post.content }} /> 
                    <Link href='/products' >
                     <p className="p-2 mt-5 bg-[#85A965] w-[200px] text-white rounded-md text-center"> Shop with us now</p>
                    </Link>
                 
                </div>
                <Comment postId={post.id}/>
                {/* <CommentForm postId={5}/>
                {post?.ID && post?.slug && post?.title && (
  <DisqusComments
    postId={post.ID}
    postSlug={post.slug}
    postTitle={post.title}
  />
)} */}



                {/* <div className="mt-20">
                    <p className="mb-2"> comments</p>
                   
                        {blog.comments.map(
                            comment => 
                                <div  key={blog.id} className="bg-[#D9D9D9] p-4 mb-5 rounded-md">
                                       <div className="flex justify-between">
                                        <div className="flex flex-row gap-4 ">
                                            <Image
                                            src="/search.svg"
                                            alt='profile picture'
                                            width={20}
                                            height={20}
                                            />
                                            <p className="text-2xl ">{comment.name}</p> 
                                        </div>
                                        
                                             <p className="flex-end">7th june, 2021 {comment.time}</p>
                                        </div>
                                     <div className="pt-3">
                                        <p>{comment.content}</p>
                                       </div>
                                 
                                 
                                </div>
                            )}
                       
                     
                </div>
                <p className="mt-4">Leave a comment</p>
                <form onSubmit={addComment} className="mt-4">
                  
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write a comment..."
                        className="border p-2 w-full mb-2 rounded-md"
                    ></textarea>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="border p-2 w-full mb-2 rounded-md"
                    />
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        className="border p-2 w-full mb-2 rounded-md"
                    />
                    <button type="submit" className="bg-[#85A965] text-white px-4 py-2 rounded-lg">
                        Add Comment
                    </button>
                </form> */}

            </div> 
           
      </div>
    )
}