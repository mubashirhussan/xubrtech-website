"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Rocket, Globe, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function AboutCompany() {
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => (prev === 1 ? -1 : 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-[1200px] mx-auto flex gap-6 items-start justify-between  pt-[55px] pb-40px bg-white">
      {/* Left Side - Image Section */}
      <div className="relative w-1/2 flex items-start self-start">
        <div className="absolute top-0 left-0 w-40 h-full bg-black"></div>

        {/* Image Wrapper with Before Element (Aligned to Right Side Text) */}
        <div className="relative before:content-[''] before:absolute before:right-[-40px] before:-top-8 before:w-[180px] before:h-[166px] before:border-4 before:border-[#ffcc00] before:z-0">
          <Image
            src="/about-company.jpg"
            alt="Company Representative"
            className="relative z-10"
            height={500}
            width={500}
          />
        </div>

        {/* Floating Animated Badge */}
        <motion.div
          animate={{ y: direction * 10 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="absolute bottom-10 z-10 left-[10rem] bg-white p-6 shadow-lg text-center rounded-md"
        >
          <span className="text-3xl font-bold text-[#ffaa17]">25</span>
          <p className="text-gray-500">Years of Excellence</p>
        </motion.div>
      </div>

      {/* Right Side - Content Section */}
      <div
        className="w-1/2 text-left relative pl-[40px]"
        style={{ top: "-40px" }}
      >
        <h4 className="about-heading">About Our Company</h4>
        <h2 className="text-5xl font-semibold text-gray-900 mb-[30px] mt-2">
          Always Deliver More Than Expected
        </h2>
        <p className="text-gray-500 ">
          We specialize in delivering high-quality solutions, exceeding client
          expectations at every step.
        </p>

        <div className="mt-6">
          <div className="space-y-4">
            {/* First Item */}
            <div className="flex items-center transition-all duration-300 ease-in-out">
              <div className="mr-4 flex items-center justify-center bg-[#ffaa17] rounded-full p-4 transition-all duration-300 ease-in-out group hover:bg-[#222429] hover:text-[#ffaa17]">
                <Rocket className="text-2xl transition-all duration-300 ease-in-out" />
              </div>
              <div>
                <h5 className="font-semibold">End-to-End Development</h5>
                <p className="text-gray-500 text-sm">
                  Comprehensive solutions tailored to your needs.
                </p>
              </div>
            </div>

            {/* Second Item */}
            <div className="flex items-center transition-all duration-300 ease-in-out">
              <div className="mr-4 flex items-center justify-center bg-[#ffaa17] rounded-full p-4 transition-all duration-300 ease-in-out group hover:bg-[#222429] hover:text-[#ffaa17]">
                <Globe className="text-2xl transition-all duration-300 ease-in-out" />
              </div>
              <div>
                <h5 className="font-semibold">Software IT Outsourcing</h5>
                <p className="text-gray-500 text-sm">
                  Scalable and efficient IT solutions for businesses worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-6 text-gray-500 space-y-2 mb-6">
          <li className="flex items-center">
            <CheckCircle className="text-[#ffaa17] mr-2" /> Customized software
            solutions for every industry
          </li>
          <li className="flex items-center">
            <CheckCircle className="text-[#ffaa17] mr-2" /> Proven track record
            of delivering excellence
          </li>
        </ul>

        <Link
          href={"#"}
          target={"_self"}
          className="relative inline-block px-[50px] py-[15px] text-[13px] leading-[24px] font-bold tracking-[0.1em] uppercase text-[#222429] bg-[#ffaa17] overflow-hidden transition-all duration-500 ease-in-out before:absolute before:top-[-100%] before:left-0 before:w-full before:h-full before:bg-[#222429] before:transition-all before:duration-500 before:ease-in-out hover:text-white hover:before:top-0"
        >
          <span className="relative z-10 transition-colors duration-300 ease-in-out">
            Discover More
          </span>
        </Link>
      </div>
    </div>
  );
}
