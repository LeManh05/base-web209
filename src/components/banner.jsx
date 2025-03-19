import React, { useState, useEffect } from "react";

const images = [
  "https://anhvienmimosa.com.vn/wp-content/uploads/2024/12/album-5-garden-santorini-202466.jpg",
  "https://anhvienmimosa.com.vn/wp-content/uploads/2025/02/album-biet-thu-studio-vu-huyen-98.jpg",
  "https://anhvienmimosa.com.vn/wp-content/uploads/2024/07/album-biet-thu-hoa-hong-ngang-9.jpg",
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []);

  return (
    <div className="relative w-full  mt-0 mx-auto">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full"
      />
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
