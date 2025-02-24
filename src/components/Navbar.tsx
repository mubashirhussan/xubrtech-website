"use client";
import { useState } from "react";
import { Mail, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 sm:px-10 py-4 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-extrabold text-3xl tracking-wide ">
            <span className="text-[#ffaa17] uppercase">X</span>ubr
            <span className="">tech</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {["Home", "About", "Services", "News", "Contact"].map((item) => (
            <a
              key={item}
              href={`/`}
              className="text-gray-600 hover:text-[#ffaa17] transition"
            >
              {item}
            </a>
          ))}

          <Link
            href={"/"}
            className="relative inline-block ms-[30px] py-[10px] px-[40px] text-[11px] leading-[24px] font-bold tracking-[0.1em] uppercase text-[#222429] bg-[#ffaa17] overflow-hidden transition-all duration-500 ease-in-out before:absolute before:top-[-100%] before:left-0 before:w-full before:h-full before:bg-[#222429] before:transition-all before:duration-500 before:ease-in-out hover:text-white hover:before:top-0"
          >
            <span className="relative z-10 transition-colors duration-300 ease-in-out">
              GET SOLUTION
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Always in DOM for Smooth Transition */}
      <div
        className={`bg-[#222429] text-white fixed top-0 left-0 z-40 h-full w-[300px] flex flex-col py-8 space-y-4 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 p-2 text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>

        {/* Logo */}
        <div className="px-6">
          <Image
            src="/Xubrtech.jpg"
            alt="Logo"
            className="h-12 w-auto mb-6"
            width={48}
            height={48}
          />
        </div>

        {/* Navigation Links */}
        <div className="px-6 space-y-4">
          {["Home", "About", "Services", "News", "Contact"].map((item) => (
            <a
              key={item}
              href={`/`}
              className="flex text-lg font-medium hover:text-[#ffaa17] transition"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="mt-auto px-6 space-y-4">
          {/* Phone Section */}
          <div className="flex items-center space-x-3">
            {/* Icon */}
            <div>
              <Phone className="w-6 h-6 text-[#ffaa17]" />
            </div>
            {/* Text */}
            <div>
              <p className="text-white">CALL NOW</p>
              <a href="tel:+92880098670" className="text-[#ffaa17] font-medium">
                +92 (8800) - 98670
              </a>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex items-center space-x-3">
            {/* Icon */}
            <div>
              <Mail className="w-6 h-6 text-[#ffaa17]" />
            </div>
            {/* Text */}
            <div>
              <p className="text-white">SEND EMAIL</p>
              <a
                href="mailto:help@company.com"
                className="text-[#ffaa17] font-medium"
              >
                help@company.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
