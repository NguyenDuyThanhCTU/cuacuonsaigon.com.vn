import { ContactProps } from "@assets/props/PropsConfig";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSolidCheckShield, BiSolidTimer } from "react-icons/bi";
import {
  FcAlarmClock,
  FcApproval,
  FcAssistant,
  FcMoneyTransfer,
} from "react-icons/fc";

const HomeSection1 = ({ ContactData }: { ContactData: ContactProps }) => {
  const introItems1 = [
    {
      lable: "GỌI LÀ CÓ SAU 15 PHÚT",
      value: "Dịch vụ sửa chữa chuyên nghiệp 24/24",
      icon: <BiSolidTimer />,
    },
    {
      lable: "Miễn phí kiểm tra lỗi",
      value: "Kỹ thuật đến tận nơi khảo sát báo giá miễn phí",
      icon: <FcApproval />,
    },
    {
      lable: "GIÁ CẠNH TRANH",
      value:
        "Giá sửa chữa rẻ cạnh tranh, Thay thế thiết bị có giá niêm yết 24/24",
      icon: <FcMoneyTransfer />,
    },
  ];

  return (
    <div className="d:w-[1200px] p:w-auto d:mx-auto p:mx-2 py-10">
      <div className="grid d:grid-cols-3 p:grid-cols-1 gap-3">
        {introItems1?.map((item, idx) => (
          <div
            key={idx}
            className={`flex gap-2 items-center  px-4 ${
              introItems1.length - 1 !== idx && "border-r"
            }`}
          >
            <div className="text-[40px]">{item.icon}</div>
            <div className="flex flex-col">
              <span>
                <strong className="uppercase">{item.lable}</strong>
              </span>
              <span className="text-[14px]">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <h3 className="text-center font-bold text-[25px]">PHỤC VỤ 24/24</h3>
        <p className="text-center  font-semibold text-[20px]">
          Dịch Vụ _ Uy Tín _ Chuyên Nghiệp _ Chất Lượng
        </p>
        <div className="mt-5 flex flex-col gap-4">
          <div className="grid p:grid-cols-1 d:grid-cols-4 gap-5">
            <div className="col-span-3">
              Cửa cuốn gặp sự cố hãy gọi cho chúng tôi để được phục vụ nhanh
              nhất, dịch vụ sửa cửa cuốn đáp ứng 24/24 từ thứ 02 đến chủ nhật,
              kể cả các ngày lễ, tết, phục vụ chu đáo dịch vụ luôn hài lòng mọi
              khách hàng
            </div>
            <div className="bg-blue-900 text-white">
              <div className="p-2">
                {" "}
                <div className="flex gap-2 items-center">
                  <div className="text-[60px]">
                    <FcAssistant />
                  </div>
                  <div className="flex flex-col">
                    <span>
                      <strong className="">Hotline bảo hành cửa</strong>
                    </span>
                    <Link
                      href={`tel:${ContactData?.Hotline}`}
                      className="text-center bg-red-600 text-white  py-1 rounded-full mt-3 hover:bg-red-700 duration-300"
                    >
                      {ContactData?.Hotline}
                    </Link>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="grid p:grid-cols-1 d:grid-cols-2 items-center">
            <div>
              <Image
                alt="banner"
                src="https://firebasestorage.googleapis.com/v0/b/xetaiminhtri.appspot.com/o/avatar%2Fa9pzkwnSIWKWbCJtgdUlxEsuCgXaWWshw3LyQxGLzlgpRe5WdF.jpg?alt=media&token=5ebc6d05-d18a-4231-ba68-8e200f9e5cb4"
                width={500}
                height={500}
              />
            </div>
            <div className="ck-content">
              <h4 className="text-[22px] font-bold">
                Chúng tôi cam kết sửa chữa:
              </h4>
              <ul>
                <li>Bảo hành 6-12T tùy lỗi và thiết bị</li>
                <li>Hoàn tiền 100% nếu không ưng ý</li>
                <li>Phục vụ nhiệt tình đến nhanh 24/24</li>
                <li>Dịch vụ 24/24 từ thứ 2 đến chủ nhật</li>
                <li>Bảo hành đổi mới nếu lỗi do kỹ thuật</li>
              </ul>
            </div>
          </div>
          <div className="grid d:grid-cols-2 p:grid-cols-1 items-center">
            <div className="ck-content">
              <h4 className="text-[22px] font-bold">
                Lý do bạn nên sửa cửa cuốn tại chúng tôi
              </h4>
              <ul>
                <li>
                  Phục vụ nhanh khẩn cấp 24/24 thợ có mặt sửa chữa chỉ sau 15 –
                  20 phút gọi, có thợ sửa bố trí tại khu vực các quận để đáp ứng
                  nhanh và kịp thời cho khách hàng khi cửa gặp sự cố khẩn cấp
                </li>
                <li>
                  100% thợ sửa cửa cuốn có kinh nghiệm, tay nghề kỹ thuật cao,
                  thái độ phục vụ tốt, trung thực, sửa chữa nhanh nhẹn, nhiệt
                  tình chu đáo
                </li>
                <li>
                  Giá cả dịch vụ cạnh tranh, thiết bị thay thế rẻ có thể giúp
                  khách hàng tiết kiệm tới 2O% so với giá thị trường, bảo hành
                  nhanh chóng uy tín chuyên nghiệp
                </li>
                <li>
                  Là dịch sửa cửa cuốn Uy Tín có nhiều năm kinh nghiệm sửa chữa
                </li>
              </ul>
            </div>
            <div>
              <Image
                alt="banner"
                src="https://firebasestorage.googleapis.com/v0/b/xetaiminhtri.appspot.com/o/avatar%2FQgzC8bfE14tiuYApoCpS0LRnFWCBoIeeHM0ZqmxmYSPJt3luUK.jpg?alt=media&token=dc5792b8-04f3-4d81-8cf8-caa1c069af30"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection1;
