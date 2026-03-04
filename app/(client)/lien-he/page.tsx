import Contact from "@components/client/Contact/Contact";
import { find } from "@config/lib/api";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Liên Hệ - Cửa tự động 24h - Hotline: 0879 355 661 - 0796 119 395",
};

const ContactPage = async () => {
  const Config = await find("Config");
  const ContactData = Config?.find((item: any) => item.id === "contact");
  const SocialData = Config?.find((items: any) => items.id === "SocialMedia");
  return (
    <>
      <div className="bg-white  py-10">
        <div className="">
          <Contact ContactData={ContactData} SocialData={SocialData} />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
