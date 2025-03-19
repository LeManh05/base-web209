import React from "react";
import { Link } from "react-router-dom";
import WeddingCardDetail from "../pages/weddingCardDetail";
const Card = ({ weddingCards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {weddingCards.length > 0 ? (
        weddingCards.map((item, index) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform"
          >
            <img
              src={item.thumbnail}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-600">{item.name}</h2>
            <p className="text-gray-500">
              {Number(item.price).toLocaleString("vi-VN")} VND
            </p>
            <Link
              to={`/products/${item.id}`}
              className="mt-4 bg-orange-400 text-white py-2 w-full block text-center rounded-lg hover:bg-orange-600"
            >
              Xem chi tiết
            </Link>
          </div>
        ))
      ) : (
        <p>Không có thiệp cưới nào phù hợp</p>
      )}
    </div>
  );
};

export default Card;
