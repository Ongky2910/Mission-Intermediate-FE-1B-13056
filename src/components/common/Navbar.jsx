import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/src/components/common/Chill";
import { IoMdExit } from "react-icons/io";
import { GoStar } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  // Logika Dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Logika Exit
  const handleExit = () => {
    localStorage.removeItem("userSession");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-gray-input py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Nav Links */}
        <div className="flex items-center space-x-8">
          <Logo
            src="src/assets/Logo (1).png"
            className="mb-5 ml-5 mt-2 pt-5 w-60 h-30"
          />
          <Link
            to="/series"
            className="text-white font-light hover:text-gray-400 transition"
          >
            Series
          </Link>
          <Link
            to="/home"
            className="text-white font-light hover:text-gray-400 transition"
          >
            Film
          </Link>
          <Link
            to="/list"
            className="text-white font-light hover:text-gray-400 transition"
          >
            Daftar Saya
          </Link>
        </div>
        {/* Avatar Dropdown */}
        <div className="relative">
          <button onClick={toggleDropdown} className="focus:outline-none">
            <img
              src="src/assets/Ellipse 395.png"
              alt="Profile"
              className={`w-10 h-10 rounded-full border-2 border-white transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-zinc-900 text-white rounded-lg shadow-lg transition-opacity duration-200 z-50">
              <Link
                to="/profile"
                className="text-white flex items-center px-2 py-2 hover:bg-gray-200"
              >
                <RxAvatar className="mr-2" />
                Profil Saya
              </Link>
              <Link
                to="/change-premium"
                className="text-white flex items-center px-2 py-2 mt-1 hover:bg-gray-200"
              >
                <GoStar className="mr-2" />
               Ubah Premium
              </Link>
              <button
                onClick={handleExit}
                className="w-full flex items-center px-2 py-2 hover:bg-zinc-700"
              >
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
