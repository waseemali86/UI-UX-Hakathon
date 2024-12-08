import Image from 'next/image';
import React from 'react';

const Top4 = () => {
  return (
    <>
    <div className='flex flex-col-reverse md:flex-row md:justify-evenly bg-[#FFF9E5] h-auto md:h-[639px] py-10 overflow-hidden'>
        <div>
            <Image
             src="/images/top7.png"
             alt="Image 1"
             width={250}
             height={250} 
            className='w-[783px] h-[599px]'
            >
            </Image>
        </div>
        <div className='text-center pt-64'>
            <p className='text-black'>
                New Arrivals
            </p>
            <h4
            className='text-black text-3xl font-bold pb-7'
            >
                Asgaard Sofa
            </h4>
            <a
            href="#"
            className="text-black font-medium mt-5 hover:text-gray-800 transition border border-black px-8 py-2"
          >
            Order Now
          </a>
        </div>
    </div>
    </>
  );
};

export default Top4;
