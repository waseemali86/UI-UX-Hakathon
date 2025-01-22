"use client";

import { useCart } from "@/context/cartContext";
import { useState } from "react";

export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    stockLevel: number;
    isFeaturedProduct: boolean;
    image: any;
  }
  
interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);

    // Reset the button state after 2 seconds (optional)
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`px-6 py-3 rounded-lg transition-all duration-300 ${
        isAdded
          ? "bg-green-600 text-white"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
      disabled={isAdded} // Disable the button temporarily after adding
    >
      {isAdded ? "Added to Cart" : "Add to Cart"}
    </button>
  );
}
