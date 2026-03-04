"use client";
import { A11y, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { SlideProps } from "@assets/props/Props";
import { SwiperNavButtons } from "@components/items/SwiperNavButtons";

function HomeSlide({ Data }: { Data: SlideProps[] }) {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="mySwiper relative"
      >
        {Data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`w-full p:h-[30vh] d:h-[75vh] flex items-center bg-no-repeat bg-cover bg-center relative bg-black`}
            >
              <Image
                src={item.image}
                alt="banner"
                width={1200}
                height={500}
                className=" w-full h-full object-contain z-10"
              />
            </div>
          </SwiperSlide>
        ))}
        {/* <div className="h-full w-full relative -top-0 d:block p:hidden">
          <SwiperNavButtons />
        </div> */}
      </Swiper>
    </div>
  );
}

export default HomeSlide;
