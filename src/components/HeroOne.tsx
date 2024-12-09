import Image from 'next/image';
import React from 'react';

const Top2 = () => {
  return (
    <>
    <div className='flex flex-col justify-center md:flex-row bg-[#faf4f4] md:h-[672px] h-auto py-10 overflow-hidden'>
        <div>
            <Image
             src="/images/top6.png"
             alt="Image 1"
             width={250}
             height={250}
            className='w-96 h-96 md:w-[605px] md:h-[562px]'
            >
            </Image>
        </div>
        <div>
        <Image
             src="/images/top5.png"
             alt="Image 1"
             width={250}
             height={250}
            className='w-96 h-96 md:w-[605px] md:h-[562px]'
            >
            </Image>
        </div>
    </div>
    </>
  );
};

export default Top2;
