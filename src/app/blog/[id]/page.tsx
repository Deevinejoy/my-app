"use client"
import blogs from "@/app/db/k";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function blog ({params}: {params: {id: string}}) {
    const blog = blogs.find(blog => Number(params.id) === blog.id)
 
    if (!blog) {
        return <div>Blog not found</div>;
    }

    const [comments, setComments] = useState(blog.comments || []);

    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [email, setEmail] = useState("");
    const addComment = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload

        if (name.trim() && content.trim()) {
            const newComment = { name, content,  timee: new Date().toLocaleString()}; // New comment object
            setComments([...comments, newComment]);
            blog.comments.push(newComment);
            setName(""); // Clear input
            setContent(""); // Clear input
        }
    };

    return (
      <div>
            <div >
                <Image
                className="w-full h-auto rounded-md"
                src='/next.svg'
                alt='weed'
                width={10}
                height={50}
                />

            </div>
            <div className="p-50">
                <div key={blog.id} className="bg-white mb-5">
                    <Image
                        className="w-full h-auto rounded-md"
                        src={blog.img}
                        alt={blog.title}
                        width={100}
                        height={38}
                    />
                    <h2 className="text-[32px] font-bold p-3 text-center">{blog.title}</h2>
                    <p className="text-[18px]">{blog.content}</p> 
                    {blog.sections.map(
                        sec =>
                        <div key={blog.id}>
                            <h2 className="text-[24px] font-bold  p-3">{sec.heading}</h2>
                            <p className="text-[18px]">{sec.content}</p> 
                        </div>
                            
                    )}
                    <Link href='/products' >
                     <p className="p-2 mt-5 bg-[#85A965] w-[200px] text-white rounded-md text-center"> Shop with us now</p>
                    </Link>
                 
                </div>
                <div className="mt-20">
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
                </form>

            </div> 
           
      </div>
    )
}