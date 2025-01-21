"use client";

"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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

const ProductShop = () => {
  const [products, setProducts] = useState<Product[]>([]); // State for products
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [loading, setLoading] = useState(true); // State for loading

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: Product[] = await client.fetch(`*[_type == 'product']{
          _id,
          name,
          description,
          price,
          category,
          stockLevel,
          isFeaturedProduct,
          image
        }`);
        setProducts(data);
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Generate suggestions based on search query
  const suggestions = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .map((product) => product.name);

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
  };

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-[1450px] mx-auto overflow-hidden bg-[#faf4f4]">
      {/* Header Section */}
      <section className="bg-[url('/images/bg.jpg')] md:h-[400px] overflow-hidden relative h-[60vh] bg-cover bg-center bg-shop-bg">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center">
          <div className="mb-4">
            <Image
              src="/images/shop0.png"
              alt="Shop Icon"
              width={100}
              height={100}
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="text-5xl font-bold">Shop</h1>
          <p className="text-xl mt-4">
            <Link href="/">Home</Link> &gt; Shop
          </p>
        </div>
      </section>

      {/* Search Bar with Suggestions */}
      <div className="relative flex justify-center mt-6 mb-4">
        <div className="w-full max-w-lg">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {searchQuery && suggestions.length > 0 && (
            <ul className="absolute bg-white shadow-lg border border-gray-200 mt-2 rounded-lg w-full max-w-lg z-10">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Product List */}
      {loading ? (
        <p className="text-center text-lg font-semibold text-gray-700">
          Loading products...
        </p>
      ) : (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <section className="flex flex-col items-center p-4">
                  <Link href={`/shop/${product._id}`} className="w-full">
                    <div className="w-full h-40 flex justify-center items-center">
                      <Image
                        src={urlFor(product.image).url()}
                        alt={product.name}
                        width={250}
                        height={250}
                        className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="mt-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {product.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                      {product.description}
                    </p>
                    <div className="mt-2">
                      <p className="text-lg font-bold text-gray-800">
                        ${product.price}
                      </p>
                    </div>
                      <div className="flex justify-between items-center mt-2">
                    <p className="text-sm text-gray-600 ">Category</p>
                    <p className="text-sm text-gray-600 ">{product.category}</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm text-gray-600 ">Stock Level</p>
                    <p className="text-sm text-gray-600 ">
                      {product.stockLevel}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm text-gray-600 ">Featured</p>
                    <p className="text-sm text-gray-600 ">
                      {product.isFeaturedProduct ? "Yes" : "No"}
                    </p>
                  </div>
                  <div className="mt-1 flex justify-center">
                    <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
                      Add to Cart
                    </button>
                  </div>
                  </div>
                </section>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products found.
            </p>
          )}
        </section>
      )}
    </div>
  );
};

export default ProductShop;

// const Shop = () => {
//   return (
//     <div className="max-w-[1450px] mx-auto overflow-hidden">
//       <section className="bg-[url('/images/bg.jpg')] md:h-[400px] overflow-hidden relative h-[60vh] bg-cover bg-center bg-shop-bg">
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center">
//           {/* Small Image in Center */}
//           <div className="mb-4">
//             <Image
//               src="/images/shop0.png"
//               alt="Shop Icon"
//               width={100}
//               height={100}
//               className="object-cover rounded-full"
//             />
//           </div>
//           <h1 className="text-5xl font-bold">Shop</h1>
//           <p className="text-xl mt-4">
//             <Link href="/">Home</Link> &gt; Shop
//           </p>
//         </div>
//       </section>
//       {/* <ProductShop /> */}

