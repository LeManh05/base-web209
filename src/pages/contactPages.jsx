import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Liên hệ của bạn đã được gửi!");
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center bg-gray-100 my-8 mx-8">
        <div className="container mx-auto p-8 bg-white rounded-lg ">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Liên hệ với chúng tôi
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Họ và tên */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-gray-600 font-semibold mb-2"
              >
                Họ và tên
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Nhập tên..."
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Nhập email..."
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Số điện thoại */}
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-600 font-semibold mb-2"
              >
                Số điện thoại
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Nhập số điện thoại..."
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Lời nhắn */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-600 font-semibold mb-2"
              >
                Lời nhắn
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32"
              />
            </div>

            {/* Nút gửi */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
              >
                Gửi liên hệ
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
