import React from "react";
import clsx from "clsx";

// Define colorStyles outside the Button component to export it
export const colorStyles = {
  gray: {
    default: "bg-gray text-white hover:bg-gray/80",
    outline: "border border-gray text-gray hover:bg-gray-200",
    ekstra: "bg-[#3D4142] text-white hover:bg-[#3D4142]/80",
  },
  blue: {
    default: "bg-blue text-white hover:bg-blue/80",
    outline: "border border-blue text-blue hover:bg-blue/200",
  },
  white: {
    default: "bg-white text-gray-800 hover:bg-gray-200",
    outline: "border border-white text-white hover:bg-white/80",
  },
  yellow: {
    premium: "bg-yellow-premium text-white hover:bg-yellow-premium/80",
    outline: "border border-yellow-premium text-yellow-premium hover:bg-yellow-premium/80",
  },
  other: {
    paper: 'bg-[#22282A] hover:bg-[#3D4142]/80',
  },
};

const Button = ({
  onClick,
  text,
  color,
  variant,
  icon,
  className,
  grade,
  iconPosition = "left",
}) => {
  const baseStyles = "w-full py-2 rounded-full transition duration-200 flex items-center justify-center";

  // Use colorStyles directly to get buttonStyles
  const buttonStyles = clsx(
    baseStyles,
    colorStyles[color]?.[variant] || colorStyles.gray.default, // Fallback to a default style
    className
  );

  return (
    <button onClick={onClick} className={buttonStyles}>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {text}
      {grade && iconPosition === "right" && (
        <span className="bg-gray-500 rounded-full px-2 text-xs ml-2">{grade}</span>
      )}
    </button>
  );
};

export default Button;
