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
    <section className="testimonial-section max-w-[1200px] mx-auto">
      <h3 className="section-title">OUR FEEDBACKS</h3>
      <h2 className="section-heading mx-auto">
        What They’re Talking About Company
      </h2>

      <Swiper
        loop={true}
        spaceBetween={30}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <div className="testimonial-card">
                <div className="stars flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-500"
                      fill="#ffaa17"
                    />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.review}</p>
              </div>

              <div className="profile">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white shadow-md"
                />
                <div className="profile-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
