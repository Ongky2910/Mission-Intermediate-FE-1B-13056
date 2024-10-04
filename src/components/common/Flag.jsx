import React from 'react'
import clsx from "clsx";

const Flag = ({label, type, className }) => {
    const flagStyles =clsx(
        "absolute top-0 left-0 px-2 py-1 text-xs rounded-br-lg font-normal z-index-10",
        {
        "bg-red-500 text-white": type === "top10", 
        "bg-yellow-500 text-white": type === "premium",
        "bg-blue-500 text-white": type === "newEpisode",
        }
    );

  return (
    <div className={flagStyles}>
        {label}  
    </div>
  )
}

export default Flag;
