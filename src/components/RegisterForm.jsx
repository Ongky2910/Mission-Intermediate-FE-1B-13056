import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./common/Input";
import Logo from "./common/Chill";
import Button from "./common/Button";

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
        backgroundImage: "url('src/assets/teathrical.jpeg')",
      }}
    >
      <div className=" bg-gray-800 bg-opacity-85 p-8 mt-5 rounded-xl w-full max-w-md">
        <Logo src="src/assets/Logo (1).png" className="mb-4" />
        <h2 className="text-2xl font-bold text-center text-white mb-1">
          Daftar
        </h2>
        <p className="text-center text-white mb-5 pb-5">Selamat datang!</p>

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

          <div className="flex text-sm text-gray-300 mb-4">
            Sudah punya akun?
            <Link to="/login" className="text-white font-bold ">
              {" "}
              Masuk
            </Link>
          </div>

          <Button text-white py-2 mt-4 rounded-3xl text="Daftar" />
          <p className="text-sm text-center text-gray-500 mb-1 mt-1">Atau</p>
          <Button text="Daftar dengan Google" type="secondary" />
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
