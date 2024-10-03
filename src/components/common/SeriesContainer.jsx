import React, { useState } from "react";
import Popup from "./Popup"; 
import HoverPoster from "./HoverPoster"; 

const SeriesContainer = ({ seriesList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState(null);
  
  const handlePosterClick = (series) => {
    setSelectedSeries(series);
    setIsOpen(true);
  };

  return (
    <div className="flex flex-wrap">
      {seriesList.map((item) => (
        <HoverPoster
          key={item.id} 
          series={item}
          onClick={() => handlePosterClick(item)}
        />
      ))}

      <Popup
        series={selectedSeries}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default SeriesContainer;
