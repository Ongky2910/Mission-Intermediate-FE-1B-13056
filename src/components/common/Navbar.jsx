import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/src/components/common/Chill"; // Your Logo component
import { IoMdExit } from "react-icons/io";
import { GoStar } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import Dropdown from "./GenreDrop"; // Adjust the import path as needed

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleExit = () => {
    localStorage.removeItem("userSession");
    window.location.href = "/login";
  };

  // Genre options
  const genreOptions = [
    { label: "Aksi", value: "Aksi" },
    { label: "Drama", value: "Drama" },
    { label: "Komedi", value: "Komedi" },
    { label: "Horror", value: "Horror" },
    { label: "Britania", value: "Britania" },
    { label: "Anime", value: "Anime" },
  ];

  return (
    <nav className="bg-gray-input py-2 mx-0 ">
      <div className="flex items-center justify-between">
        {/* Left Side: Logo and Navigation Links */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <Logo
            src="src/assets/Vector (1).png"
            alt="Chill Logo"
            className="h-20 ml-4" // Adjust height if necesary
            text="chill" // Show text
          />

          {/* Link navigasi */}
          <div className="flex items-center space-x-2 md:space-x-14 text-nowrap"> {/* Links visible on all screens */}
            <Link to="/series" className="text-white font-light text-sm md:text-base md:ml-12  hover:text-gray-400 transition">
              Series
            </Link>
            <Link to="/home" className="text-white font-light text-sm md:text-base hover:text-gray-400 transition">
              Film
            </Link>
            <Link to="/mylist" className="text-white font-light text-sm md:text-base hover:text-gray-400 transition">
              Daftar Saya
            </Link>
          </div>
        </div>

        {/* Genre Dropdown (di mobile) */}
        <div className="md:hidden ">
          <Dropdown
            options={genreOptions}
            onChange={(value) => console.log("Selected Genre:", value)}
            isMobile={true}
          />
        </div>

        {/* Avatar Dropdown */}
        <div className="relative">
          <button onClick={toggleDropdown} className="focus:outline-none">
            <img
              src="src/assets/Ellipse 395.png" // Avatar image
              alt="Profile"
              className="w-10 h-10 mr-10 rounded-full border-2 border-white transition-transform"
            />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-zinc-900 text-white rounded-lg shadow-lg transition-opacity duration-200 z-50">
              <Link to="/profile" className="text-white flex items-center px-2 py-2 hover:bg-gray-200">
                <RxAvatar className="mr-2" />
                Profil Saya
              </Link>
              <Link to="/change-premium" className="text-white flex items-center px-2 py-2 mt-1 hover:bg-gray-200">
                <GoStar className="mr-2" />
                Ubah Premium
              </Link>
              <button onClick={handleExit} className="w-full flex items-center px-2 py-2 hover:bg-zinc-700">
                <IoMdExit className="mr-2" />
                Keluar
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
