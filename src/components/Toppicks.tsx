import React from "react";
// import { toppicks, Product } from "../app/ToppicksData";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Products } from "@/app/types/types";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

const TopPicks = async () => {
  const data: Products[] = await client.fetch(`*[_type == 'product'][0..3]{
          _id,
          name,
          description,
          price,
          category,
          stockLevel,
          isFeaturedProduct,
          image
        }`);

  return (
    <>
      <section className="max-w-[1450px] mx-auto py-11 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Top Picks For You
            </h2>
            <p className="text-gray-600 mt-3">
              Find a bright ideal to suit your taste with our great selection of
              suspension, floor, and table lights.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.map((product: Products) => (
              <div
                key={product._id}
                className="flex flex-col items-center text-center space-y-4"
              >
                {/* Product Image */}
                <div className="bg-[#faf4f4] w-full h-40 flex justify-center items-center mt-4">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="w-full h-60 md:h-52 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
                {/* Product Name */}
                <h3 className="pt-12 text-lg font-medium text-gray-800">
                  {product.name}
                </h3>
                {/* Product Price */}
                <p className="pb-8 text-lg font-semibold text-gray-600">
                  ${product.price}
                </p>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-block text-black font-medium underline hover:no-underline hover:text-gray-800 transition"
            >
              View More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

// const TopPick = () => {
//   return (
//     <section className="max-w-[1450px] mx-auto py-11 bg-white overflow-hidden">
//       <div className="container mx-auto px-4">
//         {/* Section Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-800">
//             Top Picks For You
//           </h2>
//           <p className="text-gray-600 mt-2">
//             Find a bright ideal to suit your taste with our great selection of
//             suspension, floor, and table lights.
//           </p>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {toppicks.map((product: Product) => (
//             <div
//               key={product.id}
//               className="flex flex-col items-center text-center space-y-4"
//             >
//               {/* Product Image */}
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={250}
//                 height={250}
//                 className="w-full max-w-xs h-auto object-contain"
//               ></Image>
//               {/* Product Name */}
//               <h3 className="text-lg font-medium text-gray-800">
//                 {product.name}
//               </h3>
//               {/* Product Price */}
//               <p className="text-lg font-semibold text-gray-600">
//                 {product.price}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* View More Button */}
//         <div className="text-center mt-12">
//           <a
//             href="#"
//             className="inline-block text-black font-medium underline hover:no-underline hover:text-gray-800 transition"
//           >
//             View More
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

export default TopPicks;
