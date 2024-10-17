import React from 'react'
import clsx from "clsx";

const Flag = ({label, type, className, position }) => {
    const flagStyles =clsx(
        "absolute top-0 left-0 text-xs rounded-br-lg font-normal z-index-10",
        className,
        {
        "bg-red-600 text-white": type === "top10", 
        "bg-yellow-500 text-gray": type === "premium",
        "bg-blue-800 text-white": type === "newEpisode",
        },
        position
    );

    const extraPadding = type === "top10" ? "py-10" : "py-2";

    return (
      <div 
          className={`${flagStyles}  ${extraPadding}`}
          style={{ padding: '0.25rem 0.5rem' }} 
      >
          {label}  
      </div>
  );
}

export default Flag;
