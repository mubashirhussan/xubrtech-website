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
    role: "UI/UX Designer",
    review:
      "Working with this team was an absolute pleasure! Their attention to detail and design aesthetics truly set them apart. Highly recommend their expertise!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    review:
      "Exceptional service and top-notch development skills! They understood our requirements perfectly and delivered beyond expectations.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Emily Clark",
    role: "Digital Marketer",
    review:
      "Their marketing strategies significantly boosted our engagement and sales. The insights and analytics provided were invaluable!",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Michael Brown",
    role: "Project Manager",
    review:
      "An incredibly talented and professional team! They handled our project efficiently and delivered high-quality results on time.",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    name: "Sophia Martinez",
    role: "Content Creator",
    review:
      "The creativity and originality in their work are outstanding! Every piece of content exceeded my expectations. I will definitely work with them again.",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
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
