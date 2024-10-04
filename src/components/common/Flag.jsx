import React from 'react'
import clsx from "clsx";

const Flag = ({label, type, className, position }) => {
    const flagStyles =clsx(
        "absolute top-0 left-0 px-2 py-2 text-xs rounded-br-lg font-normal z-index-10",
        className,
        {
        "bg-red-600 text-white": type === "top10", 
        "bg-yellow-500 text-gray": type === "premium",
        "bg-blue-800 text-white": type === "newEpisode",
        },
        position
    );

  return (
    <div className={flagStyles}>
        {label}  
    </div>
  )
}

export default Flag;