//       {/* Second Section: Product Grid */}
//       <section className="bg-white text-black py-10">
//         <div className="container mx-auto px-4 text-center">
//           {/* Product Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {/* Column 1 */}
//             <div className="text-center">
//               <Image
//                 src="/images/top4.png"
//                 alt="Product 1"
//                 width={150}
//                 height={150}
//                 className="object-contain mx-auto"
//               />
//               <h3 className="text-sm font-semibold mt-2">
//                 Trenton modular sofa_3
//               </h3>
//               <p className="text-lg font-bold">Rs. 25,000.00</p>
//             </div>
//             <div className="text-center">
//               <Image
//                 src="/images/top1.png"
//                 alt="Product 1"
//                 width={150}
//                 height={150}
//                 className="object-contain mx-auto"
//               />
//               <h3 className="text-sm font-semibold mt-2">
//                 Granite dining table with dining chair
//               </h3>
//               <p className="text-lg font-bold">Rs. 25,000.00</p>
//             </div>
//             <div className="text-center">
//               <Image
//                 src="/images/top2.png"
//                 alt="Product 1"
//                 width={150}
//                 height={150}
//                 className="object-contain mx-auto"
//               />
//               <h3 className="text-sm font-semibold mt-2">
//                 Outdoor bar table and stool
//               </h3>
//               <p className="text-lg font-bold">Rs. 25,000.00</p>
//             </div>
//             <div className="text-center">
//               <Image
//                 src="/images/top3.png"
//                 alt="Product 1"
//                 width={150}
//                 height={150}
//                 className="object-contain mx-auto"
//               />
//               <h3 className="text-sm font-semibold mt-2">
//                 Plain console with teak mirror
//               </h3>
//               <p className="text-lg font-bold">Rs. 25,000.00</p>
//             </div>

//             {/* Column 2 */}
//             <div className="text-center">
//               <Image
//                 src="/images/shop5.png"
//                 alt="Product 2"
//                 width={150}
//                 height={150}
//                 className="object-contain mx-auto"
//               />
//               <h3 className="text-sm font-semibold mt-2">Grain Coffee Table</h3>
//               <p className="text-lg font-bold">Rs. 15,000.00</p>
//             </div>
//             <div className="text-center">
//               <Image
//                 src="/images/shop6.png"
//                 alt="Product 2"
//                 width={150}
//                 height={150}
//                 className="object-contain mx-auto"
//               />
//               <h3 className="text-sm font-semibold mt-2">Kant Coffee table</h3>
//               <p className="text-lg font-bold">Rs. 225,000.00</p>
//             </div>
//             <div className="text-center">
//               <Image
//                 src="/images/shop7.png"
//                 alt="Product 2"
//                 width={150}
//                 height={150}
//                 className="object-contain mx-auto"
//               />
//               <h3 className="text-sm font-semibold mt-2">
//                 Round coffee table_color 2
//               </h3>
//               <p className="text-lg font-bold">Rs. 251,000.00</p>
//             </div>
//             <div className="text-center">
//               <Image
//                 src="/images/shop8.jpg"
//                 alt="Product 2"
//                 width={150}
//                 height={150}
//                 className="object-contain mx-auto"
//               />
//               <h3 className="text-sm font-semibold mt-2">
//                 Reclaimed teak coffee table
//               </h3>
//               <p className="text-lg font-bold">Rs. 25,200.00</p>
//             </div>

