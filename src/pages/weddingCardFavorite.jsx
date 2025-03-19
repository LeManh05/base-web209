import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleRemoveFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((card) => card.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <Header />
      <div className="my-12 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-8 hover:text-red-500">
          Danh sách yêu thích
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.length === 0 ? (
            <p className="text-center">
              Không có mẫu thiệp nào trong danh sách yêu thích.
            </p>
          ) : (
            favorites.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform"
              >
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-center ">
                    {item.name}
                  </h2>
                  <p className="text-gray-500 mt-2 text-center">
                    {Number(item.price).toLocaleString("vi-VN")} VND
                  </p>
                  <button
                    onClick={() => handleRemoveFromFavorites(item.id)}
                    className="bg-red-500 text-white py-2 px-4 mt-4 flex items-center mx-auto rounded-lg hover:bg-red-600"
                  >
                    Xóa khỏi yêu thích
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FavoritesPage;
