
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ContactSection = () => {
 

  return (
    <div className='max-w-[1450px] mx-auto overflow-hidden'>
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
          <h1 className="text-5xl font-bold">Contact</h1>
          <p className="text-xl mt-4">
            <Link href="/">Home</Link> &gt; Contact
          </p>
        </div>
      </section>
      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Heading and Paragraph */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-black">Get In Touch With Us</h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              For More Information, please check our About page and Services, Any Question or problem please feel free send an Email. 
              Do Not Hesitate! We shall always help you Be stable with us. 
            </p>
          </div>

          {/* Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Column (Transparent with Dark Navy Blue Border) */}
            <div className="border-4 border-orange-500 p-8 rounded-lg space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-black">Address</h2>
                <p className="text-gray-600">
                  186 7th SE Avenue, New York NY1000, United States
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-black">Phone</h2>
                <p className="text-gray-600">
                  Mobile: +(84) 546-6789<br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-black">Working Time</h2>
                <p className="text-gray-600">
                  Monday-Friday: 9:00 - 12:00<br />
                  Saturday-Sunday: 9:00 - 15:00
                </p>
              </div>
            </div>

            {/* Second Column (Contact Form) */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <form className="space-y-6" >
                {/* Your Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@example.com"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject (optional)"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Posts Section */}
      <section className="bg-gray-100 text-black py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First Column */}
            <div>
              <h2 className="text-black font-bold text-3xl text-center">Free Delivery</h2>
              <p className="text-lg text-gray-700 text-center">
                For all orders over $50, consectetur adipiscing elit.
              </p>
            </div>

            {/* Second Column */}
            <div>
              <h2 className="text-black font-bold text-3xl text-center">90 Days Return</h2>
              <p className="text-lg text-gray-700 text-center">
                If the product has an issue, consectetur adipiscing elit.
              </p>
            </div>

            {/* Third Column */}
            <div>
              <h2 className="text-black font-bold text-3xl text-center">Secure Payments</h2>
              <p className="text-lg text-gray-700 text-center">
                100% secure payments, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
