import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Address Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="text-gray-600 text-sm">
            <p>NawabShah,</p>
            <p>Pakistan</p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium mb-3">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-800 hover:text-black transition">Home</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-800 hover:text-black transition">Shop</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-800 hover:text-black transition">About</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-800 hover:text-black transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium mb-3">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-800 hover:text-black transition">Payment Options</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-800 hover:text-black transition">Returns</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-800 hover:text-black transition">Privacy Policies</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className=''>
            <h3 className="text-gray-500 text-sm font-medium mb-3">Newsletter</h3>
            <div className="flex items-center md:flex-col md:items-end ">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-black"
              />
              <button className="bg-black text-white md:items-end px-4 md:mt-2 py-2 rounded-r-md md:rounded-md hover:bg-gray-800 transition">
                Send Email
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>
            2024 &copy; 
            <a href="https://github.com/waseemali" className="hover:underline" target="_blank" rel="noopener noreferrer"> waseem86</a> 
            @ 
            <a href="https://www.linkedin.com/in/waseemali" className="hover:underline" target="_blank" rel="noopener noreferrer"> www.linkedin.com/in/waseem86</a>. 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
