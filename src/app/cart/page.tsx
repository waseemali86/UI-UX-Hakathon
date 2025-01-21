// "use client";

// import { useCart } from "@/context/cartContext";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";

// const CartPage = () => {
//   const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

//   return (
//     <div className="max-w-7xl mx-auto p-4">
//          {/* First Section with Tailwind Background */}
//       <section className="bg-[url('/images/bg.jpg')] md:h-[400px] overflow-hidden relative h-[60vh] bg-cover bg-center bg-shop-bg">
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center">
//           {/* Small Image in Center */}
//           <div className="mb-4">
//              <Image
//               src="/images/shop0.png"
//               alt="Shop Icon"
//               width={100}
//               height={100}
//               className="object-cover rounded-full"
//             />
//           </div>
//           <h1 className="text-5xl font-bold">Cart</h1>
//           <p className="text-xl mt-4">
//             <Link href="/">Home</Link> &gt; Cart
//           </p>
//         </div>
//       </section>
//       <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

//       {cart.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {cart.map((item) => (
//             <div
//               key={item.product._id}
//               className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white"
//             >
//               {/* Product Image */}
//               <div className="w-full h-40 flex justify-center items-center mb-4">
//                 <Image
//                   src={urlFor(item.product.image).url()}
//                   alt={item.product.name}
//                   width={250}
//                   height={250}
//                   className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
//                 />
//               </div>

//               {/* Product Info */}
//               <h2 className="text-lg font-semibold mb-2 text-gray-800">
//                 {item.product.name}
//               </h2>
//               <p className="text-gray-500 mb-1">
//                 <span className="font-semibold">Price:</span> ${item.product.price}
//               </p>
//               <p className="text-gray-500 mb-1">
//                 <span className="font-semibold">Quantity:</span> {item.quantity}
//               </p>
//               <p className="text-gray-800 font-semibold mb-4">
//                 <span className="text-blue-600">Total:</span> $
//                 {item.quantity * item.product.price}
//               </p>

//               {/* Quantity Buttons */}
//               <div className="flex items-center gap-4 mb-4">
//                 <button
//                   onClick={() => decrementQuantity(item.product._id)}
//                   className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
//                 >
//                   -
//                 </button>
//                 <button
//                   onClick={() => incrementQuantity(item.product._id)}
//                   className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
//                 >
//                   +
//                 </button>
//               </div>

//               {/* Remove Button */}
//               <button
//                 onClick={() => removeFromCart(item.product._id)}
//                 className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-500 text-lg mt-12">
//           Your cart is empty.
//         </p>
//       )}
//     </div>
//   );
// };

// export default CartPage;

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const Cart = () => {
//   return (
//     <div className='max-w-[1450px] mx-auto overflow-hidden'>
//       {/* First Section with Tailwind Background */}
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
//           <h1 className="text-5xl font-bold">Cart</h1>
//           <p className="text-xl mt-4">
//             <Link href="/">Home</Link> &gt; Cart
//           </p>
//         </div>
//       </section>

//       {/* 2nd Section: Cart Items and Product Details */}
//       <section className="bg-white py-10">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* First Column (5 columns layout) */}
//             <div className="space-y-6 md:w-[60%]">
//               <div className="flex gap-4">
//                 {/* Buttons: Product, Price, Quantity, Subtotal */}
//                 <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">Product</button>
//                 <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">Price</button>
//                 <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">Quantity</button>
//                 <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">Subtotal</button>
//               </div>

//               {/* Product Details (5 columns grid) */}
//               <div className="grid grid-cols-5 gap-4 mt-6">
//                 {/* First Row */}
//                 <div></div> {/* Empty cell for layout alignment */}
//                 <div className="text-gray-700">
//                   <h2 className="text-lg font-semibold">Asgaard Sofa</h2>
//                 </div>
//                 <div className="text-gray-500">
//                   <p>Rs. 250,000.00</p>
//                 </div>
//                 <div>
//                   <input
//                     title='0'
//                     type="number"
//                     value="1"
//                     className="w-full p-2 border border-gray-300 rounded-md text-center"
//                   />
//                 </div>
//                 <div>
//                   <p className="font-semibold">Rs. 250,000.00</p>
//                 </div>

//                 {/* Second Row */}
//                 <div className="flex justify-center">
//                   <Image
//                     src="/images/top4.png"
//                     alt="Asgaard Sofa"
//                     width={150}
//                     height={150}
//                     className="object-cover"
//                   />
//                 </div>
//                 <div></div> {/* Empty cell for layout alignment */}
//                 <div></div> {/* Empty cell for layout alignment */}
//                 <div></div> {/* Empty cell for layout alignment */}
//                 <div></div> {/* Empty cell for layout alignment */}
//               </div>
//             </div>

//             {/* Second Column for Cart Totals */}
//             <div className="space-y-6">
//               <h1 className="text-2xl font-bold mb-4 text-center">Cart Totals</h1>

//               {/* Subtotal */}
//               <div className="flex justify-between py-2 border-b">
//                 <span className="text-lg font-medium">Subtotal</span>
//                 <span className="text-lg font-medium">Rs. 250,000.00</span>
//               </div>

//               {/* Total with Golden Color */}
//               <div className="flex justify-between py-2 border-b">
//                 <span className="text-xl font-semibold">Total</span>
//                 <span className="text-xl font-semibold text-yellow-500">Rs. 250,000.00</span>
//               </div>

//               {/* Checkout Button */}
//               <Link href="/checkout"><button className="w-full py-2 bg-transparent border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition mt-4">
//                 Checkout
//               </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3rd Section: CONCEPT Posts */}
//       <section className="bg-gray-100 text-black py-10">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {/* First Column */}
//             <div >
//               <h2 className="text-black font-bold text-3xl text-center">Free Delivery</h2>
//               <p className="text-lg text-gray-700">For all orders over $50, consectetur adipim scing elit.</p>
//             </div>

//             {/* Second Column */}
//             <div >
//               <h2 className="text-black font-bold text-3xl text-center">90 Days Return</h2>
//               <p className="text-lg text-gray-700 text-">If the product has an issue, consectetur adipim scing elit.</p>
//             </div>

//             {/* Third Column */}
//             <div >
//               <h2 className="text-black font-bold text-3xl text-center">Secure Payments</h2>
//               <p className="text-lg text-gray-700">100% secure payments, consectetur adipim scing elit.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Cart;
