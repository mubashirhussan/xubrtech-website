"use client";
import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Sarah Albert",
    role: "Designer",
    review:
      "Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Doe",
    role: "Developer",
    review:
      "Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Emily Clark",
    role: "Marketer",
    review:
      "Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    name: "Emily Clark",
    role: "Marketer",
    review:
      "Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    name: "Emily Clark",
    role: "Marketer",
    review:
      "Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];

function Testimonials() {
  return (
    <section className="py-8 sm:py-10 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="section-title">OUR FEEDBACKS</h3>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mx-auto max-w-[500px] mb-10">
          What They’re Talking About Company
        </h2>

        <Swiper
          loop={true}
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1 },
            575: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="relative p-6 bg-white rounded-lg shadow-lg text-left">
                <div className="flex space-x-1 text-[#ffaa17]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#ffaa17" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  {testimonial.review}
                </p>

                <div className="flex items-center mt-6 space-x-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-white shadow-md"
                  />
                  <div>
                    <h4 className="text-base font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs uppercase font-semibold text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
