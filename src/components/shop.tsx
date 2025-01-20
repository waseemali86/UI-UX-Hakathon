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
// };

// async function ProductShop() {

//   const products: Product[] = await client.fetch(`*[_type == 'product']{
//     _id,
//   name,
//   description,
//   price,
//   category,
//   stockLevel,
//   isFeaturedProduct,
//   image
//   }`);
// console.log(products);
//   return (
//     <>
//       <h1>Products</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product._id}>
//             <h2>{product.name}</h2>
//             <Image
//                           src={urlFor(product.image).url()}
//                           alt={product.name}
//                           width={200}
//                           height={200}
//                           className="size-[350px] rounded-2xl cursor-pointer"
//                         />            <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//             <p>Category: {product.category}</p>
//             <p>Stock Level: {product.stockLevel}</p>
//             <p>Featured: {product.isFeaturedProduct ? 'Yes' : 'No'}</p>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default ProductShop;

// import { GetServerSideProps } from 'next';
// import { client } from '@/sanity/lib/client';
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image';

// export interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   category: string;
//   stockLevel: number;
//   isFeaturedProduct: boolean;
//   image: string; // Optional field
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//   const products: Product[] = await client.fetch(`*[_type == 'product']`);
//   return {
//     props: { products },
//   };
// };

// interface ProductsPageProps {
//   products: Product[];
// }

// export default function ProductShop({ products }: ProductsPageProps) {
//   return (
//     <div>
//       <h1>Products</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product._id}>
//             <h2>{product.name}</h2>
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={product.name}
//                 width={200}
//                 height={200}
//               />
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//             <p>Category: {product.category}</p>
//             <p>Stock Level: {product.stockLevel}</p>
//             <p>Featured: {product.isFeaturedProduct ? 'Yes' : 'No'}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
