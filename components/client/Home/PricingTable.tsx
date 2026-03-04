import { introductoryProps, PostProps } from "@assets/props/PropsPost";
import React from "react";

const pricingData = [
  ["Châu Đốc", "1 Ngày", "250", "1.600.000đ", "1.800.000đ", "2.000.000đ"],
  ["Cao Lãnh", "1 Ngày", "200", "1.400.000đ", "1.600.000đ", "2.000.000đ"],
  ["Nội ô Cần Thơ", "8 Giờ", "80", "1.000.000đ", "1.100.000đ", "1.300.000đ"],
  ["Bạc Liêu", "1 Ngày", "250", "1.600.000đ", "2.000.000đ", "2.300.000đ"],
  [
    "Châu Đốc – Hà Tiên",
    "2 Ngày",
    "520",
    "3.400.000đ",
    "3.700.000đ",
    "4.500.000đ",
  ],
  [
    "Cà Mau + Bạc Liêu + Đất Mũi",
    "3 Ngày 3 Đêm",
    "650",
    "5.000.000đ",
    "5.700.000đ",
    "7.400.000đ",
  ],
  ["Hà Tiên", "1 Ngày", "470", "2.000.000đ", "2.250.000đ", "3.400.000đ"],
  ["Sóc Trăng", "1 Ngày", "130", "1.400.000đ", "1.550.000đ", "1.650.000đ"],
  ["Trà Vinh", "1 Ngày", "220", "1.500.000đ", "1.650.000đ", "2.000.000đ"],
  ["Phan Thiết", "2 Ngày", "800", "5.400.000đ", "6.600.000đ", "7.300.000đ"],
  ["Bến Tre", "1 Ngày", "260", "1.600.000đ", "1.800.000đ", "2.100.000đ"],
  ["Rạch Giá", "1 Ngày", "250", "1.500.000đ", "1.700.000đ", "2.200.000đ"],
];

const PricingTable = ({ Data }: { Data: PostProps }) => {
  return (
    <div className="bg-red-900">
      <div className=" d:w-[1200px] p:w-auto d:mx-auto p:mx-0 py-10">
        <div className="flex items-center gap-2 justify-center pb-5">
          <div className="w-20 h-[1px] bg-white"></div>
          <h2 className="text-2xl font-bold text-center text-white">
            Bảng Giá Cho Thuê Xe Cần Thơ
          </h2>
          <div className="w-20 h-[1px] bg-white"></div>
        </div>
        <div
          className="d:w-full p:w-screen text-sm text-gray-800  d:text-[16px] p:text-[14px] ck-content"
          dangerouslySetInnerHTML={
            Data?.content ? { __html: Data?.content } : { __html: "" }
          }
        ></div>
        {/* <table className="d:w-full p:w-screen text-sm text-gray-800 border border-gray-200 d:text-[16px] p:text-[14px]">
          <thead className="bg-gray-100 text-xs uppercase text-gray-600">
            <tr>
              <th className="px-1 py-2 border">Tuyến đường</th>
              <th className="px-1 py-2 border">Thời gian</th>
              <th className="px-1 py-2 border">Số Km</th>
              <th className="px-1 py-2 border">Xe 4 chỗ</th>
              <th className="px-1 py-2 border">Xe 7 chỗ</th>
              <th className="px-1 py-2 border">Xe 16 chỗ</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((row, idx) => (
              <tr key={idx} className="even:bg-white odd:bg-gray-50">
                {row.map((cell, i) => (
                  <td key={i} className="px-1 py-2 border text-center">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default PricingTable;
