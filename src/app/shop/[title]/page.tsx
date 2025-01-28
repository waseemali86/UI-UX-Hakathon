"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useCart } from "@/context/cartContext";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
  image: string;
}


export default function ProductDetails( ) {
  const { title } = useParams();
  const [product, setProduct] = useState<Product | null>(null); // State for a single product
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct: Product = await client.fetch(
          `*[_type == 'product' && _id == $zord][0]{
            _id,
            name,
            description,
            price,
            category,
            stockLevel,
            isFeaturedProduct,
            image
          }`,
          { zord: title }
        );
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } 
    };

    fetchProduct();
  }, [title]);


  const handleAddToWishlist = (product:Product) => {
    // Get existing wishlist from localStorage
    const existingWishlist = localStorage.getItem("wishlist");
    const wishlist = existingWishlist ? JSON.parse(existingWishlist) : [];
  
    // Check if the product already exists in the wishlist
    const isProductInWishlist = wishlist.some((item:Product) => item._id === product._id);
    if (isProductInWishlist) {
      toast.error("This product is already in your wishlist!");
      return;
    }
  
    // Add product to the wishlist
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  
    // Notify the user
    toast.success(`${product.name} has been added to your wishlist!`);
  };
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg shadow-xl"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>

          <div className="flex items-center mb-4">
            <p className="text-xl font-bold text-gray-800">${product.price}</p>
            {product.isFeaturedProduct && (
              <span className="ml-4 px-3 py-1 text-sm bg-yellow-200 text-yellow-800 rounded-full">
                Featured
              </span>
            )}
          </div>

          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-500">
              Category: {product.category}
            </p>
            <p className="text-sm text-gray-500">Stock: {product.stockLevel}</p>
          </div>

          <div className="w-full mt-6 flex justify-between">
            <Link href ="/cart">
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-12 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Add to Cart
            </button>
            </Link>
            <Link href ="/wishlist">
            <button
              onClick={() => handleAddToWishlist(product)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Add to Favorite
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}



// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   category: string;
//   stockLevel: number;
//   isFeaturedProduct: boolean;
//   image: string;
// }

// interface ProductPageProps {
//   params: {
//     title: string;
//   };
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   // Destructure the title from params
//   const { title } = params;

//   // Fetch the product based on the title
//   const product: Product = await client.fetch(
//     `*[_type == 'product' && _id == $zord][0]{
//       _id,
//       name,
//       description,
//       price,
//       category,
//       stockLevel,
//       isFeaturedProduct,
//       image
//     }`,
//     { zord: title }
//   );

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="flex justify-center items-center">
//           <Image
//             src={urlFor(product.image).url()}
//             alt={product.name}
//             width={500}
//             height={500}
//             className="rounded-lg shadow-xl"
//           />
//         </div>
//         <div>
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">
//             {product.name}
//           </h1>
//           <p className="text-lg text-gray-600 mb-6">{product.description}</p>

//           <div className="flex items-center mb-4">
//             <p className="text-xl font-bold text-gray-800">${product.price}</p>
//             {product.isFeaturedProduct && (
//               <span className="ml-4 px-3 py-1 text-sm bg-yellow-200 text-yellow-800 rounded-full">
//                 Featured
//               </span>
//             )}
//           </div>

//           <div className="flex justify-between items-center mb-4">
//             <p className="text-sm text-gray-500">
//               Category: {product.category}
//             </p>
//             <p className="text-sm text-gray-500">Stock: {product.stockLevel}</p>
//           </div>

//           <div className="w-full mt-6 flex justify-center">
//             <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
