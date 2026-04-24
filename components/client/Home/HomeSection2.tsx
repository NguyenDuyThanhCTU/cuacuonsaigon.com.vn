import { PostProps } from "@assets/props/PropsPost";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeSection2 = ({ Posts }: { Posts: PostProps[] }) => {
  const Service = Posts?.filter((item) => item.level0 === "dich-vu-sua-chua");
  return (
    <div className="bg-slate-100">
      <div className="d:w-[1200px] p:w-auto d:mx-auto p:mx-2 py-10">
        <h3 className="text-center font-bold text-[25px]">
          DỊCH VỤ SỬA CỬA CUỐN
        </h3>
        <p className="text-center  font-semibold text-[20px] text-red-600">
          Miễn phí khảo sát báo giá
        </p>
        <div className="grid d:grid-cols-3 p:grid-cols-1 gap-5 py-10">
          {Service?.map((item, idx) => (
            <div key={idx} className="bg-white">
              <Link href={`/${item.url}`}>
                <Image
                  src={item.image}
                  alt="image"
                  width={400}
                  height={400}
                  className="w-full d:h-[190px] p:h-auto object-contain"
                />
              </Link>
              <div className="p-4">
                <div className=" text-[18px] w-full font-semibold text-red-700 text-center">
                  <Link href={`/${item.url}`} className="">
                    {" "}
                    {item.title}
                  </Link>
                </div>
                <p className="text-[14px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
