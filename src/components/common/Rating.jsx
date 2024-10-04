import React from 'react';

const Rating = ({ rating, showRating }) => {
  const filledStars = Math.floor(rating); 
  const halfStar = rating % 1 >= 0.5; 

  return (
    <div className="flex items-center text-white">
    <span className="text-white font-serif">
       {'★'.repeat(filledStars)} 
      {'☆'.repeat(5 - filledStars - (halfStar ? 1 : 0))} {/* Empty stars */}
    </span>
    {showRating && <span className="text-white ml-2">{rating}/5</span>}
    </div>
  );
};

export default Rating;
