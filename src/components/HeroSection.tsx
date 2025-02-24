/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";
// import { StrapiImage } from "./StrapiImage";
import { Play } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  // Define JSON data inside the component
  const heroData = {
    images: [
      {
        url: "/hero1.jpg",
      },
      {
        url: "/hero2.jpg",
      },
      // {
      //   url: "https://example.com/image3.jpg",
      // },
    ],
    subheading: "Solutions for your businesses",
    heading: "Innovative Tech Solutions",
    cta: {
      text: "Explore More",
      href: "#",
      isExternal: false,
    },
    videoButton: {
      text: "Watch Video",
      icon: "Play",
    },
  };

  return (
    <section className="hero-section relative w-full h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Background Image Carousel */}
      {heroData.images && heroData.images.length > 0 && (
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="absolute top-0 left-0 w-full h-full -z-10"
        >
          {heroData.images.map((image, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <Image
                src={image.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* Centered Content */}
      <div className="hero-content relative text-white max-w-3xl lg:max-w-4xl mx-auto">
        <p className="inline-block text-xs sm:text-sm md:text-base lg:text-lg bg-white/20 px-4 sm:px-6 py-2 mb-4 sm:mb-5 font-medium uppercase tracking-wide">
          {heroData.subheading}
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mt-2 leading-tight">
          {heroData.heading}
        </h1>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
          <Link
            href={"#"}
            target={"_self"}
            className="relative inline-block px-[50px] py-[15px] text-[13px] leading-[24px] font-bold tracking-[0.1em] uppercase text-[#222429] bg-[#ffaa17] overflow-hidden transition-all duration-500 ease-in-out before:absolute before:top-[-100%] before:left-0 before:w-full before:h-full before:bg-[#222429] before:transition-all before:duration-500 before:ease-in-out hover:text-white hover:before:top-0"
          >
            <span className="relative z-10 transition-colors duration-300 ease-in-out">
              {heroData.cta.text}
            </span>
          </Link>
          {/* <Link
            href={heroData.cta.href}
            target={heroData.cta.isExternal ? "_blank" : "_self"}
            className="relative inline-block px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold tracking-wide uppercase text-[#222429] bg-[#ffaa17] rounded-md shadow-lg transition-all duration-500 ease-in-out hover:bg-[#e69b0d] hover:text-white"
          >
            {heroData.cta.text}
          </Link> */}

          <button className="flex items-center group text-sm sm:text-base">
            <span className="h-12 w-12 sm:h-14 sm:w-14 bg-[#222429] flex items-center justify-center mr-3 sm:mr-4 rounded-full transition duration-300 group-hover:bg-white">
              <Play
                fill="white"
                size={24}
                className="transition duration-300 group-hover:fill-black group-hover:scale-110"
              />
            </span>

            <span className="transition duration-300">
              {heroData.videoButton.text}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