//             {/* Column 3 */}
//             <div className="text-center">
//               <Image
//                 src="/images/shop9.png"
//                 alt="Product 3"
//                 width={150}
//                 height={150}
//                 className="object-contain mx-auto"
//               />
//               <h3 className="text-sm font-semibold mt-2">Plain console</h3>
//               <p className="text-lg font-bold">Rs. 258,200.00</p>
//             </div>
//             <div className="text-center">
//               <Image
//                 src="/images/shop10.png"
//                 alt="Product 3"
//                 width={150}
//                 height={150}
//                 className="object-contain mx-auto"
//               />
//               <h3 className="text-sm font-semibold mt-2">
//                 Reclaimed teak side board
//               </h3>
//               <p className="text-lg font-bold">Rs. 20,000.00</p>
//             </div>
//             <div className="text-center">
//               <Image
//                 src="/images/shop11.png"
//                 alt="Product 3"
//                 width={150}
//                 height={150}
//                 className="object-contain mx-auto"
//               />
//               <h3 className="text-sm font-semibold mt-2">SJP_0825</h3>
//               <p className="text-lg font-bold">Rs. 200,000.00</p>
//             </div>
//             <div className="text-center">
//               <Image
//                 src="/images/shop12.png"
//                 alt="Product 3"
//                 width={150}
//                 height={150}
//                 className="object-contain mx-auto"
//               />
//               <h3 className="text-sm font-semibold mt-2">
//                 Bella Chair and table
//               </h3>
//               <p className="text-lg font-bold">Rs. 100,000.00</p>
//             </div>

//             {/* Column 4 */}
//             <div className="text-center">
//               <Image
//                 src="/images/shop13.png"
//                 alt="Product 4"
//                 width={150}
//                 height={150}
//                 className="object-contain mx-auto"
//               />
//               <h3 className="text-sm font-semibold mt-2">
//                 Granite square side table
//               </h3>
//               <p className="text-lg font-bold">Rs. 58,800.00</p>
//             </div>
//             <div className="text-center">
//               <Image
//                 src="/images/shop14.png"
//                 alt="Product 4"
//                 width={150}
//                 height={150}
//                 className="object-contain mx-auto"
//               />
//               <h3 className="text-sm font-semibold mt-2">Asgaard Sofa</h3>
//               <p className="text-lg font-bold">Rs. 250,000.00</p>
//             </div>
//             <div className="text-center">
//               <Image
//                 src="/images/shop15.png"
//                 alt="Product 4"
//                 width={150}
//                 height={150}
//                 className="object-contain mx-auto"
//               />
//               <h3 className="text-sm font-semibold mt-2">
//                 Maya sofa three seater
//               </h3>
//               <p className="text-lg font-bold">Rs. 115,000.00</p>
//             </div>
//             <div className="text-center">
//               <Image
//                 src="/images/shop16.png"
//                 alt="Product 4"
//                 width={150}
//                 height={150}
//                 className="object-contain mx-auto"
//               />
//               <h3 className="text-sm font-semibold mt-2">Outdoor sofa set</h3>
//               <p className="text-lg font-bold">Rs. 244,000.00</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Pagination Section */}
//       <section className="py-10 text-center">
//         <div className="flex justify-center gap-4">
//           <Link href={`/shop?page=1`}>
//             <div className="w-10 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
//               1
//             </div>
//           </Link>
//           <Link href={`/shop?page=2`}>
//             <div className="w-10 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
//               2
//             </div>
//           </Link>
//           <Link href={`/shop?page=3`}>
//             <div className="w-10 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
//               3
//             </div>
//           </Link>
//           <Link href={`/shop?page=next`}>
//             <div className="w-10 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
//               Next
//             </div>
//           </Link>
//         </div>
//       </section>

//       {/* 3RD Section: CONCEPT Posts */}
//       <section className="bg-gray-100 text-black py-10">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {/* First Column */}
//             <div className="text-center">
//               <h2 className="text-black font-bold text-3xl">Free Delivery</h2>
//               <p className="text-lg text-gray-700">
//                 For all orders over $50, consectetur adipim scing elit.
//               </p>
//             </div>

//             {/* Second Column */}
//             <div className="text-center">
//               <h2 className="text-black font-bold text-3xl">90 Days Return</h2>
//               <p className="text-lg text-gray-700">
//                 If the product has an issue, consectetur adipim scing elit.
//               </p>
//             </div>

//             {/* Third Column */}
//             <div className="text-center">
//               <h2 className="text-black font-bold text-3xl">Secure Payments</h2>
//               <p className="text-lg text-gray-700">
//                 100% secure payments, consectetur adipim scing elit.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
