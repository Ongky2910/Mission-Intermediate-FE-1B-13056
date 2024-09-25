import React from "react";
import clsx from "clsx";
import Button from "../common/Button";
import logoIcon from "/src/assets/more.png";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-[500px] relative "
      style={{
        backgroundImage: "url('src/assets/Rectangle 9.png')",
      }}
    >
      <div className="absolute inset-0 bg- black bg-opacity-50 flex flex-col justify-center p-10">
        <h1 className="text-4xl font-bold mb-2">Duty After School</h1>
        <p className="mb-4 font-light">
          Sebuah benda tak dikenal mengambil alih dunia. Dalam
          keputusasaan,Departemen Pertahanan mulai merekrut lebih banyak
          tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi
          pejuang garis depan dalam perang.
        </p>
      </div>
      <div className="w-1/2 absolute bottom-10 left-10 flex space-x-4">
        <Button text="Mulai" variant="mulai" className="" />
        <Button
          text="Selengkapnya"
          variant="more"
          className="flex items-center space-x-2 p-2"
          icon={<img src={logoIcon} alt="Logo" className="w-5 h-5 " />}
        />
        <span className="border-2 border-gray-500 rounded-full px-2 text-s flex items-center justify-center ml-2 w-14 h-10 bg-transparent font-light">18+</span>
      </div>
    </div>
  );
};

export default Hero;
