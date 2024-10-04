import React, { useState } from "react";
import clsx from "clsx";
import Flag from "./Flag";
import Rating from "./Rating";

const Category = ({
  title,
  items,
  onOpenTrailer,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5;
  const itemsWithRatings = [1, 2];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= items.length ? 0 : newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? items.length - 1 : newIndex;
    });
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="py-5 bg-gray-input relative">
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

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 overflow-hidden">
          {items.slice(currentIndex, currentIndex + itemsToShow).map((item) => (
            <div
              key={item.id}
              className={clsx(
                "bg-gray-800 p-2 rounded-lg relative group flex flex-col"
              )}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
              onClick={() => onOpenTrailer(item.trailerUrl, item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full rounded object-cover"
              />
              <h3 className="text-white">{item.title} </h3>

              {item.rating && <Rating rating={item.rating} showRating={true} />}
              <div className="absolute top-7 font-extralight text-xs right-10 w-7 rounded-sm">
                {item.isTop10 && <Flag label="Top 10" type="top10" />}
              </div>

              {item.isPremium && <Flag label="Premium" type="premium" />}
              {item.isNewEpisode && (
                <Flag label="Episode Baru" type="newEpisode" />
              )}
            </div>
          ))}
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
