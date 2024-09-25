import React from 'react';
import clsx from 'clsx';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const InputField = ({ id, label, type, placeholder, value, onChange, showToggle, toggleVisibility }) => {
    return (

           <div className="flex-auto rounded-lg mb-5">
            
            <label className="block text-white text-sm mb-3" htmlFor={id}>
                {label}
            </label>
            <div className="relative flex flex-col items-center justify-center">
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={clsx(
                        'w-full px-3 py-2 rounded-3xl bg-gray-700 text-white focus:outline-none transition duration-200',
                     
                    )}
                />
                {showToggle && (
                    <span
                        className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
                        onClick={toggleVisibility}
                    >
                        {type === 'password' ? <HiEyeOff className="h-5 w-5" /> : <HiEye className="h-5 w-5" />}
                    </span>
                )}
            </div>
        </div>
   
    );
};

export default InputField;