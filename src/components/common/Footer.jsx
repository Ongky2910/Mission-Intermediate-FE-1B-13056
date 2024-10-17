import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Logo from "../common/Chill";

const Footer = () => {
  const [showGenres, setShowGenres] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleGenres = () => setShowGenres(prev => !prev);
  const toggleHelp = () => setShowHelp(prev => !prev);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-gray-input py-8 flex flex-col md:flex-row justify-between mt-10 items-start border-t-[1px] border-gray-700">
      <div className="flex flex-col items-start mx-5">
        <Logo src="src/assets/Logo (1).png" className="mt-5 mb-5" width="full" height="auto" />
        <p className="mb-5 text-gray-400 whitespace-nowrap">© 2024 Ongky Permana All Rights Reserved.</p>
      </div>

      <div className="flex-grow mx-10 md:mx-20 flex flex-col md:flex-row gap-10">
        {/* Genre Section dgn mobile dropdown */}
        <div className="flex flex-col">
          <h3
            className="font-medium cursor-pointer mt-3 mb-3 text-white "
            onClick={isMobile ? toggleGenres : undefined}
          >
            Genre {isMobile ? (showGenres ? '▼' : '▲') : ''}
          </h3>
          {(isMobile ? showGenres : true) && (
            <div className="grid grid-cols-4 whitespace-nowrap">
            <ul className="list-none w-1/4">
              <li><a href="#">Aksi</a></li>
              <li><a href="#" cla>Anak-anak</a></li>
              <li><a href="#">Anime</a></li>
              <li><a href="#">Britania</a></li>
              </ul>
              <ul className="list-none w-1/4">
              <li><a href="#">Drama</a></li>
              <li><a href="#">Fantasi Ilmiah</a></li>
              <li><a href="#">Kejahatan</a></li>
              <li><a href="#">KDrama</a></li>
              </ul>
               <ul className="list-none w-1/4 ml-5">
               <li><a href="#">Komedi</a></li>
              <li><a href="#">Petualangan</a></li>
              <li><a href="#">Perang</a></li>   
              <li><a href="#">Romantis</a></li>
              </ul>
              <ul className="list-none w-1/2 ml-7">
              <li><a href="#">Sains & Alam</a></li>
              <li><a href="#">Thriller</a></li>
              </ul>
            </div>
          )}
        </div>

        {/* Bantuan Mobile Section */}
        <div className="flex flex-col mt-2 md:ml-20 md:mt-2">
          <h3
            className="font-medium cursor-pointer mb-3 text-white"
            onClick={isMobile ? toggleHelp : undefined}
          >
            Bantuan {isMobile ? (showHelp ? '▼' : '▲') : ''}
          </h3>
          {(isMobile ? showHelp : true) && (
            <ul className="list-none whitespace-nowrap">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Kontak Kami</a></li>
              <li><a href="#">Privasi</a></li>
              <li><a href="#">Syarat & Ketentuan</a></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
