import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
    calculateTotal(savedCart);
  }, []);

  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const handleCheckout = () => {
    // Handle checkout logic here
    alert("Thanh toán thành công");
    navigate("/");
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-16 my-8 md:my-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 hover:text-red-500">
          Giỏ hàng của bạn
        </h1>

        {cartItems.length > 0 ? (
          <div>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow"
                >
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"
                    />
                    <div>
                      <h2 className="text-lg md:text-xl font-semibold">
                        {item.name}
                      </h2>
                      <p className="text-red-500">
                        {Number(item.price).toLocaleString("vi-VN")} VND
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-red-500 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-red-600"
                  >
                    Xóa khỏi giỏ hàng
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl md:text-1xl font-bold">
                Tổng tiền:{" "}
                <span className="text-red-500">
                  {Number(totalPrice).toLocaleString("vi-VN")} VND
                </span>
              </h3>
            </div>

            <button
              onClick={handleCheckout}
              className="bg-green-600 text-white px-4 py-2 md:px-6 md:py-2 mt-6 rounded-lg hover:bg-green-700 w-full md:w-auto"
            >
              Thanh toán
            </button>
          </div>
        ) : (
          <p className="text-lg md:text-xl">Giỏ hàng của bạn đang trống.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
