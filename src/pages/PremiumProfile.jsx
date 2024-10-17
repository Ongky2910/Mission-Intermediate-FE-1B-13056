import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFileUpload } from "react-icons/fa";
import { colorStyles } from "../components/common/Button"; // Adjust this path as needed
import Button from "../components/common/Button";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Flag from "../components/common/Flag";
import { GoPencil } from "react-icons/go";

const ProfileInput = ({
  label,
  value,
  setValue,
  type = "text",
  color,
  variant,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
    if (!isEditing) {
      document.getElementById(`input-${label}`).focus(); // Fixed backticks
    }
  };

  return (
    <div className="mb-6 relative">
      <label
        className={`absolute left-2 transition-all duration-300 ease-in-out ${
          value ? "text-gray-50 text-sm -left-0 -top-6" : "text-gray-500 top-0"
        }`}
      >
        {label}
      </label>

      <div className="flex items-center border rounded-md shadow-sm">
        <input
          id={`input-${label}`} // Fixed backticks
          type={isEditing ? type : "text"} // Only allow editing in edit mode
          value={value}
          onChange={(e) => setValue(e.target.value)}
          readOnly={!isEditing} // Make input read-only when not editing
          className={`block w-full p-3 rounded-md border border-gray-800 placeholder-transparent ${colorStyles[color]?.[variant]}`} // Fixed backticks
          placeholder=" "
        />
        <div
          className="absolute right-2 cursor-pointer"
          onClick={handleEditToggle}
        >
          <GoPencil
            className={`text-gray-50 hover:text-gray-300 ${
              isEditing ? "text-green-400" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

const ProfileCard = ({ isSubscribed, onSubscribe }) => (
  <div className="p-2 mb-10 text-left bg-neutral-700 rounded-md flex items-start ">
    {isSubscribed ? (
      <>
        <img
          src="src/assets/Warning.png"
          alt="Premium"
          className="w-12 h-12 mr-2 mt-2"
        />
        <div>
          <h4 className="text-xl font-semibold text-green-600">
            Akun Premium Individual ✨
          </h4>
          <p className="text-gray-50">
            Saat ini kamu sedang menggunakan akses akun premium
          </p>
          <p className="text-gray-50">Berlaku hingga 31 Desember 2023</p>
        </div>
      </>
    ) : (
      <>
        <img
          src="src/assets/Warning.png"
          alt="announcement"
          className="w-12 h-12 mr-2 mt-2"
        />
        <div>
          <h4 className="text-xl font-medium text-gray-50 mb-2 text-nowrap md:text-left text-center">
            <span className="block md:hidden">Belum Berlangganan</span>
            <span className="hidden md:block">
              Saat ini anda belum berlangganan
            </span>
          </h4>
          <p className="text-gray-100 font-thin overflow-hidden line-clamp-5 ">
            Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!
          </p>
          <div className="flex justify-end mt-2">
            <button
              className="px-3 py-1 mt-5 bg-neutral-800 text-white rounded-full hover:bg-gray-500"
              onClick={onSubscribe}
            >
              Mulai Berlangganan
            </button>
          </div>
        </div>
      </>
    )}
  </div>
);

const Profile = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("William");
  const [email, setEmail] = useState("william1980@gmail.com");
  const [password, setPassword] = useState("****");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionPackage, setSubscriptionPackage] = useState(""); // Added this state

  const handleSave = () => {
    console.log("Profile data saved:", { username, email, password });
  };

  const handleSubscribe = () => {
    navigate("/subscriptions");
  };

  const myList = [
    {
      id: 50,
      title: "All of us are Dead",
      image: "src/assets/image 214 (1).png",
      isNewEpisode: true,
      isPremium: false,
      isTop10: false,
    },
    {
      id: 51,
      title: "BAYMAX!",
      image: "src/assets/image 231 (2).png",
      isNewEpisode: true,
      isPremium: true,
      isTop10: false,
    },
    {
      id: 52,
      title: "My Hero Academia",
      image: "src/assets/image 223.png",
      isNewEpisode: true,
      isPremium: true,
      isTop10: true,
    },
    {
      id: 53,
      title: "Blue Lock",
      image: "src/assets/image 210 (1).png",
      isNewEpisode: false,
      isPremium: false,
      isTop10: true,
    },
    {
      id: 24,
      title: "Ted Lasso",
      image: "src/assets/Number=23.png",
      isNewEpisode: false,
      isPremium: false,
      isTop10: true,
    },
    {
      id: 25,
      title: "Duty After School",
      image: "src/assets/image 222.png",
      isNewEpisode: true,
      isPremium: false,
      isTop10: false,
    },
  ];

  return (
    <div className="bg-gray-input min-h-screen text-white relative">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side: Profile inputs */}
          <div className="w-full md:w-1/2 md:mr-4 mb-6 md:mb-0">
            <h2 className="text-2xl font-medium text-gray-50 mb-6">
              Profil Saya
            </h2>

            <div className="flex items-center mb-6">
              <img
                src="src/assets/27470334_7309681.jpg"
                alt="Profile"
                className="w-20 h-20 rounded-full mr-3"
              />
              <div>
                <button className="px-4 py-1 border border-blue-700 text-blue-700 rounded-full hover:bg-gray-300">
                  Ubah Foto
                </button>
                <div className="flex items-center mt-1">
                  <FaFileUpload className="mr-1" />
                  <small className="font-light text-gray-400">
                    Maksimal 2MB
                  </small>
                </div>
              </div>
            </div>

            <ProfileInput
              label="Nama Pengguna"
              value={username}
              setValue={setUsername}
              color="other"
              variant="paper"
            />
            <ProfileInput
              label="Email"
              value={email}
              setValue={setEmail}
              color="other"
              variant="paper"
            />
            <ProfileInput
              label="Kata Sandi"
              value={password}
              setValue={setPassword}
              type="password"
              color="other"
              variant="paper"
            />

            <Button
              text="Simpan"
              color="blue"
              variant="default"
              className="w-32"
              onClick={handleSave}
            />
          </div>

          {/* Right side: Subscription status */}
          <div className="mt-4 md:ml-20 md:mt-0 md:w-1/2 md:mb-20">
            <ProfileCard
              isSubscribed={isSubscribed}
              onSubscribe={handleSubscribe}
            />
          </div>
        </div>

        {/* Daftar Saya Section */}
        <div className="mt-8 relative">
          <div className="flex items-center md:mt-20 justify-between mb-4">
            <h3 className="text-xl font-medium text-white">Daftar Saya</h3>
            <a href="#" className="text-gray-50 hover:to-blue-700">
              Lihat Semua
            </a>
          </div>

          {/* Grid for Movie/Series List */}
          <div
            className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-20 overflow-x-auto no-scrollbar"
            id="movieGrid"
          >
            {myList.map((item, index) => {
              return (
                <div key={index} className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-60 object-cover rounded-md hover:scale-105 transition-transform duration-300"
                  />
                  {item.isNewEpisode && (
                    <Flag
                      text="New Episode!"
                      className="absolute top-2 left-2"
                    />
                  )}
                  {item.isPremium && (
                    <Flag text="Premium!" className="absolute top-2 right-2" />
                  )}
                  {item.isTop10 && (
                    <Flag text="Top 10!" className="absolute bottom-2 left-2" />
                  )}
                  <p className="text-sm text-center text-white mt-2">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
