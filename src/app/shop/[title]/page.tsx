import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

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

export default async function ProductPage({params}: { params: Promise<{ title: string }> }) {
  // Destructure the title from params
  const { title } = await params;

  // Fetch the blog post based on the title
  const product: Product = await client.fetch(
    `*[_type == 'product' && _id == $zord]{
  _id,
  name,
  description,
  price,
  category,
  stockLevel,
  isFeaturedProduct,
  image
  }[0]`,
    { zord: title }
  );
  console.log(product);

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

          <div className="mt-6 flex justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
