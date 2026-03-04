import { SEOProps } from "@assets/props/PropsConfig";
import { PostProps } from "@assets/props/PropsPost";
import HomeNews from "@components/client/Home/HomeNews";
import HomeSection1 from "@components/client/Home/HomeSection1";
import HomeSection2 from "@components/client/Home/HomeSection2";
import HomeSection3 from "@components/client/Home/HomeSection3";
import HomeSection4 from "@components/client/Home/HomeSection4";
import HomeSlide from "@components/client/Home/HomeSlide";
import PricingTable from "@components/client/Home/PricingTable";

import { LocalFindById } from "@components/items/Handle";
import { find } from "@config/lib/api";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const Config = await find("Config");
  const SEOmetaTag: SEOProps = LocalFindById(Config, "SEOconfig");
  return {
    description: SEOmetaTag?.Description,
    keywords: SEOmetaTag?.Keyword,
    title: SEOmetaTag?.Title,
  };
}

const HomePage = async () => {
  const Posts: PostProps[] = await find("Posts");
  const ProductCategory = await find("ProductCategory");
  const Products = await find("Products");
  const Config = await find("Config");
  const ContactData = LocalFindById(Config, "contact");
  const Slides = await find("Slides");

  const Introduction: any = Posts?.find((item) => item.url === "bang-gia");
  return (
    <div className="">
      <HomeSlide Data={Slides} />
      <HomeSection1 ContactData={ContactData} />
      <HomeSection4 />
      <HomeSection2 Posts={Posts} />

      <HomeSection3 Category={ProductCategory} Products={Products} />

      <HomeNews Data={Posts} Title="CÓ THỂ BẠN QUAN TÂM" />
    </div>
  );
};

export default HomePage;
