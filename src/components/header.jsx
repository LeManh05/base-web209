import React, { useState } from "react";
import { Heart, User, ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-pink-600 font-bold text-3xl">
            The Simple
          </a>
        </div>

        {/* Menu trên màn hình lớn */}
        <nav className="hidden lg:flex space-x-8 text-gray-700">
          <a href="/" className="hover:text-pink-500">
            Trang Chủ
          </a>
          <a href="/" className="hover:text-pink-500 flex items-center">
            Thiệp Cưới{" "}
            <span className="ml-1 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
              New
            </span>
          </a>
          <a href="/" className="hover:text-pink-500">
            Thiệp Sinh Nhật
          </a>
          <a href="/" className="hover:text-pink-500">
            Phụ Kiện Cưới
          </a>
          <a href="/" className="hover:text-pink-500">
            Tùy Chọn Thiệp
          </a>
          <a href="/" className="hover:text-pink-500">
            Lookbook
          </a>
          <a href="/" className="hover:text-pink-500">
            Blog Cưới
          </a>
        </nav>

        {/* Biểu tượng bên phải */}
        <div className="flex items-center space-x-6">
          {/* Yêu thích */}
          <Link to={`/favorites`}>
            <Heart className="w-6 h-6 text-black hover:text-pink-500 cursor-pointer" />
          </Link>

          {/* Tài khoản */}
          <User className="w-6 h-6 text-black hover:text-pink-500 cursor-pointer" />

          {/* Giỏ hàng */}
          <Link to={`/cart`}>
            <ShoppingCart className="w-6 h-6 text-black hover:text-pink-500 cursor-pointer" />
          </Link>

          {/* Menu di động */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black hover:text-pink-500"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu di động */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 p-4 text-gray-700">
            <a href="/" className="hover:text-pink-500">
              Trang Chủ
            </a>
            <a href="/" className="hover:text-pink-500 flex items-center">
              Thiệp Cưới{" "}
              <span className="ml-1 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
                New
              </span>
            </a>
            <a href="/" className="hover:text-pink-500">
              Thiệp Sinh Nhật
            </a>
            <a href="/" className="hover:text-pink-500">
              Phụ Kiện Cưới
            </a>
            <a href="/" className="hover:text-pink-500">
              Tùy Chọn Thiệp
            </a>
            <a href="/" className="hover:text-pink-500">
              Lookbook
            </a>
            <a href="/" className="hover:text-pink-500">
              Blog Cưới
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
