"use client";
import { CategoryProps } from "@assets/props/Props";
import { ProductProps } from "@assets/props/PropsProduct";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import slugify from "slugify";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../Products/ProductCard";
import { PostProps } from "@assets/props/PropsPost";
import ServiceCard from "../Products/ServiceCard";

interface HomeSection3Props {
  Products: ProductProps[];
  Category: CategoryProps[];
}

const HomeSection3 = ({ Products, Category }: HomeSection3Props) => {
  // const servicePosts = Products?.filter(
  //   (item) => item.level0 === "loai-xe-cho-thue"
  // );
  // const Blogs = Posts?.filter((item) => item.level0 === "tour-du-lich");

  return (
    <div className="d:w-[1200px] p:w-auto d:mx-auto p:mx-2 py-10 flex flex-col gap-5">
      <>
        <div className="py-5">
          <div className="text-center">
            <h3 className="text-[25px] font-bold">Các Loại Cửa Cuốn</h3>
          </div>
          {/* <div className="grid d:grid-cols-4 p:grid-cols-2 gap-5 py-5">
            {servicePosts?.map((item, idx) => (
              <div key={idx}>
                <ServiceCard Data={item} />
              </div>
            ))}
          </div> */}
        </div>
        <div>
          {Category?.map((item, idx) => {
            const Data = Products?.filter(
              (Pitem) =>
                Pitem.level0 ===
                slugify(item.level0, { locale: "vi", lower: true }),
            );
            return (
              <div key={idx}>
                <div className="border-b-2 border-main flex justify-between">
                  <div className="font-bold text-[22px] text-white bg-main py-2 px-6">
                    {item.level0}
                  </div>
                  <Link
                    href={`/san-pham/${slugify(item.level0, { locale: "vi", lower: true })}`}
                    className="flex items-center gap-2 text-main font-bold hover:text-red-600"
                  >
                    <span> Xem Thêm</span>
                    <FaAngleRight />
                  </Link>
                </div>
                <div className="py-5 d:block p:hidden">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    slidesPerGroup={1}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    style={{ paddingBottom: "50px" }}
                    modules={[Pagination]}
                    className="mySwiper custom-pagination "
                  >
                    {Data?.map((items, idx) => (
                      <SwiperSlide key={idx}>
                        <ProductCard Data={items} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="py-5 d:hidden p:block">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={2}
                    slidesPerGroup={1}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    style={{ paddingBottom: "50px" }}
                    modules={[Pagination]}
                    className="mySwiper custom-pagination "
                  >
                    {Data?.map((items, idx) => (
                      <SwiperSlide key={idx}>
                        <ProductCard Data={items} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default HomeSection3;
