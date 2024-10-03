import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const colorStyles = {
 red: {
    pressed: "bg-[#B71F1D] text-white hover:bg-[#3D4142]/80",
  },
  blue: {
    default: "bg-blue text-white hover:bg-blue/80",
    outline: "border border-blue text-blue hover:bg-blue/200",
  },
  yellow: {
    premium: "bg-yellow-premium text-white hover:bg-yellow-premium/80",
    outline: "border border-yellow-premium text-yellow-premium hover:bg-yellow-premium/80",
  },
};

const Category = ({ title, items, onOpenTrailer }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
  const itemsToShow = 5;

  if (!items || items.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - itemsToShow + items.length) % items.length
    );
  };

  return (
    <section className="py-10 bg-gray-input">
      <h2 className="text-2xl font-semibold mb-4 mx-4 md:mx-10 lg:mx-20">{title}</h2>
      <div className="relative mx-4 md:mx-10 lg:mx-20">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 z-10"
        >
          &lt;
        </button>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-hidden">
          {items
            .slice(currentIndex, currentIndex + itemsToShow)
            .map((item, index) => (
              <div
                key={index}
                className={clsx("bg-gray-800 p-7 rounded-lg relative group")}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => {
                  console.log(`clicked on: ${item.title}`);
                  onOpenTrailer(item.trailerUrl, item);
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full rounded object-cover"
                />
                <h3 className="text-white">{item.title}</h3>

                {hoveredItem === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white p-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenTrailer(item.trailerUrl, item);
                      }}
                      className="mb-4 bg-green-500 px-4 py-2 rounded-full"
                    >
                      Play
                    </button>
                    <div className="text-sm mb-2">
                      <span>{item.date}</span>
                    </div>
                    <div className="text-sm mb-2">
                      <span>Duration: {item.duration || "N/A"}</span>
                    </div>
                    <div className="text-sm">
                      <span>Genre: {Array.isArray(item.genre) ? item.genre.join(", ") : item.genre}</span>
                    </div>
                  </div>
                )}

                {item.isTop10 && (
                  <div className={clsx("absolute top-7 font-extralight text-xs right-7 p-2 w-7 rounded-sm", colorStyles.red.pressed)}>
                    Top 10 
                  </div>
                )}
                {item.isPremium && (
                  <div className={clsx("absolute top-1 left-0 p-1 rounded-full", colorStyles.yellow.premium)}>
                    Premium
                  </div>
                )}
                {item.isNewEpisode && (
                  <div className={clsx("absolute top-1 left-0 p-1 rounded-full", colorStyles.blue.default)}>
                    Episode Baru
                  </div>
                )}
              </div>
            ))}
        </div>
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
