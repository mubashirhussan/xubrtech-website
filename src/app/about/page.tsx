/* eslint-disable @typescript-eslint/no-explicit-any */

import AboutCompany from "@/components/AboutCompany";
import ContactAndFAQ from "@/components/ContactAndFAQ";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us | Xubrtech IT Solutions",
  description:
    "Learn more about Xubrtech IT Solutions, our mission, values, and expertise in the IT industry.",
  openGraph: {
    title: "About Us - Xubrtech IT Solutions",
    description:
      "Discover Xubrtech IT Solutions, our journey, and our commitment to delivering top-notch IT solutions.",
    url: "https://yourdomain.com/about",
    siteName: "Xubrtech IT Solutions",
    images: [
      {
        url: "https://yourdomain.com/about-thumbnail.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Xubrtech IT Solutions Team",
      },
    ],
    type: "website",
  },
};

export default async function AboutPage() {
  return (
    <>
      <AboutCompany />
      <ContactAndFAQ />
    </>
  );
}
