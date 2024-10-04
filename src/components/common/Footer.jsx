import React from "react";
import clsx from "clsx";
import Logo from "../common/Chill";

const Footer = () => {
  return (
    <div className="bg-gray-input py-8 flex justify-between items-center border-t-[1px]  border-gray-700">
      <div className="flex flex-col items-start py-20 mx-10">
        <Logo src="src/assets/Logo (1).png" className="mt-5 mx-10" />
        <p className="mb-5 text-gray-400 whitespace-nowrap">© 2024 Ongky Permana All Rights Reserved.</p>
      </div>

      <div className="flex-grow mx-20 flex grid-cols-4 gap-10">
        <div>
          <h3 className="font-medium">Genre</h3>
          <ul className="list-none">
            <li><a href="#">Aksi</a>
            </li>
            <li>
              <a href="#" className="whitespace-nowrap">Anak-anak</a>
            </li>
            <li>
              <a href="#">Anime</a>
            </li>
            <li>
              <a href="#">Aksi</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-none p-5">
            <li><a href="#">Drama</a></li>
            <li><a href="#">Fantasi</a></li>
            <li><a href="#">Kejahatan</a></li>
            <li><a href="#">Thriller</a></li>
          </ul>
        </div>
        <div>
          <ul className="list-none p-5">
            <li><a href="#">Komedi</a></li>
            <li><a href="#">Petualangan</a></li>
            <li><a href="#">Perang</a></li>
            <li><a href="#">Dokumenter</a></li>
          </ul>
        </div>
        <div>
          <ul className="list-none p-5">
            <li>
              <a href="#" className="whitespace-nowrap">Sains & Alam</a></li>
            <li><a href="#">Romantis</a></li>
          </ul>
        </div>
        <div className="mx-40">
          <h3 className="font-medium">Bantuan</h3>
          <ul className="list-none p-0">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Kontak Kami</a></li>
            <li><a href="#">Privasi</a></li>
            <li><a href="#">Syarat & Ketentuan</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
