import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const WeddingCardDetail = () => {
  const [weddingCards, setWeddingCards] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getCardDetail = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/weddingCards/${id}`
        );
        setWeddingCards(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCardDetail();
  }, [id]);

  const handleAddToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const alreadyFavorited = favorites.some(
      (card) => card.id === weddingCards.id
    );

    if (!alreadyFavorited) {
      favorites.push(weddingCards);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    navigate("/favorites");
  };
  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyCart = cart.some((card) => card.id === weddingCards.id);
    if (!alreadyCart) {
      cart.push(weddingCards);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    navigate("/cart");
  };

  return (
    <div>
      <Header />  
      <div className="flex items-center justify-center bg-white-100 my-12 mx-12">
        <div className="container mx-auto p-8 bg-white rounded-lg flex flex-col items-center lg:flex-row">
          {/* Image section */}
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0 lg:mr-10">
            <img
              src={weddingCards.thumbnail}
              alt={weddingCards.name}
              className="w-full h-full object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>

          {/* Details section */}
          <div className="lg:w-1/2 w-full flex flex-col items-start space-y-6">
            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900">
              {weddingCards.name}
            </h1>

            {/* Price */}
            <p className="text-gray-500 text-3xl">
              {Number(weddingCards.price).toLocaleString("vi-VN")} VND
            </p>
            {/* Description */}
            <div>
              <span className="text-gray-600">Mô tả chi tiết</span>
              <p className="text-lg text-gray-700 border rounded-lg p-4">
                {weddingCards.description}
              </p>
            </div>

            {/* Options: Paper Type and Foil Embossing */}
            <div className="flex flex-col space-y-4">
              <div>
                <label className="text-gray-600">Loại giấy:</label>
                <div className="flex space-x-2">
                  <button className="border px-4 py-2 rounded-lg">
                    Giấy tiêu chuẩn
                  </button>
                  <button className="border px-4 py-2 rounded-lg">
                    Giấy mỹ thuật
                  </button>
                </div>
              </div>

              <div>
                <label className="text-gray-600">
                  Thêm ép kim (+ 2.000 Đ):
                </label>
                <div className="flex space-x-2">
                  <button className="border px-4 py-2 rounded-lg">Không</button>
                  <button className="border px-4 py-2 rounded-lg">
                    Rose Gold
                  </button>
                  <button className="border px-4 py-2 rounded-lg">Gold</button>
                  <button className="border px-4 py-2 rounded-lg">
                    Silver
                  </button>
                </div>
              </div>

              {/* Quantity Selector */}
              <div>
                <label className="text-gray-600 mr-2">
                  Chọn số lượng thiệp:
                </label>
                <select className="border px-4 py-2 rounded-lg">
                  <option value="100">100 bộ thiệp</option>
                  <option value="200">200 bộ thiệp</option>
                  <option value="300">300 bộ thiệp</option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToFavorites}
                className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600"
              >
                Thêm vào yêu thích
              </button>
              <button
                onClick={handleAddToCart}
                className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700"
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WeddingCardDetail;
