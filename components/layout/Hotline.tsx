"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaPhone,
  FaTiktok,
  FaFacebookMessenger,
  FaInstagram,
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";

import { MdOutlineGroups } from "react-icons/md";
import { IconType } from "react-icons/lib";
import { useEffect, useState } from "react";
import { FaPhoneFlip } from "react-icons/fa6";
import { LocalFindById } from "@components/items/Handle";
import Image from "next/image";
import { ContactProps, SocialMediaProps } from "@assets/props/PropsConfig";

interface IconMappingType {
  [key: string]: IconType;
}
export const HotlineIconMapping: IconMappingType = {
  FaFacebookF: FaFacebookF,
  FaYoutube: FaYoutube,
  FaPhone: FaPhone,
  FaTiktok: FaTiktok,
  FaFacebookMessenger: FaFacebookMessenger,
  FaInstagram: FaInstagram,
  SiZalo: SiZalo,
  MdOutlineGroups: MdOutlineGroups,
};

function Hotline({ Config }: { Config: Array<any> }) {
  const Contact: ContactProps = LocalFindById(Config, "contact");
  const SocialMedia: SocialMediaProps = LocalFindById(Config, "SocialMedia");

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const HotlineItems = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/120px-Icon_of_Zalo.svg.png?_=20221117065843",
      label: "Zalo",
      link: SocialMedia?.zalo ? SocialMedia?.zalo : "https://zalo.me",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/120px-2023_Facebook_icon.svg.png?_=20231011122028",
      label: "Facebook",
      link: SocialMedia?.facebook
        ? SocialMedia?.facebook
        : "https://facebook.com",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tiktok_icon.svg/120px-Tiktok_icon.svg.png?_=20240827133148",
      label: "Tiktok",
      link: SocialMedia?.tiktok ? SocialMedia?.tiktok : "https://tiktok.com",
    },
    // {
    //   icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/120px-YouTube_full-color_icon_%282017%29.svg.png",
    //   label: "Youtube",
    //   link: SocialMedia?.Youtube ? SocialMedia?.Youtube : "https://Youtube.com",
    // },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Phone_iOS.svg/120px-Phone_iOS.svg.png",
      label: "Hỗ trợ 24/24",
      link: Contact?.Hotline ? ` tel:${Contact?.Hotline}` : "tel:",
    },
  ];

  return (
    <>
      <div className="d:block p:hidden fixed right-0 top-[50%] z-50">
        <div className="flex flex-col gap-1">
          {HotlineItems.map((item, idx) => (
            <Link href={item.link} key={idx} target="_blank">
              <div className=" relative -right-[157px] border border-gray-300 w-[200px] bg-white cursor-pointer hover:-translate-x-[157px] duration-300">
                <div className="p-2  items-center grid grid-cols-3">
                  <div className="w-[25px] h-[25px]">
                    <Image
                      src={item.icon}
                      alt="zalo"
                      width={50}
                      height={50}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="col-span-2">{item.label}</div>
                </div>
              </div>
            </Link>
          ))}

          <div
            onClick={handleScrollToTop}
            className={`${
              showButton ? " pullup " : " opacity-0 transform-none invisible"
            } mt-[10px]`}
          >
            <div className=" relative -right-[157px] border border-gray-300 w-[200px] bg-white cursor-pointer hover:-translate-x-[157px] duration-300">
              <div className="p-2  items-center grid grid-cols-3">
                <div className="w-[25px] h-[25px]">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/klatexpress.appspot.com/o/arrow-up_eb1426bb7fc647eab89f9279695752cd.webp?alt=media&token=9817972d-4e09-46a0-8476-9f1eb945b9df"
                    alt="zalo"
                    width={50}
                    height={50}
                    className="w-full h-full"
                  />
                </div>
                <div className="col-span-2">Lên đầu trang</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d:hidden p:block fixed right-0 top-[40%] z-50">
        <div className="flex flex-col gap-1">
          {HotlineItems.map((item, idx) => (
            <Link href={item.link} key={idx} target="_blank">
              <div className=" relative border border-gray-300  bg-white cursor-pointer ">
                <div className="p-2 ">
                  <div className="w-[25px] h-[25px]">
                    <Image
                      src={item.icon}
                      alt="zalo"
                      width={50}
                      height={50}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <div
            onClick={handleScrollToTop}
            className={`${
              showButton ? " pullup " : " opacity-0 transform-none invisible"
            } mt-[10px]`}
          >
            <div className=" relative border border-gray-300  bg-white cursor-pointer ">
              <div className="p-2">
                <div className="w-[25px] h-[25px]">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/klatexpress.appspot.com/o/arrow-up_eb1426bb7fc647eab89f9279695752cd.webp?alt=media&token=9817972d-4e09-46a0-8476-9f1eb945b9df"
                    alt="zalo"
                    width={50}
                    height={50}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-7 right-10  box-border flex flex-col gap-5">
        <Link href={Contact.Hotline ? `tel:${Contact.Hotline}` : "tel:"}>
          <div className="flex items-center">
            <div className=" font-semibold d:flex p:hidden justify-start items-center rounded-full w-[280px] h-[48px] bg-blue-600 shadow-2xl absolute right-0 text-white">
              <span className="ml-5">Liên hệ ngay: {Contact?.Hotline}</span>
            </div>
            <div className="h-12 w-12   call-animation">
              <FaPhoneFlip className="text-white text-[25px] " />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Hotline;
