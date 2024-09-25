import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const Category = ({ title, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5;

  // Guard clause to ensure items is defined
  if (!items || items.length === 0) {
    return null; // or return a placeholder component
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - itemsToShow + items.length) % items.length
    );
  };

  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
        >
          &lt;
        </button>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-hidden">
          {items
            .slice(currentIndex, currentIndex + itemsToShow)
            .map((item, index) => (
              <div key={index} className={clsx("bg-gray-800 p-4 rounded-lg")}>
                <Link
                  to={`/movie/${item.title.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto mb-2 rounded"
                  />
                  <h3 className="text-white">{item.title}</h3>
                  {item.isTop10 && (
                    <div className="absolute top-1 left-0 p-2 w-10 ml-4 mt-2 bg-red-500 text-white rounded-full">
                      <span className="text-xs font-bold">Top 10</span>
                    </div>
                  )}
                </Link>
              </div>
            ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Category;
