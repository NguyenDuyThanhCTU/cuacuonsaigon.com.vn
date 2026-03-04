"use client";
import { ContactProps, SocialMediaProps } from "@assets/props/PropsConfig";
import { LocalFindById } from "@components/items/Handle";
import { useStateProvider } from "@context/StateProvider";
import Link from "next/link";
import React, { Children, useState } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";

import Image from "next/image";
import MobileUI from "./Mobile/MobileUI";
import { CategoryProps } from "@assets/props/Props";

import { Dropdown } from "./Header/Dropdown";
import { PostProps } from "@assets/props/PropsPost";

const Header = ({
  Config,
  Posts,
  Category,
}: {
  Config: Array<any>;
  Posts: PostProps[];
  Category: CategoryProps[];
}) => {
  const ContactData: ContactProps = LocalFindById(Config, "contact");

  const HeaderItems = [
    {
      label: "Trang chủ",
      value: "",
      children: [],
    },
    {
      label: "Giới thiệu",
      value: "gioi-thieu",
      children: [],
    },
    {
      label: "Sản phẩm và dịch vụ",
      value: "san-pham/tat-ca",
      children: Category,
    },
    {
      label: "Dịch vụ sửa chữa",
      value: "blogs/dich-vu-sua-chua",
      children: [],
    },
    {
      label: "Tư vấn",
      value: "blogs/tu-van",
      children: [],
    },
    {
      label: "Tin tức",
      value: "blogs/tin-tuc",
      children: [],
    },
    {
      label: "Bảo dưỡng",
      value: "blogs/bao-duong",
      children: [],
    },
    {
      label: "Liên hệ",
      value: "lien-he",
      children: [],
    },
  ];

  return (
    <>
      <div className="d:block p:hidden relative z-50">
        <div className=" w-[1200px] mx-auto grid grid-cols-4 items-center">
          <div className="">
            <Link href={`/`}>
              <Image
                src={ContactData?.LogoWebsite}
                alt="logo"
                width={200}
                height={200}
                className="w-24 p-2"
              />
            </Link>
          </div>
          <div className="   col-span-2">
            <div className="flex items-center w-full justify-between"></div>
          </div>
          <div className="flex justify-end">
            <Link
              href={`tel:${ContactData?.Hotline}`}
              className="bg-main hover:bg-red-700 cursor-pointer duration-300 text-white py-2 px-6 font-bold font-LexendDeca rounded-full uppercase"
            >
              {ContactData?.Hotline}
            </Link>
          </div>
        </div>
        <div className="bg-main text-white">
          <div className="flex items-center gap-6 py-2 text-[14px] w-[1200px] mx-auto px-4">
            {HeaderItems?.map((item, idx) => {
              return (
                <div key={idx} className="group relative">
                  <Link
                    href={`/${item.value}`}
                    className="group relative flex items-center gap-1"
                  >
                    <div
                      className=" font-semibold flex items-center gap-2 uppercase"
                      key={idx}
                    >
                      <span> {item.label}</span>
                      {item.children && item.children.length > 0 && (
                        <FaAngleDown />
                      )}
                    </div>

                    <div className="w-full h-[2px] -bottom-1 absolute bg-yellow-400 hidden group-hover:block"></div>
                  </Link>
                  {item.children && item.children.length > 0 && (
                    <Dropdown Parent={item.value} ServiceItem={item.children} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="d:hidden p:block">
        <MobileUI ContactData={ContactData} Header={HeaderItems} />
      </div>
    </>
  );
};

export default Header;
