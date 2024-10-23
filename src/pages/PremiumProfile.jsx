import React, { useState, useEffect } from "react"; // Mengimpor React dan hooks useState dan useEffect
import { useNavigate } from "react-router-dom"; // Mengimpor hook useNavigate untuk navigasi
import { FaFileUpload } from "react-icons/fa"; // Mengimpor ikon untuk upload file
import { colorStyles } from "../components/common/Button"; // Mengimpor gaya warna dari komponen Button
import Button from "../components/common/Button"; // Mengimpor komponen Button
import Navbar from "../components/common/Navbar"; // Mengimpor komponen Navbar
import Footer from "../components/common/Footer"; // Mengimpor komponen Footer
import { useSubscription } from '../components/SubscriptionContext'; // Mengimpor konteks langganan
import { GoPencil } from "react-icons/go"; // Mengimpor ikon pencil

// Komponen untuk input profil
const ProfileInput = ({ label, value, setValue, type = "text", color, variant }) => {
  return (
    <div className="mb-6 relative">
      <label className={`absolute left-2 transition-all duration-300 ease-in-out ${value ? "text-gray-50 text-sm -left-0 -top-6" : "text-gray-500 top-0"}`}>
        {label}
      </label>
      <div className="flex items-center border rounded-md shadow-sm">
        <input
          id={`input-${label}`}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`block w-full p-3 rounded-md border border-gray-800 placeholder-transparent ${colorStyles[color]?.[variant]}`}
          placeholder=" "
        />
        <div className="absolute right-2 cursor-pointer">
          <GoPencil className="text-gray-50 hover:text-gray-300" />
        </div>
      </div>
    </div>
  );
};

// Daftar opsi avatar
const avatarOptions = [
  "src/assets/27470334_7309681.jpg",
  "src/assets/avatar2.jpg",
  "src/assets/avatar3.jpg",
  "src/assets/avatar4.jpg",
];

// Komponen untuk menampilkan informasi langganan
const ProfileCard = ({ isSubscribed, onSubscribe, onCancel, packageType }) => (
  <div className="p-2 mb-10 text-left bg-neutral-700 rounded-md flex items-start">
    {isSubscribed ? (
      <>
        <div className="bg-gradient-blue rounded-xl p-6 text-left shadow-lg w-72 mx-auto md:w-30 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl ">
          <h3 className="text-lg text-blue-700 bg-gray-400 rounded-3xl py-1 w-1/2 md:w-2/3 text-center px-4 mb-4">
            Aktif
          </h3>
          <h4 className="text-xl font-semibold mb-3 text-nowrap">Akun Premium {packageType} ✨</h4>
          <p className="text-gray-50">Saat ini kamu sedang menggunakan akses akun premium</p>
          <p className="text-gray-400 text-nowrap">Berlaku hingga 31 Desember 2024</p>
        </div>
      </>
    ) : (
      <>
        <img src="src/assets/Warning.png" alt="announcement" className="w-12 h-12 mr-2 mt-2" />
        <div>
          <h4 className="text-xl font-medium text-gray-50 mb-2">Belum Berlangganan</h4>
          <p className="text-gray-100 font-thin overflow-hidden line-clamp-5">
            Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!
          </p>
          <div className="flex justify-end mt-2">
            <button className="px-3 py-1 mt-5 bg-neutral-800 text-white rounded-full hover:bg-gray-500" onClick={onSubscribe}>
              Mulai Berlangganan
            </button>
          </div>
        </div>
      </>
    )}
  </div>
);

