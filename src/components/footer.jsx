import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {/* Logo section */}
        <div className="space-y-4">
          <div className="flex space-x-4">
            <img
              src="/images/logo1.png"
              alt="The Gioi In An"
              className="w-16 h-16"
              loading="lazy"
            />
            <img
              src="/images/logo2.png"
              alt="Cafe Simple"
              className="w-16 h-16"
              loading="lazy"
            />
            <img src="/images/logo3.png" alt="Pixefy" className="w-16 h-16"
            loading="lazy"/>
          </div>
          <p className="text-gray-500">
            CTY TNHH MTV THẾ GIỚI IN ẤN
            <br />
            GPDKKD số: 0311659980
          </p>
          <p className="text-gray-500">Thời gian làm việc:</p>
          <p className="text-gray-500">Sáng từ: 8h00 - 12h00</p>
          <p className="text-gray-500">Chiều từ: 13h30 - 17h30</p>
          <p className="text-gray-500">(Nghỉ chiều Thứ 7 & Chủ nhật)</p>
        </div>

        {/* Contact section */}
        <div className="space-y-2">
          <Link to={`/contact`}>
            <h4 className="font-bold hover:text-red-600 cursor-pointer">
              Liên Hệ
            </h4>
          </Link>
          <p className="text-gray-500">
            Hotline & Zalo:{" "}
            <a href="tel:0903696946" className="text-red-500">
              0903696946
            </a>{" "}
            - Bảo Oanh
          </p>
          <p className="text-gray-500">
            Hotline & Zalo:{" "}
            <a href="tel:0902595993" className="text-red-500">
              0902595993
            </a>{" "}
            - Hồng Ngọc
          </p>
        </div>

        {/* Guides section */}
        <div className="space-y-2">
          <h4 className="font-bold">Hướng Dẫn Và Hỗ Trợ</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Quy Trình Đặt Và Nhận Thiệp
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Hướng Dẫn Đặt Hàng Online
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Kiểm Tra Đơn Hàng
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Các Câu Hỏi Thường Gặp
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Bảng Font Chữ Thiệp Cưới
              </a>
            </li>
          </ul>
        </div>

        {/* Policy and Partner section */}
        <div className="space-y-2">
          <h4 className="font-bold">Chính Sách Và Thông Tin</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Giao Hàng Và Vận Chuyển
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Hình Thức Thanh Toán
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Chính Sách Bảo Hành Và Đổi Trả
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Thoả Thuận Sử Dụng
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Chính Sách Bảo Mật
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-t border-gray-400 mt-10 mx-4" />

      <div className="py-4 mt-10">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-gray-500 text-sm mx-4">
            Địa Chỉ Nhà Xưởng: 17 Đường Bắc Nam 2, Quận 2, TP Hồ Chí Minh
          </p>
          <p className="text-gray-500 text-sm mx-2">
            Văn Phòng Giao Dịch: 193/9R Điện Biên Phủ, P. 15, Q. Bình Thạnh, TP
            Hồ Chí Minh
          </p>
          <p className="text-gray-500 text-sm mx-4">
            © Copyright 2025 Thiệp Cưới The Simple.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
