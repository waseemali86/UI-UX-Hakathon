'use client';
import { useCart } from "@/context/cartContext";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Products } from "../types/types";

interface Categorydata {
  _createdAt: string;
  _updatedAt: string;
  name: string;
  _id: string;
  category: string;
  image: string;
  addcart_button: string;
  price: number;
  _rev: string;
  _type: string;
  description: string;
  product_name: string;
}

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<Products[]>([]); // Wishlist state
  const { addToCart } = useCart();

  // Load wishlist from localStorage when the page loads
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      try {
        const wishlistData: Products[] = JSON.parse(savedWishlist);
        console.log("Wishlist data: ", wishlistData); // Debugging log to check data
        setWishlist(wishlistData);
      } catch (error) {
        console.error("Failed to parse wishlist data:", error);
      }
    }
  }, []);

  // Handle add to cart and show success message
  const handleAddToCart = (product: Products) => {
    addToCart(product);
    toast.success(`${product.name} has been added to your cart!`, { duration: 3000 });
  };

  // Optional: Remove from Wishlist (for better UX)
  const handleRemoveFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    toast.success("Product removed from wishlist", { duration: 3000 });
  };

  return (
    <div>
        {/* First Section with Tailwind Background */}
      <section className="bg-[url('/images/bg.jpg')] md:h-[400px] overflow-hidden relative h-[60vh] bg-cover bg-center bg-shop-bg">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center">
          {/* Small Image in Center */}
          <div className="mb-4">
            <Image
              src="/images/shop0.png"
              alt="Shop Icon"
              width={100}
              height={100}
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="text-5xl font-bold">WishList</h1>
          <p className="text-xl mt-4">
            <Link href="/">Home</Link> &gt; WishList
          </p>
        </div>
      </section>

      <h1 className="text-3xl font-bold text-center mt-12">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 mt-8">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <div key={product._id}
             className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white w-80"
             >
            <div className="w-full h-40 flex justify-center items-center mb-4">
              <Image
                src={product.image ? urlFor(product.image).url() : "/placeholder-image.png"} // Fallback for missing image
                alt={product.name || "Product"} // Fallback for missing name
                width={240}
                height={240}
                className="w-full h-40 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h2 className="text-lg font-semibold mb-2 text-gray-800">
                {product.name || 'No Name Available'} {/* Fallback for missing product name */}
              </h2>
              <span className="text-lg mt-2">₹{product.price}</span>
              <div className="">
              {/* Add to Cart Button */}
              <Link href ="/cart">
              <button
              onClick={() => addToCart(product)}
              className="w-full px-10 py-2 mt-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                Move to Cart
              </button>
              </Link>

              {/* Remove from Wishlist Button */}
              <button
                onClick={() => handleRemoveFromWishlist(product._id)}
                className="w-full px-10 py-2 mt-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                Remove
              </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-4 text-lg">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