// Komponen utama Profil
const Profile = () => {
  const navigate = useNavigate(); // Inisialisasi navigasi
  const { handleSubscriptionUpdate, handleCancelSubscription } = useSubscription(); // Mengambil fungsi dari konteks langganan
  
  // State management
  const [avatar, setAvatar] = useState("src/assets/27470334_7309681.jpg"); // State untuk avatar
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk mengontrol modal
  const [username, setUsername] = useState(""); // State untuk nama pengguna
  const [email, setEmail] = useState(""); // State untuk email
  const [password, setPassword] = useState(""); // State untuk kata sandi
  const [packageType, setPackageType] = useState(""); // State untuk jenis paket
  const [isSubscribed, setIsSubscribed] = useState(false); // State untuk status langganan
  const [savedAccounts, setSavedAccounts] = useState([]); // State untuk akun yang disimpan
  const [selectedAccount, setSelectedAccount] = useState(null); // State untuk akun yang dipilih
  const [loading, setLoading] = useState(false); // State untuk status loading
  const [successMessage, setSuccessMessage] = useState(""); // State untuk pesan sukses
  const [showPassword, setShowPassword] = useState(false); // State untuk menampilkan kata sandi
  
  // Memuat data dari local storage
  useEffect(() => {
    const accounts = JSON.parse(localStorage.getItem("savedAccounts")) || [];
    setSavedAccounts(accounts);
    if (accounts.length > 0) {
      const selectedAcc = accounts.find(account => account.username === selectedAccount?.username);
      if (selectedAcc) {
        setAvatar(selectedAcc.avatar || ""); // Memuat avatar jika ada
      }
    }
  }, [selectedAccount]);

  // Fungsi untuk validasi email
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Pola regex untuk email
    return emailPattern.test(email); // Mengembalikan true jika valid
  };

  // Fungsi untuk menyimpan profil
  const saveProfile = () => {
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address."); // Peringatan jika email tidak valid
      return;
    }

    setLoading(true);
    setSuccessMessage("");

    setTimeout(() => {
      const newAccount = { username, email, packageType, isSubscribed, avatar }; // Membuat akun baru
      const updatedAccounts = savedAccounts.map(account => account.username === username)
        ? savedAccounts.map(account =>
            account.username === selectedAccount.username ? newAccount : account
          )
        : [...savedAccounts, newAccount]; // Memperbarui daftar akun

      setSavedAccounts(updatedAccounts);
      localStorage.setItem("savedAccounts", JSON.stringify(updatedAccounts)); // Menyimpan akun ke local storage
      setLoading(false);
      setSuccessMessage("Profile saved successfully!"); // Menampilkan pesan sukses
    }, 1000); // Mensimulasikan delay
  };

  // Fungsi untuk menangani langganan
  const handleSubscribe = () => {
    const selectedPackage = "Individual"; // Ganti dengan logika aktual
    handleSubscriptionUpdate(true, selectedPackage);
    setIsSubscribed(true);

    const updatedAccounts = savedAccounts.map(account =>
      account.username === selectedAccount.username ? { ...account, isSubscribed: true, packageType: selectedPackage } : account
    );

    setSavedAccounts(updatedAccounts);
    localStorage.setItem("savedAccounts", JSON.stringify(updatedAccounts));
    setPackageType(selectedPackage);
    navigate("/subscriptions"); // Navigasi ke halaman langganan
  };

  // Fungsi untuk membatalkan langganan
  const handleCancel = () => {
    handleCancelSubscription();
    setIsSubscribed(false);

    const updatedAccounts = savedAccounts.map(account =>
      account.username === selectedAccount.username ? { ...account, isSubscribed: false, packageType: "" } : account
    );

    setSavedAccounts(updatedAccounts);
    localStorage.setItem("savedAccounts", JSON.stringify(updatedAccounts));
  };

  // Fungsi untuk beralih akun
  const switchAccount = (account) => {
    setSelectedAccount(account);
    setUsername(account.username);
    setEmail(account.email);
    setPassword(""); // Reset kata sandi saat beralih
    setPackageType(account.packageType);
    setIsSubscribed(account.isSubscribed);
    setAvatar(account.avatar || "src/assets/27470334_7309681.jpg");
  };

  // Fungsi untuk menghapus akun
  const deleteAccount = (accountToDelete) => {
    const updatedAccounts = savedAccounts.filter(account => account.username !== accountToDelete.username);
    setSavedAccounts(updatedAccounts);
    localStorage.setItem("savedAccounts", JSON.stringify(updatedAccounts));
    
    if (selectedAccount && selectedAccount.username === accountToDelete.username) {
      setSelectedAccount(null);
      setUsername("");
      setEmail("");
      setPassword("");
      setPackageType("");
      setIsSubscribed(false);
    }
  };

  return (
    <div className="bg-gray-input min-h-screen text-white relative">
      <Navbar /> {/* Menampilkan Navbar */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 md:mr-4 mb-6 md:mb-0">
            <h2 className="text-2xl font-medium text-gray-50 mb-6">Profil Saya</h2>
            <div className="flex items-center mb-6">
              <img src={avatar} alt="Profile" className="w-20 h-20 rounded-full mr-3" />
              <div>
                <button className="px-4 py-1 border border-blue-700 text-blue-700 rounded-full hover:bg-gray-300" onClick={() => setIsModalOpen(true)}>
                  Ubah Avatar
                </button>
                <div className="flex items-center mt-1">
                  <FaFileUpload className="mr-1" />
                  <small className="font-light text-gray-400">Maksimal 2MB</small>
                </div>
              </div>
            </div>

            <ProfileInput label="Nama Pengguna" value={username} setValue={setUsername} color="other" variant="paper" />
            <ProfileInput label="Email" value={email} setValue={setEmail} color="other" variant="paper" />
            <div className="mb-5">
              <ProfileInput label="Kata Sandi" value={password} setValue={setPassword} type={showPassword ? "text" : "password"} color="other" variant="paper" />
              <button onClick={() => setShowPassword(!showPassword)} className="ml-2 text-blue-500 hover:underline">
                {showPassword ? "Hide" : "Show"} Password
              </button>
            </div>
           
            <Button text="Simpan" color="blue" variant="default" className="w-32" onClick={saveProfile} />
            {loading && <p>Saving...</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
          </div>
          <div className="mt-4 md:ml-20 md:mt-0 md:w-1/2 md:mb-20">
            <ProfileCard isSubscribed={isSubscribed} onSubscribe={handleSubscribe} onCancel={handleCancel} packageType={packageType} />
          </div>
        </div>
        
        {/* Modal Pemilihan Avatar */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-neutral-800 rounded-lg p-4">
              <h3 className="text-lg font-medium text-white mb-4">Pilih Avatar</h3>
              <div className="flex space-x-4">
                {avatarOptions.map((avatarUrl, index) => (
                  <img
                    key={index}
                    src={avatarUrl}
                    alt={`Avatar ${index + 1}`}
                    className="w-16 h-16 cursor-pointer rounded-full hover:border-2 hover:border-blue-500"
                    onClick={() => {
                      setAvatar(avatarUrl);
                      setIsModalOpen(false); // Menutup modal
                    }}
                  />
                ))}
              </div>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setIsModalOpen(false)}>
                Tutup
              </button>
            </div>
          </div>
        )}

        {/* Bagian untuk Beralih Akun */}
        <div className="mt-8">
          <h3 className="text-xl font-medium text-white mb-4">Akun Tersimpan</h3>
          <div className="flex flex-col space-y-2">
            {savedAccounts.map((account, index) => (
              <div key={index} className="bg-neutral-700 p-4 rounded-md flex justify-between items-center">
                <div>
                  <p className="text-white font-semibold">{account.username}</p>
                  <p className="text-gray-400">Paket: {account.packageType || "Belum Berlangganan"}</p>
                  <p className="text-gray-400">Status: {account.isSubscribed ? "Berlangganan" : "Belum Berlangganan"}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="text-green-500" onClick={() => switchAccount(account)}>Edit</button>
                  <button className="text-blue-500" onClick={() => switchAccount(account)}>Pilih</button>
                  <button className="text-red-500" onClick={() => deleteAccount(account)}>Hapus</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer /> {/* Menampilkan Footer */}
    </div>
  );
};

export default Profile; 
