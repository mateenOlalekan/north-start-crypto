"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/Login.svg";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email });
  };

  return (
    <div className="flex justify-center items-center min-h-screen  px-4">
      <div className="w-full max-w-sm mx-auto rounded-lg p-6 shadow-lg">
        {/* Logo */}
        <div className="flex justify-center -mt-12">
          <div className="rounded-full bg-gray-800 shadow-lg w-20 h-20">
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
          <p className="text-xs text-gray-400">Login to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Email / Username */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-300 mb-1"
            >
              Email or Username
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              required
              placeholder="northstar@group.com"
              className="p-2 border rounded w-full text-sm bg-gray-800 text-white border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#00A3FF] hover:bg-blue-700 transition text-white py-2 rounded-lg font-medium text-sm"
          >
            Continue
          </button>
        </form>

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

        {/* Terms */}
        <p className="flex flex-col text-center items-center text-[11px] text-gray-500  mt-4 leading-snug">
          <p>By signing in or creating an account, you agree with our</p>
          <div className="flex text-center justify-center items-center mt-1">
            <span className="text-sm text-[#00A3FF] text-semibold">Terms & Conditions</span> and <span className="text-sm text-[#00A3FF] text-semibold">Privacy Policy</span>         
          </div>
        </p>
      </div>
    </div>
  );
}
