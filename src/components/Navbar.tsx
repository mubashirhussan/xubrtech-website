"use client";

import { useState, useEffect } from "react";
import { Mail, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-[100] px-6 sm:px-10 py-4 transition-all duration-300 ${
          isScrolled ? "shadow-lg bg-white/90 backdrop-blur-md" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-extrabold text-3xl tracking-wide">
              <span className="text-[#ffaa17] uppercase">X</span>ubr
              <span className="">tech</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {["Home", "About", "Services", "Blogs", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="text-gray-600 hover:text-[#ffaa17] transition"
              >
                {item}
              </Link>
            ))}

            <Link
              href={"/contact"}
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
      </nav>

      {/* Push Content Down (Fixes Overlap Issue) */}
      <div className="pt-[72px]"></div>

      {/* Mobile Menu (with transparent backdrop) */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-md z-[999] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 z-[1001] h-full w-[300px] bg-[#222429] text-white flex flex-col py-8 space-y-4 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo & Close Button */}
        <div className="px-6 flex justify-between items-start">
          <Image
            src="/Xubrtech.jpg"
            alt="Logo"
            className="h-12 w-auto mb-6"
            width={48}
            height={48}
          />
          <button
            className="p-2 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="px-6 space-y-4">
          {["Home", "About", "Services", "Blogs", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="flex text-lg font-medium hover:text-[#ffaa17] transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-auto px-6 space-y-4">
          {/* Phone */}
          <div className="flex items-center space-x-3">
            <Phone className="w-6 h-6 text-[#ffaa17]" />
            <div>
              <p className="text-white">CALL NOW</p>
              <a href="tel:+92880098670" className="text-[#ffaa17] font-medium">
                +92 (316) - 0140154
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-[#ffaa17]" />
            <div>
              <p className="text-white">SEND EMAIL</p>
              <a
                href="mailto:xubrtech@gmail.com"
                className="text-[#ffaa17] font-medium"
              >
                xubrtech@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
