import Image from "next/image";

function Blogs() {
  return (
    <>
        <div className="flex justify-center ">
          <div className="text-center bg-[#FAF4F480] h-auto md:h-[750px]">
            <h4 className="text-2xl text-black font-bold pt-14 ">Our Blogs</h4>
            <p className="pt-4 pb-16 text-lg text-black text-opacity-50">
              Find a bright ideal to suit your taste with our great selection
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Blog Card */}
              <div className="flex flex-col items-center space-y-4">
                <div>
                  <Image
                    src="/images/blog1.png"
                    alt="Blog Image 1"
                    width={300}
                    height={200}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800"></h3>
                <p className="text-gray-600">
                  Going all-in with millennial design
                </p>
                <a
                  href="#"
                  className="inline-block text-black text-lg font-medium underline hover:no-underline hover:text-gray-800 transition"
                >
                  Read More
                </a>
                <p>5 min 12th Oct 2022</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div>
                  <Image
                    src="/images/blog2.png"
                    alt="Blog Image 1"
                    width={300}
                    height={200}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800"></h3>
                <p className="text-gray-600">
                  Going all-in with millennial design
                </p>
                <a
                  href="#"
                  className="inline-block text-black text-lg font-medium underline hover:no-underline hover:text-gray-800 transition"
                >
                  Read More
                </a>
                <p>5 min 12th Oct 2022</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div>
                  <Image
                    src="/images/blog3.png"
                    alt="Blog Image 1"
                    width={300}
                    height={200}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800"></h3>
                <p className="text-gray-600">
                  Going all-in with millennial design
                </p>
                <a
                  href="#"
                  className="inline-block text-black text-lg font-medium underline hover:no-underline hover:text-gray-800 transition"
                >
                  Read More
                </a>
                <p>5 min 12th Oct 2022</p>
              </div>
              {/* Blog Card */}
            </div>
            <div className="text-center mt-16">
          <a
            href="#"
            className="inline-block text-black text-center font-medium underline hover:no-underline hover:text-gray-800 transition"
          >
            View All Post
          </a>
        </div>
          </div>
        </div>
    </>
  );
}

export default Blogs;
