import Blog from "../components/Blog";
import Image from "next/image";


export default function blogpage() {
    return (
      <div >
       
       <div >
        <Image
        className="w-full h-auto rounded-md"
        src='/next.svg'
        alt='weed'
        width={10}
        height={50}
    />

        </div>
       <div className="p-20">
        <h1 className="text-center text-5xl font-extrabold">Travel Guide List</h1>
        <Blog/>
        </div>
      </div>
    );
  
}