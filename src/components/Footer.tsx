"use client";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  CircleParking,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Footer data inside component
const footerData = {
  logo: "/Xubrtech.jpg",
  description:
    "Desires to obtain pain of itself, because it is pain, but occasionally circumstances.",
  socialLinks: [
    { name: "facebook", url: "https://facebook.com" },
    { name: "twitter", url: "https://twitter.com" },
    { name: "pinterest", url: "https://pinterest.com" },
    { name: "instagram", url: "https://instagram.com" },
  ],
  exploreLinks: [
    { name: "About Company", url: "/about" },
    { name: "Meet the Team", url: "/meet-the-team" },
    { name: "News & Media", url: "/blogs" },
    { name: "Our Projects", url: "/our-projects" },
    { name: "Contact", url: "/contact" },
  ],
  contact: {
    address:
      "College Road, Sector C-1 Block C 2 Phase 1 Johar Town, Lahore, 54600",
    email: "Xubrtech.com",
    phone: "+92 316 0140154",
  },
  galleryImages: ["/news-1.jpg", "/news-2.jpg", "/news-3.jpg", "/news-1.jpg"],
  copyright: "© Copyright 2023 by Xubrtech.com",
};

// Social icons mapping
const socialIcons = {
  facebook: (
    <Facebook className="w-5 h-5 text-gray-400 hover:text-white transition" />
  ),
  twitter: (
    <Twitter className="w-5 h-5 text-gray-400 hover:text-white transition" />
  ),
  pinterest: (
    <CircleParking className="w-5 h-5 text-gray-400 hover:text-white transition" />
  ),
  instagram: (
    <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition" />
  ),
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 z-10">
          {/* Logo Section */}
          <div>
            <Image
              src={footerData.logo}
              alt="Company Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-base leading-relaxed text-[#8c8f94]">
              {footerData.description}
            </p>
            <div className="flex items-center space-x-4 mt-4">
              {footerData.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialIcons[link.name as keyof typeof socialIcons]}
                </a>
              ))}
            </div>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="widget-title">Explore</h3>
            <ul className="space-y-4 text-[#8c8f94]">
              {footerData.exploreLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} className="hover:text-white transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="widget-title">Contact</h3>
            <address className="not-italic space-y-4 text-[#8c8f94]">
              <p>{footerData.contact.address}</p>
              <div className="flex space-x-2">
                <Phone className="w-6 h-6 text-[#ffaa17]" />
                <p>
                  <a
                    href={`tel:${footerData.contact.phone}`}
                    className="hover:text-white transition"
                  >
                    {footerData.contact.phone}
                  </a>
                </p>
              </div>

              <div className="flex space-x-2">
                <Mail className="w-6 h-6 text-[#ffaa17]" />
                <p>
                  <a
                    href={`mailto:${footerData.contact.email}`}
                    className="hover:text-white transition"
                  >
                    {footerData.contact.email}
                  </a>
                </p>
              </div>
            </address>
          </div>

          {/* Gallery Section */}
          <div>
            <h3 className="widget-title">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {footerData.galleryImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  width={100}
                  height={100}
                  className="object-cover rounded-sm"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>{footerData.copyright}</p>
      </div>
    </footer>
  );
}
