import React from "react";

import { ProductProps } from "@assets/props/PropsProduct";
import ProductCard from "../Products/ProductCard";
import { CategoryProps } from "@assets/props/Props";
import slugify from "slugify";

const HomeProducts = ({
  Data,
  Category,
}: {
  Data: ProductProps[];
  Category: CategoryProps[];
}) => {
  return (
    // <div className="bg-[#42250d] py-10">
    //   <div className="d:w-[1200px] d:mx-auto p:w-auto p:mx-2 text-mainYellow">
    //     <div className="grid d:grid-cols-3 gap-5 py-5 p:grid-cols-2">
    //       {Data?.map((item, idx) => (
    //         <div key={idx}>
    //           <ProductCard Data={item} />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="bg-bgcontent text-white py-10 min-h-screen">
      <div className=" py-5  d:w-[1200px] d:mx-auto p:w-auto p:mx-2 ">
        {Category?.map((item, idx) => {
          const ProductFiltered = Data?.filter(
            (pitem) =>
              pitem.level0 ===
              slugify(item.level0, { lower: true, locale: "vi" })
          );
          return (
            <div key={idx} className="">
              <div
                className="tracking-[2px] text-[40px] text-lime-600 font-bold uppercase text-center py-10"
                key={idx}
              >
                {item.level0}
              </div>
              <div>
                <div className="grid d:grid-cols-4 gap-5 py-5 p:grid-cols-2">
                  {ProductFiltered?.map((item, idx) => (
                    <div key={idx}>
                      <ProductCard Data={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeProducts;
