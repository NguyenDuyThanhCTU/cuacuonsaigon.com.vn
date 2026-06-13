"use client";
import { LocalFindById } from "@components/items/Handle";
import { useStateProvider } from "@context/StateProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiMailSend, BiSolidSend } from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";
import { GrSend } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import slugify from "slugify";
import { useTypingEffect } from "@components/items/ClientHandle";
import { ContactProps, SocialMediaProps } from "@assets/props/PropsConfig";
import { CategoryProps } from "@assets/props/Props";

interface MenuProps {
  setIsOpen: (isOpen: boolean) => void;
  Header: any[];
}

const Menu = ({ setIsOpen, Header }: MenuProps) => {
  const [isOpenMenu, setOpenMenu] = useState({
    lv1: "",
    lv2: "",
  });

  const { isGlobal } = useStateProvider();

  const ContactData: ContactProps = LocalFindById(isGlobal?.Config, "contact");
  const SocialMedia: SocialMediaProps = LocalFindById(
    isGlobal?.Config,
    "SocialMedia"
  );

  const texts = ["Bạn cần tư vấn?", "Nhập địa chỉ email của bạn..."];

  const SocialItems = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/120px-2023_Facebook_icon.svg.png?_=20231011122028",
      link: SocialMedia?.facebook ? SocialMedia?.facebook : "",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tiktok_icon.svg/120px-Tiktok_icon.svg.png?_=20240827133148",
      link: SocialMedia?.tiktok ? SocialMedia?.tiktok : "",
    },
  
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/120px-Icon_of_Zalo.svg.png?_=20221117065843",
      link: SocialMedia?.zalo ? SocialMedia?.zalo : "",
    },
  ];

  return (
    <div className="font-Nunito h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-between px-5 text-[24px] items-center py-2 border-b">
          <h3 className="font-normal">Menu</h3>
          <div onClick={() => setIsOpen(false)}>
            <RxCross2 />
          </div>
        </div>
        <div className="p-4 flex flex-col gap-4 text-[13px]">
          {Header.map((item, idx) => {
            return (
              <div key={idx}>
                <div className="flex justify-between w-full items-center">
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={`/${item.value}`}
                    className={`${
                      isOpenMenu.lv1 === item.value && "text-main "
                    } font-semibold`}
                  >
                    {item.label}
                  </Link>

                  {item.children && item.children.length > 0 && (
                    <IoMdArrowDropright
                      className={`${
                        isOpenMenu.lv1 === item.value &&
                        "rotate-90 duration-300 text-mainRed"
                      }`}
                      onClick={() => {
                        if (isOpenMenu.lv1 === item.value) {
                          setOpenMenu({ ...isOpenMenu, lv1: "" });
                        } else {
                          setOpenMenu({ ...isOpenMenu, lv1: item.value });
                        }
                      }}
                    />
                  )}
                </div>
                {item.children && item.children.length > 0 && (
                  <div
                    className={`animate__animated ${
                      isOpenMenu.lv1 === item.value
                        ? " block animate__fadeIn"
                        : "hidden"
                    } flex flex-col mt-4 gap-4 ml-6`}
                  >
                    {item.children.map((LV1item: any, LV1idx: number) => {
                      return (
                        <div key={LV1idx}>
                          <div className="flex justify-between w-full items-center">
                            <Link
                              onClick={() => setIsOpen(false)}
                              href={LV1item.url}
                              className={`${
                                isOpenMenu.lv2 === LV1item.level0 &&
                                "text-mainOrange font-normal"
                              }`}
                            >
                              {LV1item.title}
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-3 py-2 font-normal flex flex-col gap-2">
        <h3 className="text-red-600 text-[18px] uppercase font-semibold">
          Hỗ trợ 24/24
        </h3>
        <p className="text-gray-500">
          Đừng ngần ngại liên hệ chúng tôi
          <br /> Hotline:{" "}
          <Link
            onClick={() => setIsOpen(false)}
            className="text-blink hover:underline"
            href={`tel:${ContactData?.Hotline}`}
          >
            {ContactData?.Hotline}
          </Link>{" "}
          -{" "}
          <Link
            onClick={() => setIsOpen(false)}
            className="text-blink hover:underline"
            href={`tel:${ContactData?.PhoneNumber}`}
          >
            {ContactData?.PhoneNumber}
          </Link>
        </p>
        <div className="border ">
          <div className="w-full flex justify-between p-1">
            <input
              type="text"
              className="w-full outline-none text-[17px] px-2 font-light text-black "
              placeholder={useTypingEffect(texts, 50)}
            />
            <div className="text-[23px] px-2">
              <GrSend className="" />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          {SocialItems.map((item, idx) => (
            <Link
              href={item.link}
              target="_blank"
              key={idx}
              className="w-7 h-7 rounded-full"
            >
              <Image
                src={item.icon}
                alt="social"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
