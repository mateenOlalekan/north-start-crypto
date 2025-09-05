"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "../../../../public/logo.svg";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Investor", href: "/investor" },
  { name: "Product", href: "/product" },
  { name: "RoadMap", href: "/roadmap" },
  { name: "About", href: "/about" },
  { name: "Support", href: "/support" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-10 py-2 md:py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Site Logo"
            priority
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-white text-sm lg:text-base font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative pb-1 transition-colors duration-300
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300
                hover:after:w-full hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-3 lg:space-x-4 text-sm lg:text-base">
          <Link
            href="/login"
            className="px-3 py-1.5 lg:px-4 lg:py-2 rounded bg-[#00A3FF] text-white hover:opacity-80 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-3 py-1.5 lg:px-4 lg:py-2 rounded bg-[#202E48] text-white hover:opacity-80 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation - Sliding Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 sm:w-60 bg-[#202E48] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col items-start space-y-6 px-6 text-white text-base font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative pb-1 transition-colors duration-300
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300
                hover:after:w-full hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex flex-col gap-4 px-6 mt-8">
          <Link
            href="/login"
            className="px-4 py-2 rounded bg-[#00A3FF] text-white text-center hover:opacity-80 transition"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 rounded bg-[#202E48] border border-white text-white text-center hover:bg-white hover:text-[#202E48] transition"
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
