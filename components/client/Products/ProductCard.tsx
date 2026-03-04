import { CategoryProps } from "@assets/props/Props";
import { ProductProps } from "@assets/props/PropsProduct";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
import slugify from "slugify";

const ProductCard = ({
  Data,
}: {
  Data: ProductProps;
  ProductCategory?: CategoryProps[];
  type?: string;
}) => {
  return (
    <div className="font-LexendDeca">
      <div className="w-full aspect-square  relative ">
        <Link href={`/product/${Data?.url}`}>
          <div className="overflow-hidden aspect-square">
            <Image
              src={Data?.image}
              alt="product"
              width={600}
              height={600}
              className="w-full h-full object-contain rounded-t-md hover:scale-105 duration-300 flex flex-col-reverse"
            />
          </div>
        </Link>
      </div>

      <div className=" text-black">
        <div className=" w-full  text-mainYellow  px-4 ">
          {/* <div className="hover:text-mainBold  truncate2 text-slate-600 font-normal text-[12px] ">
            {ProductCategory?.map((item, index) => {
              const slug = slugify(item.level0, { locale: "vi", lower: true });
              let LV1 = "";
              if (Data?.level0 === slug) {
                LV1 = item.level0;
              }
              return <div key={index}>{LV1}</div>;
            })}
          </div> */}
          <Link
            href={`/product/${Data?.url}`}
            className="text-[16px] w-full text-center font-normal text-orange-700"
          >
            <p className="text-center py-1 leading2 p:h-auto d:h-[47px] hover:text-red-600 duration-300">
              {" "}
              {Data?.title}
            </p>
          </Link>
          <div className="text-yellow-500 flex items-center text-[18px] justify-center py-2">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>
        </div>
        {Data?.price ? (
          <div className=" text-red-600 text-[16px] px-2">{Data?.price}₫</div>
        ) : (
          <div className="text-center font-semibold uppercase text-[14px] ">
            Liên hệ
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
