import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./common/Chill";
import InputField from "./common/Input";
import Button from "./common/Button";
import { FcGoogle } from "react-icons/fc";
import clsx from "clsx";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('src/assets/teathrical.jpeg')",
      }}
    >
      <div className="bg-gray-input  bg-opacity-90 p-10 mt-5 rounded-xl w-full max-w-md"> 
        <Logo src="src/assets/Logo (1).png" className="mb-4" />
        <h2 className="text-2xl font-medium text-center text-white">
          Masuk
        </h2>
        <p className="text-center font-light text-white mb-3 pb-2">
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

          <div className="flex justify-between text-sm text-gray-400 mb-5 items-center">
            <span>
              Belum punya akun?
              <Link to="/register" className="text-white ml-1">
                Daftar
              </Link>
            </span>
            <Link to="/forgot-password" className="text-white">
              Lupa kata sandi?
            </Link>
          </div>

          <Link to="/home">
            <Button text="Masuk" className="bg-gray-600 hover:bg-white-secondary text-white" />
          </Link>
          <p className="text-sm text-center text-gray-400 mb-1 mt-1">Atau</p>

          <Button 
            text="Masuk dengan Google" 
            type="secondary" 
            className="border border-gray-700 hover:bg-orange-700 text-white"
            icon={<FcGoogle />}
            iconPosition="left"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
