'use client';

import Image from 'next/image';
import Link from 'next/link';

const AsgaardSofaPage = () => {
  return (
    <div className="max-w-[1450px] mx-auto overflow-hidden px-4">
      {/* Breadcrumb Bar */}
      <div className="text-gray-500 text-sm m-4">
        <Link href="/" className="hover:text-black">Home</Link> &gt; 
        <Link href="/shop" className="hover:text-black">Shop</Link> &gt; 
        <span className="font-semibold">Asgaard Sofa</span>
      </div>

      {/* 1st Section with Three Columns */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Column: Four Images */}
        <div className="flex md:flex-col flex-wrap gap-4 justify-center md:justify-start">
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              src="/images/shop14.png"
              alt={`Product ${index + 1}`}
              width={150}
              height={150}
              className="object-contain mx-auto"
            />
          ))}
        </div>

        {/* Second Column: Large Image */}
        <div className="flex justify-center">
          <Image
            src="/images/shop14.png"
            alt="Asgaard Sofa Large Image"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>

        {/* Third Column: Product Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">Asgaard Sofa</h1>
          <p className="text-lg md:text-xl text-gray-500">Rs. 250,000.00</p>

          <div className="flex items-center">
            {[...Array(4)].map((_, index) => (
              <span key={index} className="text-yellow-500">&#9733;</span>
            ))}
            <span className="text-gray-300">&#9733;</span>
            <span className="ml-2 text-sm text-gray-500">5 Customer Review</span>
          </div>

          <p className="text-sm text-gray-600">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="font-bold">Size:</span>
            {['XS', 'L', 'XL'].map(size => (
              <button key={size} className="px-4 py-2 border rounded">{size}</button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold">Color:</span>
            <div className="w-8 h-8 rounded-full border bg-blue-500"></div>
            <div className="w-8 h-8 rounded-full border bg-black"></div>
            <div className="w-8 h-8 rounded-full border bg-red-500"></div>
          </div>

          <div className="flex gap-4">
            <Link href="/shop/asgaardsofa/cartside">
              <button className="bg-black text-white px-4 py-2 rounded">Add to Cart</button>
            </Link>
          </div>

          <ul className="grid gap-2 text-sm text-gray-600">
            <li>SKU: SS001</li>
            <li>Category: Sofa</li>
            <li>Tags: Sofa, Chair, Home, Shop</li>
            <li className="flex gap-2">
              Share:
              <Link href="#" className="social-btn facebook">f</Link>
              <Link href="#" className="social-btn linkedin">in</Link>
              <Link href="#" className="social-btn twitter">t</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          {['Description', 'Additional Information', 'Reviews [5]'].map((title, idx) => (
            <div key={idx} className="p-4 border rounded text-center">
              <h3 className="text-lg md:text-xl font-bold">{title}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[1, 2].map(num => (
            <Image
              key={num}
              src="/images/shop14.png"
              alt={`Second Row Image ${num}`}
              width={600}
              height={400}
              className="object-cover rounded"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="text-gray-600">
            Embodying the row, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-gray-600">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero.
          </p>
        </div>
      </section>

      {/* 3rd Section */}
      <section className="bg-white text-black py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="text-center">
                <Image
                  src="/images/shop14.png"
                  alt={`Product ${idx + 1}`}
                  width={150}
                  height={150}
                  className="object-contain mx-auto"
                />
                <h3 className="text-sm font-semibold mt-2">Product {idx + 1}</h3>
                <p className="text-lg font-bold">Rs. 25,000.00</p>
              </div>
            ))}
          </div>
          <Link href="#" className="underline text-sm block mt-4">View More</Link>
        </div>
      </section>
    </div>
  );
};

export default AsgaardSofaPage;
