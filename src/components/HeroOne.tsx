import { Products } from "@/app/types/types";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

const Top2 = async () => {
  const data: Products[] = await client.fetch(`*[_type == 'topSection']{
    _id,
    name,
    description,
    price,
    category,
    stockLevel,
    isFeaturedProduct,
    image
  }`);

  return (
    <>
      <div className="max-w-[1450px] mx-auto flex flex-col justify-center md:flex-row-reverse bg-[#faf4f4] md:h-[672px] h-auto py-10 overflow-hidden">
        {data.map((data) => (
          <div key={data._id}>
            <Image
              src={urlFor(data.image).url()}
              alt={data.name}
              width={250}
              height={250}
              className="w-96 h-96 md:w-[605px] md:h-[562px]"
            ></Image>
          </div>
        ))}
      </div>
    </>
  );
};

export default Top2;

