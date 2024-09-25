import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./common/Chill";
import InputField from "./common/Input";
import Button from "./common/Button";
import clsx from "clsx";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      <div className=" bg-gray-800 bg-opacity-80 p-10 mt-5 rounded-xl w-full max-w-md">
        <Logo src="src/assets/Logo (1).png" className="mb-4" />
        <h2 className="text-2xl font-bold text-center text-white">
          Masuk
        </h2>
        <p className="text-center text-white mb-1 pb-2">
          Selamat datang kembali!
        </p>

        <form>
          <InputField
            id="username"
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Masukkan username"
            className={clsx(username === "" && "border-red-500")}
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
            className={clsx(password === "" && "border-red-500")}
          />
          <div className="flex justify-between text-sm text-gray-300 mb-4 items-center">
            <span>
              Belum punya akun?
              <Link to="/register" className="text-white">
                Daftar
              </Link>
            </span>
            <Link to="/forgot-password" className="text-white">
              Lupa kata sandi?
            </Link>
          </div>

          <Link to="/home">
            <Button text-white py-2 mt-4 rounded-3xl text="Masuk" />
          </Link>
          <p className="text-sm text-center text-gray-500 mb-1 mt-1">Atau</p>
          <Button text="Masuk dengan Google" type="secondary" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
