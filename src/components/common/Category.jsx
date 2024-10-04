import React, { useState, useCallback } from "react";
import clsx from "clsx";

const Category = ({
  title,
  items,
  onOpenTrailer,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 5;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - itemsToShow + items.length) % items.length
    );
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="py-10 bg-gray-input relative">
      <h2 className="text-2xl font-semibold mb-4 mx-4 md:mx-10 lg:mx-20">
        {title}
      </h2>

      <div className="relative mx-4 md:mx-10 lg:mx-20">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 z-10"
        >
          &lt;
        </button>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-hidden">
          {items.slice(currentIndex, currentIndex + itemsToShow).map((item) => (
            <div
              key={item.id}
              className={clsx("bg-gray-800 p-7 rounded-lg relative group")}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
              onClick={() => onOpenTrailer(item.trailerUrl, item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full rounded object-cover"
              />
              <h3 className="text-white">{item.title}</h3>
            </div>
          ))}
        </div>
        {items.isTop10 && (
                  <div className="absolute top-4 font-extralight text-xs right-4 p-2 w-7 rounded-sm bg-red-600">
                    Top 10
                  </div>
                )}
                {items.isPremium && (
                  <div className="absolute top-1 left-0 p-1 rounded-full bg-yellow-500">
                    Premium
                  </div>
                )}
                {items.isNewEpisode && (
                  <div className="absolute top-1 left-0 p-1 rounded-full bg-blue-800 text-white">
                    Episode Baru
                    </div>
                )}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Category;
