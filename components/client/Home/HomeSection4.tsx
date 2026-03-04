import React from "react";

const HomeSection4 = () => {
  return (
    <div className="font-sans text-gray-800 antialiased">
      <section className="relative bg-slate-900 text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/20 text-red-400 font-semibold mb-6 border border-red-500/30">
            <span className="animate-pulse w-2 h-2 bg-red-500 rounded-full mr-2"></span>{" "}
            CÓ MẶT NHANH 24/7
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            SỬA CỬA CUỐN GIÁ RẺ <span className="text-yellow-400">TP.HCM</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-300 font-medium max-w-3xl mx-auto">
            Cửa cuốn bị kẹt? Không lên xuống? Motor cháy? Remote không hoạt
            động?
          </p>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Chúng tôi chuyên sửa cửa cuốn tại TP.HCM, có mặt nhanh chóng với đội
            ngũ hơn 20 thợ kỹ thuật phân bổ khắp các quận huyện. Xử lý triệt để
            mọi sự cố với 15 năm kinh nghiệm.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:0879355661"
              className="w-full sm:w-auto px-8 py-4 text-lg font-bold bg-red-600 hover:bg-red-700 text-white rounded-full transition-transform hover:scale-105 shadow-[0_0_15px_rgba(220,38,38,0.5)] flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              0879 355 661
            </a>
            <a
              href="tel:0796119395"
              className="w-full sm:w-auto px-8 py-4 text-lg font-bold bg-white text-slate-900 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              0796 119 395
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              DỊCH VỤ CHUYÊN SÂU
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">
                Sửa lỗi cơ khí
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✔</span> Cửa cuốn kẹt
                  nan, bung nan
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✔</span> Lệch ray, tuột
                  ray
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✔</span> Đứt lò xo trợ
                  lực
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✔</span> Cửa phát tiếng
                  kêu lớn
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✔</span> Cửa không dừng
                  đúng hành trình
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">
                Sửa lỗi Motor - Điện
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✔</span> Motor không
                  hoạt động, cháy motor
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✔</span> Motor yếu, cửa
                  lên chậm
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✔</span> Hỏng hộp điều
                  khiển, remote mất tín hiệu
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✔</span> Lỗi bộ lưu
                  điện, ắc quy hỏng
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✔</span> Cửa tự dừng
                  giữa chừng
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">
                Sửa cửa/cổng tự động
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span> Cửa kính không
                  đóng/mở
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span> Hỏng mắt thần,
                  cảm biến, board mạch
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span> Motor tay đòn
                  cổng không hoạt động
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span> Cổng âm sàn bị
                  yếu
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span> Cổng đóng mở
                  giật, chậm
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center bg-blue-50 rounded-xl p-4 border border-blue-100">
            <p className="text-blue-800 font-medium">
              💡 <span className="font-bold">Lưu ý:</span> Chúng tôi kiểm tra kỹ
              toàn bộ hệ thống trước khi sửa, xác định đúng nguyên nhân, tránh
              sửa sai lỗi gây phát sinh chi phí.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              QUY TRÌNH SỬA CỬA CUỐN MINH BẠCH
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Không sửa khi khách chưa đồng ý giá. Không phát sinh chi phí ngoài
              báo giá.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg border-4 border-blue-100 z-10 relative">
                1
              </div>
              <h4 className="font-semibold text-sm">Tiếp nhận & Điều phối</h4>
            </div>
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg border-4 border-blue-100 z-10 relative">
                2
              </div>
              <h4 className="font-semibold text-sm">Có mặt kiểm tra</h4>
            </div>
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg border-4 border-blue-100 z-10 relative">
                3
              </div>
              <h4 className="font-semibold text-sm">Báo lỗi & Báo giá</h4>
            </div>
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg border-4 border-blue-100 z-10 relative">
                4
              </div>
              <h4 className="font-semibold text-sm">Tiến hành sửa chữa</h4>
            </div>
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg border-4 border-blue-100 z-10 relative">
                5
              </div>
              <h4 className="font-semibold text-sm">Vận hành thử</h4>
            </div>
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg border-4 border-blue-100 z-10 relative">
                6
              </div>
              <h4 className="font-semibold text-sm">Bàn giao & Bảo hành</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">
                Vì sao khách hàng chọn chúng tôi?
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Chúng tôi hiểu cửa cuốn hỏng có thể làm gián đoạn sinh hoạt và
                kinh doanh. Vì vậy, yếu tố{" "}
                <span className="text-white font-bold">
                  nhanh – chính xác – tiết kiệm
                </span>{" "}
                luôn được đặt lên hàng đầu.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>{" "}
                  15 năm kinh nghiệm
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>{" "}
                  Hỗ trợ 24/7 – gọi là có mặt
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>{" "}
                  Hơn 20 thợ khắp TP.HCM
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>{" "}
                  Sửa đúng lỗi – đúng giá
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>{" "}
                  Bảo hành rõ ràng
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>{" "}
                  Nhanh chóng – chuyên nghiệp
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 border border-white/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">
                Giá rẻ – Phù hợp mọi khách hàng
              </h3>
              <p className="text-gray-300 mb-6">
                Cam kết mức giá cạnh tranh nhất tại TP.HCM. Tối ưu phương án sửa
                chữa để tiết kiệm chi phí cho bạn:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex">
                  <div className="mr-3 mt-1 w-2 h-2 bg-yellow-400 rounded-full"></div>{" "}
                  Sửa chữa thay vì thay mới nếu còn sử dụng được.
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-2 h-2 bg-yellow-400 rounded-full"></div>{" "}
                  Linh kiện thay thế chất lượng, giá hợp lý.
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-2 h-2 bg-yellow-400 rounded-full"></div>{" "}
                  Chốt báo giá trước khi làm, không mập mờ.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">
            LIÊN HỆ NGAY - CÓ MẶT SAU 15 PHÚT
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Phục vụ 24/7 tại tất cả các quận huyện TP.HCM
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="tel:0879355661"
              className="text-3xl font-black bg-white text-red-600 px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors flex items-center"
            >
              <svg
                className="w-8 h-8 mr-3 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              0879 355 661
            </a>
            <a
              href="tel:0796119395"
              className="text-2xl font-bold border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-red-600 transition-colors"
            >
              0796 119 395
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection4;
