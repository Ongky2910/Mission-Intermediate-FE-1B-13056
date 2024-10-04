import React, { useState } from 'react';
import clsx from 'clsx';

const Dropdown = ({ options, className, onChange }) => {
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
          "flex items-center justify-between w-30 rounded-lg bg-gray-input text-white border border-gray-700 py-2 px-6 focus:outline-none",
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || "Genre"}
      </button>
      {isOpen && (
        <div className="absolute z-10 w-5/12 bg-gray-input border border-gray-700 rounded shadow-lg">
          <div className="grid grid-cols-2 p-2 max-h-60 overflow-y-auto">
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
