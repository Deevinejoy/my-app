import Blog from "../components/Blog";
import Image from "next/image";


export default function blogpage() {
    return (
      <div >
       
       <div >
        <Image
        className="w-full h-auto rounded-md"
        src='/weed.jpg'
        alt='weed'
        width={600}
        height={600}
    />

        </div>
       <div className="p-20">
        <h1 className="text-center text-5xl font-extrabold">Travel Guide List</h1>
        <Blog/>
        </div>
      </div>
    );
  
}