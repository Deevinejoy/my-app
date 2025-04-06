import Link from "next/link";
import Image from "next/image";
import blogs from "../db/k";




export default function Blog() {

    const getExcerpt = (content: string, wordCount: number = 30) => {
        const words = content.split(/\s+/); // Split the content into words
        return words.slice(0, wordCount).join(' ') + '...'; // Join the first 20 words
    };


    return (
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {blogs.map(blog => (
                <div key={blog.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                    <Link href={`/blog/${blog.id}`}>
                        <Image
                            className="w-full h-auto rounded-md"
                            src={blog.img}
                            alt={blog.title}
                            width={100}
                            height={38}
                        />
                        <h2 className="text-[32px] font-bold mb-2 text-center">{blog.title}</h2>
                       <p className="text-[18px]">{getExcerpt(blog.content)} <span className="text-amber-300">Read more</span></p> 
                     
                    
                    </Link>
                </div>
            ))}
        </div>
    );
}