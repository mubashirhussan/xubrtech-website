/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { HeroSectionProps } from "@/types";
import Link from "next/link";
import { StrapiImage } from "./StrapiImage";
import { Play } from "lucide-react";

const HeroSection = ({
  images,
  heading,
  subheading,
  cta,
}: Readonly<HeroSectionProps & { curveImage: string }>) => {
  return (
    <section className="hero-section relative w-full h-screen flex flex-col items-center justify-center text-center px-4 md:px-10 lg:px-20">
      {/* Background Image Carousel */}
      {images && images.length > 0 && (
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="absolute top-0 left-0 w-full h-full -z-10"
        >
          {images.map((src: any, index: number) => (
            <SwiperSlide key={index} className="swiper-slide">
              <StrapiImage
                src={src.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Centered Content */}
      <div className="hero-content relative text-white max-w-4xl mx-auto">
        <p className="inline-block text-sm md:text-base lg:text-lg bg-white/10 px-6 py-2 mb-5 font-medium uppercase tracking-wide">
          {subheading || "Solutions for your businesses"}
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mt-2 leading-tight">
          {heading}
        </h1>

        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href={cta?.href || "#"}
            target={cta?.isExternal ? "_blank" : "_self"}
            className="relative inline-block px-[50px] py-[15px] text-[13px] leading-[24px] font-bold tracking-[0.1em] uppercase text-[#222429] bg-[#ffaa17] overflow-hidden transition-all duration-500 ease-in-out before:absolute before:top-[-100%] before:left-0 before:w-full before:h-full before:bg-[#222429] before:transition-all before:duration-500 before:ease-in-out hover:text-white hover:before:top-0"
          >
            <span className="relative z-10 transition-colors duration-300 ease-in-out">
              {cta?.text}
            </span>
          </Link>

          <button className="flex items-center group">
            <span className="h-[54px] w-[54px] bg-[#222429] flex items-center justify-center mr-[10px] rounded-full transition duration-300 group-hover:bg-white ">
              <Play
                fill="white"
                size={24}
                color="white"
                className="transition duration-300 group-hover:fill-black group-hover:scale-110"
              />
            </span>
            <span className="transition duration-300 ">Watch Video</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
