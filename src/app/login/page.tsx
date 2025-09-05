"use client";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 px-4">
      {/* Card */}
      <div className="w-full max-w-sm mx-auto bg-[#25243459] rounded-lg p-6 shadow-lg">
        {/* Logo */}
        <div className="flex justify-center -mt-18">
        <div className="flex items-center justify-center w-28 h-28 shadow-lg bg-[#252434] rounded-full">
        <Image
          src={Logo}
          alt="Site Logo"
          width={100}
          height={100}
          className="rounded-full"
          priority
        />
</div>
        </div>

        {/* Title */}
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold text-white">Welcome Back</h2>
          <p className="text-xs text-gray-400">Login to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 ">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              placeholder="northstar@group.com"
              className="p-2 border rounded w-full text-sm bg-gray-800 text-white border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-xs font-medium text-gray-300 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                placeholder="Enter password"
                className="p-2 border rounded w-full text-sm bg-gray-800 text-white border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#7D7D7D] hover:bg-blue-700 transition text-white py-2 rounded-lg font-medium text-sm"
          >
            Continue with Email
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-700" />
            <span className="text-gray-400 text-xs px-2">OR</span>
            <hr className="flex-grow border-gray-700" />
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 py-2 rounded-lg font-medium text-sm hover:bg-gray-200 transition"
          >
            <FcGoogle size={18} />
            Continue with Google
          </button>
        </form>
      </div>

        {/* Terms */}
        <p className="flex flex-col text-center items-center text-[11px] text-gray-500  mt-4 leading-snug">
          <p>By signing in or creating an account, you agree with our</p>
          <div className="flex text-center justify-center items-center mt-1">
            <span className="text-sm text-[#00A3FF] text-semibold">Terms & Conditions</span> and <span className="text-sm text-[#00A3FF] text-semibold">Privacy Policy</span>         
          </div>
        </p>
    </div>
  );
}
