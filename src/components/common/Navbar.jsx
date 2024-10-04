import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/src/components/common/Chill";
import { IoMdExit } from "react-icons/io";
import { GoStar } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleExit = () => {
    localStorage.removeItem("userSession");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-gray-input py-2">
      <div className="container mx-5 flex justify-between items-center">
        {/* Logo and Hamburger Menu for Mobile */}
        <div className="flex items-center">
          <Logo
            src="src/assets/Vector (1).png"
            alt="Chill Logo"
            className="h-20" 
          />
          <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none ml-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`flex items-center space-x-2 ${menuOpen ? "flex md:flex-row" : "hidden md:flex"}`}>
          <Link to="/series" className="text-white font-light hover:text-gray-400 transition">
            Series
          </Link>
          <Link to="/home" className="text-white font-light hover:text-gray-400 transition">
            Film
          </Link>
          <Link to="/mylist" className="text-white font-light hover:text-gray-400 transition">
            Daftar Saya
          </Link>
        </div>

        {/* Avatar Dropdown */}
        <div className="relative">
          <button onClick={toggleDropdown} className="focus:outline-none">
            <img
              src="src/assets/Ellipse 395.png"
              alt="Profile"
              className={`w-10 h-10 rounded-full border-2 border-white transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
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
