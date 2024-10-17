import React from 'react';
import clsx from 'clsx';

const Logo = ({ src, alt, text, className }) => {
  return (
    <div className={clsx('flex items-center', className)}>
      <img src={src} alt={alt} className="max-w-[10em] h-8" />
      {text && <span className="hidden md:inline font-londrina text-white text-[40px] ml-2 font-bold leading-[35.2px] uppercase">{text}</span>}
    </div>
  );
};

export default Logo;
