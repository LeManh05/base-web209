import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/card";
import Header from "../components/header";
import { Search } from "lucide-react";
import Slideshow from "../components/banner";
import Footer from "../components/footer";

function WeddingList(){
  const [weddingCards, setWeddingCards] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  useEffect(() => {
    const fetchWeddingCards = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/weddingCards`);
        setWeddingCards(data);
      } catch (error) {
        setError("Có lỗi xảy ra khi tải dữ liệu");
      } finally {
        setLoading(false);
      }
    };

    fetchWeddingCards();
  }, []);

  const filteredCards = weddingCards
    .filter(
      (card) =>
        card.name.toLowerCase().includes(search.toLowerCase()) &&
        (categoryFilter ? card.category === categoryFilter : true)
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  // Pagination logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto bg-gray-50">
      <Header />
      <Slideshow />
      <div className="px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 space-y-4 md:space-y-0 px-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-auto flex items-center">
            <input
              type="text"
              placeholder="Tìm kiếm theo tên mẫu thiệp..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-96 p-3 pr-10 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition ease-in-out duration-200"
            />
            <Search className="absolute right-4 text-gray-500" />
          </div>

          {/* Filters and Sorting */}
          <div className="flex w-full md:w-auto space-x-0 md:space-x-4 flex-col md:flex-row">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="p-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition ease-in-out duration-200"
            >
              <option value="">Tất cả danh mục</option>
              <option value="Hiện đại">Hiện đại</option>
              <option value="Cổ điển">Cổ điển</option>
              <option value="Sang trọng">Sang trọng</option>
              <option value="Tối giản">Tối giản</option>
            </select>

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="p-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition ease-in-out duration-200"
            >
              <option value="asc">Giá tăng dần</option>
              <option value="desc">Giá giảm dần</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-center mb-8">
          <span className="text-gray-400 mx-4">✕</span>
          <div className="text-center text-xl font-semibold text-gray-900 hover:text-red-500 tracking-wider">
            THIỆP CƯỚI ONLINE
          </div>
          <span className="text-gray-400  mx-4">✕</span>
        </div>

        <Card weddingCards={currentCards} />

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          >
            Trang trước
          </button>
          <span className="mx-4 my-auto text-lg">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          >
            Trang sau
          </button>
        </div>
      </div>

      <div className="my-32">
        <img
          src="/images/banner.png"
          alt="Banner"
          className="w-full h-auto rounded-lg shadow-md"
          loading="lazy"
        />
      </div>

      <Footer />
    </div>
  );
}

export default WeddingList;
