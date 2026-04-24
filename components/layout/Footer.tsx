import { ContactProps, SocialMediaProps } from "@assets/props/PropsConfig";
import { PostProps } from "@assets/props/PropsPost";
import { LocalFindById } from "@components/items/Handle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaPhone,
  FaPhoneAlt,
  FaRegClock,
  FaUser,
} from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { IoIosStar, IoMdMail } from "react-icons/io";
import { IoHomeSharp, IoLocation } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { SiZalo } from "react-icons/si";
interface FooterProps {
  Config: Array<any>;
  Posts: PostProps[];
}

const Footer = ({ Config, Posts }: FooterProps) => {
  const ContactData: ContactProps = LocalFindById(Config, "contact");
  const SocialMedia: SocialMediaProps = LocalFindById(Config, "SocialMedia");
  const Policy = Posts?.filter((item) => item.level0 === "dieu-khoan-su-dung");

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
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/120px-YouTube_full-color_icon_%282017%29.svg.png",
      link: SocialMedia?.Youtube ? SocialMedia?.Youtube : "",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/120px-Icon_of_Zalo.svg.png?_=20221117065843",
      link: SocialMedia?.zalo ? SocialMedia?.zalo : "",
    },
  ];
  const addresses = [
    "170 đường Bùi đình tuý phường 12 quận bình Thạnh",
    "236 Nguyễn văn luông phường 11 quận 6",
    "75 đường gò dầu phường Tân quý quận Tân Phú",
    "64 đường Trần Hưng đạo phường phạm ngũ lão quận 1",
    "158 đường Trần huy liệu phường 15 quận Phú nhuận",
    "133 Bùi minh trực phường 6 quận 8",
    "242 điện biên phủ phường 7 quận 3",
    "552 Nguyễn thị thập phường Tân phong quận 7",
    "61 Nguyễn duy dương phường 7 quận 5",
    "170 tôn Đảng phường 8 quận 4",
    "766 đường Sư vạn hạnh phường 12 quận 10",
    "10 đường hoa hoa thám phường 13 quận Tân bình",
    "151 Trần não phường an Phú quận 2",
    "656 đường trường chinh phường đông thuận Hưng quận 12",
    "53 đường mã lò phường bình trị đông A quận bình Tân",
    "133 đường Lê văn thọ phường 8 quận gò vấp",
  ];
  return (
    <div className="">
      <div className="bg-[rgb(0,0,0)] py-10 text-white">
        <div className="d:w-default d:mx-auto p:w-auto p:mx-2 grid p:grid-cols-1 d:grid-cols-3 gap-5">
          <div className="flex flex-col gap-4">
            <div className="w-full flex justify-center">
              <div className="w-[100px] h-[100px] ">
                <Image
                  src={ContactData?.LogoWebsite}
                  alt="logo"
                  width={400}
                  height={400}
                  className="border-b-2 border-white"
                />
              </div>
            </div>
            <div className="">
              <IoHomeSharp className="inline-block mr-2 mb-1" />
              <Link
                href={ContactData?.direct}
                className="hover:text-lime-400 duration-300 "
              >
                {ContactData?.CompanyAddress}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className=" " />
              <Link
                href={`tel:${ContactData?.Hotline}`}
                className="hover:text-lime-400 duration-300 "
              >
                {ContactData?.Hotline}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineEmail className=" " />
              <Link
                href={`mailto:${ContactData?.Email}`}
                className="hover:text-lime-400 duration-300 "
              >
                {ContactData?.Email}
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="font-bold text-[20px] uppercase">Cửa tự động 24h</h2>
            <div className="mt-4 flex flex-col gap-2 font-light">
              <p>Trụ sở doanh nghiệp: {ContactData?.CompanyAddress}</p>
              <p>Quốc gia: Việt Nam</p>
              <div>
                Điện thoại:{" "}
                <Link href={`tel:${ContactData?.PhoneNumber}`}>
                  {ContactData?.PhoneNumber}
                </Link>{" "}
                -{" "}
                <Link href={`tel:${ContactData?.Hotline}`}>
                  {ContactData?.Hotline}
                </Link>{" "}
              </div>
              <p className="underline">Kênh truyền thông</p>
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
                      className="w-full h-full object-cover rounded-full"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-[20px] uppercase">
              Chi nhánh Cửa tự động 24h
            </h2>
            <div className="py-2 ">
              {addresses?.map((item, idx) => (
                <div className=" font-normal" key={idx}>
                  - {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
