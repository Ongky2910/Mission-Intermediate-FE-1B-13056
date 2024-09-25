import React from "react";
import clsx from "clsx";

const Button = ({
  onClick,
  text,
  type = "primary",
  icon,
  className,
  variant,
  grade,
}) => {
  const buttonStyles = clsx(
    "w-full py-2 rounded-full transition duration-200",
    className,
    {
      "bg-gray-500 text-white hover:bg-gray-700": type === "primary",
      "bg-transparent text-white hover:bg-red-700 border-gray-500":
        type === "secondary",
      "bg-gray-800 text-white hover:bg-gray-500 hover:text-gray":
        variant === "more",
      "w-48": variant === "more",
      "bg-indigo-800 text-white hover:bg-indigo-700 ":
        variant === "mulai",
      "w-24": variant === "mulai"
    }
  );

  return (
    <button onClick={onClick} className={buttonStyles}>
      {icon && <span className="mr-1 ml-5">{icon}</span>}
      {text}
      {grade && <span className="bg-gray-500 rounded-full px-2 text-xs ml-2">{grade}</span>} 
    </button>
  );
};

export default Button;
