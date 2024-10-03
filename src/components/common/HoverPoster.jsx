import React from "react";
import { PiPlusCircleLight } from "react-icons/pi";

const HoverPoster = ({ series, onClick }) => {
  return (
    <div
      className="relative cursor-pointer w-[408px] h-[460px] rounded-[20px_0_0_0] overflow-hidden transition-all duration-300 hover:opacity-100 hover:shadow-[0px_20px_48px_0px_rgba(255,255,255,0.1)]"
      onClick={onClick}
    >
      <img
        src={series.image}
        alt={series.title}
        className="w-[408px] h-[460px] rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
      />
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80 transition-opacity">
        <div className="flex items-center justify-center h-full text-white text-lg font-bold">
          <PiPlusCircleLight size="40px" className="text-white" />
          <h2 className="text-2xl font-medium text-white">{series.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default HoverPoster;
