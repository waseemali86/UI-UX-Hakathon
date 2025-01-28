// import CommentSection from "@/components/comment";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";


interface IPost {
  title: string;
  summary: string;
  image: string;
  author: string;
  content: string;
  _id: string;
}

export default async function Blog({ params }: { params: Promise<{title:string}> }) {
  // Destructure the title from params
  const { title } = await params;

 // Fetch the blog post based on the title
  const query: IPost = await client.fetch( `*[_type == 'blogs' && _id == $zord][0]`, {zord:title})
console.log(query);
 

  return (
    <>
    <div>
    <div className="max-w-[1450px]  container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
    <div className="flex flex-col items-center sm:items-start">
      <Image
        src={urlFor(query.image).url()}
        alt="Blog Image"
        height={500}
        width={1000}
        className="w-full sm:w-[90%] lg:max-w-[1200px] h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-md"
      />
      <div>
      <span className="text-lg font-light mt-4 opacity-80">{query.author}</span>
      </div>
    </div>
    <h2 className="text-2xl sm:text-3xl font-semibold mt-6 text-center sm:text-left">
      {query.title}
    </h2>
    <p className="text-base sm:text-lg mt-4 text-left opacity-80">
      {query.summary} {query.content}
    </p>
  </div>
  {/* <CommentSection/> */}
    </div>
    </>
  )
}


