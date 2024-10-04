import React, { useState } from "react";
import clsx from "clsx";
import Button from "../common/Button";
import { RiArrowDropDownLine } from "react-icons/ri";
import logoIcon from "/src/assets/more.png";
import Dropdown from "/src/components/common/GenreDrop.jsx";
import { GrCircleInformation } from "react-icons/gr";
import { MdOutlineVolumeOff, MdOutlineVolumeUp } from "react-icons/md";

const Hero = ({
  options,
  onDropdownChange,
  title,
  description,
  showDropdown,
  backgroundImage,
}) => {
  // Mekanisme mute & on
  const [isSoundOn, setIsSoundOn] = useState(true);
  const handleSoundToggle = () => {
    setIsSoundOn(!isSoundOn);
  };

  return (
    <div
      className="bg-cover bg-center h-[600px] relative object-cover overflow-hidden bg-custom-gray"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-center p-10 md:ml-10">
     
        {showDropdown && (
        <Dropdown options={options} onChange={onDropdownChange} />
      )}
        
 
        <h1 className="text-4xl font-semibold mb-4">{title}</h1>
        <p className="font-light line-clamp-5 max-w-3xl text-left">{description} </p>
      </div>
      <button
        className="bg-transparent absolute bottom-10 mb-8 right-10 border-gray-500 rounded-full px-2 py-2"
        onClick={handleSoundToggle}
      >
        {isSoundOn ? (
          <MdOutlineVolumeUp size={25} />
        ) : (
          <MdOutlineVolumeOff size={25} />
        )}
      </button>
      <div className="w-50 px-2 py-2 absolute bottom-10 mb-5 left-10 flex items-center space-x-2">
        <Button
          text="Mulai"
          color="blue"
          variant="default"
          className="p-6 md:ml-7"
        />

        <Button
          text="Selengkapnya"
          color="other"
          variant="paper"
          className="flex items-center space-x-2 w-full p-4"
          icon={<GrCircleInformation size="25px" />}
        />
        <span className="border-2 border-gray-500 rounded-full px-2 text-s flex items-center justify-center ml-2 w-14 h-10 bg-transparent font-light">
          18+
        </span>
      </div>
    </div>
  );
};

export default Hero;
