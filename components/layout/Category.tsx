import { PostProps } from "@assets/props/PropsPost";
import { ProductProps } from "@assets/props/PropsProduct";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryProps {
  Posts: PostProps[];
  Products: ProductProps[];
}

interface CategoryCardProps {
  Data: any;
  Type: "Posts" | "Products";
}

export const CategoryCard = ({ Data, Type }: CategoryCardProps) => {
  return (
    <Link
      href={`${Type === "Posts" ? `/${Data?.url}` : `/product/${Data?.url}`}`}
      className="grid grid-cols-5 gap-2"
    >
      <Image
        src={Data?.image}
        alt="image"
        width={250}
        height={250}
        className="w-[100px] h-[80px] object-cover col-span-2"
      />
      <div className="text-gray-700 hover:text-main truncate2 col-span-3">
        {Data?.title}
      </div>
    </Link>
  );
};

const Category = ({ Posts, Products }: CategoryProps) => {
  return (
    <div className=" h-full">
      <div>
        <h3 className="uppercase text-main border-b-2 border-main font-semibold text-[18px] pb-1">
          Bài viết nổi bật
        </h3>
        <div className="mt-2 flex flex-col gap-2">
          {Posts?.map((item, idx) => (
            <div key={idx}>
              <CategoryCard Data={item} Type="Posts" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="uppercase text-main border-b-2 border-main font-semibold text-[18px] pb-1">
          Sản phẩm nổi bật
        </h3>
        <div className="mt-2">
          {Products?.map((item, idx) => (
            <div key={idx}>
              <CategoryCard Data={item} Type="Products" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
