"use client";
import React from "react";
import { PostProps } from "@assets/props/PropsPost";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay } from "swiper/modules";

import BlogCard from "../Blogs/BlogCard";
import { SwiperNavButtons } from "@components/items/SwiperNavButtons";
import Image from "next/image";
import Link from "next/link";

interface HomeNewsProps {
  Data: PostProps[];
  Title: string;
}

interface HomeNewCardProps {
  Data: PostProps;
}

export const HomeNewCard = ({ Data }: HomeNewCardProps) => {
  return (
    <div className="flex flex-col ">
      <div className="h-[200px] w-full border-2 overflow-hidden">
        <Image
          src={Data?.image}
          alt="posts"
          width={500}
          height={500}
          className="object-cover w-full h-full p-1 hover:scale-110 duration-300"
        />
      </div>
      <Link className="text-center mt-2 hover:text-main" href={`/${Data?.url}`}>
        {Data?.title}
      </Link>
    </div>
  );
};

const HomeNews = ({ Data, Title }: HomeNewsProps) => {
  let Datashow = Data?.filter(
    (item) => item.level0 !== "dieu-khoan-su-dung" && item.id !== "introductory"
  );

  return (
    <div className="d:w-[1200px] p:w-auto d:mx-auto p:mx-2 py-10">
      <h3 className="uppercase text-main border-b-2 border-main font-semibold text-[18px] pb-1">
        {Title}
      </h3>
      <div className="grid d:grid-cols-3 p:grid-cols-1 gap-3">
        {Datashow.slice(0, 3)?.map((item, idx) => (
          <div key={idx}>
            <HomeNewCard Data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeNews;
