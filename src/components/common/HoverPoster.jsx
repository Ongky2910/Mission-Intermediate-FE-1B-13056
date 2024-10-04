import React from "react";
import { RxCheckCircled } from "react-icons/rx";
import { MdPlayCircle } from "react-icons/md";

const HoverPoster = React.memo(
  ({ series, onClick, onOpenTrailer, hoveredItemId }) => {
    if (!series || series.length === 0) {
      console.log("No Series available");
      return null;
    }

    return (
      <div className="bg-gray-input cursor-pointer w-[408px] h-[420px] rounded-[20px] overflow-hidden transition-all duration-300 hover:opacity-100 hover:shadow-[0px_20px_48px_0px rgba(255,255,255,0.1)]">
        {series.map((item) => (
          <div key={item.id} className="poster" onClick={() => onClick(item)}>
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto rounded-lg object-cover transition-opacity duration-300"
              />

              {/* Dropdown Menu */}
              <select className="absolute bottom-10 right-10  bg-gray-700 text-white flex items-center space-x-2 p-2 rounded-full">
                <option></option>
              </select>

              {/* Tombol play dan Info  */}
              <div className="p-6 flex">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <RxCheckCircled
                      style={{
                        position: "absolute",
                        bottom: "36px",
                        left: "150px",
                      }}
                      size="40px"
                    />

                    <button
                      className="relative bottom-10 left-4 mb-2 play-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenTrailer(item.trailerUrl, item);
                      }}
                    >
                      <MdPlayCircle size={30} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative bottom-5 left-4 flex items-center">
                <span className="age-rating">{item.ageRating}</span>
                <p className="total-episodes ml-2">{item.totalEpisodes}</p>
              </div>
            </div>

            {/* Genre Container */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-gray-500 font-thin">
                {item.genre?.join(" • ") || "No Genre Available"}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
);

export default HoverPoster;
