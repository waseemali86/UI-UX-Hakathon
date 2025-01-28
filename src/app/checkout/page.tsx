"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    townCity: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const placeOrder = async () => {
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to place order");
      }

      const result = await response.json();

      // Navigate to the order confirmation page
      router.push(`/order-confirmation?trackingId=${result.trackingId}`);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-[1450px] mx-auto overflow-hidden">
      {/* First Section with Tailwind Background */}
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
          <h1 className="text-5xl font-bold">CheckOut</h1>
          <p className="text-xl mt-4">
            <Link href="/">Home</Link> &gt; CheckOut
          </p>
        </div>
      </section>

      {/* Billing Details and Product Information */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Billing Details */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Billing Details</h1>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {[
                  { label: "First Name", name: "firstName", type: "text" },
                  { label: "Last Name", name: "lastName", type: "text" },
                  { label: "Company Name (optional)", name: "companyName", type: "text" },
                  { label: "Country/Region", name: "country", type: "text" },
                  { label: "Street Address", name: "streetAddress", type: "text" },
                  { label: "Town/City", name: "townCity", type: "text" },
                  { label: "Province", name: "province", type: "text" },
                  { label: "ZIP Code", name: "zipCode", type: "text" },
                  { label: "Phone", name: "phone", type: "tel" },
                  { label: "Email", name: "email", type: "email" },
                ].map(({ label, name, type }) => (
                  <div key={name}>
                    <label className="block text-lg font-semibold" htmlFor={name}>
                      {label}
                    </label>
                    <input
                      type={type}
                      id={name}
                      name={name}
                      value={name}
                      onChange={handleInputChange}
                      placeholder={`Enter your ${label.toLowerCase()}`}
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="additionalInfo">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    placeholder="Any additional information"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
              </form>
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">
                Product <span className="text-end">Sub Total</span>
              </h1>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Asgaard Sofa *1</span>
                  <span>Rs 250,000.00</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>Rs 250,000.00</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>Rs 250,000.00</span>
                </div>
              </div>
              <hr className="my-4" />
              <h3 className="font-bold text-xl">Direct Bank Transfer</h3>
              <p className="text-sm mt-2">
                Make your payment directly into our bank account. Please use your
                order ID as the payment reference. Your order will not be
                shipped until your funds shift onto our account.
              </p>
              <h3 className="font-bold text-xl mt-4">Cash on Delivery</h3>
              <p className="text-sm mt-2">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
              <Link href="/order-confirmation">
              <button
                onClick={placeOrder}
                className="w-full py-2 bg-transparent border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition"
              >
                Place Order
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Posts */}
      <section className="bg-gray-100 text-black py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Free Delivery",
                text: "For all orders over $50, consectetur adipim scing elit.",
              },
              {
                title: "90 Days Return",
                text: "If the product has an issue, consectetur adipim scing elit.",
              },
              {
                title: "Secure Payments",
                text: "100% secure payments, consectetur adipim scing elit.",
              },
            ].map(({ title, text }) => (
              <div className="text-center" key={title}>
                <h2 className="text-black font-bold text-3xl">{title}</h2>
                <p className="text-lg text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;





















// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// const Checkout = () => {
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
//           <h1 className="text-5xl font-bold">CheckOut</h1>
//           <p className="text-xl mt-4">
//             <Link href="/">Home</Link> &gt; CheckOut
//           </p>
//         </div>
//       </section>

//       {/* 2nd Section: Billing Details and Product Information */}
//       <section className="bg-white py-10">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* First Column: Billing Details */}
//             <div className="space-y-6">
//               <h1 className="text-3xl font-bold ">Billing Details</h1>
//               <form className="space-y-4">
//                 {/* First Name */}
//                 <div>
//                   <label className="block text-lg font-semibold" htmlFor="firstName">First Name</label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     placeholder="Enter your first name"
//                     className="w-full p-3 border border-gray-300 rounded-md"
//                   />
//                 </div>
//                 {/* Last Name */}
//                 <div>
//                   <label className="block text-lg font-semibold" htmlFor="lastName">Last Name</label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     placeholder="Enter your last name"
//                     className="w-full p-3 border border-gray-300 rounded-md"
//                   />
//                 </div>
//                 {/* Company Name */}
//                 <div>
//                   <label className="block text-lg font-semibold" htmlFor="companyName">Company Name (optional)</label>
//                   <input
//                     type="text"
//                     id="companyName"
//                     placeholder="Enter your company name"
//                     className="w-full p-3 border border-gray-300 rounded-md"
//                   />
//                 </div>
//                 {/* Country/Region */}
//                 <div>
//                   <label className="block text-lg font-semibold" htmlFor="country">Country/Region</label>
//                   <input
//                     type="text"
//                     id="country"
//                     placeholder="Enter your country"
//                     className="w-full p-3 border border-gray-300 rounded-md"
//                   />
//                 </div>
//                 {/* Street Address */}
//                 <div>
//                   <label className="block text-lg font-semibold" htmlFor="streetAddress">Street Address</label>
//                   <input
//                     type="text"
//                     id="streetAddress"
//                     placeholder="Enter your street address"
//                     className="w-full p-3 border border-gray-300 rounded-md"
//                   />
//                 </div>
//                 {/* Town/City */}
//                 <div>
//                   <label className="block text-lg font-semibold" htmlFor="townCity">Town/City</label>
//                   <input
//                     type="text"
//                     id="townCity"
//                     placeholder="Enter your town or city"
//                     className="w-full p-3 border border-gray-300 rounded-md"
//                   />
//                 </div>
//                 {/* Province */}
//                 <div>
//                   <label className="block text-lg font-semibold" htmlFor="province">Province</label>
//                   <input
//                     type="text"
//                     id="province"
//                     placeholder="Enter your province"
//                     className="w-full p-3 border border-gray-300 rounded-md"
//                   />
//                 </div>
//                 {/* ZIP Code */}
//                 <div>
//                   <label className="block text-lg font-semibold" htmlFor="zipCode">ZIP Code</label>
//                   <input
//                     type="text"
//                     id="zipCode"
//                     placeholder="Enter your ZIP code"
//                     className="w-full p-3 border border-gray-300 rounded-md"
//                   />
//                 </div>
//                 {/* Phone */}
//                 <div>
//                   <label className="block text-lg font-semibold" htmlFor="phone">Phone</label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     placeholder="Enter your phone number"
//                     className="w-full p-3 border border-gray-300 rounded-md"
//                   />
//                 </div>
//                 {/* Email */}
//                 <div>
//                   <label className="block text-lg font-semibold" htmlFor="email">Email</label>
//                   <input
//                     type="email"
//                     id="email"
//                     placeholder="Enter your email"
//                     className="w-full p-3 border border-gray-300 rounded-md"
//                   />
//                 </div>
//                 {/* Additional Information */}
//                 <div>
//                   <label className="block text-lg font-semibold" htmlFor="additionalInfo">Additional Information</label>
//                   <textarea
//                     id="additionalInfo"
//                     placeholder="Any additional information"
//                     className="w-full p-3 border border-gray-300 rounded-md"
//                   />
//                 </div>
//               </form>
//             </div>

//             {/* Second Column: Product Information */}
//             <div className="space-y-6">
//               <h1 className="text-3xl font-bold">Product <span className='text-end'>Sub Total</span> </h1>
//               <div className="space-y-4">
//                 {/* Row 1: Product */}
//                 <div className="flex justify-between">
//                   <span>Asgaard Sofa *1</span>
//                   <span>Rs 250,000.00</span>
//                 </div>
//                 {/* Row 2: Subtotal */}
//                 <div className="flex justify-between font-semibold">
//                   <span>Subtotal</span>
//                   <span>Rs 250,000.00</span>
//                 </div>
//                 {/* Row 3: Total */}
//                 <div className="flex justify-between font-semibold">
//                   <span>Total</span>
//                   <span>Rs 250,000.00</span>
//                 </div>
//               </div>
//               <hr className="my-4" />
//               <h3 className="font-bold text-xl flex items-center space-x-2">
//                 <span className="w-3 h-3 bg-black rounded-full"></span>
//                 <span>Direct Bank Transfer</span>
//               </h3>
//               <p className="text-sm mt-2">
//                 Make our payment directly into our bank account. Please use your order ID as the payment reference. Your order will not be shipped until your funds shift onto our account.
//               </p>
//               <h3 className="font-bold text-xl flex items-center space-x-2 mt-4">
//                 <span className="w-3 h-3 border-2 border-black rounded-full"></span>
                
//                 <span>Direct Bank Transfer</span>
//               </h3>
//               <h3 className="font-bold text-xl flex items-center space-x-2 mt-4">
//                 <span className="w-3 h-3 border-2 border-black rounded-full"></span>
                
//                 <span>Cash on Delivery</span>
//               </h3>
//               <p className="text-sm mt-2">
//                 Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
//               </p>
//               {/* Place Order Button */}
//               <button className="w-full py-2 bg-transparent border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition">
//                 Place Order
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3rd Section: CONCEPT Posts */}
//       <section className="bg-gray-100 text-black py-10">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {/* First Column */}
//             <div className="text-center">
//               <h2 className="text-black font-bold text-3xl">Free Delivery</h2>
//               <p className="text-lg text-gray-700">For all orders over $50, consectetur adipim scing elit.</p>
//             </div>

//             {/* Second Column */}
//             <div className="text-center">
//               <h2 className="text-black font-bold text-3xl">90 Days Return</h2>
//               <p className="text-lg text-gray-700">If the product has an issue, consectetur adipim scing elit.</p>
//             </div>

//             {/* Third Column */}
//             <div className="text-center">
//               <h2 className="text-black font-bold text-3xl">Secure Payments</h2>
//               <p className="text-lg text-gray-700">100% secure payments, consectetur adipim scing elit.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Checkout
