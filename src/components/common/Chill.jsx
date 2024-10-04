
import React from 'react';
import clsx from 'clsx';

const Logo = ({ src, alt, text, className, width = 'auto', height = 'auto' }) => {
  return (
    <div className={clsx('flex items-center', className)}>
      <img src={src} alt={alt} className="max-w-[50px] h-9" />
      {text && <span className="font-londrina text-white text-[50px] w-70 h-35 font-bold leading-[35.2px] ml-2 uppercase">{text}</span>}
    </div>
  );
};

export default Logo;
