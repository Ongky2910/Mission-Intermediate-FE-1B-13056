import React, { useState } from 'react';
import clsx from 'clsx';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Dropdown = ({ options, className, onChange, isMobile}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (value) => {
    setSelectedOption(value);  
    onChange(value);           
    setIsOpen(false);          
  };

  return (
    <div className={clsx("relative", className)}>
      <button 
        className={clsx(
          "flex items-center justify-between w-30 rounded-lg bg-gray-input text-white py-2 px-4 focus:outline-none",
           isMobile ? "bg-gray-input text-sm" : "bg-gray-800"
          ,className
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption || "Genre"}</span>
        {isMobile && <RiArrowDropDownLine className=" text-white" size={20} />} {/* Down arrow */}
      </button>
      {isOpen && (
        <div className={clsx(
          "absolute z-10 w-full bg-gray-input rounded shadow-lg",
          isMobile ? "w-30" : "w-50" 
        )}>
          <div className="md:grid grid-cols-2 p-2 max-h-60 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option.value}
                className={clsx(
                  "text-left p-1 w-full hover:bg-gray-700",
                  selectedOption === option.value && "bg-gray-600" 
                )}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
