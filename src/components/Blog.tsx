import { Products } from "@/app/types/types";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

async function Blogs() {
  const data: Products[] = await client.fetch(
    `*[_type == 'blog']{
      _id,
      name,
      description,
      price,
      category,
      stockLevel,
      isFeaturedProduct,
      image
    }`
  );

  return (
    <>
      <div className="max-w-[1450px] mx-auto flex justify-center overflow-hidden">
        <div className="text-center bg-[#FAF4F480] h-auto md:h-[750px]">
          <h4 className="text-2xl text-black font-bold pt-14">Our Blogs</h4>
          <p className="pt-4 pb-16 text-lg text-black text-opacity-50">
            Find a bright ideal to suit your taste with our great selection
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Blog Cards */}
            {data.map((blog) => (
              <div
                key={blog._id}
                className="flex flex-col items-center space-y-4"
              >
                <div>
                  <Image
                    src={urlFor(blog.image).url()}
                    alt={blog.name}
                    width={300}
                    height={200}
                    className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800">{blog.name}</h3>
                <Link
                  href="#"
                  className="inline-block text-black text-lg font-medium underline hover:no-underline hover:text-gray-800 transition"
                >
                  Read More
                </Link>
                <p className="text-sm text-gray-500">5 min | 12th Oct 2022</p>
              </div>
            ))}
          </div>
          {/* View All Posts */}
          <div className="text-center mt-16">
            <Link
              href="/blog"
              className="inline-block text-black text-lg font-medium underline hover:no-underline hover:text-gray-800 transition"
            >
              View All Post
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;

// import { Blogs } from "@/app/types/types";
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import Link from "next/link";

// async function Blog() {

//     const blog: Blogs[] = await client.fetch(`*[_type == 'blogs']{
//               _id,
//               name,
//               description,
//               price,
//               image
//             }`);

//   return (
//     <>
//        {blog.map((blog) => {
//         <div key={blog._id} className="max-w-[1450px] mx-auto flex justify-center overflow-hidden">
//           <div className="text-center bg-[#FAF4F480] h-auto md:h-[750px]">
//             <h4 className="text-2xl text-black font-bold pt-14 ">Our Blogs</h4>
//             <p className="pt-4 pb-16 text-lg text-black text-opacity-50">
//               Find a bright ideal to suit your taste with our great selection
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {/* Blog Card */}
//               <div className="flex flex-col items-center space-y-4">
//                 <div>
//                   <Image
//                     src={blog.image}
//                     alt={blog.name}
//                     width={300}
//                     height={200}
//                   />
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-800"></h3>
//                 <p className="text-gray-600">
//                   {blog.name}
//                 </p>
//                 <Link href ="/blog"
//                   className="inline-block text-black text-lg font-medium underline hover:no-underline hover:text-gray-800 transition"
//                 >
//                   Read More
//                 </Link>
//                 <p>5 min 12th Oct 2022</p>
//               </div>
//               {/* <div className="flex flex-col items-center space-y-4">
//                 <div>
//                   <Image
//                     src="/images/blog2.png"
//                     alt="Blog Image 1"
//                     width={300}
//                     height={200}
//                   />
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-800"></h3>
//                 <p className="text-gray-600">
//                   Going all-in with millennial design
//                 </p>
//                 <a
//                   href="#"
//                   className="inline-block text-black text-lg font-medium underline hover:no-underline hover:text-gray-800 transition"
//                 >
//                   Read More
//                 </a>
//                 <p>5 min 12th Oct 2022</p>
//               </div>
//               <div className="flex flex-col items-center space-y-4">
//                 <div>
//                   <Image
//                     src="/images/blog3.png"
//                     alt="Blog Image 1"
//                     width={300}
//                     height={200}
//                   />
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-800"></h3>
//                 <p className="text-gray-600">
//                   Going all-in with millennial design
//                 </p>
//                 <a
//                   href="#"
//                   className="inline-block text-black text-lg font-medium underline hover:no-underline hover:text-gray-800 transition"
//                 >
//                   Read More
//                 </a>
//                 <p>5 min 12th Oct 2022</p>
//               </div> */}
//             </div>
//             <div className="text-center mt-16">
//           <Link
//             href="/blog"
//             className="inline-block text-black text-center font-medium underline hover:no-underline hover:text-gray-800 transition"
//           >
//             View All Post
//           </Link>
//         </div>
//           </div>
//         </div>
//           })};
//     </>
//   );
// }

// export default Blog;
