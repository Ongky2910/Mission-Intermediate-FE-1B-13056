import React, { useState } from "react";
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
  const totalItems = items.length;

 
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(totalItems / itemsToShow));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(totalItems / itemsToShow)) % Math.ceil(totalItems / itemsToShow));
  };

  if (!items || items.length === 0) {
    return null;
  }

  
  const displayedItems = items.slice(
    currentIndex * itemsToShow,
    currentIndex * itemsToShow + itemsToShow + 1 
  );

  return (
    <section className="py-10 bg-gray-input relative">
      <h2 className="text-2xl font-semibold mb-4 mx-4 md:mx-10 lg:mx-20">
        {title}
      </h2>

      <div className="relative mx-4 md:mx-10 lg:mx-20">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full w-10 p-2 z-10"
        >
          &lt;
        </button>

        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)` }}
          >
            {displayedItems.map((item) => (
              <div
                key={item.id}
                className={clsx("bg-gray-800 p-4 rounded-lg relative group flex-shrink-0 w-1/4 mx-2", {
                  "w-full": true,
                  "mx-1": true, 
                })}
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

                {item.isTop10 && (
                  <div className="absolute top-4 font-extralight text-xs right-4 p-2 w-7 rounded-sm bg-red-600">
                    Top 10
                  </div>
                )}
                {item.isPremium && (
                  <div className="absolute top-1 left-0 p-1 rounded-full bg-yellow-500">
                    Premium
                  </div>
                )}
                {item.isNewEpisode && (
                  <div className="absolute top-1 left-0 p-1 rounded-full bg-blue-800 text-white">
                    Episode Baru
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full w-10 p-2"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Category;
