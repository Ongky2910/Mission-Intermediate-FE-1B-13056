import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Nav Links */}
        <div className="flex space-x-6">
          <Link
            to="/series"
            className="text-white hover:text-gray-400 transition"
          >
            Series
          </Link>
          <Link
            to="/film"
            className="text-white hover:text-gray-400 transition"
          >
            Film
          </Link>
          <Link
            to="/list"
            className="text-white hover:text-gray-400 transition"
          >
            Daftar Saya
          </Link>
        </div>
        <div>
          <Link to="/profile" className="ml-auto">
            <img
              src="/src/assets/Logo (1).png"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
