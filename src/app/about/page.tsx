import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-[1450px] mx-auto bg-gray-50 text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[url('/images/bg.jpg')] bg-cover bg-center h-96 flex items-center justify-center text-center text-black">
        <div className="">
          <h1 className="text-4xl font-bold mb-4">Crafting Comfort and Style for Your Home</h1>
          <p className="text-lg mb-6">Discover our passion for creating quality furniture that fits your lifestyle.</p>
          <button className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded text-white font-semibold">
            Learn More About Us
          </button>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
          <Image src="/images/blog4.png" alt="Our Story" width={100} height={100} className="rounded-lg shadow-md w-96 h-96"></Image>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">
              Founded in 2020, we are committed to creating timeless furniture pieces that combine
              elegance and comfort. Sustainability and quality craftsmanship are at the heart of our designs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Why Our Furniture?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Quality Craftsmanship',
                description: 'Handcrafted by experts.',
                icon: '🛠️',
              },
              {
                title: 'Sustainable Materials',
                description: 'Eco-friendly and durable.',
                icon: '🌱',
              },
              {
                title: 'Timeless Design',
                description: 'Modern aesthetics for every home.',
                icon: '🛋️',
              },
              {
                title: 'Customer Support',
                description: '24/7 dedicated support.',
                icon: '📞',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center bg-gray-100 p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div
                key={testimonial}
                className="bg-white p-6 shadow-lg rounded-lg"
              >
                <p className="text-gray-600 italic">
                  Absolutely love the quality and design! It fits perfectly in
                  my living room.
                </p>
                <div className="mt-4 flex items-center justify-center">
                  <Image
                    src="/images/blog2.png"
                    alt="Customer"
                    width={100}
                    height={100}
                    className="w-12 h-12 rounded-full"
                  >
                  </Image>
                  <div className="ml-4 text-left">
                    <h4 className="font-bold">Ahmed</h4>
                    <p className="text-gray-500 text-sm">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-teal-500 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to transform your home?</h2>
        <Link href="/shop"><button className="px-8 py-3 bg-teal-700 hover:bg-teal-800 rounded font-semibold">
          Shop Now
        </button></Link>
      </section>
    </div>
  );
}

