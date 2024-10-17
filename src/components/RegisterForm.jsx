import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./common/Input";
import Logo from "./common/Chill";
import Button from "./common/Button";
import { FcGoogle } from "react-icons/fc";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center flex items-center justify-center bg-opacity-80"
      style={{
        backgroundImage: "url('src/assets/auditorium-2584269_1280.jpg')",
      }}
    >
      <div className=" bg-gray-input bg-opacity-90 p-8 rounded-xl w-full max-w-md">
      <div className="flex justify-center mb-2">
          <Logo src="src/assets/Logo (1).png" className="mb-4 " />
        </div>
        <h2 className="text-2xl font-semibold text-center text-white mb-1">
          Daftar
        </h2>
        <p className="text-center text-white font-light mb-2 pb-5">Selamat datang!</p>

        <form>
          <InputField
            id="username"
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Masukkan username"
          />

          <InputField
            id="password"
            label="Kata Sandi"
            type={isPasswordVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan kata sandi"
            showToggle={true}
            toggleVisibility={togglePasswordVisibility}
          />

          <InputField
            id="confirmPassword"
            label="Konfirmasi Kata Sandi"
            type={isPasswordVisible ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Konfirmasi kata sandi"
            showToggle={true}
            toggleVisibility={togglePasswordVisibility}
          />

          <div className="flex text-sm text-gray-400 mb-5">
            Sudah punya akun?
            <Link to="/login" className="text-white ml-1">
              {" "}
              Masuk
            </Link>
          </div>

          <Button text="Daftar" className="bg-gray-600 hover:bg-white-secondary text-white" />
          <p className="text-sm text-center text-gray-400 mb-1 mt-1">Atau</p>
          <Button text="Daftar dengan Google" icon={<FcGoogle />} className="border border-gray-700 hover:bg-orange-700 text-white" />
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
