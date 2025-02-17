"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-gray-300 bg-gray-900 bg-[url('/footer-img.jpg')] bg-cover bg-center px-0 py-[110px] pb-[65px]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#222429] opacity-90 z-0"></div>

      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 z-10">
        {/* Logo Section */}
        <div>
          <Image
            src="/Xubrtech.jpg" // Replace with your logo path
            alt="Xubrtech Logo"
            width={150}
            height={50}
            className="mb-4"
          />
          <p className="text-sm leading-relaxed">
            Desires to obtain pain of itself, because it is pain, but
            occasionally circumstances.
          </p>
          <div className="flex items-center space-x-4 mt-4">
            {["facebook", "twitter", "pinterest", "instagram"].map((icon) => (
              <a
                key={icon}
                href={`https://${icon}.com`}
                className="text-gray-400 hover:text-white transition"
              >
                <i className={`fab fa-${icon} text-lg`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="font-bold text-lg text-white mb-4">Explore</h3>
          <ul className="space-y-2">
            {[
              "About Company",
              "Meet the Team",
              "News & Media",
              "Our Projects",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="hover:text-white transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold text-lg text-white mb-4">Contact</h3>
          <address className="not-italic space-y-2">
            <p>66 Road Broklyn Street, 600 New York, USA</p>
            <p>
              <a
                href="mailto:needhelp@company.com"
                className="text-orange-500 hover:text-white transition"
              >
                needhelp@company.com
              </a>
            </p>
            <p>
              <a
                href="tel:+926668880000"
                className="text-orange-500 hover:text-white transition"
              >
                +92 666 888 0000
              </a>
            </p>
          </address>
        </div>

        {/* Gallery Section */}
        <div>
          <h3 className="font-bold text-lg text-white mb-4">Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            {[
              "gallery1.jpg",
              "gallery2.jpg",
              "gallery3.jpg",
              "gallery4.jpg",
            ].map((image, index) => (
              <Image
                key={index}
                src={`/${image}`} // Replace with your gallery image paths
                alt={`Gallery Image ${index + 1}`}
                width={100}
                height={100}
                className="object-cover rounded-sm"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative border-t border-gray-700 mt-8 pt-4 z-10">
        <p className="text-center text-sm">
          &copy; Copyright 2023 by Company.com
        </p>
      </div>
    </footer>
  );
}
