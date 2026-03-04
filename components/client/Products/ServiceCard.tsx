import { PostProps } from "@assets/props/PropsPost";
import { ProductProps } from "@assets/props/PropsProduct";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ Data }: { Data: PostProps }) => {
  return (
    <div className="shadow-xl">
      <div className="w-full aspect-square border-2 border-mainYellow rounded-t-md relative ">
        <Link href={`/${Data?.url}`}>
          <div className="overflow-hidden aspect-square">
            <Image
              src={Data?.image}
              alt="product"
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-t-md hover:scale-105 duration-300"
            />
          </div>
        </Link>
      </div>

      <div className="bg-white rounded-b-md py-2">
        <div className="text-center w-full text-mainYellow py-2 px-4">
          <Link
            href={`/${Data?.url}`}
            className="hover:text-red-700 font-semibold truncate2 text-main "
          >
            {" "}
            {Data?.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
